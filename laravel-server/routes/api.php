<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LikeController;
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
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/add_product', [ProductController::class, 'addProduct']);
});
Route::get('/products', [ProductController::class, 'getAllProducts']);
Route::post('/getProductById', [ProductController::class, 'getProductById']);

//categories APIs
Route::get('/categories/{id?}', [CategoryController::class, 'getAllCategories']);
Route::post('/add_category', [CategoryController::class, 'addCategory']);
Route::post('/getCategoryById', [CategoryController::class, 'getCategoryById']);

//Likes APIs
Route::post('/add_like', [LikeController::class, 'addLike']);
Route::get('/likes/{id?}', [LikeController::class, 'getAllLikes']);