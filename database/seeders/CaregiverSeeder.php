<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CaregiverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define caregiver data
        $caregivers = [
            [
                'email' => 'caregiver1@example.com',
                'first_name' => 'Emily',
                'last_name' => 'Johnson',
                'age' => 45,
                'gender' => 'female',
                'address' => '123 Elder Care Rd, San Francisco, CA',
            ],
            [
                'email' => 'caregiver2@example.com',
                'first_name' => 'Robert',
                'last_name' => 'Smith',
                'age' => 50,
                'gender' => 'male',
                'address' => '456 Care Path St, Miami, FL',
            ],
            [
                'email' => 'caregiver3@example.com',
                'first_name' => 'Mary',
                'last_name' => 'Lee',
                'age' => 38,
                'gender' => 'female',
                'address' => '789 Health St, New York, NY',
            ],
            [
                'email' => 'caregiver4@example.com',
                'first_name' => 'John',
                'last_name' => 'Brown',
                'age' => 42,
                'gender' => 'male',
                'address' => '101 Caregiving Ave, Chicago, IL',
            ],
            [
                'email' => 'caregiver5@example.com',
                'first_name' => 'Sophie',
                'last_name' => 'Taylor',
                'age' => 47,
                'gender' => 'female',
                'address' => '202 Health Blvd, Phoenix, AZ',
            ],
            [
                'email' => 'caregiver6@example.com',
                'first_name' => 'Paul',
                'last_name' => 'Wilson',
                'age' => 60,
                'gender' => 'male',
                'address' => '303 Home Care Rd, Los Angeles, CA',
            ],
            [
                'email' => 'caregiver7@example.com',
                'first_name' => 'Linda',
                'last_name' => 'Martinez',
                'age' => 48,
                'gender' => 'female',
                'address' => '404 Support St, Houston, TX',
            ],
            [
                'email' => 'caregiver8@example.com',
                'first_name' => 'Jake',
                'last_name' => 'Garcia',
                'age' => 41,
                'gender' => 'male',
                'address' => '505 Healing Rd, Dallas, TX',
            ],
            [
                'email' => 'caregiver9@example.com',
                'first_name' => 'Hannah',
                'last_name' => 'Williams',
                'age' => 53,
                'gender' => 'female',
                'address' => '606 Recovery St, Seattle, WA',
            ],
            [
                'email' => 'caregiver10@example.com',
                'first_name' => 'Steve',
                'last_name' => 'Jackson',
                'age' => 54,
                'gender' => 'male',
                'address' => '707 Health Way, Portland, OR',
            ],
        ];

        // Create caregivers and assign roles
        foreach ($caregivers as $data) {
            $user = User::create([
                'email' => $data['email'],
                'password' => Hash::make('caregiverpassword'),
                'status' => 'active',
            ]);
            $user->assignRole('caregiver');
            // Create the associated profile
            $user->profile()->create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'age' => $data['age'],
                'gender' => $data['gender'],
                'address' => $data['address'],
            ]);
        $user->caregiver()->create();
        }
    }
}
