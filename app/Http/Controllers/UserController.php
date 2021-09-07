<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $limit = request('limit', 15);
        $search_mask = request('mask', '%');

        return User::where('username', 'LIKE', $search_mask)
            ->paginate($limit);
    }

    public function single(Request $request, $user)
    {
        return User::with(['posts', 'relation_status', 'gender'])
            ->whereId($user)
            ->get();
    }

    public function chats(Request $request, $user)
    {
        $limit = request('limit', 15);
        $search_mask = request('mask', '%');

        return Chat::query()
            ->whereHas('users', fn ($q) => $q->where('users.id', $user))
            ->paginate($limit);
    }
}
