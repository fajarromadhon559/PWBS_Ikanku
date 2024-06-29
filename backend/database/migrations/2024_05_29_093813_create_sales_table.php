<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sales', function (Blueprint $table) {
            // $table->id();

            // // buat field id
            $table->integer('id')->autoIncrement();

            // // buat field nama
            $table->string('nama', 100);

            // // buat field no_telp
            $table->string('no_telp', 15);

            // // buat field alamat
            $table->string('alamat', 100);

            // // buat field kota
            $table->string('kota', 100);

            // // buat field kode_pos
            $table->string('kode_pos', 8);

            // // buat field jumlah_barang
            $table->integer('jumlah_barang');

            // // buat field harga_barang
            $table->integer('harga_barang');

            // // buat field total_harga
            $table->integer('total_harga');

            // // buat field status_pembayaran
            $table->string('status_pembayaran');

            // // buat field status_pengiriman
            $table->string('status_pengiriman');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};