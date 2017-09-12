<?php

namespace App\Http\Controllers\Admin;

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
        $orders = Order::with('timeQuota', 'user')
            ->status(1)
            ->get();

        foreach ($orders as $key => $order) {
            $emailHash = hash('md5', $order->user->email);
            $emailHash = preg_replace('/[^0-9]/', '', $emailHash);
            $emailHash = substr($emailHash, 0, 7);

            $result[$order->order_id][] = [
                'orderId'     => $order->order_id,
                'emailHash'   => $emailHash,
                'orderDate' => $order->created_at->format('d-m-Y'),
                'timeQuota' => $order->timeQuota->time_quota,
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
            }
        }

//        dd($result);
        return view('admin.orders.new',
            compact('result'));
    }
}
