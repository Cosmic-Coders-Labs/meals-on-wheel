<?php

namespace Database\Seeders;

use App\Models\Caregiver;
use App\Models\Member;
use Illuminate\Database\Seeder;

class MemberCaregiverSeeder extends Seeder
{
    public function run(): void
    {
        $caregivers = Caregiver::all();
        $members = Member::all();

        if ($caregivers->isEmpty() || $members->isEmpty()) {
            $this->command->error('Caregivers or Members table is empty. Please seed caregivers and members first.');
            return;
        }

        foreach ($members as $member) {
            // Assign one random caregiver to each member
            $caregiver = $caregivers->random();

            // Attach the member to the caregiver in the pivot table
            $member->caregivers()->attach($caregiver->caregiver_id);
        }
    }
}
