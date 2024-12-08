<?php

namespace App\Http\Controllers;

use App\Models\VolunteerAssignment;
use App\Models\Task;
use App\Models\Volunteer;
use Illuminate\Http\Request;

class VolunteerAssignmentController extends Controller
{
    // Display a listing of the volunteer assignments
    public function index()
    {
        $assignments = VolunteerAssignment::with(['task', 'volunteer'])->get();
        return response()->json($assignments);
    }

    // Store a new volunteer assignment
    public function store(Request $request)
    {
        $request->validate([
            'task_id' => 'required|exists:tasks,task_id',
            'volunteer_id' => 'required|exists:volunteers,volunteer_id',
            'assigned_at' => 'nullable|date',
            'completed_at' => 'nullable|date',
            'status' => 'required|in:assigned,completed,canceled',
        ]);

        $assignment = VolunteerAssignment::create($request->all());
        return response()->json($assignment, 201);
    }

    // Display the specified volunteer assignment
    public function show($id)
    {
        $assignment = VolunteerAssignment::with(['task', 'volunteer'])->findOrFail($id);
        return response()->json($assignment);
    }

    // Update the specified volunteer assignment
    public function update(Request $request, $id)
    {
        $assignment = VolunteerAssignment::findOrFail($id);

        $request->validate([
            'task_id' => 'required|exists:tasks,task_id',
            'volunteer_id' => 'required|exists:volunteers,volunteer_id',
            'assigned_at' => 'nullable|date',
            'completed_at' => 'nullable|date',
            'status' => 'required|in:assigned,completed,canceled',
        ]);

        $assignment->update($request->all());
        return response()->json($assignment);
    }

    // Remove the specified volunteer assignment
    public function destroy($id)
    {
        $assignment = VolunteerAssignment::findOrFail($id);
        $assignment->delete();
        return response()->json(null, 204);
    }

    // Get all tasks
    public function getTasks()
    {
        $tasks = Task::select('id', 'name')->get();
        return response()->json($tasks, 200);
    }

    // Get all volunteers
    public function getVolunteers()
    {
        $volunteers = Volunteer::select('volunteer_id', 'volunteer_name')->get();
        return response()->json($volunteers, 200);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:assigned,completed,canceled',
        ]);
        

        $assignment = VolunteerAssignment::findOrFail($id);
        $assignment->status = $request->status;
        $assignment->save();

        return response()->json(['message' => 'Volunteer Assignment status updated successfully.']);
    }
}
