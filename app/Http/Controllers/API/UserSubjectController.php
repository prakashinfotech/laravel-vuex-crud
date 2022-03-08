<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserSubject;
use Illuminate\Http\Request;

class UserSubjectController extends Controller
{
    public function index()
    {
        $subjects = UserSubject::with(['subject'])->where('user_id', auth()->user()->id)->get()->toArray();
        return response()->json(array_reverse($subjects));
    }
}
