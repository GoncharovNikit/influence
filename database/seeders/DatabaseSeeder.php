<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            RelationStatusSeeder::class,
            GenderSeeder::class,
            ChatSeeder::class,
            UserSeeder::class,
            SubscriptionSeeder::class,
            PostSeeder::class,
            MessageSeeder::class,
            UserChatSeeder::class,
            LikeSeeder::class,
            CommentSeeder::class,
        ]);
    }
}
