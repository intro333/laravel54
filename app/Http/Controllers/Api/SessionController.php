<?php

namespace App\Http\Controllers\Api;

use App\Models\Products;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
//use Illuminate\Support\Facades\Session;

class SessionController extends Controller
{
//    public function __construct()
//    {
//        $this->middleware('api');
//    }

    public function getUserToken()
    {
        return session()->get('_token');
    }

    public function addProductToCart(Request $request)
    {
        $sessionName = 'productFromCart.'.$request->input('barCode');
        $productCartInfo = [
            'productId'     => $request->input('productId'),
            'barCode'       => $request->input('barCode'),
            'productCounts' => $request->input('productCounts'),
        ];

        session()->put($sessionName, $productCartInfo);
        session()->save();

        $session = session()->get('productFromCart');
        //Дублирование функциии showProductsInCart
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
                'count'     => $item['productCounts']
            ];
        }

        return $products;
    }

    function showProductsInCart()
    {
        $products = [];
        foreach (session()->get('productFromCart') as $item) {
            $product = Products::where('product_id', $item['productId'])->get()->first();
            $products[] = [
                'productId' => $product->product_id,
                'imagePath' => $product->image_path,
                'name'      => $product->name,
                'price'     => $product->price,
                'unit'      => $product->unit,
                'barCode'   => $product->bar_code,
                'count'     => $item['productCounts']
            ];
        }

        return $products;
    }
}
