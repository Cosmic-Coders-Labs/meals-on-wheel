<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = Auth::user();

        // Ensure user is authenticated and has roles
        if ($user && $user->roles->isNotEmpty()) {
            // Extract only the role names
            $roleNames = $user->roles->pluck('name')->toArray();
            // Check if the user has any of the roles passed in the middleware
            if (!array_intersect($roleNames, $roles)) {
                return redirect()->route('home');  // Redirect if no matching roles
            }
        }

        return $next($request);  // Proceed if roles match
    }
}
