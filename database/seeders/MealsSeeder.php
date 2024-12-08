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
                'image' => 'path_to_image/vegan_burger.jpg',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 10.99,
                'dietary_type' => 'vegan',
                'calories' => 350,
                'user_id' => 1,  // assuming user with ID 1 is creating this meal
            ],
            [
                'name' => 'Gluten-Free Pizza',
                'ingredients' => 'Gluten-free crust, tomato sauce, mozzarella, vegetables',
                'image' => 'path_to_image/gluten_free_pizza.jpg',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 12.50,
                'dietary_type' => 'gluten-free',
                'calories' => 450,
                'user_id' => 2,  // assuming user with ID 2 is creating this meal
            ],
            [
                'name' => 'Chicken Caesar Salad',
                'ingredients' => 'Grilled chicken, Romaine lettuce, Caesar dressing, croutons, parmesan',
                'image' => 'path_to_image/chicken_caesar_salad.jpg',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 8.99,
                'dietary_type' => 'none',
                'calories' => 600,
                'user_id' => 3,  // assuming user with ID 3 is creating this meal
            ],
            [
                'name' => 'Beef Tacos',
                'ingredients' => 'Ground beef, taco shells, lettuce, tomato, cheese, salsa',
                'image' => 'path_to_image/beef_tacos.jpg',
                'reason_for_rejection' => 'Out of stock',
                'status' => 'out of stock',
                'price' => 6.50,
                'dietary_type' => 'none',
                'calories' => 550,
                'user_id' => 4,  // assuming user with ID 4 is creating this meal
            ],
            [
                'name' => 'Spaghetti Bolognese',
                'ingredients' => 'Spaghetti, ground beef, tomato sauce, onions, garlic, basil',
                'image' => 'path_to_image/spaghetti_bolognese.jpg',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 11.75,
                'dietary_type' => 'none',
                'calories' => 700,
                'user_id' => 5,  // assuming user with ID 5 is creating this meal
            ],
        ];

        // Seed meals
        foreach ($meals as $mealData) {
            Meal::create($mealData);
        }
    }
}
