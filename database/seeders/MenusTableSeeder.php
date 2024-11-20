<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('menus')->insert([
            [
                'MenuID' => 1,
                'WeekStartDate' => now()->startOfWeek(),
                'WeekEndDate' => now()->endOfWeek(),
                'NewAttribute' => 'Seasonal Specials',
                'MealID' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'MenuID' => 2,
                'WeekStartDate' => now()->startOfWeek()->subWeek(),
                'WeekEndDate' => now()->endOfWeek()->subWeek(),
                'NewAttribute' => 'High-Protein Meals',
                'MealID' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
