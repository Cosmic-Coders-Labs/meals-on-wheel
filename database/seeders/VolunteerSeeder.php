<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class VolunteerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Creating 20 Volunteers with realistic data, including new fields
        $volunteers = [
            [
                'email' => 'chris.martinez@example.com',
                'first_name' => 'Chris',
                'last_name' => 'Martinez',
                'age' => 28,
                'gender' => 'male',
                'address' => '404 Volunteer St, San Francisco, CA',
                'contact_number' => '555-1234',
                'volunteer_role' => 'Coordinator',
            ],
            [
                'email' => 'alice.jackson@example.com',
                'first_name' => 'Alice',
                'last_name' => 'Jackson',
                'age' => 31,
                'gender' => 'female',
                'address' => '505 Helper Ln, Atlanta, GA',
                'contact_number' => '555-2345',
                'volunteer_role' => 'Driver',
            ],
            [
                'email' => 'john.doe@example.com',
                'first_name' => 'John',
                'last_name' => 'Doe',
                'age' => 25,
                'gender' => 'male',
                'address' => '123 Charity Ave, Denver, CO',
                'contact_number' => '555-3456',
                'volunteer_role' => 'Helper',
            ],
            [
                'email' => 'mary.jones@example.com',
                'first_name' => 'Mary',
                'last_name' => 'Jones',
                'age' => 33,
                'gender' => 'female',
                'address' => '789 Donation St, Miami, FL',
                'contact_number' => '555-4567',
                'volunteer_role' => 'Event Planner',
            ],
            [
                'email' => 'david.miller@example.com',
                'first_name' => 'David',
                'last_name' => 'Miller',
                'age' => 29,
                'gender' => 'male',
                'address' => '102 Helping Ln, Portland, OR',
                'contact_number' => '555-5678',
                'volunteer_role' => 'Supporter',
            ],
            // Add the rest of the volunteer data here...
        ];

        foreach ($volunteers as $data) {
            // Create a volunteer user
            $user = User::create([
                'email' => $data['email'],
                'password' => Hash::make('volunteerpassword'),  // default password
                'status' => 'active',
            ]);
            $user->assignRole('volunteer');

            // Create the profile for the volunteer
            $user->profile()->create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'age' => $data['age'],
                'gender' => $data['gender'],
                'address' => $data['address'],
                'contact_number' => $data['contact_number'],
            ]);

            // Create the volunteer-specific data including new fields
            $user->volunteer()->create([
                'volunteer_name' => $data['first_name'] . ' ' . $data['last_name'],  // Combine first and last name
                'volunteer_role' => $data['volunteer_role'],
            ]);
        }
    }
}
