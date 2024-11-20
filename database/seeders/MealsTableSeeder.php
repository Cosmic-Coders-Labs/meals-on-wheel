<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MealsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('meals')->insert([
            [
                'MealID' => 1,
                'MealName' => 'Vegan Delight',
                'Ingredients' => 'Tofu, Broccoli, Quinoa',
                'Calories' => 400,
                'PreparationTime' => 30,
                'PartnerID' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'MealID' => 2,
                'MealName' => 'Chicken Feast',
                'Ingredients' => 'Chicken, Rice, Veggies',
                'Calories' => 700,
                'PreparationTime' => 45,
                'PartnerID' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
