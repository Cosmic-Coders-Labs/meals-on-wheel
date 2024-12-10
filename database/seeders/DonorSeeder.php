<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DonorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Creating 5 Donors with realistic data, including additional fields
        $donors = [
            [
                'email' => 'alice.johnson@example.com',
                'first_name' => 'Alice',
                'last_name' => 'Johnson',
                'age' => 34,
                'gender' => 'female',
                'address' => '123 Charity Ln, Boston, MA',
                'donor_name' => 'Alice Johnson',
                'contact_number' => '555-1234',
                'card_number' => '1234-5678-9876-5432',
                'secret_number' => '1234',
            ],
            [
                'email' => 'bob.smith@example.com',
                'first_name' => 'Bob',
                'last_name' => 'Smith',
                'age' => 40,
                'gender' => 'male',
                'address' => '456 Donation St, Chicago, IL',
                'donor_name' => 'Bob Smith',
                'contact_number' => '555-2345',
                'card_number' => '2345-6789-8765-4321',
                'secret_number' => '2345',
            ],
            [
                'email' => 'carol.martin@example.com',
                'first_name' => 'Carol',
                'last_name' => 'Martin',
                'age' => 45,
                'gender' => 'female',
                'address' => '789 Giving Rd, Los Angeles, CA',
                'donor_name' => 'Carol Martin',
                'contact_number' => '555-3456',
                'card_number' => '3456-7890-7654-3210',
                'secret_number' => '3456',
            ],
            [
                'email' => 'david.lee@example.com',
                'first_name' => 'David',
                'last_name' => 'Lee',
                'age' => 38,
                'gender' => 'male',
                'address' => '101 Donor Blvd, Miami, FL',
                'donor_name' => 'David Lee',
                'contact_number' => '555-4567',
                'card_number' => '4567-8901-6543-2109',
                'secret_number' => '4567',
            ],
            [
                'email' => 'eva.jones@example.com',
                'first_name' => 'Eva',
                'last_name' => 'Jones',
                'age' => 50,
                'gender' => 'female',
                'address' => '202 Donation Ave, Seattle, WA',
                'donor_name' => 'Eva Jones',
                'contact_number' => '555-5678',
                'card_number' => '5678-9012-5432-1098',
                'secret_number' => '5678',
            ]
        ];

        foreach ($donors as $data) {
            // Create a donor user
            $user = User::create([
                'email' => $data['email'],
                'password' => Hash::make('donorpassword'),  // default password
                'status' => 'active',
            ]);
            $user->assignRole('donor');

            // Create the profile for the donor
            $user->profile()->create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'age' => $data['age'],
                'gender' => $data['gender'],
                'address' => $data['address'],
            ]);

            // Create the donor-specific data including new fields
            $user->donor()->create([
                'donor_name' => $data['donor_name'],
                'contact_number' => $data['contact_number'],
                'email' => $data['email'],
                'card_number' => $data['card_number'],
                'secret_number' => $data['secret_number'],
            ]);
        }
    }
}
