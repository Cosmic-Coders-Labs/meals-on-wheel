<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CaregiversTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('caregivers')->insert([
            [
                'CaregiverID' => 1,
                'Name' => 'Alice Johnson',
                'Phone' => '1234567890',
                'Address' => '123 Maple Street',
                'RelationshipToMember' => 'Mother',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'CaregiverID' => 2,
                'Name' => 'Bob Wilson',
                'Phone' => '9876543210',
                'Address' => '456 Oak Avenue',
                'RelationshipToMember' => 'Brother',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
