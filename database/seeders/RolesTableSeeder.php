<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define the roles you want to insert
        $roles = [
            ['name' => 'admin', 'description' => 'Manages the system with full access to all resources.'],
            ['name' => 'member', 'description' => 'Standard user with limited access.'],
            ['name' => 'caregiver', 'description' => 'Provides care and assistance to users.'],
            ['name' => 'volunteer', 'description' => 'Assists with tasks on a voluntary basis.'],
            ['name' => 'partner', 'description' => 'Partner organization involved in the project.'],
            ['name' => 'donor', 'description' => 'Donates funds or resources to the project.'],
        ];

        // Insert roles if they don't already exist
        foreach ($roles as $role) {
            DB::table('roles')->updateOrInsert(
                ['name' => $role['name']], // Check if the role name already exists
                [
                    'description' => $role['description'],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]
            );
        }
    }
}
