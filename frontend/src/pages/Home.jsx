import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';
import BookTable from '../components/home/BookTable';
import BooksCard from '../components/home/BooksCard';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');


  useEffect(() => {
    setLoading(true);

    axios.get('http://localhost:5000/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <button
          className='bg-sky-800 text-white px-4 py-2 rounded-md hover:bg-sky-700'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-800 text-white px-4 py-2 rounded-md hover:bg-sky-700'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
        
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books</h1>
        <Link to='/books/create' >
          <MdOutlineAddBox className='text-sky-800 text-4xl hover:text-sky-700' />
          <span>Add Book</span>
        </Link>
      </div>
      {loading ? <Spinner /> : showType === 'table' ? <BookTable books={books} /> : <BooksCard books={books} />}
    </div>
  );
}

export default Home;
