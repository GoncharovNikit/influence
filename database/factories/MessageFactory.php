<?php

namespace Database\Factories;

use App\Models\Message;
use Illuminate\Database\Eloquent\Factories\Factory;

class MessageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Message::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'chat_id' => \App\Models\Chat::inRandomOrder()->first()->id,
            'user_id' => \App\Models\User::inRandomOrder()->first()->id,
            'message' => $this->faker->paragraph(1)
        ];
    }
}
