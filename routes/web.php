<?php

use App\Http\Controllers\CaregiversToMembersController;
use App\Http\Controllers\CustomProfileController;
use App\Http\Controllers\MealsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Models\User;
use App\Models\Member;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Public/Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('Public/AboutUs', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('aboutus');

Route::get('/donation', function () {
    return Inertia::render('Public/Donation', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('donation');


Route::get('/food-safety', function () {
    return Inertia::render('Public/FoodSafety', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('foodsafety');

Route::get('/get-meals', function () {
    return Inertia::render('Public/GetMeal', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('getmeal');

Route::get('/fundraising', function () {
    return Inertia::render('Public/FundraisingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('fundraising');


// web.php
Route::get('meals', [MealsController::class, 'inertiaIndex'])->name('meals.index');
Route::post('meals', [MealsController::class, 'inertiaStore'])->name('meals.store');
Route::get('meals/{id}', [MealsController::class, 'inertiaShow'])->name('meals.show');
Route::put('meals/{id}', [MealsController::class, 'inertiaUpdate'])->name('meals.update');
Route::delete('meals/{id}', [MealsController::class, 'inertiaDestroy'])->name('meals.destroy');


Route::get('/admin-dashboard', function () {
    return Inertia::render('Dashboard/AdminDashboard');
})->middleware(['auth', 'verified', 'role:admin'])->name('admin-dashboard');

Route::get('/member-dashboard', function () {
    return Inertia::render('Dashboard/MemberDashboard');
})->middleware(['auth', 'verified', 'role:member'])->name('member-dashboard');

Route::get('/partner-dashboard', function () {
    return Inertia::render('Dashboard/PartnerDashboard');
})->middleware(['auth', 'verified', 'role:partner'])->name('partner-dashboard');

Route::get('/volunteer-dashboard', function () {
    return Inertia::render('Dashboard/VolunteerDashboard');
})->middleware(['auth', 'verified', 'role:volunteer'])->name('volunteer-dashboard');

Route::get('/caregiver-dashboard', function () {
    return Inertia::render('Dashboard/CaregiverDashboard');
})->middleware(['auth', 'verified', 'role:caregiver'])->name('caregiver-dashboard');

Route::get('/donor-dashboard', function () {
    return Inertia::render('Dashboard/DonorDashboard');
})->middleware(['auth', 'verified', 'role:donor'])->name('donor-dashboard');

Route::get('/profile-dashboard', function () {
    return Inertia::render('Dashboard/ProfileDashboard');
})->middleware(['auth', 'verified'])->name('profile-dashboard');

Route::get('/dashboard', function () {
    $user = Auth::user();
    if ($user) {
        if ($user->roles->contains('name', 'admin')) {
            return redirect()->route('admin-dashboard');
        }

        if ($user->roles->contains('name', 'member')) {
            return redirect()->route('member-dashboard');
        }

        if ($user->roles->contains('name', 'partner')) {
            return redirect()->route('partner-dashboard');
        }

        if ($user->roles->contains('name', 'volunteer')) {
            return redirect()->route('volunteer-dashboard');
        }

        if ($user->roles->contains('name', 'caregiver')) {
            return redirect()->route('caregiver-dashboard');
        }

        if ($user->roles->contains('name', 'donor')) {

            return redirect()->route('donor-dashboard');
        }
    }
    return redirect()->route('home');
})->middleware(['auth', 'verified'])->name('dashboard');


// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [CustomProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [CustomProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [CustomProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::middleware('auth')->get('users/me', [UserController::class, 'getMe'])->name('getme');
Route::middleware(['auth'])->get('user/role', [UserController::class, 'getRole'])->name('user.roles');



require __DIR__ . '/auth.php';
