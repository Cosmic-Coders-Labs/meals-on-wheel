<?php


use Illuminate\Support\Facades\Route;

// controller file imports
use App\Http\Controllers\MemberController;
use App\Http\Controllers\CaregiverController;
use App\Http\Controllers\MealController;

Route::apiResource('members', MemberController::class);
Route::apiResource('caregivers', CaregiverController::class);
Route::apiResource('meals', MealController::class);
