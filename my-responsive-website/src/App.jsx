import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='w-[100%] h-[100%] m-0 p-0 '>
        <Navbar />
        <HeroSection />
        {/* <AboutSection /> */}
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
