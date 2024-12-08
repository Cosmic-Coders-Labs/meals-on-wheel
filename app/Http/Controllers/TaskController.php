<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    // Display a listing of the tasks
    public function index()
    {
        $tasks = Task::all();
        return response()->json($tasks);
    }

    // Store a newly created task
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'nullable|string',
            'order_id' => 'nullable|exists:orders,id',
            'status' => 'required|in:available,assigned,completed',
            'priority' => 'required|in:low,medium,high',
        ]);

        $task = Task::create($request->all());
        return response()->json($task, 201);
    }

    // Display the specified task
    public function show($id)
    {
        $task = Task::findOrFail($id);
        return response()->json($task);
    }

    // Update the specified task
    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);

        $request->validate([
            'status' => 'required|in:available,assigned,completed',
            'priority' => 'required|in:low,medium,high',
        ]);

        $task->update($request->all());
        return response()->json($task);
    }

    // Remove the specified task
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return response()->json(null, 204);
    }
}
