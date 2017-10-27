<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function layoutTest()
    {
        return view('test.header-nav-white');
    }

    public function getUser()
    {
        $user = User::with('details')->get()->first();
        dd($user->details()->first());
    }
}
