import React from 'react'
import BtnPurple from '../../components/Buttons/BtnPurple.jsx';
import stars from '../../assets/images/common/stars.png'
const Cta = () => {
  return (
    <div className='w-full'
   
    >     
        <div className='w-[90%] max-w-[1200px] mx-auto py-36'>
          <img src={stars} alt="" />
          <h1 className='custom-heading'>Start Your Real Estate Journey Today</h1>
          <div className='flex flex-row justify-between items-center'>
            <p className='custom-para w-[80%] pt-6'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
            <BtnPurple>Explore Properties</BtnPurple>
          </div>
        </div>
        
    </div>
  )
}

export default Cta