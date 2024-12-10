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

        if ($members->isEmpty()) {
            $this->command->error('No members found. Please seed members before running MemberCaregiverSeeder.');
            return;
        }

        foreach ($caregivers as $caregiver) {
            // Ensure only valid member IDs are used
            $caregiver->members()->attach(
                $members->random(rand(1, min(3, $members->count())))->pluck('member_id')->toArray()
            );
        }
    }
}
