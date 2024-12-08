<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::with(['order', 'volunteer'])->get();
        return response()->json($tasks);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'order_id' => 'required|exists:orders,order_id',
            'volunteer_id' => 'nullable|exists:volunteers,volunteer_id',
            'status' => 'in:available,assigned,completed',
            'priority' => 'in:low,medium,high',
        ]);

        $task = Task::create($validated);
        return response()->json($task, 201);
    }

    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $validated = $request->validate([
            'status' => 'in:available,assigned,completed',
            'priority' => 'in:low,medium,high',
            'assigned_at' => 'nullable|date',
            'completed_at' => 'nullable|date',
        ]);

        $task->update($validated);
        return response()->json($task);
    }

    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }
}
