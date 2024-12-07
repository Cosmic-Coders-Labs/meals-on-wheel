<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
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
            }

            // Generate an API token
            $token = $user->createToken('main')->plainTextToken;

            return response()->json([
                'status' => true,
                'message' => 'User registered successfully with associated entity',
                'user' => $user,
            ], 201)->cookie('auth_token', $token, 120, '/', null, true, true); // Secure HttpOnly cookie

        } catch (\Exception $e) {
            // Return the Error Json Response - HTTP 500: Internal Server Error
            return response()->json([
                'status' => false,
                'message' => 'An error occurred during registration.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    public function login(LoginRequest $request)
    {
        try {
            $data = $request->validated();

            // Attempt to authenticate user
            if (!Auth::attempt($data)) {
                return response()->json([
                    'status' => false,
                    'message' => 'Invalid email or password',
                ], 401); // HTTP 401: Unauthorized
            }

            $user = Auth::user();
            $token = $user->createToken('main')->plainTextToken;

            return response()->json([
                'status' => true,
                'message' => 'Login successful',
                'user' => $user,
                'token' => $token,
            ], 200); // HTTP 200: OK
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'An error occurred during login.',
                'error' => $e->getMessage(),
            ], 500); // HTTP 500: Internal Server Error
        }
    }

    public function logout(Request $request)
    {
        try {
            $user = $request->user();

            if ($user) {
                $user->currentAccessToken()->delete();
            }

            return response()->json([
                'status' => true,
                'message' => 'Logout successful',
            ], 200); // HTTP 200: OK
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'An error occurred during logout.',
                'error' => $e->getMessage(),
            ], 500); // HTTP 500: Internal Server Error
        }
    }
}
