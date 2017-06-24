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

//Route::get('/', function () {
//    return view('welcome');
//});
//Route::get('/react-app', function () {
//    return view('react-app');
//});
Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
Route::get('/', 'CustomerController@index')->name('customer');
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');
