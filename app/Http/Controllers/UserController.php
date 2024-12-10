<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends BaseController
{
    protected $model = User::class;

    public function index()
    {
        // Retrieve users with their profiles and roles
        $users = User::with(['profile', 'roles', 'caregiver'])->get();

        // Format the data as needed
        $formattedUsers = $users->map(function ($user) {
            return [
                'id' => $user->id,
                'email' => $user->email,
                'status' => $user->status,
                'latitude' => $user->latitude,
                'longitude' => $user->longitude,
                'reason_of_rejection' => $user->reason_of_rejection,
                'email_verified_at' => $user->email_verified_at,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
                'caregiver_id' => $user->caregiver->caregiver_id ?? null,
                'member_id' => $user->member->member_id ?? null,
                'partner_id' => $user->partner->partner_id ?? null,
                'donor_id' => $user->donor->donor_id ?? null,
                'volunteer_id' => $user->volunteer->volunteer_id ?? null,
                'profile' => [
                    'profile_id' => $user->profile->id,
                    'first_name' => $user->profile->first_name,
                    'last_name' => $user->profile->last_name,
                    'age' => $user->profile->age,
                    'gender' => $user->profile->gender,
                    'birthday' => $user->profile->birthday,
                    'contact_number' => $user->profile->contact_number,
                    'address' => $user->profile->address,
                    'user_id' => $user->profile->user_id,
                    'created_at' => $user->profile->created_at,
                    'updated_at' => $user->profile->updated_at,
                ],
                'roles' => $user->roles->map(function ($role) {
                    return [
                        'id' => $role->id,
                        'name' => $role->name,
                        'description' => $role->description,
                        'created_at' => $role->created_at,
                        'updated_at' => $role->updated_at,
                        'pivot' => [
                            'user_id' => $role->pivot->user_id,
                            'role_id' => $role->pivot->role_id,
                        ],
                    ];
                }),
            ];
        });

        // Return formatted data as JSON
        return response()->json($formattedUsers, 200);
    }

    // Show method for a specific user
    public function show($id)
    {
        // Retrieve user by ID with profile, roles, and caregiver
        $user = User::with(['profile', 'roles', 'caregiver'])->findOrFail($id);

        // Format the data as needed
        $formattedUser = [
            'id' => $user->id,
            'email' => $user->email,
            'status' => $user->status,
            'latitude' => $user->latitude,
            'longitude' => $user->longitude,
            'reason_of_rejection' => $user->reason_of_rejection,
            'email_verified_at' => $user->email_verified_at,
            'created_at' => $user->created_at,
            'updated_at' => $user->updated_at,
            'caregiver_id' => $user->caregiver->caregiver_id ?? null,
            'member_id' => $user->member->member_id ?? null,
            'partner_id' => $user->partner->partner_id ?? null,
            'donor_id' => $user->donor->donor_id ?? null,
            'volunteer_id' => $user->volunteer->volunteer_id ?? null,
            'profile' => [
                'profile_id' => $user->profile->id,
                'first_name' => $user->profile->first_name,
                'last_name' => $user->profile->last_name,
                'age' => $user->profile->age,
                'gender' => $user->profile->gender,
                'birthday' => $user->profile->birthday,
                'contact_number' => $user->profile->contact_number,
                'address' => $user->profile->address,
                'user_id' => $user->profile->user_id,
                'created_at' => $user->profile->created_at,
                'updated_at' => $user->profile->updated_at,
            ],
            'roles' => $user->roles->map(function ($role) {
                return [
                    'id' => $role->id,
                    'name' => $role->name,
                    'description' => $role->description,
                    'created_at' => $role->created_at,
                    'updated_at' => $role->updated_at,
                    'pivot' => [
                        'user_id' => $role->pivot->user_id,
                        'role_id' => $role->pivot->role_id,
                    ],
                ];
            }),
        ];

        // Return the formatted user as JSON
        return response()->json($formattedUser, 200);
    }


    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:approved,rejected,inactive,active',
        ]);

        $user = User::findOrFail($id);
        $user->status = $request->status;
        $user->save();

        return response()->json(['message' => 'User status updated successfully.']);
    }

    public function getMe(Request $request)
    {
        if (!$request->user()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = $request->user();
        return response()->json($user, 200);
    }

    public function getRole(Request $request)
    {
        if (!$request->user()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $user = $request->user();
        $roles = $user->roles->pluck('name');

        return response()->json([
            'user' => $user,
            'role' => $roles,
        ], 200);
    }
}
