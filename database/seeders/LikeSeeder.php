<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class LikeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Like::factory()->count(80)->create();
    }
}
