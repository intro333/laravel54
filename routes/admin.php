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

    Route::get('/categories/add', 'Admin\CategoryController@categoriesViewAdd')->name('category.view.add');
    Route::post('/categories/add', 'Admin\CategoryController@categoriesAdd')->name('category.form.add');
    Route::get('/categories/edit', 'Admin\CategoryController@categoriesViewEdit')->name('category.view.edit');
    Route::get('/categories/edit/{id}', 'Admin\CategoryController@categoriesViewEditOne')->name('category.view.edit.one');
    Route::post('/categories/edit', 'Admin\CategoryController@categoryEdit')->name('category.edit');
    Route::post('/categories/del/{id}', 'Admin\CategoryController@categoriesDelete')->name('category.del');

    Route::get('/products/add', 'Admin\ProductController@productViewAdd')->name('product.view.add');
    Route::post('/products/add', 'Admin\ProductController@productAdd')->name('product.form.add');
    Route::get('/products/edit', 'Admin\ProductController@productViewEdit')->name('products.view.edit');
    Route::get('/products/edit/{id}', 'Admin\ProductController@productViewEditOne')->name('product.view.edit.one');
    Route::post('/products/edit', 'Admin\ProductController@productEdit')->name('product.edit');
    Route::post('/products/del/{id}', 'Admin\ProductController@productDelete')->name('product.del');

    Route::get('/orders/new', 'Admin\OrderController@ordersNewView')->name('orders.view.new');
    Route::get('/orders/delivery', 'Admin\OrderController@ordersDeliveryView')->name('orders.view.delivery');
    Route::post('/orders/delivery', 'Admin\OrderController@ordersDelivery')->name('orders.delivery');
    Route::get('/orders/control/status', 'Admin\OrderController@ordersControlStatusView')->name('orders.view.control.status');
    Route::post('/orders/control/status', 'Admin\OrderController@ordersControlStatus')->name('orders.control.status');

    Route::get('/users/all', 'Admin\UserController@getAll')->name('users.view.all');
});
