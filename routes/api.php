<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/getUserToken', 'Api\SessionController@getUserToken')->name('getUserToken');
Route::post('/get-categories', 'Api\CustomerConstoller@getCategories')->name('getCategories');
Route::post('/get-products/{id}', 'Api\CustomerConstoller@getProducts')->name('getProducts');
Route::post('/add-product-to-cart', 'Api\SessionController@addProductToCart')->name('addProductToCart');
Route::post('/get-products-in-cart', 'Api\SessionController@showProductsInCart')->name('showProductsInCart');