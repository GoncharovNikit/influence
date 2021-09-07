<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserChatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\UserChat::factory()->count(10)->create();
    }
}
