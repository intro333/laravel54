<?php

namespace App\Http\Controllers\Api;

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

    public function getUserInfo()
    {
//        $email = session()->get('sessionUserName') ? '' : "qwe2@mail.ru";
//        $email = session()->get('sessionUserName');
        $email = \Auth::user()->email;
        $user = User::with('details')
            ->where('email', $email)
            ->get()
            ->first();
        $details = $user->details()->first();
        $userInfo = [
            'email'     => $user['email'],
            'name'      => $details->name,
            'sname'     => $details->sname,
            'mname'     => $details->mname,
            'phone'     => $details->phone,
            'address'   => $details->address,
            'gender'    => $details->gender,
            'birthdate' => $details->birthdate,
        ];
//        dd($userInfo);

        return $userInfo;
    }

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

    //Локальная функция (чтобы не дублировать код)
    function localShowProductsInCart($session)
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
