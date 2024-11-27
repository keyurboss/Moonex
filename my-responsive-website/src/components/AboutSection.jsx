// src/components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    // <div className='relative w-full bg-[#071624] py-20'>
    //   <h2 className='text-white text-3xl text-center mb-10'>Why MoonEX?</h2>
    //   <div className='max-w-4xl mx-auto bg-[#ffffff02] border border-[#ffffff05] backdrop-blur-[100px] rounded-[18px] p-8'>
    //     <table className='w-full text-left'>
    //       <thead>
    //         <tr>
    //           <th className='text-[#ECF1F0]'>Feature</th>
    //           <th className='text-[#ECF1F0]'>Description</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr className='border-b border-[#ffffff05]'>
    //           <td className='text-[#B6B6B6]'>Feature 1</td>
    //           <td className='text-[#B6B6B6]'>Description for feature 1.</td>
    //         </tr>
    //         <tr className='border-b border-[#ffffff05]'>
    //           <td className='text-[#B6B6B6]'>Feature 2</td>
    //           <td className='text-[#B6B6B6]'>Description for feature 2.</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    //   <div className='mt-16'>
    //     <h2 className='text-white text-3xl text-center mb-10'>Our Features</h2>
    //     <h2 className='text-white text-3xl text-center mb-10'>Our Features</h2>
    //     <div className='flex justify-around'>
    //       <div className='bg-[#ffffff02] border border-[#ffffff05] backdrop-blur-[100px] rounded-[18px] p-6 w-[296px]'>
    //         <h3 className='font-raleway font-semibold text-[#ECF1F0] text-[20px]'>
    //           Manage Portfolio
    //         </h3>
    //         <p className="font-['Roboto'] text-[#B6B6B6] text-[16px]">
    //           Buy and sell popular digital currencies, keep track of them in one
    //           place.
    //         </p>
    //       </div>
    //       <div className='bg-[#ffffff02] border border-[#ffffff05] backdrop-blur-[100px] rounded-[18px] p-6 w-[296px]'>
    //         <h3 className='font-raleway font-semibold text-[#ECF1F0] text-[20px]'>
    //           Feature 2
    //         </h3>
    //         <p className="font-['Roboto'] text-[#B6B6B6] text-[16px]">
    //           Description for feature 2.
    //         </p>
    //       </div>
    //       <div className='bg-[#ffffff02] border border-[#ffffff05] backdrop-blur-[100px] rounded-[18px] p-6 w-[296px]'>
    //         <h3 className='font-raleway font-semibold text-[#ECF1F0] text-[20px]'>
    //           Feature 3
    //         </h3>
    //         <p className="font-['Roboto'] text-[#B6B6B6] text-[16px]">
    //           Description for feature 3.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className='py-20'>
      <h2 className='text-3xl font-bold'>Why MoonEX?</h2>
      <table className='mx-auto mt-8 border border-yellow-500'>
        <thead>
          <tr>
            <th className='border border-yellow-500 px-4 py-2'>Comparison</th>
            <th className='border border-yellow-500 px-4 py-2'>Moonex</th>
            <th className='border border-yellow-500 px-4 py-2'>Uniswap</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-yellow-500 px-4 py-2'>
              1. Point no one
            </td>
            <td className='border border-yellow-500 px-4 py-2 text-center'>
              ✔
            </td>
            <td className='border border-yellow-500 px-4 py-2 text-center'>
              ✖
            </td>
          </tr>
          <tr>
            <td className='border border-yellow-500 px-4 py-2'>
              2. Point no two this
            </td>
            <td className='border border-yellow-500 px-4 py-2 text-center'>
              ✔
            </td>
            <td className='border border-yellow-500 px-4 py-2 text-center'>
              ✖
            </td>
          </tr>
          <tr>
            <td className='border border-yellow-500 px-4 py-2'>
              3. Point no two this
            </td>
            <td className='border border-yellow-500 px-4 py-2 text-center'>
              ✔
            </td>
            <td className='border border-yellow-500 px-4 py-2 text-center'>
              ✖
            </td>
          </tr>
          <tr>
            <td className='border border-yellow-500 px-4 py-2'>
              4. Point no two this
            </td>
            <td className='border border-yellow-500 px-4 py-2 text-center'>
              ✔
            </td>
            <td className='border border-yellow-500 px-4 py-2 text-center'>
              ✖
            </td>
          </tr>
          <tr>
            <td className='border border-yellow-500 px-4 py-2'>
              5. Point no two this
            </td>
            <td className='border border-yellow-500 px-4 py-2 text-center'>
              ✔
            </td>
            <td className='border border-yellow-500 px-4 py-2 text-center'>
              ✖
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AboutSection;
