<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Admin user
        $admin = User::create([
            'email' => 'admin@example.com',
            'password' => Hash::make('admin123'), // Use a strong password
            'status' => 'active', // Set the status as active
        ]);
        $admin->assignRole('admin');

        // Create a profile for the admin
        $admin->profile()->create([
            'first_name' => 'Admin',
            'last_name' => 'User',
            'age' => 30,
            'gender' => 'male',
            'address' => '123 Admin Street',
        ]);
    }
}
