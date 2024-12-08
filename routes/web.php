<?php

use App\Http\Controllers\ProfileController;
use App\Models\User;
use App\Models\Member;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/member-dashboard', function () {
    return Inertia::render('MemberDashboard');
})->middleware(['auth', 'verified'])->name('member-dashboard');

Route::get('/partner-dashboard', function () {
    return Inertia::render('PartnerDashboard');
})->middleware(['auth', 'verified'])->name('partner-dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// counts


require __DIR__ . '/auth.php';
