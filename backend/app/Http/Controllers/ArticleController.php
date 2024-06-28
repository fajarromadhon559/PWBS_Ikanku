<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    //index
    public function index()
    {
        $articles = Article::all();
        return response()->json([
            'status' => 'success',
            'message' => 'Article found!',
            'data' => $articles
        ]);
    }

    //store
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'nama' => 'required|string|max:255',
        ]);
        
        $article = Article::create($validatedData);

        return response()->json([
            'status' => 'success',
            'message' => 'Article created!',
            'data' => $article
        ]);
    }

    public function show(Article $article)
    {
        return response()->json(['article' => $article]);
    }

    //edit
    public function edit($id)
    {
        $article = Article::findOrFail($id);
        return response()->json([
            'status' => 'success',
            'message' => 'Article found!',
            'data' => $article
        ]);
    }

    //update
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title' =>'required|string|max:255',
            'content' =>'required|string',
            'nama' =>'required|string|max:255',
        ]);

        $article = Article::findOrFail($id);
        $article->title = $validatedData['title'];
        $article->content = $validatedData['content'];
        $article->nama = $validatedData['nama'];
        $article->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Article updated!',
            'data' => $article
        ]);
    }

    //destroy
    public function destroy($id)
    {
        $article = Article::findOrFail($id);
        $article->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Article deleted!',
        ]);
    }

    //buat fungsi untuk search article
    public function searchData($keyword)
    {
        return $this->where('title', 'like', '%'. $keyword. '%')
            ->orWhere('content', 'like', '%'. $keyword. '%')
            ->orWhere('nama', 'like', '%'. $keyword. '%')
            ->get();
    }
}
