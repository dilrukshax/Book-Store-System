import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        setBook(res.data.data); // Assuming your API response has a 'data' property
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert('Error in fetching data');
        console.log(err);
      });
  }, [id]);

  const handleDeleteBook = async () => {
    setLoading(true);

    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      setLoading(false);
      navigate('/');
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert('Error in deleting book');
    }
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      {book && (
        <div className='border-2 border-sky-400 rounded-xl p-4 mx-auto item-center'>
          <p className='text-xl text-gray-500 mb-4'>
            Are you sure you want to delete the book "{book.title}"?
          </p>
          <button className='p-2 bg-red-500 text-white' onClick={handleDeleteBook}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
