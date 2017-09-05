<?php

namespace App\Http\Controllers\Admin;

use App\Models\Categories;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    //Главная страница админки
    public function index()
    {
        if($this->role()) {
            return view('admin.dashboard');
        }

        return $this->ifRoleNotAdmin();
    }
    //вьюха добавления категорий
    public function viewCategoriesAdd()
    {
        if($this->role()) {
            return view('admin.categories.add');
        }

        return $this->ifRoleNotAdmin();
    }
    //добавить категорию
    public function categoriesAdd(Request $request)
    {
        if($this->role()) {
            try {
                //Формируем дерикторию.
                $uploads_dir = storage_path('app/public/images/categories/');
                $image = $request->file('image');
                $fileName = $image->getClientOriginalName();

                if(!is_dir($uploads_dir)) {
                    mkdir($uploads_dir, 0777, true);
                }
                if (is_dir($uploads_dir) && $image) {
                    //TODO проверка на существование файла(по имени)
                    $this->moveFile($image, $uploads_dir, $fileName);
                    Categories::create([
                        'name' => $request->input('name'),
                        'description' => $request->input('description'),
                        'image_path'  => '/storage/images/categories/' . $fileName,
                        'is_active'   => 1,
                    ]);
                    flash('Категория добавлена.')->success();
                    return redirect(route('category.view.add'));
                }
                flash('Ошибка.Категория не добавлена.')->error();
            } catch (\Exception $e) {
                flash('Ошибка.Категория не добавлена: ' . $e)->error();
            }
        }

        return $this->ifRoleNotAdmin();
    }


    //Проверка пользователя, на то, что он админ
    private function role()
    {
        if(\Auth::user()->role === 'admin') {
            return true;
        } else return false;
    }
    //Редиректим на корень, если не админ
    private function ifRoleNotAdmin()
    {
        return redirect(route('customer'));
    }
    //Добавить файл в storage
    private function moveFile($file, $path, $fileName) {
        move_uploaded_file($file, $path . '/' . $fileName);
    }
}
