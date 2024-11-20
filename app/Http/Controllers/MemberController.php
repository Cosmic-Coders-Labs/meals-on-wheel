<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function index()
    {
        return Member::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'Name' => 'required|string|max:100',
            'Age' => 'required|integer',
            'Address' => 'required|string|max:255',
            'Phone' => 'required|string|max:15',
            'DietaryRequirements' => 'nullable|string',
            'RegistrationDate' => 'required|date',
            'CaregiverID' => 'required|exists:caregivers,CaregiverID',
        ]);

        return Member::create($validated);
    }

    public function show($id)
    {
        return Member::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $member = Member::findOrFail($id);
        $member->update($request->all());
        return $member;
    }

    public function destroy($id)
    {
        Member::destroy($id);
        return response()->noContent();
    }
}
