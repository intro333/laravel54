<?php

namespace App\Http\Controllers\Api;

use App\Models\Delivery;
use App\Models\Order;
use App\Models\OrdersQuota;
use App\Models\Products;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
//use Illuminate\Support\Facades\Session;

class SessionController extends Controller
{
    public function addProductToCart(Request $request)
    {
        $sessionName = 'productFromCart.'.$request->input('barCode');
        $productCartInfo = [
            'productId'     => $request->input('productId'),
            'barCode'       => $request->input('barCode'),
            'productCounts' => $request->input('productCounts') ? $request->input('productCounts') : "",
        ];

        session()->put($sessionName, $productCartInfo);
        session()->save();

        $session = session()->get('productFromCart');

        return $this->localShowProductsInCart($session);
    }

    public function showProductsInCart()
    {
        return $this->localShowProductsInCart(false);
    }

    public function deleteProductFromCart(Request $request)
    {
        //Удалить продукт из сессии.
        session()->forget('productFromCart.' . $request->input('barCode'));

        return $this->localShowProductsInCart(false);
    }

    public function sendOrder(Request $request)
    {
        $user = \Auth::user();
        $session = session()->get('productFromCart');
        $comment = $request->input('comment');
        $timeQuotaId = $request->input('time_quota');
        $products = [];

        $updateResult = OrdersQuota::updateCountsQuota($timeQuotaId);

        if($updateResult === 'no free quota') {
            return ['errorTime' => 'К сожалению, в этот период уже всё занято.Пожалуйста выберите другой.'];
        } else {
            foreach ($session as $item) {
                $products[] = [
                    'productId' => $item['productId'],
                    'count'     => $item['productCounts'],
                    'barCode'   => $item['barCode'],
                ];
            }
            Order::create([
                'user_order_id' => $user->id,
                'comment'       => $comment ? $comment : '',
                'status'        => 1, //Обрабатывается
                'time_quota_id' => $timeQuotaId && $updateResult !== 2 ? $timeQuotaId : 1,
                'features'      => $products,
            ]);

            //Удалить все продукты из сессии.
            session()->forget('productFromCart');
            session()->save();

            return ['successTime' => 'success'];
        }
    }

    //Дата доставки и квоты для корзины
    public function showOrdersQuotaInCart()
    {
        $ordersQuota = OrdersQuota::quotaCounts()->get();
//        dd($ordersQuota);
        $delivery = Delivery::all()->first();

        //В таблице дата доставки всего одна запись, приводим массив к нужному виду(так же форматируем дату)
        $delivery = [
            'delivery_date' => $delivery['delivery_date']->format('d-m-Y'),
            'status' => $delivery['status'],
            'delivery_message' => $delivery['delivery_message'],
        ];

        return [
            'delivery'      =>  $delivery,
            'ordersQuota'   =>  $ordersQuota
        ];
    }

    //Прочекать квоты в корзине на наличие 0
    public function checkTimeQuotaInCart(Request $request)
    {
        $ordersQuota = OrdersQuota::quotaOnId($request->input('time_quota'))->first();
//        dd($ordersQuota->counts_quota);
        return ['counts_quota' => $ordersQuota->counts_quota];
    }

    public function getProductCounts()
    {
        $productCount = session()->get('productFromCart') ? count(session()->get('productFromCart')) : 0;

        return $productCount;
    }

    //Локальная функция формирования заказа в корзине
    private function localShowProductsInCart($session)
    {
        $session = $session ? $session : session()->get('productFromCart');
        $products = [];
        foreach ($session as $item) {
            $product = Products::where('product_id', $item['productId'])->get()->first();
            $products[] = [
                'productId' => $product->product_id,
                'imagePath' => $product->image_path,
                'name'      => $product->name,
                'price'     => $product->price,
                'unit'      => $product->unit,
                'barCode'   => $product->bar_code,
                'count'     => $item['productCounts'] ? $item['productCounts'] : ""
//                'count'     => $item['productCounts']
            ];
        }

        return $products;
    }
}
