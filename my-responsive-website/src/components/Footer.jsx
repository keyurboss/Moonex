import React from 'react';

const Footer = () => {
  return (
    <footer className='absolute w-full h-[319px] bg-[#051422] flex items-center justify-between px-20'>
      <div className="w-40 h-40 bg-[url('footerLogo.png')] bg-cover mt-4"></div>
      <div className='flex space-x-8 mt-4'>
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
      </div>
      <div className='text-white text-center '>
        <h3 className='font-raleway font-bold text-2xl flex '>
          Contact <p className='text-yellow-500 pl-2'>Us</p>
        </h3>
        <div className='flex mt-2 justify-between h-6 items-center'>
          <div className='w-5 h-5'>
            <img
              src='telegram.png'
              alt=''
              className='w-full h-full object-contain'
            />
          </div>
          <div className='w-6 h-5'>
            <img
              src='vector.png'
              alt=''
              className='w-full h-full object-contain'
            />
          </div>
          <div className='w-5 h-5'>
            <img
              src='twitter.png'
              alt=''
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
