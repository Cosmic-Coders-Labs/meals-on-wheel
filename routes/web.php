<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

// view -> it is for the blade php pages
// inertia -> it is for the react routes pages
Route::get('/', function () {
    return inertia('Home');
});

Route::get('/member/register', function () {
    return inertia('features/auth/pages/MemberRegisterPage');
});

Route::get('/member/login', function () {
    return inertia('features/auth/pages/MemberLoginPage');
});

Route::get('/donor/donate', function () {
    return inertia('features/donate/pages/DonationPage');
});
