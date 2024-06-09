'use client'
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Article {
  id: number;
  title: string;
  content: string;
  creator: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND;

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('${apiUrl}/api/articles')
      .then(response => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col">
        <h1 className='text-center text-white p-4 bg-gray-500'>LAYANAN INFORMASI & ARTIKEL</h1>
      <div className='mt-8'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <p>Creator: {article.creator}</p>
            </li>
          ))}
        </ul>
      )}
      <button className="ml-2 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center">
        <Link href="/addArticle">ADD ARTICLE</Link>
      </button>

      <table className="w-full mt-5">
        <thead>
          <tr>
            <th className="w-1/12 border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
              NO
            </th>
            <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
              TITTLE
            </th>
            <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
              CONTENT
            </th>
            <th className="w-1/12 border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
              CREATOR
            </th>
            <th className="w-auto border-2 border-slate-300 bg-blue-400 text-white h-10 text-center">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
              1
            </td>
            <td  className="border-2 border-slate-300 bg-white text-black h-8 text-center">
              Examp Article
            </td>
            <td  className="border-2 border-slate-300 bg-white text-black h-8 text-center">
              Example UI view article list
            </td>
            <td  className="border-2 border-slate-300 bg-white text-black h-8 text-center">
              Fajar Romadhon
            </td>
            <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  <button className="bg-sky-700 text-white px-3 py-2 rounded-md mr-1">
                    Edit
                  </button>
                  <button className="bg-rose-700 text-white px-3 py-2 rounded-md ml-1">
                    Delete
                  </button>
                </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Articles;