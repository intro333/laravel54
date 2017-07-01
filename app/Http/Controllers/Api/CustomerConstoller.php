<?php

namespace App\Http\Controllers\Api;

use App\Models\Categories;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CustomerConstoller extends Controller
{
    public function getCategories()
    {
        $categories = Categories::all();

        return $categories;
    }
}
