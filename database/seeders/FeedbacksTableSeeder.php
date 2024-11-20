<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FeedbacksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('feedbacks')->insert([
            [
                'FeedbackID' => 1,
                'FeedbackText' => 'Amazing service, very professional!',
                'Rating' => 5,
                'FeedbackDate' => now()->subDays(7),
                'MemberID' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'FeedbackID' => 2,
                'FeedbackText' => 'Good experience, but could improve punctuality.',
                'Rating' => 4,
                'FeedbackDate' => now()->subDays(15),
                'MemberID' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
