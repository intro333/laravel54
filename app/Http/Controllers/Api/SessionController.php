<?php

namespace App\Http\Controllers\Api;

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

//        if (session()->has('productFromCart')) {
//            session()->push($sessionName, $productCartInfo);
//            session()->save();
//        } else {
            session()->put($sessionName, $productCartInfo);
            session()->save();
//        }

        return session()->all();
    }
}
