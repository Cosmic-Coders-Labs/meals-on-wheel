<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DonorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('donors')->insert([
            [
                'DonorID' => 1,
                'Name' => 'Emma Watson',
                'Email' => 'emma@example.com',
                'DonationAmount' => 500.00,
                'DonationDate' => now()->subDays(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'DonorID' => 2,
                'Name' => 'Liam Neeson',
                'Email' => 'liam@example.com',
                'DonationAmount' => 1000.00,
                'DonationDate' => now()->subDays(20),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
