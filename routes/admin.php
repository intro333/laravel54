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
//Route::group(['roles' => 'admin'], function () {
    Route::get('/', 'Admin\AdminController@index')->name('adminIndex');
//
//    Route::get('/orders', 'Admin\AdminController@index')->name('adminIndex');
//
//    Route::get('/categories/add', 'Admin\AdminController@categoriesViewAdd')->name('category.view.add');
//    Route::post('/categories/add', 'Admin\AdminController@categoriesAdd')->name('category.form.add');
//    Route::get('/categories/edit', 'Admin\AdminController@categoriesViewEdit')->name('category.view.edit');
//    Route::get('/categories/edit/{id}', 'Admin\AdminController@categoriesViewEditOne')->name('category.view.edit.one');
//    Route::post('/categories/edit', 'Admin\AdminController@categoryEdit')->name('category.edit');
//    Route::post('/categories/del/', 'Admin\AdminController@categoriesDelete')->name('category.del');
//
//    Route::get('/products/add', 'Admin\AdminController@index')->name('adminIndex');
//    Route::get('/products/edit', 'Admin\AdminController@index')->name('adminIndex');
//    Route::get('/products/del/', 'Admin\AdminController@index')->name('adminIndex');
//});