"use client";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappLink = `https://wa.me/62895601754236?text=${encodeURIComponent(
      `Nama: ${name}\nNomor HP: ${phone}\nPesan: ${message}`
    )}`;
    window.location.href = whatsappLink;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">Hubungi Kami</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nama
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pesan
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nomor WhatsApp
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Kirim Pesan via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Contact;
