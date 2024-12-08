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


Route::get('/caregiver/login', function () {
    return inertia('features/auth/pages/CaregiverLoginPage');
});

Route::get('/partner/login', function () {
    return inertia('features/auth/pages/PartnerLoginPage');
});

Route::get('/volunteer/login', function () {
    return inertia('features/auth/pages/VolunteerLoginPage');
});


Route::get('/donor/donate', function () {
    return inertia('features/donate/pages/DonationPage');
});

Route::get('/weekly-meal-plan', function () {
    return inertia('features/getMeal/pages/WeeklyMealPlanPage');
});

Route::get('/meal-detail/{mealSlug}', function () {
    return inertia('features/mealDetail/pages/MealDetailPage');
});