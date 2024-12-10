<?php

namespace Database\Seeders;

use App\Models\Donation;
use App\Models\Donor;
use Illuminate\Database\Seeder;

class DonationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define donation data
        $donations = [
            [
                'donor_id' => 1, // Existing donor ID
                'currency' => 'USD',
                'amount' => 500.00,
                'message' => 'Keep up the good work!',
                'status' => 'completed',
            ],
            [
                'donor_id' => 2,
                'currency' => 'EUR',
                'amount' => 200.00,
                'message' => 'Thanks for everything!',
                'status' => 'pending',
            ],
            [
                'donor_id' => 3,
                'currency' => 'GBP',
                'amount' => 150.00,
                'message' => 'For a good cause!',
                'status' => 'completed',
            ],
            [
                'donor_id' => 4,
                'currency' => 'USD',
                'amount' => 1000.00,
                'message' => 'Happy to contribute!',
                'status' => 'completed',
            ],
            // Add more donation entries here
        ];

        // Create donations and associate them with donors
        foreach ($donations as $data) {
            Donation::create([
                'donor_id' => $data['donor_id'],
                'currency' => $data['currency'],
                'amount' => $data['amount'],
                'message' => $data['message'],
                'status' => $data['status'],
            ]);
        }
    }
}
