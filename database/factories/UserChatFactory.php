<?php

namespace Database\Factories;

use App\Models\UserChat;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserChatFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = UserChat::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => \App\Models\User::inRandomOrder()->first()->id,
            'chat_id' => \App\Models\Chat::inRandomOrder()->first()->id,
            'is_admin' => $this->faker->boolean(30)
        ];
    }
}
