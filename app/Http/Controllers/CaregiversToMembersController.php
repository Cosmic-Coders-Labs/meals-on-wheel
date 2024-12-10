<?php

namespace App\Http\Controllers;

use App\Models\CaregiversToMembers;
use App\Models\Caregiver;
use App\Models\Member;
use Illuminate\Http\Request;

class CaregiversToMembersController extends Controller
{
    // Fetch all entries with relationships
    public function index()
    {
        $data = CaregiversToMembers::with(['caregiver', 'member'])->get();
        
        return response()->json([
            'success' => true,
            'data' => $data,
        ], 200);
    }

    // Fetch a single entry by ID
    public function show($id)
    {
        $entry = CaregiversToMembers::with(['caregiver', 'member'])->find($id);

        if (!$entry) {
            return response()->json([
                'success' => false,
                'message' => 'Entry not found.',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $entry,
        ], 200);
    }

    public function showByCaregiverId($caregiverId)
    {
        // Query for all rows with the same caregiver_id
        $entries = CaregiversToMembers::where('caregiver_id', $caregiverId)
        ->with(['member.user.profile']) // Explicitly load member's user profile
            ->get();

        if ($entries->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No entries found for this caregiver.',
            ], 404);
        }

        // Format the data to include member names
        $formattedEntries = $entries->map(function ($entry) {
            return [
                'id' => $entry->id,
                'caregiver_id' => $entry->caregiver_id,
                'member_name' => $entry->member->user->profile->first_name . ' ' . $entry->member->user->profile->last_name,
                'eligibility' => $entry->eligibility,
                'needs' => $entry->needs,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $formattedEntries,
        ], 200);
    }


    // Create a new entry
    public function store(Request $request)
    {
        $validatedData = $request->validate(CaregiversToMembers::validationRules());

        $caregiversToMembers = CaregiversToMembers::create($validatedData);

        return response()->json([
            'success' => true,
            'message' => 'Record created successfully.',
            'data' => $caregiversToMembers,
        ], 201);
    }

    // Update an existing entry
    public function update(Request $request, $id)
    {
        $entry = CaregiversToMembers::find($id);

        if (!$entry) {
            return response()->json([
                'success' => false,
                'message' => 'Entry not found.',
            ], 404);
        }

        $validatedData = $request->validate(CaregiversToMembers::validationRules());

        $entry->update($validatedData);

        return response()->json([
            'success' => true,
            'message' => 'Record updated successfully.',
            'data' => $entry,
        ], 200);
    }

    // Delete an existing entry
    public function destroy($id)
    {
        $entry = CaregiversToMembers::find($id);

        if (!$entry) {
            return response()->json([
                'success' => false,
                'message' => 'Entry not found.',
            ], 404);
        }

        $entry->delete();

        return response()->json([
            'success' => true,
            'message' => 'Record deleted successfully.',
        ], 200);
    }
}
