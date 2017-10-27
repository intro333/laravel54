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
Route::post('/get-categories', 'Api\CustomerConstoller@getCategories')->name('getCategories');
Route::post('/get-products/{id}', 'Api\CustomerConstoller@getProducts')->name('getProducts');
Route::post('/add-product-to-cart', 'Api\SessionController@addProductToCart')->name('addProductToCart');
Route::post('/get-products-in-cart', 'Api\SessionController@showProductsInCart')->name('showProductsInCart');
Route::post('/delete-product-from-cart', 'Api\SessionController@deleteProductFromCart')->name('deleteProductFromCart');
Route::post('/send-order', 'Api\SessionController@sendOrder')->name('sendOrder');
Route::post('/clear-cart', 'Api\SessionController@clearCart')->name('clearCart');
Route::post('/get-orders-quota-in-cart', 'Api\SessionController@showOrdersQuotaInCart')->name('showOrdersQuotaInCart');
Route::post('/get-order-current', 'Api\SessionController@showOrderCurrent')->name('showOrderCurrent');
Route::post('/check-time-quota-in-cart', 'Api\SessionController@checkTimeQuotaInCart')->name('checkTimeQuotaInCart');
Route::post('/get-product-counts', 'Api\SessionController@getProductCounts')->name('getProductCounts');
Route::post('/getUserInfo', 'Api\CustomerConstoller@getUserInfo')->name('getUserInfo');
Route::post('/update-data-of-personal-account', 'Api\CustomerConstoller@updateDataOfPersonalAccount')->name('updateDataOfPersonalAccount');
Route::post('/change-photo-in-personal-account', 'Api\CustomerConstoller@changePhotoPersonalData')->name('changePhotoPersonalData');
Route::post('/orders-get-all', 'Api\CustomerConstoller@ordersGetAll')->name('ordersGetAll');
Route::post('/order-cancel-or-delete', 'Api\CustomerConstoller@orderCancelOrDelete')->name('orderCancelOrDelete');
Route::post('/order-repeat-or-change', 'Api\CustomerConstoller@orderRepeatOrChange')->name('orderRepeatOrChange');