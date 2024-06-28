'use client';
// pages/editFish/[id].tsx
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND;

const EditFish = () => {
  const [jenis, setJenis] = useState('');
  const [kategori, setKategori] = useState('');
  const [harga, setHarga] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [nomorHpPenjual, setNomorHpPenjual] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { id } = useParams<{ id: string }>(); // Mengambil ID dari URL
  const [fish, setFish] = useState<any>(null);

  useEffect(() => {
    const fetchFish = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/fish/${id}/edit`);
        setFish(response.data.data[0]); // Mengambil data ikan dari response
        setJenis(response.data.data[0].jenis); // Mengambil jenis ikan dari response
        setKategori(response.data.data[0].kategori); // Mengambil kategori ikan dari response
        setHarga(response.data.data[0].harga); // Mengambil harga ikan dari response
        setJumlah(response.data.data[0].jumlah); // Mengambil jumlah ikan dari response
        setNomorHpPenjual(response.data.data[0].nomor_hp_penjual); // Mengambil nomor hp penjual dari response
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching fish:', error);
        setError('Failed to fetch fish');
        setLoading(false);
      }
    };

    if (id) {
      fetchFish();
    }
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.put(`${apiUrl}/api/fish/${id}`, {
        jenis,
        kategori,
        harga: parseInt(harga),
        jumlah: parseInt(jumlah),
        nomor_hp_penjual: nomorHpPenjual
      });

      if (response.data.status === 'success') {
        router.push('/fishes'); // Redirect ke halaman utama setelah berhasil menyimpan perubahan
      } else {
        setError('Gagal menyimpan perubahan ikan');
      }
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat menyimpan perubahan ikan');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>; // Menampilkan pesan Loading jika data masih dimuat

  // Memastikan fish tidak null sebelum mengakses propertinya
  if (!fish) return <p>Loading...</p>;

  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col items-center">
      <h1 className="text-center text-white p-4 bg-gray-500 w-full">EDIT IKAN</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 mt-8 rounded shadow-md w-1/2">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Jenis</label>
          <input
            type="text"
            value={jenis || fish.jenis}
            onChange={(e) => setJenis(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Kategori</label>
          <input
            type="text"
            value={kategori || fish.kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Harga</label>
          <input
            type="number"
            value={harga || fish.harga}
            onChange={(e) => setHarga(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Jumlah</label>
          <input
            type="number"
            value={jumlah || fish.jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nomor HP Penjual</label>
          <input
            type="text"
            value={nomorHpPenjual || fish.nomor_hp_penjual}
            onChange={(e) => setNomorHpPenjual(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
        {error && <p className="text-red-500 text-xs italic">{error}</p>}

          {/* jika tidak error tampilkan tombol */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditFish;
