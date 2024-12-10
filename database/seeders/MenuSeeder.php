<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MenuSeeder extends Seeder
{
    public function run()
    {
        DB::table('menu')->insert([
            [
                'meal_id' => 1,
                'menu_name' => 'Lunch Menu',
                'available_from' => Carbon::createFromFormat('Y-m-d H:i:s', '2024-12-01 11:00:00'),
                'available_until' => Carbon::createFromFormat('Y-m-d H:i:s', '2024-12-01 14:00:00'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'meal_id' => 2,
                'menu_name' => 'Dinner Menu',
                'available_from' => Carbon::createFromFormat('Y-m-d H:i:s', '2024-12-01 17:00:00'),
                'available_until' => Carbon::createFromFormat('Y-m-d H:i:s', '2024-12-01 20:00:00'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more records as needed
        ]);
    }
}
