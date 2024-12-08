<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Models\User;
use App\Models\Member;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('AboutUs', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('aboutus');

Route::get('/donation', function () {
    return Inertia::render('Donation', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('donation');


Route::get('/food-safety', function () {
    return Inertia::render('FoodSafety', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('foodsafety');

Route::get('/admin-dashboard', function () {
    return Inertia::render('AdminDashboard');
})->middleware(['auth', 'verified', 'role:admin'])->name('admin-dashboard');

Route::get('/member-dashboard', function () {
    return Inertia::render('MemberDashboard');
})->middleware(['auth', 'verified', 'role:member'])->name('member-dashboard');

Route::get('/partner-dashboard', function () {
    return Inertia::render('PartnerDashboard');
})->middleware(['auth', 'verified', 'role:partner'])->name('partner-dashboard');

Route::get('/volunteer-dashboard', function () {
    return Inertia::render('VolunteerDashboard');
})->middleware(['auth', 'verified', 'role:volunteer'])->name('volunteer-dashboard');


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
    }
    return redirect()->route('home');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->get('users/me', [UserController::class, 'getMe'])->name('getme');
// counts


require __DIR__ . '/auth.php';
