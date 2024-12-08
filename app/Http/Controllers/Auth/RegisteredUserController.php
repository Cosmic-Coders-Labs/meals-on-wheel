<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            // Validate the incoming request
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'role' => 'required|string|in:caregiver,member,partner,volunteer,donor',
            'needs' => 'nullable|string',
            'allergies' => 'nullable|string',
            'partner_name' => 'nullable|string',
            'business_license' => 'nullable|string',
            'name' => 'nullable|string',
            'volunteer_role' => 'nullable|string',
            // Profile validation rules - optional fields allowed
            'first_name' => 'nullable|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'age' => 'nullable|integer|min:0',
            'gender' => 'nullable|string|in:male,female,other',
            'birthday' => 'nullable|date',
            'contact_number' => 'nullable|string|max:15',
            'address' => 'nullable|string|max:255',
            // Donor validation rules - optional fields allowed
            'donor_name' => 'nullable|string',
        ]);

        // Round location data
        $data['latitude'] = round($data['latitude'] ?? 0, 7);
        $data['longitude'] = round($data['longitude'] ?? 0, 7);

        // Create the user
        $user = User::create([
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'latitude' => $data['latitude'],
            'longitude' => $data['longitude'],
        ]);

        // Assign the role
        $role = $data['role'];
        $user->assignRole($role);

        // Calculate age based on birthday
        $age = null;
        if (!empty($data['birthday'])) {
            $birthday = \Carbon\Carbon::parse($data['birthday']);
            $age = $birthday->age; // Calculate age using Carbon
        }

        // Create the profile with defaults for missing fields and calculated age
        $user->profile()->create([
            'first_name' => $data['first_name'] ?? $data['name'],
            'last_name' => $data['last_name'] ?? $data['name'],
            'age' => $age ?? 0, // Default to 0 if no birthday is provided
            'gender' => $data['gender'] ?? 'other',
            'birthday' => $data['birthday'] ?? null,
            'contact_number' => $data['contact_number'] ?? 'N/A',
            'address' => $data['address'] ?? 'N/A',
        ]);

        // Dynamically create associated entities based on the role
        switch ($role) {
            case 'caregiver':
                $user->caregiver()->create();
                break;

            case 'donor':
                $user->donor()->create([
                    'donor_name' => $data['donor_name'] ?? $data['name'],
                    'contact_number' => $data['contact_number'] ?? 'N/A',
                    'email' => $data['email'],
                ]);
                break;

            case 'member':
                $user->member()->create([
                    'needs' => $data['needs'] ?? 'Default Needs',
                    'allergies' => $data['allergies'] ?? "Not Available",
                ]);
                break;

            case 'partner':
                $user->partner()->create([
                    'partner_name' => $data['partner_name'] ?? $data['name'],
                    'partner_registered_by' => $data['partner_registered_by'] ?? $data['name'],
                    "address" => $data['address'] ?? "Not Available",
                    'business_license' => $data['business_license'] ?? 'Default License',
                ]);
                break;

            case 'volunteer':
                $user->volunteer()->create([
                    'volunteer_name' => $data['name'] ?? $data['email'],
                    'volunteer_role' => $data['volunteer_role'] ?? 'Default Role',
                ]);
                break;
        };

        event(new Registered($user));
        Auth::login($user);

        // Role-based redirection logic
        $user = Auth::user(); // Get the currently authenticated user
        // Check the user's role and redirect accordingly
        if ($user->roles->contains('name', 'admin')) {
            return redirect()->route('dashboard');
        }

        if ($user->roles->contains('name', 'member')) {
            return redirect()->route('member-dashboard');
        }

        if ($user->roles->contains('name', 'partner')) {
            return redirect()->route('partner-dashboard');
        }

        // Default redirection if no specific role matches
        return redirect()->route('home');
        // return redirect()->intended(route('dashboard', absolute: false));
    }
}
