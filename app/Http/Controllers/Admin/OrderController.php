<?php

namespace App\Http\Controllers\Admin;

use App\Models\Delivery;
use App\Models\Order;
use App\Models\OrdersQuota;
use App\Models\Products;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    //вьюха список заказов по покупателям
    public function ordersNewView()
    {
        $result = [];
        $orders = Order::with('timeQuota', 'user.details')
            ->status(1)
            ->get();

        $delivery = Delivery::all()->first();

        foreach ($orders as $key => $order) {
//            dd($order->user->details->first());
            $emailHash = hash('md5', $order->user->email);
            $emailHash = preg_replace('/[^0-9]/', '', $emailHash);
            $emailHash = substr($emailHash, 0, 7);
            $total = 0;

            $result[$order->order_id][] = [
                'orderId'     => $order->order_id,
                'emailHash'   => $emailHash,
                'orderDate'   => $order->created_at->format('d-m-Y'),
                'deliveryDate' => $delivery->delivery_date->format('d-m-Y'),
                'timeQuota'   => $order->timeQuota->time_quota,
                'details'     => $order->user->details->first(),
                'comment'     => $order->comment,
            ];
            foreach ($order->features as $feature) {
                $product = Products::find($feature['productId']);
                $cost = $feature['unit'] === 'kg' ? ($product->price * $feature['count']) : ($product->price_p * $feature['count']);

                $result[$order->order_id][] = [
                    'name'       => $product->name,
                    'image_path' => $product->image_path,
                    'price'      => $product->price,
                    'price_p'    => $product->price_p,
                    'unit'       => $feature['unit'],
                    'counts'     => $feature['count'],
                    'cost'       => $cost,
                ];
                $total = $total + $cost;
            }
            $result[$order->order_id][0]['total'] = $total;
        }

//        dd($result);
        return view('admin.orders.new',
            compact('result'));
    }

    //вьюха список заказов по продуктам
    public function ordersProductsView()
    {
        $result = [];
        $orders = Order::status(1)
            ->get();

        foreach ($orders as $key => $order) {
            foreach ($order->features as $k => $feature) {
                $product = Products::find($feature['productId']);

                if (!array_key_exists($product->product_id, $result)) {
                    $result[$product->product_id][] = [
                        'name'       => $product->name,
                        'image_path' => $product->image_path,
                        'kg'         => $feature['unit'] === 'kg' ? $feature['count'] : 0,
                        'pieces'     => $feature['unit'] === 'pieces' ? $feature['count'] : 0
                    ];
                } else {
                    $result[$product->product_id][0] = [
                        'name'       => $product->name,
                        'image_path' => $product->image_path,
                        'kg'         => $feature['unit'] === 'kg' ? ($result[$product->product_id][0]['kg'] + $feature['count']) : ($result[$product->product_id][0]['kg'] + 0),
                        'pieces'     => $feature['unit'] === 'pieces' ? ($result[$product->product_id][0]['pieces'] + $feature['count']) : ($result[$product->product_id][0]['pieces'] + 0),
                    ];
                }


            }
        }

//        dd($result);
        return view('admin.orders.products',
            compact('result'));
    }

    /* вьюха дата доставки */
    public function ordersDeliveryView()
    {
        $delivery = Delivery::all()->first();

        return view('admin.orders.delivery',
            compact('delivery'));
    }

    /* POST отредактировать дату доставки */
    public function ordersDelivery(Request $request)
    {
        $delivery = Delivery::find($request->input('delivery_date_id'));
        try {
            $updateStatus = $delivery->update([
                'delivery_date' => $request->input('delivery_date'),
                'delivery_message' => $request->input('delivery_message') ? $request->input('delivery_message') : '',
                'status' => (int) $request->input('status'),
            ]);

            if ((int) $request->input('status') === 1) {
                $updateStatus = $delivery->update([
                    'order_control_status' => 1,
                ]);
            }

            if ($updateStatus) {
                flash('Данные доставки обновлены!')->success();
                return redirect(route('orders.view.delivery'));
            } else {
                flash('Данные доставки не обновлены!')->error();
                return redirect(route('orders.view.delivery'));
            }
        } catch (\Exception $e) {
            flash('Данные доставки не обновлены. Ошибка: ' . $e)->error();
            return redirect(route('orders.view.delivery'));
        }
    }

    /* вьюха управление заказами */
    public function ordersControlStatusView()
    {
        $delivery = Delivery::all()->first();

        return view('admin.orders.control',
            compact('delivery'));
    }

    /* вьюха управление заказами */
    public function ordersControlStatus(Request $request)
    {
        $globalStatus = $request->input('order_control_status');
        $delivery = Delivery::all()->first();

        try {
            if ($globalStatus === '5') {
                $updateStatus = $delivery->update([
                    'order_control_status' => $globalStatus,
                    'status' => 0
                ]);
                //Изменить статусы у всех продуктов, которые в обработке
                $orders = Order::where('status', 1)->get();
                foreach ($orders as $order) {
                    $order->update([
                        'status' => 5
                    ]);
                }
            } else if ($globalStatus === '2') {
                $updateStatus = $delivery->update([
                    'order_control_status' => $globalStatus,
                    'status' => 0
                ]);
                //Изменить статусы у всех продуктов, которые на исполнении
                $orders = Order::where('status', 5)->get();
                foreach ($orders as $order) {
                    $order->update([
                        'status' => 2
                    ]);
                }
            }

            $updateStatus = $delivery->update([
                'order_control_status' => $globalStatus
            ]);

            if ($updateStatus) {
                flash('Глобальный статус обновлен!')->success();
                return redirect(route('orders.view.control.status'));
            } else {
                flash('Глобальный статус не обновлен!')->error();
                return redirect(route('orders.view.control.status'));
            }
        } catch (\Exception $e) {
            flash('Глобальный статус не обновлен. Ошибка: ' . $e)->error();
            return redirect(route('orders.view.control.status'));
        }
    }

    /* вьюха дата доставки */
    public function quotes()
    {
        $quotes = OrdersQuota::all();

        return view('admin.orders.quotes',
            compact('quotes'));
    }
}
