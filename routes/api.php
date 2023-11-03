<?php

use App\Http\Controllers\AuthController;
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

Route::prefix('users')->namespace('App\Http\Controllers\User')->group(function () {
    Route::post('/register', StoreController::class);
});

Route::prefix('auth')->middleware('api')->group(function () {
    Route::middleware('jwt.auth')->group(function(){
        Route::prefix('fruits')->namespace('App\Http\Controllers\Fruit')->group(function () {
            Route::get('/', IndexController::class);
            Route::get('/{fruit}', ShowController::class);
            Route::post('/', StoreController::class);
            Route::patch('/{fruit}', UpdateController::class);
            Route::delete('/{fruit}', DeleteController::class);
        });
    });
    Route::controller(AuthController::class)->group(function ($router) {
        Route::post('login', 'login');
        Route::post('logout', 'logout');
        Route::post('refresh', 'refresh');
        Route::post('me', 'me');
    });
});
