<?php

namespace Database\Seeders;

use App\Models\User;
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
            CaregiversTableSeeder::class,
            VolunteersTableSeeder::class,
            DonorsTableSeeder::class,
            MembersTableSeeder::class,
            FeedbacksTableSeeder::class,
            PartnersTableSeeder::class,
            MealsTableSeeder::class,
            MenusTableSeeder::class,
            DeliveriesTableSeeder::class,
        ]);
    }
}
