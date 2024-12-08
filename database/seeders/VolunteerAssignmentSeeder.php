<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\Volunteer;
use App\Models\VolunteerAssignment;
use Illuminate\Database\Seeder;

class VolunteerAssignmentSeeder extends Seeder
{
    public function run(): void
    {
        // Get all tasks and volunteers
        $tasks = Task::all();
        $volunteers = Volunteer::all();

        if ($tasks->isEmpty() || $volunteers->isEmpty()) {
            echo "No tasks or volunteers available for assignments.\n";
            return;
        }

        // Define valid statuses based on database schema
        $statuses = ['assigned', 'completed', 'canceled'];

        foreach ($tasks as $task) {
            // Randomly assign a volunteer
            $volunteer = $volunteers->random();

            // Insert assignment with valid data
            VolunteerAssignment::create([
                'task_id' => $task->task_id,
                'volunteer_id' => $volunteer->volunteer_id,
                'assigned_at' => now(),
                'completed_at' => null, // Adjust if necessary
                'status' => $statuses[array_rand($statuses)], // Ensure valid status
            ]);
        }
    }
}
