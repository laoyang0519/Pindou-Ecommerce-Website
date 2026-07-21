<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Create or Update Admin Account
        User::updateOrCreate(
            ['username' => 'admin'],
            [
                'name' => '呼啦 Admin',
                'email' => 'hullaaaa167@gmail.com',
                'email_verified_at' => now(),
                'password' => Hash::make('Hulla123!'),
                'role' => 'admin',
            ]
        );

        // Create or Update Customer Account
        User::updateOrCreate(
            ['username' => 'craftlover'],
            [
                'name' => 'Jane Doe',
                'email' => 'customer@gmail.com',
                'email_verified_at' => now(),
                'password' => Hash::make('Customer123!'),
                'role' => 'customer',
            ]
        );

        $this->call([
            CategorySeeder::class,
            ProductSeeder::class,
        ]);
    }
}
