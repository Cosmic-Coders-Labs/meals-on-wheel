<?php

namespace Database\Seeders;

use App\Models\Meal;
use Illuminate\Database\Seeder;

class MealsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Meal data to seed
        $meals = [
            [
                'name' => 'Vegan Burger',
                'ingredients' => 'Vegan patty, lettuce, tomato, vegan mayo',
                'image' => 'https://picsum.photos/200?random=1',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 10.99,
                'dietary_type' => 'vegan',
                'calories' => 350,
                'user_id' => 1,
            ],
            [
                'name' => 'Gluten-Free Pizza',
                'ingredients' => 'Gluten-free crust, tomato sauce, mozzarella, vegetables',
                'image' => 'https://picsum.photos/200?random=2',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 12.50,
                'dietary_type' => 'gluten-free',
                'calories' => 450,
                'user_id' => 2,
            ],
            [
                'name' => 'Chicken Caesar Salad',
                'ingredients' => 'Grilled chicken, Romaine lettuce, Caesar dressing, croutons, parmesan',
                'image' => 'https://picsum.photos/200?random=3',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 8.99,
                'dietary_type' => 'none',
                'calories' => 600,
                'user_id' => 3,
            ],
            [
                'name' => 'Beef Tacos',
                'ingredients' => 'Ground beef, taco shells, lettuce, tomato, cheese, salsa',
                'image' => 'https://picsum.photos/200?random=4',
                'reason_for_rejection' => 'Out of stock',
                'status' => 'out of stock',
                'price' => 6.50,
                'dietary_type' => 'none',
                'calories' => 550,
                'user_id' => 4,
            ],
            [
                'name' => 'Spaghetti Bolognese',
                'ingredients' => 'Spaghetti, ground beef, tomato sauce, onions, garlic, basil',
                'image' => 'https://picsum.photos/200?random=5',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 11.75,
                'dietary_type' => 'none',
                'calories' => 700,
                'user_id' => 5,
            ],
        ];

        // Seed meals
        foreach ($meals as $mealData) {
            Meal::create($mealData);
        }
    }
}
