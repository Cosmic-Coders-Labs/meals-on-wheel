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

// define the routes for login
$loginRoutes = [
    'member' => 'MemberLoginPage',
    'caregiver' => 'CaregiverLoginPage',
    'partner' => 'PartnerLoginPage',
    'volunteer' => 'VolunteerLoginPage',
];

foreach ($loginRoutes as $route => $page) {
    Route::get("/{$route}/login", function () use ($page) {
        return inertia("features/auth/pages/{$page}");
    });
}

$registerRoutes = [
    'member' => 'MemberRegisterPage',
    'caregiver' => 'CaregiverRegisterPage',
    'partner' => 'PartnerRegisterPage',
    'volunteer' => 'VolunteerRegisterPage',
];

foreach ($registerRoutes as $route => $page) {
    Route::get("/{$route}/register", function () use ($page) {
        return inertia("features/auth/pages/{$page}");
    });
}

// Route::get('/member/register', function () {
//     return inertia('features/auth/pages/MemberRegisterPage');
// });
