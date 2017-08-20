<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Models\Products;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
//use Illuminate\Support\Facades\Session;

class SessionController extends Controller
{
//    public function __construct()
//    {
//        $this->middleware('api');
//    }


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
        $products = [];

        foreach ($session as $item) {
            $products[] = [
                'productId' => $item['productId'],
                'count'     => $item['productCounts']
            ];
        }

        Order::create([
            'user_order_id' => $user->id,
            'comment'       => $comment ? $comment : '',
            'status'        => 1, //Обрабатывается
            'features'      => $products,
        ]);

        //Удалить все продукты из сессии.
        session()->forget('productFromCart');

        return [];
    }

    public function getProductCounts()
    {
        $productCount = session()->get('productFromCart') ? count(session()->get('productFromCart')) : 0;

        return $productCount;
    }

    //Локальная функция (чтобы не дублировать код)
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
