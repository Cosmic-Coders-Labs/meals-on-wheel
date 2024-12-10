<?php
namespace App\Http\Controllers;

use App\Models\Member;
use GuzzleHttp\Psr7\Request;

class MemberController extends Controller
{
    protected $model = Member::class;

    public function index()
    {
        // Retrieve members with their related user and profile data
        $members = Member::with(['users.profile'])->get();

        // Format the response to include profile data with first_name and last_name
        $formattedMembers = $members->map(function ($member) {
            return [
                'member_id' => $member->member_id,
                'eligebility' => $member->eligebility,
                'needs' => $member->needs,
                'allergies' => $member->allergies,
                'user_id' => $member->user_id,
                'created_at' => $member->created_at,
                'updated_at' => $member->updated_at,
                'user' => [
                    'id' => $member->users->id,
                    'email' => $member->users->email,
                    'profile' => $member->users->profile ? [
                        'first_name' => $member->users->profile->first_name,
                        'last_name' => $member->users->profile->last_name,
                    ] : null
                ]
            ];
        });

        return response()->json($formattedMembers, 200);
    }


    public function count()
    {
        $data = Member::count();
        return response()->json(json_decode($data), 200);
    }

    /**
     * Store a new resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate(Member::validationRules());
        $record = Member::create($validatedData);
        return response()->json(json_decode($record), 201);
    }

    /**
     * Show a single resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $record = Member::with('caregivers')->find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        return response()->json(json_decode($record), 200);
    }

    /**
     * Update a resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $record = Member::find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        $validatedData = $request->validate(Member::validationRules());
        $record->update($validatedData);
        return response()->json(json_decode($record), 200);
    }

    /**
     * Delete a resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $record = Member::find($id);
        if (!$record) {
            return response()->json(['error' => 'Resource not found'], 404);
        }
        $record->delete();
        return response()->json(null, 204);  // No content
    }

}
