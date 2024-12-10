<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();

        // Get the authenticated user
        $user = Auth::user();

        // Check if the user has roles and redirect accordingly
        if ($user) {
            // Check for admin role first
            if ($user->roles->pluck('name')->contains('admin')) {
                return redirect()->route('dashboard');
            }

            // Check for member role if no admin role
            if ($user->roles->pluck('name')->contains('member')) {
                return redirect()->route('member-dashboard');
            }

            // Check for partner role if no admin or member role
            if ($user->roles->pluck('name')->contains('partner')) {
                return redirect()->route('partner-dashboard');
            }

            // Default redirection if no specific role matches
            return redirect()->route('home');
        }

        // Fallback if no user is authenticated
        return redirect()->route('login');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
