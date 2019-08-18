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
Route::get('stories', 'TaskController@index');
Route::get('stories/{id}', 'TaskController@show');
Route::post('stories', 'TaskController@store');
Route::put('stories/{id}', 'TaskController@update');
Route::delete('stories/{id}', 'TaskController@delete');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
