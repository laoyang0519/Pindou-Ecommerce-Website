<?php

use App\Http\Controllers\Admin\CategoryController as AdminCategoryController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\Frontend\CartController;
use App\Http\Controllers\Frontend\CategoryPageController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\ProductPageController;
use App\Http\Controllers\Frontend\StaticPageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes - Hulla Pindou
|--------------------------------------------------------------------------
*/

// Public Frontend Routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/category/{slug?}', [CategoryPageController::class, 'show'])->name('category.show');
Route::get('/product/{slug}', [ProductPageController::class, 'show'])->name('product.show');

// Cart Ajax Routes
Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
Route::post('/cart/add', [CartController::class, 'add'])->name('cart.add');
Route::patch('/cart/update/{id}', [CartController::class, 'update'])->name('cart.update');
Route::delete('/cart/remove/{id}', [CartController::class, 'remove'])->name('cart.remove');

// Static Pages
Route::get('/about-us', [StaticPageController::class, 'about'])->name('page.about');
Route::get('/terms-and-conditions', [StaticPageController::class, 'terms'])->name('page.terms');
Route::get('/contact-us', [StaticPageController::class, 'contact'])->name('page.contact');

// Authentication Routes
require __DIR__.'/auth.php';

// Back-Office Admin Portal Routes
Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');

    // User Management
    Route::get('/users', [AdminUserController::class, 'index'])->name('users.index');
    Route::patch('/users/{user}/role', [AdminUserController::class, 'updateRole'])->name('users.update-role');
    Route::delete('/users/{user}', [AdminUserController::class, 'destroy'])->name('users.destroy');

    // Category Management
    Route::get('/categories', [AdminCategoryController::class, 'index'])->name('categories.index');
    Route::post('/categories', [AdminCategoryController::class, 'store'])->name('categories.store');
    Route::patch('/categories/{category}', [AdminCategoryController::class, 'update'])->name('categories.update');
    Route::delete('/categories/{category}', [AdminCategoryController::class, 'destroy'])->name('categories.destroy');

    // Product Management
    Route::get('/products', [AdminProductController::class, 'index'])->name('products.index');
    Route::post('/products', [AdminProductController::class, 'store'])->name('products.store');
    Route::patch('/products/{product}', [AdminProductController::class, 'update'])->name('products.update');
    Route::delete('/products/{product}', [AdminProductController::class, 'destroy'])->name('products.destroy');
});
