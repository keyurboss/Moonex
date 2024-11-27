import React from 'react';

const Navbar = () => {
  return (
    // <nav className='absolute w-full h-18 top-0 left-0 flex items-center justify-between bg-transparent px-8 py-4'>
    //   <div className='flex items-center'>
    //     <div className="w-48 h-18 bg-[url('logo.png')] bg-cover"></div>
    //     <div className='flex space-x-6 ml-8'>
    //       <a href='#' className='font-raleway font-bold text-white'>
    //         Home
    //       </a>
    //       <a href='#' className='font-raleway font-bold text-white'>
    //         About Us
    //       </a>
    //       <a href='#' className='font-raleway font-bold text-white'>
    //         Roadmap
    //       </a>
    //       <a href='#' className='font-raleway font-bold text-white'>
    //         FAQs
    //       </a>
    //       <a href='#' className='font-raleway font-bold text-white'>
    //         Contact Us
    //       </a>
    //     </div>
    //   </div>
    //   <button className='bg-gradient-to-r from-[#E4B40D] to-[#FBD966] rounded-full px-6 py-2 font-raleway font-bold text-black'>
    //     Connect Wallet
    //   </button>
    // </nav>
    <header className='absolute z-30 w-full h-20 bg-transparent top-0 left-0 flex justify-between items-center mb-4 px-12 pt-8'>
      <div className='w-48 h-20'>
        <img src='logo.png' className=' w-full h-full bg-contain'></img>
      </div>
      <nav className='space-x-12'>
        <a
          href='#'
          className='hover:text-yellow-500 font-raleway font-bold text-white'
        >
          Home
        </a>
        <a
          href='#'
          className='hover:text-yellow-500 font-raleway font-bold text-white'
        >
          About Us
        </a>
        <a
          href='#'
          className='hover:text-yellow-500 font-raleway font-bold text-white'
        >
          Roadmap
        </a>
        <a
          href='#'
          className='hover:text-yellow-500 font-raleway font-bold text-white'
        >
          FAQs
        </a>
        <a
          href='#'
          className='hover:text-yellow-500 font-raleway font-bold text-white'
        >
          Contact Us
        </a>
      </nav>
      <button className='bg-gradient-to-r from-[#E4B40D] to-[#FBD966] rounded-full px-6 py-2 font-raleway font-bold text-black'>
        Connect Wallet
      </button>
    </header>
  );
};

export default Navbar;
