<?php


use Illuminate\Support\Facades\Route;

// controller file imports
use App\Http\Controllers\MemberController;
use App\Http\Controllers\CaregiverController;
use App\Http\Controllers\DeliveryController;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VolunteerController;

Route::apiResource('members', MemberController::class);
Route::apiResource('caregivers', CaregiverController::class);
Route::apiResource('deliveries', DeliveryController::class);
Route::apiResource('donors', DonorController::class);
Route::apiResource('feedback', FeedbackController::class);
Route::apiResource('meals', MealController::class);
Route::apiResource('menus', MenuController::class);
Route::apiResource('partners', PartnerController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('volunteers', VolunteerController::class);
