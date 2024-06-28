import Link from 'next/link';
import React from 'react';

const SecondHeader: React.FC = () => {
  return (
    <div className="bg-white shadow-md p-4">
      <h2 className="text-center text-2xl font-semibold mb-4">MANFAATKAN LAYANAN ONLINE KAMI</h2>
      <div className="flex justify-center items-center border-t-2 border-b-2 border-black py-2">
        <div className="flex-grow border-t border-black"></div>
        <div className="px-4"><i className="fas fa-info-circle text-xl"></i></div>
        <div className="flex-grow border-t border-black"></div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/articles" className="text-center p-4 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 transition-colors">
            <p className="font-bold">LAYANAN INFORMASI & PENGETAHUAN</p>
            <p>(Habitat, Pangan, Kesehatan)</p>
        </Link>
        <Link href="/fishes" className="text-center p-4 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
            <p className="font-bold">LAYANAN PENJUALAN & DISTRIBUSI</p>
            <p>(Form Penjualan)</p>
        </Link>
      </div>
    </div>
  )
}

export default SecondHeader