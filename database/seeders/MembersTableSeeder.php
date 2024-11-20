<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MembersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('members')->insert([
            [
                'MemberID' => 1,
                'Name' => 'John Doe',
                'Age' => 45,
                'Address' => '123 Maple Street',
                'Phone' => '5551234567',
                'DietaryRequirements' => 'Vegetarian',
                'RegistrationDate' => now()->subDays(30),
                'CaregiverID' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'MemberID' => 2,
                'Name' => 'Jane Smith',
                'Age' => 55,
                'Address' => '456 Oak Avenue',
                'Phone' => '5559876543',
                'DietaryRequirements' => 'Gluten-Free',
                'RegistrationDate' => now()->subDays(60),
                'CaregiverID' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
