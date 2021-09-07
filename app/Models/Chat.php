<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;
    public $timestamps = false;

    public function getIsDirectAttribute()
    {
        return $this->title === null;
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
