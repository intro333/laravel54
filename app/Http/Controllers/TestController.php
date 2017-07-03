<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function layoutTest()
    {
        return view('test.header-nav-white');
    }
}
