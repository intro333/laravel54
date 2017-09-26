<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function getAll()
    {
        $users = User::with('details')->get();
//        dd($users[0]->details[0]);
        return view('admin.users.all',
            compact('users'));
    }
}
