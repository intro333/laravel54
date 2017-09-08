<?php

namespace App\Http\Controllers\Admin;

use App\Models\Categories;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{

    public function __construct()
    {
//        dd(\Auth::user());
//        $this->middleware('isAdmin');
    }
    //Главная страница админки
    public function index()
    {
//        if($this->role()) {
            return view('admin.dashboard');
//        }

//        return $this->ifRoleNotAdmin();
    }
    //вьюха добавления категорий
    public function categoriesViewAdd()
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
                $uploads_dir = storage_path('app/public/images/categories/');//Формируем дерикторию.
                $image = $request->file('image');
                $fileName = $image->getClientOriginalName();//Достаём имя файла.

                if(!is_dir($uploads_dir)) {//Если нет директории images/categories, то создаём её.
                    mkdir($uploads_dir, 0777, true);
                }
                if (is_dir($uploads_dir) && $image) {
                    if (file_exists($uploads_dir . $fileName)) {//проверка на существование файла(по имени)
                        flash('Файл с таким именем уже существует.')->error();
                        return redirect(route('category.view.add'));
                    }
                    $this->moveFile($image, $uploads_dir, $fileName);
                    Categories::create([
                        'name' => $request->input('name'),
                        'description' => $request->input('description'),
                        'image_path'  => $fileName,
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
    //Вьюха Показать все категории
    public function categoriesViewEdit()
    {
        if($this->role()) {
            $categories = Categories::all();
            return view('admin.categories.edit',
                compact('categories'));
        }
        return $this->ifRoleNotAdmin();
    }
    //Вьюха Редактировать одну категорию
    public function categoriesViewEditOne($id)
    {
        if($this->role()) {
            $category = Categories::where('category_id', $id)->get()->first();
            return view('admin.categories.edit-one',
                compact('category'));
        }
        return $this->ifRoleNotAdmin();
    }
    //Редактировать категорию
    public function categoryEdit(Request $request)
    {
        if($this->role()) {
            try {
                $uploads_dir = storage_path('app/public/images/categories/');//Формируем дерикторию.
                $image = @$request->file('image') ? $request->file('image') : null;
                $fileName = $image ? $image->getClientOriginalName() : null;
                $category = Categories::where('category_id', $request->input('category_id'))->get()->first();

                if ($image && file_exists($uploads_dir . $category->image_path)) {//проверка на существование файла(по имени)
                    unlink($uploads_dir . '/' . $category->image_path);//Удаляем файл
                }
                $image && $this->moveFile($image, $uploads_dir, $fileName);//Добавляем новый файл, если пришло изображение

                $updateStatus = $category->update([
                    'name' => $request->input('name'),
                    'description' => $request->input('description'),
                    'is_active' => $request->input('is_active'),
                    'image_path' => $fileName ? $fileName : $category->image_path
                ]);
                if ($updateStatus) {
                    flash('Категория обновлена.')->success();
                    return redirect(route('category.view.edit.one', $request->input('category_id')));
                }
                flash('Ошибка обновления категории.')->error();
                return view('admin.categories.edit-one',
                    compact('category'));
            } catch (\Exception $e) {
                flash('Ошибка обновления категории: ' . $e)->error();
            }
        }
        return $this->ifRoleNotAdmin();
    }
    //Удалить категорию
    public function categoriesDelete()
    {
        return 'Удалить категорию';
        if($this->role()) {
//            $categories = Categories::all();
//            return view('admin.categories.edit',
//                compact('categories'));
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
