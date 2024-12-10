<?php

namespace Database\Seeders;

use App\Models\MealsOrder;
use App\Models\Order; // Assuming you have an Order model
use App\Models\Partner; // Assuming you have a Partner model
use Illuminate\Database\Seeder;

class MealsOrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Sample data for meal orders
        $preparationStatuses = ['pending', 'in-progress', 'ready'];

        // Get existing orders and partners from the database
        $orders = Order::all()->pluck('order_id')->toArray();
        $partners = Partner::all()->pluck('partner_id')->toArray();

        // Ensure there are enough partners and orders

        foreach ($orders as $order) {
            // Randomly assign a partner_id to each meal order from the available partners
            $partner = $partners[array_rand($partners)];

            // Prepare meals order data
            $mealsOrderData = [
                'order_id' => $order, // Use the current order's ID
                'partner_id' => $partner, // Assign a random partner's ID
                'preparation_status' => $preparationStatuses[array_rand($preparationStatuses)], // Randomly choose preparation status
                'created_at' => now(), // Set current timestamp
                'updated_at' => now(), // Set current timestamp
            ];

            // Create the meals order
            MealsOrder::create($mealsOrderData);
        }
    }
}
