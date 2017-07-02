<?php

namespace App\Http\Controllers\Api;

use App\Models\Categories;
use App\Models\Products;
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
}
