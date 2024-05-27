<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class news extends Controller
{
    public function store(Request $request)
{
    $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
        'creator' => 'required|string|max:255',
    ]);

    News::create([
        'title' => $request->title,
        'content' => $request->content,
        'creator' => $request->creator,
    ]);

    //response

    return response()->json([
    'message' => 'News created successfully'
    ]);
}
}