<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    //index
    public function index()
    {
        $showAllData = Article::all();
        return $showAllData;
    }

    //store
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'creator' => 'required|string|max:255',
        ]);
        
        $article = Article::create($validatedData);

        return response()->json([
            'message' => 'Article created successfully',
            'article' => $article
        ]);
    }

    public function show(Article $article)
    {
        return response()->json(['article' => $article]);
    }

    //update
    public function update(Request $request, Article $article)
    {
        $validatedData = $request->validate([
            'title' =>'required|string|max:255',
            'content' =>'required|string',
            'creator' =>'required|string|max:255',
        ]);

        $article->update($validatedData);

        return response()->json([
        'message' => 'Article updated successfully',
        'article' => $article
        ]);
    }

    //destroy
    public function destroy(Article $article)
    {
        $article->delete();

        return response()->json([
        'message' => 'Article deleted successfully'
        ]);
    }

    //buat fungsi untuk search article
    public function searchData($keyword)
    {
        return $this->where('title', 'like', '%'. $keyword. '%')
            ->orWhere('content', 'like', '%'. $keyword. '%')
            ->orWhere('creator', 'like', '%'. $keyword. '%')
            ->get();
    }
}
