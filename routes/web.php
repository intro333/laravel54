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
Route::prefix('fp-admin')->group(function () {
    Route::get('/login', 'Admin\LoginController@showLoginForm')->name('viewAdminLogin');
    Route::post('/login', 'Admin\LoginController@login')->name('adminLogin');
    Route::get('/logout', 'Admin\LoginController@logout')->name('adminLogout');
});

//customer (REACT JS APP)
Route::group(['middleware' => 'isAdmin:person'], function () {
    Route::get('/', 'CustomerController@index')->name('customer');
});