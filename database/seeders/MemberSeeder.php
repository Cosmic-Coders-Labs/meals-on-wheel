<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Creating 10 Members with realistic data, including 'needs' and 'allergies'
        $members = [
            [
                'email' => 'john.lee@example.com',
                'first_name' => 'John',
                'last_name' => 'Lee',
                'age' => 29,
                'gender' => 'male',
                'address' => '123 Main St, Springfield, IL',
                'needs' => 'Gluten-free diet',
                'allergies' => 'Peanuts',
            ],
            [
                'email' => 'jane.smith@example.com',
                'first_name' => 'Jane',
                'last_name' => 'Smith',
                'age' => 32,
                'gender' => 'female',
                'address' => '456 Oak St, Chicago, IL',
                'needs' => 'Low-sodium diet',
                'allergies' => 'None',
            ],
            [
                'email' => 'michael.johnson@example.com',
                'first_name' => 'Michael',
                'last_name' => 'Johnson',
                'age' => 45,
                'gender' => 'male',
                'address' => '789 Pine St, Houston, TX',
                'needs' => 'High-protein diet',
                'allergies' => 'Dairy',
            ],
            [
                'email' => 'emily.davis@example.com',
                'first_name' => 'Emily',
                'last_name' => 'Davis',
                'age' => 25,
                'gender' => 'female',
                'address' => '101 Maple St, Los Angeles, CA',
                'needs' => 'Vegan diet',
                'allergies' => 'Soy',
            ],
            [
                'email' => 'mark.wilson@example.com',
                'first_name' => 'Mark',
                'last_name' => 'Wilson',
                'age' => 34,
                'gender' => 'male',
                'address' => '202 Birch Dr, Boston, MA',
                'needs' => 'None',
                'allergies' => 'None',
            ],
            [
                'email' => 'lucy.martin@example.com',
                'first_name' => 'Lucy',
                'last_name' => 'Martin',
                'age' => 27,
                'gender' => 'female',
                'address' => '303 Cedar Ln, Phoenix, AZ',
                'needs' => 'Low-carb diet',
                'allergies' => 'Eggs',
            ],
            [
                'email' => 'peter.brown@example.com',
                'first_name' => 'Peter',
                'last_name' => 'Brown',
                'age' => 40,
                'gender' => 'male',
                'address' => '404 Elm St, Miami, FL',
                'needs' => 'Diabetic-friendly diet',
                'allergies' => 'Shellfish',
            ],
            [
                'email' => 'susan.jones@example.com',
                'first_name' => 'Susan',
                'last_name' => 'Jones',
                'age' => 38,
                'gender' => 'female',
                'address' => '505 Pine Ave, Dallas, TX',
                'needs' => 'Gluten-free diet',
                'allergies' => 'Tree nuts',
            ],
            [
                'email' => 'luke.lee@example.com',
                'first_name' => 'Luke',
                'last_name' => 'Lee',
                'age' => 33,
                'gender' => 'male',
                'address' => '606 Willow Dr, Seattle, WA',
                'needs' => 'Vegetarian diet',
                'allergies' => 'None',
            ],
            [
                'email' => 'maria.white@example.com',
                'first_name' => 'Maria',
                'last_name' => 'White',
                'age' => 29,
                'gender' => 'female',
                'address' => '707 Birchwood Rd, San Diego, CA',
                'needs' => 'Keto diet',
                'allergies' => 'Wheat',
            ]
        ];

        foreach ($members as $data) {
            // Create a member user
            $user = User::create([
                'email' => $data['email'],
                'password' => Hash::make('memberpassword'),  // default password
                'status' => 'active',
            ]);
            $user->assignRole('member');

            // Create the profile for the member
            $user->profile()->create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'age' => $data['age'],
                'gender' => $data['gender'],
                'address' => $data['address'],
            ]);

            // Create the member-specific needs and allergies data
            $user->member()->create([
                'needs' => $data['needs'],
                'allergies' => $data['allergies'],
            ]);
        }
    }
}
