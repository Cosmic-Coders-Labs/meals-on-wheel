<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartnersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('partners')->insert([
            [
                'Name' => 'Acme Corp',
                'ContactPerson' => 'John Doe',
                'Phone' => '1234567890',
                'Email' => 'johndoe@acme.com',
                'Address' => '123 Acme St, Suite 400, New York, NY',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'Name' => 'Global Solutions',
                'ContactPerson' => 'Jane Smith',
                'Phone' => '0987654321',
                'Email' => 'janesmith@globalsolutions.com',
                'Address' => '456 Global Ave, London, UK',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'Name' => 'Tech Innovations',
                'ContactPerson' => 'Mike Johnson',
                'Phone' => '1122334455',
                'Email' => 'mike@techinnovations.com',
                'Address' => '789 Innovation Rd, San Francisco, CA',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more partners as needed
        ]);
    }
}
