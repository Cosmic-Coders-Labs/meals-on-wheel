<?php


// use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// controller file imports
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\CaregiverController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VolunteerController;
use App\Http\Controllers\PartnerController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('/user', function (Request $request) {
        return response()->json(json_decode($request->user()), 200);
    });

    Route::apiResource('/users', UserController::class);

    Route::get('/dashboard', function () {
        return response()->json([
            'name' => auth()->user()->name,
            'email' => auth()->user()->email,
        ]);
    });
});

// Add named routes for login and register
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');

Route::apiResource('users', UserController::class);
Route::apiResource('roles', RoleController::class);
Route::apiResource('caregivers', CaregiverController::class);
Route::apiResource('members', MemberController::class);
Route::apiResource('meals', MealController::class);
Route::apiResource('menus', MenuController::class);
Route::apiResource('donations', DonationController::class);
Route::apiResource('profiles', ProfileController::class);
Route::apiResource('volunteers', VolunteerController::class);
Route::apiResource('partners', PartnerController::class);

