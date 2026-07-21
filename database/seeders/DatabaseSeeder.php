<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Create Admin Account
        User::create([
            'username' => 'admin',
            'name' => 'Hulla Admin',
            'email' => 'admin@hullapindou.com',
            'email_verified_at' => now(),
            'password' => Hash::make('Admin123!'),
            'role' => 'admin',
        ]);

        // Create Customer Account
        User::create([
            'username' => 'craftlover',
            'name' => 'Jane Doe',
            'email' => 'customer@hullapindou.com',
            'email_verified_at' => now(),
            'password' => Hash::make('Customer123!'),
            'role' => 'customer',
        ]);

        $this->call([
            CategorySeeder::class,
            ProductSeeder::class,
        ]);
    }
}
