<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Creating 5 Partners with realistic data, including new fields
        $partners = [
            [
                'email' => 'sarah.williams@example.com',
                'first_name' => 'Sarah',
                'last_name' => 'Williams',
                'age' => 35,
                'gender' => 'female',
                'address' => '202 Partner Blvd, Miami, FL',
                'partner_name' => 'Partner Sarah',
                'partner_registered_by' => 'Admin',
                'business_license' => 'A123456',
                'contact_number' => '555-1234',
                'business_type' => 'Retail',
            ],
            [
                'email' => 'david.brown@example.com',
                'first_name' => 'David',
                'last_name' => 'Brown',
                'age' => 40,
                'gender' => 'male',
                'address' => '303 Business Rd, New York, NY',
                'partner_name' => 'Partner David',
                'partner_registered_by' => 'Admin',
                'business_license' => 'B234567',
                'contact_number' => '555-2345',
                'business_type' => 'Consulting',
            ],
            [
                'email' => 'linda.morris@example.com',
                'first_name' => 'Linda',
                'last_name' => 'Morris',
                'age' => 42,
                'gender' => 'female',
                'address' => '404 Corporate St, Los Angeles, CA',
                'partner_name' => 'Partner Linda',
                'partner_registered_by' => 'Admin',
                'business_license' => 'C345678',
                'contact_number' => '555-3456',
                'business_type' => 'Logistics',
            ],
            [
                'email' => 'james.carter@example.com',
                'first_name' => 'James',
                'last_name' => 'Carter',
                'age' => 45,
                'gender' => 'male',
                'address' => '505 Merchant Ave, Austin, TX',
                'partner_name' => 'Partner James',
                'partner_registered_by' => 'Admin',
                'business_license' => 'D456789',
                'contact_number' => '555-4567',
                'business_type' => 'Technology',
            ],
            [
                'email' => 'patricia.king@example.com',
                'first_name' => 'Patricia',
                'last_name' => 'King',
                'age' => 50,
                'gender' => 'female',
                'address' => '606 Trade Rd, Denver, CO',
                'partner_name' => 'Partner Patricia',
                'partner_registered_by' => 'Admin',
                'business_license' => 'E567890',
                'contact_number' => '555-5678',
                'business_type' => 'Health',
            ]
        ];

        foreach ($partners as $data) {
            // Create a partner user
            $user = User::create([
                'email' => $data['email'],
                'password' => Hash::make('partnerpassword'),  // default password
                'status' => 'active',
            ]);
            $user->assignRole('partner');

            // Create the profile for the partner
            $user->profile()->create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'age' => $data['age'],
                'contact_number' => $data['contact_number'],
                'gender' => $data['gender'],
                'address' => $data['address'],
            ]);

            // Create the partner-specific data including new fields
            $user->partner()->create([
                'partner_name' => $data['partner_name'],
                'partner_registered_by' => $data['partner_registered_by'],
                'address' => $data['address'],  // address remains same
                'business_license' => $data['business_license'],
                'business_type' => $data['business_type'],
            ]);
        }
    }
}
