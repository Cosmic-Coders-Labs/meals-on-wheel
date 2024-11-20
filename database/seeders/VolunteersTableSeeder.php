<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VolunteersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('volunteers')->insert([
            [
                'VolunteerID' => 1,
                'Name' => 'Charlie Brown',
                'Phone' => '5551122334',
                'Availability' => 'Full-Time',
                'AssignedRegion' => 'Downtown',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'VolunteerID' => 2,
                'Name' => 'Lucy Van Pelt',
                'Phone' => '5552233445',
                'Availability' => 'Part-Time',
                'AssignedRegion' => 'Uptown',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
