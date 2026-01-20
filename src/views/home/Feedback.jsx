import React, { useState } from 'react'
import BtnBlack from '../../components/Buttons/BtnBlack.jsx';
import stars from '../../assets/images/common/stars.png'
import FeedbackCard from './FeedbackCard.jsx';

const Feedback = () => {
    return (
        <div className='w-full'>
            <div className='w-[90%] max-w-[1200px] mx-auto pt-36'>
                <img src={stars} alt="" />
                <h1 className='custom-heading'>What Our Clients Say</h1>
                <div className='flex flex-row justify-between items-center'>
                    <p className='custom-para w-[80%] pt-6'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                    <BtnBlack>View all Hotels</BtnBlack>
                </div>
            </div>
            <FeedbackCard/>
        </div>
    )
}

export default Feedback
