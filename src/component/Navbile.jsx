import React from 'react';
import { motion } from 'framer-motion';

const Navbile = ({ onClose }) => {
  return (
    <motion.div
      className='fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50'
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.3 }}
    >
      
      <button
        onClick={onClose}
        className='absolute top-5 right-5 text-green-500 text-2xl'
      >
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          ></path>
        </svg>
      </button>

      {/* Navigation links */}
      <ul className='flex flex-col items-center gap-8 text-white text-lg'>
        <li>
          <a
            href='index.html'
            className='hover:text-green-500 transition-colors duration-200 ease-in-out'
            onClick={onClose}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#about'
            className=' scroll-smooth hover:text-green-500 transition-colors duration-200 ease-in-out'
            onClick={onClose}
          >
            About us
          </a>
        </li>
        <li>
          <a
            href='#Skills'
            className='hover:text-green-500 transition-colors duration-200 ease-in-out'
            onClick={onClose}
          >
            Programs
          </a>
        </li>
        <li>
          <a
            href='#'
            className='hover:text-green-500 transition-colors duration-200 ease-in-out'
            onClick={onClose}
          >
            Contact us
          </a>
        </li>
        <li>
          <a
            href='#'
            className='border-2 border-green-500 rounded-md px-4 py-2 hover:bg-green-500 hover:text-white transition-colors duration-200 ease-in-out'
            onClick={onClose}
          >
            Enroll now
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbile;
