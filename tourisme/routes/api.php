<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\City;
use App\Http\Controllers\PlageCityController;
use App\Http\Controllers\PlageController;
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
Route::get('index',[City::class,'index'])->name('index');
Route::get('indexplage',[PlageController::class,'index'])->name('indexplage');
Route::get('filter_data',[City::class,'filter_data'])->name('filter_data');
Route::post('/login', [AuthController::class,'login']);
Route::post('/register',[AuthController::class,'register']);
Route::get('users',[AuthController::class,'users']);


Route::get('cityplace',[PlageCityController::class,'getallcityplace']);
Route::get('plages',[PlageCityController::class,'getallplages']);
Route::get('edit/{id}',[PlageCityController::class,'edit']);