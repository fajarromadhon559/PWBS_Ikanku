'use client'
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Article {
  id: number;
  title: string;
  content: string;
  nama: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND;

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${apiUrl}/api/article`)
      .then(response => {
        setArticles(response.data.data); // Ubah setArticles dengan response.data.data
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`${apiUrl}/api/article/${id}`);
  
      if (response.data.status === 'success') {
        // Update state to remove the deleted article
        setArticles(articles.filter(article => article.id!== id));
        alert('Are your sure delete this article?');
      } else {
        console.error('Failed to delete article:', response.data.message);
        alert('Failed to delete article!');
      }
    } catch (error) {
      console.error('Error deleting article:', error);
      alert('Error deleting article!');
    }
  };

  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col">
      <div className='bg-gray-500'>
      <h1 className='text-center text-white p-4'>LAYANAN INFORMASI & ARTIKEL</h1>
      </div>
      <div className='p-4'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p className='p-4'>{articles.length} articles found</p>
        )}
        <button className="ml-2 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center shadow-md">
          <Link href="/addArticle">ADD ARTICLE</Link>
        </button>

        <div className='mx-auto p-4 mt-4 bg-white rounded-md shadow-md'>
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-1/12 border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                NO
              </th>
              <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                TITLE
              </th>
              <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                CONTENT
              </th>
              <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                CREATOR
              </th>
              <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={article.id}>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  {index + 1}
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  {article.title}
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  {article.content}
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  {article.nama}
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  <button className="bg-sky-700 text-white px-3 py-2 rounded-md mr-1">
                    <Link href={`/editArticle/${article.id}`}>Edit</Link>
                  </button>
                  <button
                    className="bg-rose-700 text-white px-3 py-2 rounded-md ml-1"
                    onClick={() => handleDelete(article.id)}
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
    </div>
  );
};

export default Articles;