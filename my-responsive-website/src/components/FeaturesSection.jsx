import React from 'react';

const features = [
  {
    title: 'Manage Portfolio',
    description:
      'Buy and sell popular digital currencies, keep track of them in one place.',
  },
  {
    title: 'Feature 2',
    description: 'Description for feature 2.',
  },
  {
    title: 'Feature 3',
    description: 'Description for feature 3.',
  },
];

const FeaturesSection = () => {
  return (
    <div className='relative w-full bg-[#071624] py-20'>
      <h2 className='text-white text-3xl text-center mb-10'>Our Features</h2>
      <div className='flex justify-around'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='bg-[#ffffff02] border border-[#ffffff05] backdrop-blur-[100px] rounded-[18px] p-6 w-[296px]'
          >
            <h3 className='font-raleway font-semibold text-[#ECF1F0] text-[20px]'>
              {feature.title}
            </h3>
            <p className="font-['Roboto'] text-[#B6B6B6] text-[16px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
