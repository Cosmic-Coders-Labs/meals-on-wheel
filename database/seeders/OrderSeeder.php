<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Meal;
use App\Models\Member;
use App\Models\Caregiver;
use App\Models\CaregiversToMembers;
use App\Models\CaregiverToMember; // Import CaregiverToMember model
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get existing meals and members from the database
        $meals = Meal::all()->pluck('meal_id')->toArray();
        $members = Member::all()->pluck('member_id')->toArray();

        // Sample order data
        $orderStatuses = ['pending', 'in-progress', 'delivered', 'cancelled'];
        $rejectionReasons = ['Member unavailable', 'Address not found', 'Insufficient payment', 'Weather issues', null];

        // Generate random orders
        for ($i = 0; $i < 20; $i++) {
            // Select a random member
            $memberId = $members[array_rand($members)];

            // Get the caregiver_id associated with the selected member
            $caregiver = CaregiversToMembers::where('member_id', $memberId)->first(); // Get the first caregiver for the member
            $caregiverId = $caregiver ? $caregiver->caregiver_id : null; // If caregiver exists, use the caregiver_id, else set to null

            $status = $orderStatuses[array_rand($orderStatuses)];

            // Set rejection reason only if status is "cancelled"
            $rejectionReason = $status === 'cancelled'
            ? $rejectionReasons[array_rand($rejectionReasons)]
            : null;

            $orderData = [
                'meal_id' => $meals[array_rand($meals)], // Randomly choose a meal_id
                'member_id' => $memberId, // Use the selected member_id
                'caregiver_id' => $caregiverId, // Use the associated caregiver_id
                'status' => $status, // Randomly choose an order status
                'total_price' => rand(15, 30) + (rand(0, 99) / 100), // Random total price
                'order_date' => now()->subDays(rand(0, 10)), // Random order date within the last 10 days
                'delivery_date' => now()->addDays(rand(1, 3)), // Random delivery date within the next 3 days
                'special_instructions' => $this->getRandomSpecialInstructions(), // Random special instructions
                'rejection_reason' => $rejectionReason,
            ];

            Order::create($orderData);
        }
    }

    /**
     * Get random special instructions.
     *
     * @return string|null
     */
    private function getRandomSpecialInstructions(): ?string
    {
        $instructions = [
            'Leave at the front door.',
            'Ring the doorbell.',
            'Knock on the side door.',
            'Leave by the gate.',
            'Deliver to the back entrance.',
            'Use side entrance.',
            'Call on arrival.',
            'Contact member before delivery.',
            'Keep warm.',
            null,
        ];

        return $instructions[array_rand($instructions)];
    }
}
