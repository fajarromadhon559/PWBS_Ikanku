'use client'

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND;

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [nama, setNama] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${apiUrl}/api/article`, {
        title,
        content,
        nama,
      });

      if (response.data.status === 'success') {
        // Optionally, you can redirect to another page or clear form fields
        console.log('Article added successfully:', response.data);
        // Clear form fields after successful submission
        setTitle('');
        setContent('');
        setNama('');
        // alihkan ke halaman
        router.push('/articles');
      } else {
        setError('Gagal membuat data artikel');
      }
    } catch (error) {
      setError('Terjadi kesalahan saat membuat data artikel');
      console.error('Error adding article:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col items-center">
      <h1 className='text-center text-white p-4 bg-gray-500 w-full'>Add New Article</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 mt-8 rounded shadow-md w-1/2">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={5}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Creator:</label>
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
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Article'}
          </button>
          <Link href="/articles" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Back to Articles
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
