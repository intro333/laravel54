<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        if($this->role()) {
            return view('admin.dashboard');
        }
        return 'Error page.';
    }

    private function role()
    {
        if(\Auth::user()->role === 'admin') {
            return true;
        } else return false;
    }
}
