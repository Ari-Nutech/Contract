import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='w-full shadow'>
      <div className='n-container flex justify-between items-center gap-10 py-4'>
        <Link to={'/'}>
          <img src='/img/HorizontalLogoNegative.png' alt='' className='h-10' />
        </Link>
        <div className='flex justify-end items-center gap-10'>
          <Link to="/auth/signin">
            <button className='text-[#2633ED] font-medium text-lg'>Sign In</button>
          </Link>
          <Link to="/auth/signup">
            <button className='text-[#2633ED] font-medium text-lg'>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
