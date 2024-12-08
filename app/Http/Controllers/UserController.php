<?php
namespace App\Http\Controllers;

use App\Models\User;

class UserController extends BaseController
{
    protected $model = User::class;

    public function index()
    {
        // Retrieve users with their profiles and roles
        $users = User::with(['profile', 'roles'])->get();

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
        // Retrieve user by ID with profile and roles
        $user = User::with(['profile', 'roles'])->findOrFail($id);

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
}
