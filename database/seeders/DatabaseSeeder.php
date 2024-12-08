<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RolesTableSeeder::class,
            UserRolesSeeder::class,
            CaregiverSeeder::class,
            PartnerSeeder::class,
            VolunteerSeeder::class,
            MemberSeeder::class,
            DonorSeeder::class,
            MemberCaregiverSeeder::class,
            DonationSeeder::class,
            MealsSeeder::class,
            MenuSeeder::class,
            OrderSeeder::class,
            TaskSeeder::class,
            MealsOrderSeeder::class,
            VolunteerAssignmentSeeder::class,
        ]);
    }
}
