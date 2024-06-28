"use client";
// EditArticle.tsx

import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND;

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [nama, setNama] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = useParams<{ id: string }>(); // Mengambil ID dari URL
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/article/${id}/edit`);
        setArticle(response.data.data); // Mengambil data artikel dari response
        setTitle(response.data.data.title); // Mengambil title artikel dari response
        setContent(response.data.data.content); // Mengambil content artikel dari response
        setNama(response.data.data.nama); // Mengambil creator artikel dari response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("Failed to fetch article");
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.put(`${apiUrl}/api/article/${id}`, {
        title,
        content,
        nama,
      });

      if (response.data.status === "success") {
        router.push("/articles"); // Redirect ke halaman utama setelah berhasil menyimpan perubahan
      } else {
        setError("Failed to update article");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while updating article");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>; // Menampilkan pesan Loading jika data masih dimuat

  // Memastikan article tidak null sebelum mengakses propertinya
  if (!article) return <p>Loading...</p>;

  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col items-center">
      <h1 className="text-center text-white p-4 bg-gray-500 w-full">
        Edit Article
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 mt-8 rounded shadow-md w-1/2"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content:
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={5}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Creator:
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? "Updating..." : "Update Article"}
          </button>
          <Link
            href="/articles"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Back to Articles
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditArticle;
