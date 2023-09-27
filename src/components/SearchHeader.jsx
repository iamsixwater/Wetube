import React, { useEffect, useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const handleChange = (e) => setText(e.target.value);

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link path='/' className='flex items-center'>
        <FaYoutube className='text-4xl text-logo' />
        <h1 className='font-bold ml-2 text-3xl'>Wetube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 bg-black text-gray-50 outline-none p-2'
          type='text'
          placeholder='Search'
          value={text}
          onChange={handleChange}
        />
        <button className='bg-zinc-600 px-4'>
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
