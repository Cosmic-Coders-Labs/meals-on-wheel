<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends BaseController
{
    protected $model = Task::class;
    // Fetch available tasks with optional priority filter
    public function availableTasks(Request $request)
    {
        $query = Task::with(['order', 'order.member', 'order.caregiver', 'order.meal', 'order.member.user.profile'])->where('status', 'available');

        if ($request->has('priority')) {
            $query->where('priority', $request->priority);
        }
        $tasks = $query->get();

        if ($tasks->isEmpty()) {
            return response()->json([
                'message' => 'No available tasks found',
            ], 404);
        }
        return response()->json($tasks, 200);
    }
}
