<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;

class NewsController extends Controller
{
    //store
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'creator' => 'required|string|max:255',
        ]);

        $news = News::create($validatedData);

        return response()->json([
            'message' => 'News created successfully',
            'news' => $news
        ]);
    }

    public function show(News $news)
    {
        return response()->json(['news' => $news]);
    }

    public function update(Request $request, News $news)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'creator' => 'required|string|max:255',
        ]);

        $news->update($validatedData);

        return response()->json([
            'message' => 'News updated successfully',
            'news' => $news
        ]);
    }

    public function destroy(News $news)
    {
        $news->delete();
        return response()->json(['message' => 'News deleted successfully']);
    }
}