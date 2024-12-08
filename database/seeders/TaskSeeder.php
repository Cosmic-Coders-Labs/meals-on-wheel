<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\Order; // Import the Order model
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Sample data for tasks
        $statuses = ['available', 'assigned', 'completed'];
        $priorities = ['low', 'medium', 'high'];

        // Get existing orders from the database
        $orders = Order::all()->pluck('order_id')->toArray();
        $names = ['delivery', 'meal prepration'];
        // Ensure there are enough orders to assign tasks
        if (count($orders) == 0) {
            echo "No orders available to assign tasks.\n";
            return;
        }

        foreach ($orders as $order) {
            // Prepare task data
            $taskData = [
                'name' => $names[array_rand($names)],
                'order_id' => $order, // Use the current order's ID
                'status' => $statuses[array_rand($statuses)], // Randomly choose a task status
                'priority' => $priorities[array_rand($priorities)], // Randomly choose task priority
            ];

            // Create the task
            Task::create($taskData);

            // Remove the used order_id to avoid duplicates in future iterations
            $orders = array_diff($orders, [$order]);
        }
    }
}
