import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center bg-primaryBackground  gap-4'>
        <h1 className='text-[18px] font-[500]  text-primaryText  leading-[27px] py-3'>✨Discover Your Dream Room with Roomora</h1>
        <button className='text-[18px] leading-[27px] text-primaryText underline'>Learn More</button>
    </div>
  )
}

export default Header