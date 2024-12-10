<?php
namespace App\Http\Controllers;

use App\Models\Member;

class MemberController extends BaseController
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
}
