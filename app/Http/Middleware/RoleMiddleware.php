<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if (!$request->user() || !$request->user()->roles()->whereIn('name', $roles)->exists()) {
            return response(['message' => 'Unauthorized.'], 403);
        }

        return $next($request);
    }
}
