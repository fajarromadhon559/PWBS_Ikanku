'use client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND;

const AddFish = () => {
  const [jenis, setJenis] = useState('');
  const [kategori, setKategori] = useState('');
  const [harga, setHarga] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [nomorHpPenjual, setNomorHpPenjual] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  useEffect(() => {
    const getCsrfToken = async () => {
      try {
        await axios.get(`${apiUrl}/sanctum/csrf-cookie`);
      } catch (err) {
        console.error('Error getting CSRF token:', err);
      }
    };
    getCsrfToken();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    

    try {
      const response = await axios.post(`${apiUrl}/api/fish`, {
        method: 'POST',
        jenis,
        kategori,
        harga: parseInt(harga),
        jumlah: parseInt(jumlah),
        nomor_hp_penjual: nomorHpPenjual
      });

      if (response.data.status === 'success') {
        router.push('/fishes'); // Redirect ke halaman utama setelah berhasil menambahkan data ikan
      } else {
        setError('Gagal membuat data ikan');
      }
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat membuat data ikan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col items-center">
      <h1 className='text-center text-white p-4 bg-gray-500 w-full'>TAMBAH IKAN</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 mt-8 rounded shadow-md w-1/2">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Jenis</label>
          <input
            type="text"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Kategori</label>
          <input
            type="text"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Harga</label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Jumlah</label>
          <input
            type="number"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nomor HP Penjual</label>
          <input
            type="text"
            value={nomorHpPenjual}
            onChange={(e) => setNomorHpPenjual(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Tambah Ikan'}
          </button>
          <Link href="/fishes" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Kembali
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddFish;
