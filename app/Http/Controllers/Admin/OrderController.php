<?php

namespace App\Http\Controllers\Admin;

use App\Models\Delivery;
use App\Models\Order;
use App\Models\Products;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    //вьюха список заказов
    public function ordersNewView()
    {
        $result = [];
        $orders = Order::with('timeQuota', 'user.details')
            ->status(1)
            ->get();

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
                'timeQuota'   => $order->timeQuota->time_quota,
                'details'     => $order->user->details->first(),
                'comment'     => $order->comment,
            ];
            foreach ($order->features as $feature) {
                $product = Products::find($feature['productId']);
                $result[$order->order_id][] = [
                    'name'       => $product->name,
                    'image_path' => $product->image_path,
                    'price'      => $product->price,
                    'unit'       => $product->unit,
                    'counts'     => $feature['count'],
                    'cost'       => ($product->price * $feature['count']),
                ];
                $total = $total + $product->price * $feature['count'];
            }
            $result[$order->order_id][0]['total'] = $total;
        }

//        dd($result);
        return view('admin.orders.new',
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
}
