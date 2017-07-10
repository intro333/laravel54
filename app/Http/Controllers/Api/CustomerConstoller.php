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

    //получить данные для личного кабинета
//    public function getDataOfPersonalAccount(Request $request)
//    {
//        $email = $request->input('sessionUserName');
//        $user = User::with('details')
//            ->where('email', $email)->get()->first();
////        $userDetails = $user->details()->first();
//        return $user;
//    }
    public function getUserInfo()
    {
        return $this->localDataOfPersonalAccount();
    }

    //обновить данные в личном кабинете
    public function updateDataOfPersonalAccount(Request $request)
    {
//        $email = \Auth::user()->email;

        $user = User::with('details')->where('email', $request->input('email'))->get()->first();
        $details = $user->details()->first();
        $date = new \DateTime($request->input('birthdate'));

        $details->update([
            "name"  => $request->input('name'),
            "sname" => $request->input('sname'),
            "mname" => $request->input('mname'),
            "phone" => $request->input('phone'),
            "gender" => $request->input('gender'),
            "birthdate" => $date->format('Y-m-d H:i:s'),
//            "address" => $request->input('address')
        ]);

        return $this->localDataOfPersonalAccount();
    }

    //Локальная функция для формирования данных для личного кабинета
    private function localDataOfPersonalAccount()
    {
        $email = \Auth::user()->email;
        $user = User::with('details')
            ->where('email', $email)
            ->get()
            ->first();
        $details = $user->details()->first();
        $userInfo = [
            'email'     => $user['email'],
            'name'      => $details->name,
            'sname'     => $details->sname,
            'mname'     => $details->mname,
            'phone'     => $details->phone,
            'address'   => $details->address,
            'gender'    => $details->gender,
            'birthdate' => $details->birthdate,
        ];

        return $userInfo;
    }
}
