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
    public function productAdd(Request $request)
    {
        try {
            $product = Products::where('bar_code', $request->input('bar_code'))
                ->orWhere('name', $request->input('name'))
                ->get();
            if (!$product->isEmpty()) { //проверка на существование артикула или имени
                flash('Продукт с таким артикулом или именем уже существует.')->error();
                return redirect(route('product.view.add'));
            }
            $this->dirImageFile($request);

            if(!is_dir($this->uploads_dir)) {//Если нет директории images/products, то создаём её.
                mkdir($this->uploads_dir, 0777, true);
            }
            if (is_dir($this->uploads_dir) && $this->image) {
                if (file_exists($this->uploads_dir . $this->fileName)) { //проверка на существование файла(по имени)
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
                return redirect(route('products.view.edit'));
            }
            flash('Ошибка.Продукт не добавлен.')->error();
        } catch (\Exception $e) {
            flash('Ошибка.Продукт не добавлен: ' . $e)->error();
        }
        flash('Ошибка добавления продукта.')->error();
        return redirect(route('adminIndex'));
    }
    //Вьюха Показать все продукты
    public function productViewEdit()
    {
        $products = Products::all();
        return view('admin.products.edit',
            compact('products'));
    }
    //Вьюха Редактировать один продукт
    public function productViewEditOne($id)
    {
        $product = Products::with('category')->where('product_id', $id)->get()->first();
        return view('admin.products.edit-one',
            compact('product'));
    }
    //Редактировать продукт
    public function productEdit(Request $request)
    {
        try {
            $this->dirImageFile($request);
            $product = Products::where('product_id', $request->input('product_id'))->get()->first();

            if ($request->input('bar_code') !== $product->bar_code) {
                $productAnotherBarCode = Products::where('bar_code', $request->input('bar_code'))->get();
                if (!$productAnotherBarCode->isEmpty()) { //проверка на существование артикула
                    flash('Продукт с таким артикулом уже существует.')->error();
                    return redirect(route('product.view.edit.one', $request->input('product_id')));
                }
            }
            if ($request->input('name') !== $product->name) {
                $productAnotherName = Products::where('name', $request->input('name'))->get();
                if (!$productAnotherName->isEmpty()) { //проверка на существование имени
                    flash('Продукт с таким именем уже существует.')->error();
                    return redirect(route('product.view.edit.one', $request->input('product_id')));
                }
            }

            if ($this->image && file_exists($this->uploads_dir . $product->image_path))  { //проверка на существование файла(по имени)
                unlink($this->uploads_dir . '/' . $product->image_path); //Удаляем файл
            }
            $this->image && $this->moveFile($this->image, $this->uploads_dir, $this->fileName); //Добавляем новый файл, если пришло изображение

            $updateStatus = $product->update([
                'bar_code' => $request->input('bar_code'),
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'is_active' => $request->input('is_active'),
                'image_path' => $this->fileName ? $this->fileName : $product->image_path,
                'price'  => $request->input('price'),
                'unit'  => $request->input('unit'),
            ]);
            if ($updateStatus) {
                flash('Продукт обновлен.')->success();
                return redirect(route('product.view.edit.one', $request->input('product_id')));
            }
            flash('Ошибка обновления продукта.')->error();
            return view('admin.products.edit-one',
                compact('product'));
        } catch (\Exception $e) {
            flash('Ошибка обновления продукта: ' . $e)->error();
        }
        flash('Ошибка обновления продукта.')->error();
        return redirect(route('adminIndex'));
    }
    //Удалить продукт
    public function productDelete($id)
    {
        try {
            $uploads_dir = storage_path('app/public/images/products/');
            $product = Products::where('product_id', $id)->get()->first();

            if ($product->image_path && file_exists($uploads_dir . $product->image_path)) {//проверка на существование файла(по имени)
                unlink($uploads_dir . '/' . $product->image_path);//Удаляем файл
            }
            $product->delete();
            flash('Продукт удален.')->success();
            return redirect(route('products.view.edit'));
        } catch (Exception $e) {
            flash('Ошибка удаления продукта: ' . $e)->error();
        }
        flash('Ошибка удаления продукта: ' . $e)->error();
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
