<?php

namespace App\Http\Controllers\Api;

use App\Models\Categories;
use App\Models\Products;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CustomerConstoller extends Controller
{
    public function getCategories()
    {
        $categories = Categories::all();

        return $categories;
    }

    public function getProducts($id)
    {
        $products = Products::with('category')
            ->where('product_category_id', $id)->get();

        return $products;
    }

    //Для личного кабинета
    public function getDataOfPersonalAccount(Request $request)
    {
        $email = $request->input('sessionUserName');
        $user = User::with('details')
            ->where('email', $email)->get()->first();
//        $userDetails = $user->details()->first();
        return $user;
    }
}
