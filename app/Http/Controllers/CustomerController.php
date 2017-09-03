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
        if($this->role()) {
            return view('customer');
        }
        return 'Error page.';
    }

    private function role()
    {
        if(\Auth::user()->role === 'person') {
            return true;
        } else return false;
    }
}
