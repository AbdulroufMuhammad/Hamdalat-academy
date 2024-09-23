import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg';
import Navbile from './Navbile'; 

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className='relative flex justify-between items-center p-5 '>
        {/* Logo Section */}
        <div>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            src={logo}
            width={100}
            height={120}
            alt='logo'
            className='border-2 border-green-500 rounded-md'
          />
        </div>

        {/* Desktop Menu */}
        <div className='hidden mr-10 md:flex gap-60 items-center'>
        <ul className='flex mr-28 gap-8 text-lg'>
  <li className='relative cursor-pointer group'>
    <a 
      href="/" 
      className='text-green-600 transition-colors duration-200 ease-in-out relative'
    >
      Home
      <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100' />
    </a>
  </li>
  <li className='relative cursor-pointer group'>
    <a 
      href="#about" 
      className='text-green-600 transition-colors duration-200 ease-in-out relative'
    >
      About us
      <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100' />
    </a>
  </li>
  <li className='relative cursor-pointer group'>
    <a 
      href="#skills" 
      className='text-green-600 transition-colors duration-200 ease-in-out relative'
    >
      Programs
      <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100' />
    </a>
  </li>
</ul>


          <motion.button
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
            className='border-2 border-green-500 rounded-md w-28 h-10 text-green-500 hover:bg-green-500 hover:text-white transition mt-9'
          >
            <a href="https://wa.link/1plt8n">Enroll now</a>
            
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden flex items-center'>
          <motion.button
            initial={{ x: 200 }}
            animate={{ x: -25 }}
            onClick={toggleNav}
            className='fixed right-5 top-5 w-10 h-10 flex items-center justify-center focus:outline-none'
          >
            <div className='ml-10'>
              {/* Hamburger Icon */}
              <motion.div
                className={`w-6 h-0.5   bg-black my-1 transition-transform duration-300 ${
                  isNavOpen ? 'rotate-[42deg] translate-y-2' : ''
                }`}
                initial={{ opacity: 1 }}
                animate={{ opacity: isNavOpen ? 0 : 1 }}
              />
              <motion.div
                className={`w-6 h-0.5 bg-black my-1 transition-transform duration-300 ${
                  isNavOpen ? 'opacity-0' : ''
                }`}
                initial={{ opacity: 1 }}
              />
              <motion.div
                className={`w-6 h-0.5 bg-black my-1 transition-transform duration-300 ${
                  isNavOpen ? '-rotate-[44deg] -translate-y-1' : ''
                }`}
                initial={{ opacity: 1 }}
                animate={{ opacity: isNavOpen ? 0 : 1 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center'>
          <Navbile onClose={toggleNav} />
        </div>
      )}
    </>
  );
};

export default Navbar;
