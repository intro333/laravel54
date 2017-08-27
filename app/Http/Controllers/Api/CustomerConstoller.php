<?php

namespace App\Http\Controllers\Api;

use App\Models\Categories;
use App\Models\Order;
use App\Models\OrdersQuota;
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
        $date = new \DateTime(str_replace(" ","-",$request->input('birthdate')));

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

    public function ordersGetAll(Request $request)
    {
        $result = [];
        $userId = \Auth::user()->id;
        $emailHash = hash('md5', \Auth::user()->email);
        $emailHash = preg_replace('/[^0-9]/', '', $emailHash);
        $emailHash = substr($emailHash, 0, 7);
        $orders = Order::with('timeQuota')
            ->where('user_order_id', $userId)
            ->status($request->input('status'))
            ->year($request->input('year'))
            ->get();

        foreach ($orders as $key => $order) {
            $result[$order->order_id][] = [
                'orderId'     => $order->order_id,
                'emailHash'   => $emailHash,
                'orderDate' => $order->created_at->format('d-m-Y'),
                'timeQuota' => $order->timeQuota->time_quota,
            ];
            foreach ($order->features as $feature) {
                $product = Products::find($feature['productId']);
                $result[$order->order_id][] = [
                    'name'       => $product->name,
                    'image_path' => $product->image_path,
                    'price'      => $product->price,
                    'unit'       => $product->unit,
                    'counts'     => $feature['count'],
                    'cost'       => ($product->price * $feature['count']),
                ];
            }
        }

//        dd($result);
        return $result;
    }

    public function orderCancelOrDelete(Request $request)
    {
        $result = 1;
        try {
            $order = Order::find($request->input('orderId'));
            $order->update(['status' => 3]);
//            $order->delete(); //Если удалить(даже мягкое удаление) объект не выводится.
        } catch (\Exception $e) {
            $result = 'Error: ' . $e;
        }

        return $result;
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
        $date = $details->birthdate ? new \DateTime($details->birthdate) : '';
        $userInfo = [
            'email'     => $user['email'],
            'name'      => $details->name,
            'sname'     => $details->sname,
            'mname'     => $details->mname,
            'phone'     => $details->phone,
            'address'   => $details->address,
            'gender'    => $details->gender,
            'birthdate' => $date ? $date->format('Y-m-d') : '',
        ];

        return $userInfo;
    }

    private function moveFile($file, $pathToComplect, $fileName) {
        move_uploaded_file($file, $pathToComplect . '/' . $fileName);
    }

    //Методы, которые скорее всего будут удалены__________________________________
    public function changePhotoPersonalData(Request $request)
    {
        $email = \Auth::user()->email;

        //Формируем директорию.
        $uploads_dir = storage_path('app/public/customers/');
        $directory = $email;
        $image = $request->file('image');
        $imageName = $image->getClientOriginalName();
        $path_to_image = $uploads_dir . '/' . $directory;

        if (!is_dir($path_to_image)) {
            mkdir($path_to_image, 0777, true);
            //Сохраняем фото
            $this->moveFile($image, $path_to_image, $imageName);
        }

        $imagePath = '/storage/customers/' . $email . '/' . $imageName;

        return $imagePath;
    }
}
