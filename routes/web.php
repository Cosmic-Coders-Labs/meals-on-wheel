<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

// Route::get('/', function () {
//     return view('welcome');
// });

// view -> it is for the blade php pages
// inertia -> it is for the react routes pages


// Public Routes (Accessible without authentication)
Route::get('/', function () {
    return inertia('Home');
});

Route::get('/about', function () {
    return inertia('public/aboutus/AboutUsPage');
});

Route::get('/donor/donate', function () {
    return inertia('public/donate/pages/DonationPage');
});

Route::get('/food-safety', function () {
    return inertia('public/foodSafety/pages/FoodSafetyPage');
});

// Login & Registration Pages
Route::get('/login', function () {
    return inertia('auth/LoginPage');
})->name('login'); 

Route::get('/register', function () {
    return inertia('auth/RegisterPage');
})->name('register');;


Route::get('/dashboard', function () {
        return inertia('protected/Dashboard');
    
})->name('dashboard');

    
Route::get('/userboard', function () {
        return inertia('protected/Userboard');

})->name('userboard');