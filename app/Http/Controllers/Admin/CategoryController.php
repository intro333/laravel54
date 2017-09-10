<?php

namespace App\Http\Controllers\Admin;

use App\Models\Categories;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use League\Flysystem\Exception;

class CategoryController extends Controller
{
    private $uploads_dir;
    private $image;
    private $fileName;

    //Главная страница админки(вынес сюда, чтобы не создавать контроллер для одного метода)
    public function index()
    {
        return view('admin.dashboard');
    }
    //вьюха добавления категорий
    public function categoriesViewAdd()
    {
        return view('admin.categories.add');
    }
    //добавить категорию
    public function categoriesAdd(Request $request)
    {
        try {
            $this->dirImageFile($request);

            if(!is_dir($this->uploads_dir)) {//Если нет директории images/categories, то создаём её.
                mkdir($this->uploads_dir, 0777, true);
            }
            if (is_dir($this->uploads_dir) && $this->image) {
                if (file_exists($this->uploads_dir . $this->fileName)) {//проверка на существование файла(по имени)
                    flash('Файл с таким именем уже существует.')->error();
                    return redirect(route('category.view.add'));
                }
                $this->moveFile($this->image, $this->uploads_dir, $this->fileName);
                Categories::create([
                    'name' => $request->input('name'),
                    'description' => $request->input('description'),
                    'image_path'  => $this->fileName,
                    'is_active'   => 1,
                ]);
                flash('Категория добавлена.')->success();
                return redirect(route('category.view.edit'));
            }
            flash('Ошибка.Категория не добавлена.')->error();
        } catch (\Exception $e) {
            flash('Ошибка.Категория не добавлена: ' . $e)->error();
        }
        flash('Ошибка добавления категории.')->error();
        return redirect(route('adminIndex'));
    }
    //Вьюха Показать все категории
    public function categoriesViewEdit()
    {
        $categories = Categories::all();
        return view('admin.categories.edit',
            compact('categories'));
    }
    //Вьюха Редактировать одну категорию
    public function categoriesViewEditOne($id)
    {
        $category = Categories::where('category_id', $id)->get()->first();
        return view('admin.categories.edit-one',
            compact('category'));
    }
    //Редактировать категорию
    public function categoryEdit(Request $request)
    {
        try {
            $this->dirImageFile($request);
            $category = Categories::where('category_id', $request->input('category_id'))->get()->first();

            if ($this->image && file_exists($this->uploads_dir . $category->image_path)) {//проверка на существование файла(по имени)
                unlink($this->uploads_dir . '/' . $category->image_path);//Удаляем файл
            }
            $this->image && $this->moveFile($this->image, $this->uploads_dir, $this->fileName);//Добавляем новый файл, если пришло изображение

            $updateStatus = $category->update([
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'is_active' => $request->input('is_active'),
                'image_path' => $this->fileName ? $this->fileName : $category->image_path
            ]);
            if ($updateStatus) {
                flash('Категория обновлена.')->success();
                return redirect(route('category.view.edit.one', $request->input('category_id')));
            }
            flash('Ошибка обновления категории.')->error();
            return redirect(route('category.view.edit.one', $request->input('category_id')));
        } catch (\Exception $e) {
            flash('Ошибка обновления категории: ' . $e)->error();
        }
        flash('Ошибка обновления категории.')->error();
        return redirect(route('adminIndex'));
    }
    //Удалить категорию
    public function categoriesDelete($id)
    {
        try {
            $uploads_dir = storage_path('app/public/images/categories/');
            $category = Categories::where('category_id', $id)->get()->first();

            if ($category->image_path && file_exists($uploads_dir . $category->image_path)) {//проверка на существование файла(по имени)
                unlink($uploads_dir . '/' . $category->image_path);//Удаляем файл
            }
            $category->delete();
            flash('Категория удалена.')->success();
            return redirect(route('category.view.edit'));
        } catch (Exception $e) {
            flash('Ошибка удаления категории: ' . $e)->error();
        }
        flash('Ошибка удаления категории: ' . $e)->error();
        return redirect(route('adminIndex'));
    }

    //Добавить файл в storage
    private function moveFile($file, $path, $fileName) {
        move_uploaded_file($file, $path . '/' . $fileName);
    }
    //Формируем директорию, image  и image name
    private function dirImageFile($request)
    {
        $this->uploads_dir = storage_path('app/public/images/categories/');//Формируем дерикторию.
        $this->image = $request->file('image') ? $request->file('image') : null;
        $this->fileName = $this->image ? $this->image->getClientOriginalName() : null;//Достаём имя файла.
    }
}
