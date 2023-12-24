import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackBUtton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
        <Link to={destination} className='flex items-center'>
            <BsArrowLeft className='text-sky-800 text-4xl hover:text-sky-700' />
            <span>Back</span>
        </Link>
    </div>
  )
}

export default BackBUtton