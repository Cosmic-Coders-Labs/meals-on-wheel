<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

// view -> it is for the blade php pages
// inertia -> it is for the react routes pages

// General Routes
Route::get('/', function () {
    return inertia('Home');
});

Route::get('/about', function () {
    return Inertia('features/aboutus/pages/AboutUsPage');
});


Route::get('/donor/donate', function () {
    return inertia('features/donate/pages/DonationPage');
});

Route::get('/food-safety', function () {
    return inertia('features/foodSafety/pages/FoodSafetyPage');
});

// Login & Registration Routes


// define login and & registration routes
$loginRoutes = [
    'member' => 'MemberLoginPage',
    'caregiver' => 'CaregiverLoginPage',
    'partner' => 'PartnerLoginPage',
    'volunteer' => 'VolunteerLoginPage',
];

$registerRoutes = [
    'member' => 'MemberRegisterPage',
    'caregiver' => 'CaregiverRegisterPage',
    'partner' => 'PartnerRegisterPage',
    'volunteer' => 'VolunteerRegisterPage',
];

// load routes by using looping

foreach ($loginRoutes as $route => $page) {
    Route::get("/{$route}/login", function () use ($page) {
        return inertia("features/auth/pages/{$page}");
    });
}

foreach ($registerRoutes as $route => $page) {
    Route::get("/{$route}/register", function () use ($page) {
        return inertia("features/auth/pages/{$page}");
    });
}

// Route::get('/member/register', function () {
//     return inertia('features/auth/pages/MemberRegisterPage');
// });



