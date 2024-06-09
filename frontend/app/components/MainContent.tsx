import Link from 'next/link';
import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="bg-white shadow-md p-8 my-8 rounded-md max-w-7xl mx-auto">
    <div className="flex items-center">
    <img className="mb-5 img-fluid lazyloaded" src="\images\logo.png" alt="Logo" />
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">IKANKU</h2>
        <p className="mb-4">
          <strong>IKANKU</strong> Merupakan situs web yang menyediakan informasi tentang budidaya
          ikan yang berfokus pada berbagai jenis usaha, mulai dari budidaya ikan konsumsi hingga
          budidaya ikan hias dan skala komersial. Di sini, pengguna dapat menemukan panduan lengkap 
          tentang menjaga kesehatan ikan, informasi tentang habitat ikan,serta proses distribusi
          ikan ke pasar swalayan dan pasar modern. Situs ini menjadi sumber daya terpercaya bagi para 
          pelaku usaha di bidang perikanan, dengan menyajikan informasi yang relevan, diperbarui, dan mudah dipahami.
        </p>
        <p>
        Ikanku menyediakan informasi yang komprehensif dan praktis, membantu peternak ikan dalam 
        membuat keputusan yang lebih baik untuk meningkatkan produktivitas dan keberhasilan usaha 
        budidaya ikan mereka. Dengan fokus pada kualitas, kesegaran, dan keberlanjutan, Ikanku menjadi
        mitra ideal bagi mereka yang ingin meraih sukses dalam bisnis budidaya ikan.
        </p>
      </div>
    </div>
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Artikel Terbaru</h3>
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <Link href="/artikel/koordinasi-terkait-sertifikat" className="text-blue-600">
            EXAMP ARTICLE
        </Link>
        <p className="text-sm text-gray-600">05/06/2024 08:58 WIB</p>
        <Link href="/artikel" className="text-blue-500 mt-4 inline-block">
          Lihat semua artikel
        </Link>
      </div>
    </div>
  </div>
  )
}

export default MainContent