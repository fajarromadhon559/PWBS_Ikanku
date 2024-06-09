'use client'
import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../components/Footer';

interface Article {
  id: number;
  title: string;
  content: string;
  creator: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND;

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [creator, setCreator] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('creator', creator);

    axios.post('${apiUrl}/api/articles', formData)
      .then(response => {
        console.log(response.data);
        // Add the new article to the list
        // (you can also refresh the page or navigate to a new route)
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  return (
    <div>
    <div className="bg-gray-100 w-screen h-screen flex flex-col">
      <h2 className="text-2xl font-bold mb-5">Add New Article</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tittle">
          Title:
          <input type="text" value={title} onChange={event => setTitle(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required />
        </label>
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Content:
          <textarea value={content} onChange={event => setContent(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required/>
        </label>
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creator">
          Creator:
          <input type="text" value={creator} onChange={event => setCreator(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required/>
        </label>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Article</button>
      </form>
    </div>
      <Footer />
    </div>
  );
};

export default AddArticle;