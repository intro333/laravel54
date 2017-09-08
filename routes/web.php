<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

//Admin auth routes
Route::prefix('admin')->group(function () {
    Route::get('/login', 'Admin\LoginController@showLoginForm')->name('viewAdminLogin');
    Route::post('/login', 'Admin\LoginController@login')->name('adminLogin');
    Route::get('/logout', 'Admin\LoginController@logout')->name('adminLogout');
});

//customer (REACT JS APP)
Route::group(['middleware' => 'isAdmin:person'], function () {
    Route::get('/', 'CustomerController@index')->name('customer');
});

//Admin app routes
Route::group(['middleware' => 'isAdmin:admin'], function () {
    Route::prefix('admin')->group(function () {
        Route::get('/', 'Admin\AdminController@index')->name('adminIndex');
        Route::get('/orders', 'Admin\AdminController@index')->name('adminIndex');

        Route::get('/categories/add', 'Admin\AdminController@categoriesViewAdd')->name('category.view.add');
        Route::post('/categories/add', 'Admin\AdminController@categoriesAdd')->name('category.form.add');
        Route::get('/categories/edit', 'Admin\AdminController@categoriesViewEdit')->name('category.view.edit');
        Route::get('/categories/edit/{id}', 'Admin\AdminController@categoriesViewEditOne')->name('category.view.edit.one');
        Route::post('/categories/edit', 'Admin\AdminController@categoryEdit')->name('category.edit');
//        Route::post('/categories/del/{id}', 'Admin\AdminController@categoriesDelete')->name('category.del');
//
//        Route::get('/products/add', 'Admin\AdminController@index')->name('adminIndex');
//        Route::get('/products/edit', 'Admin\AdminController@index')->name('adminIndex');
//        Route::get('/products/del/{id}', 'Admin\AdminController@index')->name('adminIndex');
    });
});



//Test routes
Route::prefix('test')->group(function () {
    Route::get('/layout_test', 'TestController@layoutTest')->name('layoutTest');
    Route::get('/get_user', 'TestController@getUser')->name('getUser');
});