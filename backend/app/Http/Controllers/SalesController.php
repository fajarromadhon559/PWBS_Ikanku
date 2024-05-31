<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sales;
class SalesController extends Controller
{
    // fungsi create data
    public function createData(Request $request)
    {
        $sales = new Sales;
        $sales->nama = $request->nama;
        $sales->no_telp = $request->no_telp;
        $sales->alamat = $request->alamat;
        $sales->kota = $request->kota;
        $sales->kode_pos = $request->kode_pos;
        $sales->jumlah_barang = $request->jumlah_barang;
        $sales->harga_barang = $request->harga_barang;
        $sales->total_harga = $request->total_harga;
        $sales->status_pembayaran = $request->status_pembayaran;
        $sales->status_pengiriman = $request->status_pengiriman;
        $sales->save();

        return redirect('/sales')->with('success', 'Data berhasil ditambahkan');
    }

    // fungsi update data
    public function updateData(Request $request, $id)
    {
        $sales = Sales::find($id);
        $sales->nama = $request->nama;
        $sales->no_telp = $request->no_telp;
        $sales->alamat = $request->alamat;
        $sales->kota = $request->kota;
        $sales->kode_pos = $request->kode_pos;
        $sales->jumlah_barang = $request->jumlah_barang;
        $sales->harga_barang = $request->harga_barang;
        $sales->total_harga = $request->total_harga;
        $sales->status_pembayaran = $request->status_pembayaran;
        $sales->status_pengiriman = $request->status_pengiriman;
        $sales->save();

        return redirect('/sales')->with('success', 'Data berhasil diupdate');
    }

    // fungsi delete data
    public function deleteData($id)
    {
        $sales = Sales::find($id);
        $sales->delete();

        return redirect('/sales')->with('success', 'Data berhasil dihapus');
    }

    // fungsi search data
    public function searchData(Request $request)
    {
        $keyword = $request->keyword;
        $sales = Sales::where('nama', 'like', '%'. $keyword. '%')
            ->orWhere('no_telp', 'like', '%'. $keyword. '%')
            ->orWhere('alamat', 'like', '%'. $keyword. '%')
            ->orWhere('kota', 'like', '%'. $keyword. '%')
            ->orWhere('kode_pos', 'like', '%'. $keyword. '%')
            ->get();

        return view('sales.index', compact('sales', 'keyword'));
    }

    // fungsi view data
    public function viewData($id)
    {
        $sales = Sales::find($id);

        return view('sales.view', compact('sales'));
    }

    // fungsi get all data
    public function getAllData()
    {
        $sales = Sales::all();

        return view('sales.index', compact('sales'));
    }
}
