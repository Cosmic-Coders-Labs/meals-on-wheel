<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\Order; // Import the Order model
use App\Models\Volunteer; // Import the Volunteer model
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

        // Get existing orders and volunteers from the database
        $orders = Order::all()->pluck('order_id')->toArray();
        $volunteers = Volunteer::all()->pluck('volunteer_id')->toArray();

        // Ensure there are enough orders to assign tasks
        if (count($orders) == 0) {
            echo "No orders available to assign tasks.\n";
            return;
        }

        foreach ($orders as $order) {
            // Randomly assign a volunteer_id to each task from the available volunteers
            $volunteerId = $volunteers[array_rand($volunteers)];

            // Prepare task data
            $taskData = [
                'order_id' => $order, // Use the current order's ID
                'volunteer_id' => $volunteerId, // Assign a random volunteer's ID
                'status' => $statuses[array_rand($statuses)], // Randomly choose a task status
                'priority' => $priorities[array_rand($priorities)], // Randomly choose task priority
                'assigned_at' => (rand(0, 1) == 1) ? now()->subHours(rand(1, 12)) : null, // Randomly assign an assigned_at time
                'completed_at' => (rand(0, 1) == 1) ? now()->subHours(rand(1, 12)) : null, // Randomly assign a completed_at time
            ];

            // Create the task
            Task::create($taskData);

            // Remove the used order_id to avoid duplicates in future iterations
            $orders = array_diff($orders, [$order]);
        }
    }
}
