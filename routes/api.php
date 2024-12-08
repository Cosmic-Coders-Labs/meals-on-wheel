<?php


// use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// controller file imports
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\CaregiverController;
use App\Http\Controllers\CaregiversToMembersController;
use App\Http\Controllers\CustomProfileController;
use App\Http\Controllers\Dashboard\AdminDashboardController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\VolunteerController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\MealsOrderController;

Route::resource('users', UserController::class);
Route::resource('roles', RoleController::class);
Route::resource('user-roles', RoleController::class);
Route::resource('caregivers', CaregiverController::class);

Route::resource('members', MemberController::class);
Route::resource('caregivers-to-members', CaregiversToMembersController::class);
Route::resource('partners', PartnerController::class);
Route::resource('volunteers', VolunteerController::class);
Route::resource('profiles', CustomProfileController::class);
Route::resource('meals', MealController::class);
Route::resource('menus', MenuController::class);
Route::resource('donors', DonorController::class);
Route::resource('donations', DonationController::class);
Route::resource('orders', OrderController::class);
Route::resource('tasks', TaskController::class);
Route::resource('meals-orders', MealsOrderController::class);
Route::resource('admin-dashboard', AdminDashboardController::class);
