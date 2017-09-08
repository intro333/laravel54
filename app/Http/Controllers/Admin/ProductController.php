<?php

namespace App\Http\Controllers\Admin;

use App\Models\Categories;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use League\Flysystem\Exception;
use App\Models\Products;

class ProductController extends Controller
{
    private $uploads_dir;
    private $image;
    private $fileName;

    //вьюха добавления продуктов
    public function productViewAdd()
    {
        $categories = [];
        $array = Categories::all();
        foreach ($array as $category) {
            $categories[$category->category_id] = $category->name;
        }

        return view('admin.products.add',
            compact('categories'));
    }
    //добавить продукт
    public function productsAdd(Request $request)
    {
        try {
            $this->dirImageFile($request);

            if(!is_dir($this->uploads_dir)) {//Если нет директории images/categories, то создаём её.
                mkdir($this->uploads_dir, 0777, true);
            }
            if (is_dir($this->uploads_dir) && $this->image) {
                if (file_exists($this->uploads_dir . $this->fileName)) {//проверка на существование файла(по имени)
                    flash('Файл с таким именем уже существует.')->error();
                    return redirect(route('product.view.add'));
                }
                $this->moveFile($this->image, $this->uploads_dir, $this->fileName);
                Products::create([
                    'product_category_id' => $request->input('category_id'),
                    'bar_code' => $request->input('bar_code'),
                    'name' => $request->input('name'),
                    'description' => $request->input('description'),
                    'image_path'  => $this->fileName,
                    'price'  => $request->input('price'),
                    'unit'  => $request->input('unit'),
                    'is_active'   => 1,
                ]);
                flash('Продукт добавлен.')->success();
                return redirect(route('product.view.add'));
            }
            flash('Ошибка.Продукт не добавлен.')->error();
        } catch (\Exception $e) {
            flash('Ошибка.Продукт не добавлен: ' . $e)->error();
        }
        flash('Ошибка добавления продукта.')->error();
        return redirect(route('adminIndex'));
    }

    //Добавить файл в storage
    private function moveFile($file, $path, $fileName) {
        move_uploaded_file($file, $path . '/' . $fileName);
    }
    //Формируем директорию, image  и image name
    private function dirImageFile($request)
    {
        $this->uploads_dir = storage_path('app/public/images/products/');//Формируем дерикторию.
        $this->image = $request->file('image') ? $request->file('image') : null;
        $this->fileName = $this->image ? $this->image->getClientOriginalName() : null;//Достаём имя файла.
    }
}
