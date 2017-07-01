<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SessionController extends Controller
{
    public function __construct()
    {
        $this->middleware('api');
    }

    public function getUserToken()
    {
        return session()->get('_token');
    }
}
