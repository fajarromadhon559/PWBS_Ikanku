<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware' => ['api']], function () {

    Route::get('/fish', 'App\Http\Controllers\FishController@index');
    Route::post('/fish', 'App\Http\Controllers\FishController@store');
    Route::put('/fish/{fish}', 'App\Http\Controllers\FishController@update');
    Route::delete('/fish/{fish}', 'App\Http\Controllers\FishController@destroy');
    Route::get('/fish/{fish}/edit', 'App\Http\Controllers\FishController@edit');

    Route::get('/article', 'App\Http\Controllers\ArticleController@index');
    Route::post('/article', 'App\Http\Controllers\ArticleController@store');
    Route::put('/article/{article}', 'App\Http\Controllers\ArticleController@update');
    Route::delete('/article/{article}', 'App\Http\Controllers\ArticleController@destroy');
    Route::get('/article/{article}/edit', 'App\Http\Controllers\ArticleController@edit');

});