import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div className='relative w-full h-screen bg-[#071624] p-0 mt-[533px] '>
      <img
        src='heroMainBg.png'
        className='absolute z-0 w-full h-full object-fill'
      ></img>
      <img
        src='heroBg.png'
        className='absolute z-10 w-full h-full object-fill'
      ></img>
      {/* <Navbar /> */}
      {/* <div className='w-full h-full bg-[#071624] opacity-50'></div>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className="font-['Neue Machina'] text-white text-[75px] leading-[72px]">
          Trusted Multi-Chain DEX Platform
        </h1>
        <p className="font-['Roboto'] text-[#9E9E9E] text-[25px] leading-[34px] text-center">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX.
        </p>
      </div>
      <div className='absolute w-full h-full flex items-center justify-center'>
        <div className='bg-[#EDD955] blur-[200px] w-[675px] h-[314px] absolute left-[780px] top-[372px]'></div>
        <div className='bg-[#EDD955] blur-[200px] w-[675px] h-[314px] absolute left-[-278px] top-[74px]'></div>
      </div> */}
    </div>
  );
};

export default HeroSection;
