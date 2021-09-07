<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\UserController;

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

Route::group([
    'middleware' => 'api',
], function ($router) {
    
    Route::prefix('auth')->group(function () {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/refresh', [AuthController::class, 'refresh']);
        Route::get('/profile', [AuthController::class, 'userProfile']);
    });

    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index']); // юзеры
        Route::get('/{user}', [UserController::class, 'single']); // зайти на акк другого юзера
        Route::get('/{user}/chats', [UserController::class, 'chats']); // чаты юзера

    });
});
