<?php


// use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// controller file imports
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\CaregiverController;
use App\Http\Controllers\CaregiversToMembersController;
use App\Http\Controllers\CertificatesController;
use App\Http\Controllers\CustomProfileController;
use App\Http\Controllers\Dashboard\AdminDashboardController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\VolunteerController;
use App\Http\Controllers\MealsController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\MealsOrderController;
use App\Http\Controllers\VolunteerAssignmentController;

Route::resource('users', UserController::class);
Route::resource('roles', RoleController::class);
Route::resource('user-roles', RoleController::class);
Route::resource('caregivers', CaregiverController::class);

Route::resource('members', MemberController::class);
Route::resource('caregivers-to-members', CaregiversToMembersController::class);
Route::resource('partners', PartnerController::class);
Route::resource('volunteers', VolunteerController::class);
Route::resource('profiles', CustomProfileController::class);

Route::get('meals', [MealsController::class, 'apiIndex']);
Route::post('meals', [MealsController::class, 'apiStore']);
Route::get('meals/{id}', [MealsController::class, 'apiShow']);
Route::put('meals/{id}', [MealsController::class, 'apiUpdate']);
Route::delete('meals/{id}', [MealsController::class, 'apiDestroy']);

Route::resource('menus', MenuController::class);
Route::resource('donors', DonorController::class);
Route::resource('donations', DonationController::class);
Route::get('donations/donor/{donor_id}', [DonationController::class, 'showByDonorId']);

Route::get('orders/member/{member_id}', [OrderController::class, 'getByMember']);
Route::get('orders/caregiver/{caregiver_id}', [OrderController::class, 'getByCaregiver']);
Route::resource('orders', OrderController::class);

Route::get('tasks/available', [TaskController::class, 'availableTasks']);
Route::resource('tasks', TaskController::class);

Route::get('volunteer/{volunteer_id}/tasks', [VolunteerAssignmentController::class, 'getAssignedTasksByVolunteer']);
Route::resource('meals-orders', MealsOrderController::class);
Route::resource('admin-dashboard', AdminDashboardController::class);
Route::resource('volunteer-assignments', VolunteerAssignmentController::class);

Route::patch('users/{id}/status', [UserController::class, 'updateStatus']);
Route::patch('volunteer-assignments/{id}/status', [VolunteerAssignmentController::class, 'updateStatus']);

Route::get('caregivers-to-members/caregiver/{caregiverId}', [CaregiversToMembersController::class, 'showByCaregiverId']);
Route::apiResource('caregivers-to-members', CaregiversToMembersController::class)
    ->where(['caregivers-to-members' => '[0-9]+']);

Route::resource('certificates', CertificatesController::class);
Route::get('partners/{partner_id}/certificates', [CertificatesController::class, 'getCertificatesByPartner']);
