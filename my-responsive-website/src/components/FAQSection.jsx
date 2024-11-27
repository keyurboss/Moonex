import React, { useState } from 'react';

const FAQs = [
  {
    question: 'How do I get a Referral Code?',
    answer: 'When you login to the site',
  },
  {
    question: 'Do I get rewarded in tokens or ETH when I refer buyers?',
    answer:
      'You receive your rewards in ETH instantly once someone you refer makes a transaction! When you login to the site',
  },
  {
    question: 'How do I get a Referral Code?',
    answer: 'When you login to the site',
  },
];

const FAQSection = () => {
  const [faqs, setFaqs] = useState(
    FAQs.map((faq) => ({ ...faq, isOpen: false }))
  );

  const toggleFAQ = (index) => {
    console.log('Button clicked');
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className='w-full h-auto py-20 bg-[#071624]'>
      <img
        src='FAQbg.png'
        className='absolute w-full h-full rotate-180 z-0 '
      ></img>
      <div className='z-1 bg-transparent h-full bg-[#BBBBBB1A] border border-[#BBBBBB1A] backdrop-blur-[100px] rounded-[10px] flex justify-center flex-col mx-40 my-8 pb-4'>
        <h1 className='bg-transparent font-raleway text-3xl text-center mt-4 pb-4 text-yellow-500 font-bold border-b border-[#BBBBBB1A]'>
          FAQs
        </h1>
        <div className='flex flex-col justify-center items-center'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='w-full  py-4 px-8 border-b border-[#BBBBBB1A] flex justify-between items-center'
            >
              <div className='text-start'>
                <h2 className='font-raleway text-[#ECF1F0] pb-4'>
                  {faq.question}
                </h2>
                <p
                  className="font-['Roboto'] text-[#B6B6B6]"
                  style={{ display: faq.isOpen ? 'block' : 'none' }}
                >
                  {faq.answer}
                </p>
              </div>
              <div className='w-8 h-8 relative'>
                <button
                  type='button'
                  className='absolute w-8 h-full rounded-full p-0 left-0 right-0 bg-[#BBBBBB1A]'
                  onClick={() => toggleFAQ(index)}
                >
                  {' '}
                  <img
                    src={faq.isOpen ? 'closeFAQ.png' : 'openFAQ.png'}
                    className='z-1 w-full h-full relative'
                  ></img>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
