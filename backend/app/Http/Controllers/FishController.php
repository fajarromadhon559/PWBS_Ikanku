<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fish;


class FishController extends Controller
{
    public function index()
    {
        // /json ada success dan message nya
        $fish = Fish::all();
        return response()->json([
            'status' => 'success',
            'message' => 'Fish found!',
            'data' => $fish
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fish = new Fish();
        $fish->jenis = $request->jenis;
        $fish->kategori = $request->kategori;
        $fish->harga = $request->harga;
        $fish->jumlah = $request->jumlah;
        $fish->nomor_hp_penjual = $request->nomor_hp_penjual;
        $fish->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Fish created!',
            'data' => $fish
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Fish $fish)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Fish $fish)
    {
        $fish = Fish::find($fish);
        return response()->json([
            'status' => 'success',
            'message' => 'Fish found!',
            'data' => $fish
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // validasi
        $this->validate($request, [
            'jenis' => 'required',
            'kategori' => 'required',
            'harga' => 'required',
            'jumlah' => 'required',
            'nomor_hp_penjual' => 'required'
        ]);
        $fish = Fish::where('id', $id)->first();
        $fish->jenis = $request->jenis;
        $fish->kategori = $request->kategori;
        $fish->harga = $request->harga;
        $fish->jumlah = $request->jumlah;
        $fish->nomor_hp_penjual = $request->nomor_hp_penjual;
        $fish->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Fish updated!',
            'data' => $fish
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $fish = Fish::find($id);
        $fish->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Fish deleted!',
            'data' => $fish
        ]);
    }
}
