<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register routes for admin panel in your application.
|
*/
//Admin app routes
Route::group(['middleware' => 'isAdmin:admin'], function () {
    Route::get('/', 'Admin\CategoryController@index')->name('adminIndex');
    Route::get('/orders', 'Admin\CategoryController@index')->name('adminIndex');

    Route::get('/categories/add', 'Admin\CategoryController@categoriesViewAdd')->name('category.view.add');
    Route::post('/categories/add', 'Admin\CategoryController@categoriesAdd')->name('category.form.add');
    Route::get('/categories/edit', 'Admin\CategoryController@categoriesViewEdit')->name('category.view.edit');
    Route::get('/categories/edit/{id}', 'Admin\CategoryController@categoriesViewEditOne')->name('category.view.edit.one');
    Route::post('/categories/edit', 'Admin\CategoryController@categoryEdit')->name('category.edit');
    Route::post('/categories/del/{id}', 'Admin\CategoryController@categoriesDelete')->name('category.del');
//
    Route::get('/products/add', 'Admin\ProductController@productViewAdd')->name('product.view.add');
    Route::post('/products/add', 'Admin\ProductController@productsAdd')->name('products.form.add');
//    Route::get('/products/edit', 'Admin\CategoryController@index')->name('adminIndex');
//    Route::get('/products/del/{id}', 'Admin\CategoryController@index')->name('adminIndex');
});
