"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Fish {
  id: number;
  jenis: string;
  kategori: string;
  harga: number;
  jumlah: number;
  nomor_hp_penjual: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND;

const Fishes = () => {
  const [fishes, setFishes] = useState<Fish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/fish`)
      .then((response) => {
        setFishes(response.data.data); // Extract the data array from the response
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`${apiUrl}/api/fish/${id}`);

      if (response.data.status === "success") {
        // Update state to remove the deleted article
        setFishes(fishes.filter((fish) => fish.id !== id));
        alert("Are your sure delete this submission?");
      } else {
        console.error("Failed to delete submission:", response.data.message);
        alert("Failed to delete submission!");
      }
    } catch (error) {
      console.error("Error deleting submission:", error);
      alert("Error deleting submission!");
    }
  };

  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col">
      <h1 className="text-center text-white p-4 bg-gray-500">
        LAYANAN PENJUALAN & DISTRIBUSI
      </h1>
      <div className="mt-8">
        {loading ? <p>Loading...</p> : <p>{fishes.length} fishes found</p>}
        <button className="ml-2 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center">
          <Link href="/AddFish">ADD FISH</Link>
        </button>

        <table className="w-full mt-5">
          <thead>
            <tr>
              <th className="w-1/12 border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                NO
              </th>
              <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                JENIS
              </th>
              <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                KATEGORI
              </th>
              <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                HARGA
              </th>
              <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                JUMLAH
              </th>
              <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                NOMOR HP PENJUAL
              </th>
              <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {fishes.map((fish, index) => (
              <tr key={fish.id}>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  {index + 1}
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  {fish.jenis}
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  {fish.kategori}
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  {fish.harga}
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  {fish.jumlah}
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  {fish.nomor_hp_penjual}
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  <button className="bg-sky-700 text-white px-3 py-2 rounded-md mr-1">
                    <Link href={`/editFish/${fish.id}`}>Edit</Link>
                  </button>
                  <button
                    className="bg-rose-700 text-white px-3 py-2 rounded-md ml-1"
                    onClick={() => handleDelete(fish.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fishes;
