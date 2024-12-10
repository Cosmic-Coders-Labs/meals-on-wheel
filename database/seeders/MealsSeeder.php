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
                'ingredients' => json_encode(['Vegan patty', 'lettuce', 'tomato', 'vegan mayo']),
                'allergens' => json_encode(['soy']),
                'short_description' => 'A delicious plant-based burger packed with flavor.',
                'long_description' => 'Our Vegan Burger is made with a savory vegan patty, fresh lettuce, juicy tomato slices, and a tangy vegan mayo. Perfect for those seeking a healthy and satisfying meal that’s completely plant-based.',
                'image' => 'meals/vegan-burger.jpg',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 10.99,
                'delivery_type' => 'hot-meal',
                'dietary_type' => 'vegan',
                'calories' => 350,
                'user_id' => 1,
            ],
            [
                'name' => 'Gluten-Free Pizza',
                'ingredients' => json_encode(['Gluten-free crust', 'tomato sauce', 'mozzarella', 'vegetables']),
                'allergens' => json_encode(['dairy']),
                'short_description' => 'A crispy gluten-free pizza loaded with toppings.',
                'long_description' => 'Indulge in our Gluten-Free Pizza, crafted with a crispy gluten-free crust and topped with zesty tomato sauce, melted mozzarella cheese, and fresh vegetables. A great option for those with gluten sensitivities.',
                'image' => 'meals/Gluten-Free-Pizza.jpg',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 12.50,
                'delivery_type' => 'frozen-meal',
                'dietary_type' => 'gluten-free',
                'calories' => 450,
                'user_id' => 2,
            ],
            [
                'name' => 'Chicken Caesar Salad',
                'ingredients' => json_encode(['Grilled chicken', 'Romaine lettuce', 'Caesar dressing', 'croutons', 'parmesan']),
                'allergens' => json_encode(['dairy']),
                'short_description' => 'A classic Caesar salad topped with grilled chicken.',
                'long_description' => 'Enjoy the timeless flavors of our Chicken Caesar Salad, featuring tender grilled chicken, crisp Romaine lettuce, creamy Caesar dressing, crunchy croutons, and a sprinkle of parmesan cheese. A perfect meal for any time of day.',
                'image' => 'meals/Chicken-Caesar-Salad.jpg',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 8.99,
                'delivery_type' => 'hot-meal',
                'dietary_type' => 'none',
                'calories' => 600,
                'user_id' => 3,
            ],
            [
                'name' => 'Beef Tacos',
                'ingredients' => json_encode(['Ground beef', 'taco shells', 'lettuce', 'tomato', 'cheese', 'salsa']),
                'allergens' => json_encode(['dairy']),
                'short_description' => 'Tasty tacos with seasoned ground beef and fresh toppings.',
                'long_description' => 'Our Beef Tacos are a fiesta of flavors, featuring seasoned ground beef nestled in crispy taco shells and topped with fresh lettuce, juicy tomatoes, shredded cheese, and a zesty salsa. Great for a quick and delicious meal.',
                'image' => 'meals/Beef-Tacos.jpg',
                'reason_for_rejection' => 'Out of stock',
                'status' => 'out of stock',
                'price' => 6.50,
                'delivery_type' => 'hot-meal',
                'dietary_type' => 'none',
                'calories' => 550,
                'user_id' => 4,
            ],
            [
                'name' => 'Spaghetti Bolognese',
                'ingredients' => json_encode(['Spaghetti', 'ground beef', 'tomato sauce', 'onions', 'garlic', 'basil']),
                'allergens' => json_encode([]),
                'short_description' => 'A hearty pasta dish with a rich meat sauce.',
                'long_description' => 'Savor the taste of our Spaghetti Bolognese, featuring tender spaghetti noodles tossed in a rich tomato and ground beef sauce, seasoned with onions, garlic, and fragrant basil. A classic comfort food for the whole family.',
                'image' => 'meals/Spaghetti-Bolognese.jpg',
                'reason_for_rejection' => null,
                'status' => 'available',
                'price' => 11.75,
                'delivery_type' => 'hot-meal',
                'dietary_type' => 'none',
                'calories' => 700,
                'user_id' => 5,
            ],
        ];

        // Seed meals into the database
        foreach ($meals as $mealData) {
            Meal::create($mealData);
        }
    }
}
