<?php

namespace Database\Seeders;

use App\Http\Controllers\RoleController;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            ['name' => 'admin', 'description' => 'Manages the system with full access to all resources.'],
            ['name' => 'member', 'description' => 'Receives services or benefits from the system.'],
            ['name' => 'caregiver', 'description' => 'Provides direct support to members.'],
            ['name' => 'volunteer', 'description' => 'Assists the organization by donating time and skills.'],
            ['name' => 'partner', 'description' => 'Collaborates with the organization to provide resources or services.'],
            ['name' => 'donor', 'description' => 'Contributes funds or resources to support the organization.'],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
