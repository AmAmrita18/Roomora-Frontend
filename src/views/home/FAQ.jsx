import React from 'react'
import stars from '../../assets/images/common/stars.png'
import BtnBlack from '../../components/Buttons/BtnBlack.jsx';
import FAQCard from './FAQCard.jsx';

const FAQ = () => {
  return (
    <div className='w-full '>
      <div className=''>
        <div className='w-[90%] max-w-[1200px] mx-auto pt-36'>
          <img src={stars} alt="" />
          <h1 className='custom-heading'>Frequently Asked Questions</h1>
          <div className='flex flex-row justify-between items-center'>
            <p className='custom-para w-[80%] pt-6'>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
            <BtnBlack>View All FAQ’s</BtnBlack>
          </div>
        </div>
        <FAQCard/>
      </div>
      
    </div>
  )
}

export default FAQ