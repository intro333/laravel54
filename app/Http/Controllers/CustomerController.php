<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
//        dd(session()->get('_token'));//TODO передавать через axious в redux токен сессии(только не здесь, а через API)
        return view('customer');
    }
}
