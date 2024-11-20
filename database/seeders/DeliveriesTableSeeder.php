<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeliveriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('deliveries')->insert([
            [
                'DeliveryID' => 1,
                'DeliveryDate' => now()->subDays(3),
                'DeliveryStatus' => 'Completed',
                'MemberID' => 1,
                'VolunteerID' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'DeliveryID' => 2,
                'DeliveryDate' => now()->subDays(5),
                'DeliveryStatus' => 'Pending',
                'MemberID' => 2,
                'VolunteerID' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
