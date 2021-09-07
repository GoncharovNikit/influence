<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SubscriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Subscription::factory()->count(10)->create();
    }
}
