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
Route::get('/', 'CustomerController@index')->name('customer');

Route::prefix('admin')->group(function () {
    Route::get('/', 'Admin\AdminController@index')->name('adminIndex');
    Route::get('/login', 'Admin\LoginController@showLoginForm')->name('viewAdminLogin');
    Route::post('/login', 'Admin\LoginController@login')->name('adminLogin');
    Route::get('/logout', 'Admin\LoginController@logout')->name('adminLogout');
});

Route::prefix('test')->group(function () {
    Route::get('/layout_test', 'TestController@layoutTest')->name('layoutTest');
    Route::get('/get_user', 'TestController@getUser')->name('getUser');
});