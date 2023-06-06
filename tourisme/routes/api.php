<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlageCityController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', [AuthController::class,'login']);
Route::post('/register',[AuthController::class,'register']);
Route::get('users',[AuthController::class,'users']);
Route::post('logout',[AuthController::class,'logout']);


Route::get('cityplace',[PlageCityController::class,'getallcityplace']);
Route::get('plages',[PlageCityController::class,'getallplages']);
Route::get('edit/{id}',[PlageCityController::class,'edit']);
Route::get('filter_datacity',[PlageCityController::class,'filter_datacity'])->name('filter_datacity');
Route::get('filter_dataplages',[PlageCityController::class,'filter_dataplages'])->name('filter_dataplages');
Route::post('addfavorite',[PlageCityController::class,'addfavorite']);
Route::get('getFavorite',[PlageCityController::class,'getFavorite']);
Route::get('getmyfavorite',[PlageCityController::class,'getmyfavorite']);
Route::delete('destroy/{id}',[PlageCityController::class,'destroy']);
Route::post('addcommentaire',[PlageCityController::class,'store']);
Route::get('getComment',[PlageCityController::class,'getComment']);