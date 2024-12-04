<?php


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
