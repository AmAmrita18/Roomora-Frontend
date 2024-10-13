import React from 'react'
import Icon1 from "../../assets/images/Home/ServicesIcon1.png"
import Icon2 from "../../assets/images/Home/ServicesIcon2.png"
import Icon3 from "../../assets/images/Home/ServicesIcon3.png"
import Icon4 from "../../assets/images/Home/ServicesIcon4.png"
import arrow from "../../assets/images/Home/arrowIcon.png"
import stars from "../../assets/images/common/stars.png";

const HomeServices = () => {
    const ServicesHome = [
        {
            logoServices: Icon1,
            heading: "Find Your Dream Stay",
            arrow: arrow
        },
        {
            logoServices: Icon2,
            heading: "Unlock Hotel Value",
            arrow: arrow
        },
        {
            logoServices: Icon3,
            heading: "Effortless Hotel Management",
            arrow: arrow
        },
        {
            logoServices: Icon4,
            heading: "Smart Investments, Confident Decisions",
            arrow: arrow
        }
    ]
    return (
        <div className='w-full '>
            <div className='w-[90%] max-w-[1200px] mx-auto pt-28 '>
            <div className='pb-14'>
          <img src={stars} alt="" />
          <h1 className="custom-heading">
            Elevate Your Hotel Unforgettable Experience
          </h1>
          <p className="custom-para pt-6 pb-10 w-[80%]">
            At Roomora, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
                
                <div className='grid grid-cols-4 justify-between gap-4 border-8 border-secondryBackground p-3 rounded-xl'>
                    {ServicesHome.map((item, index) => (
                        <div key={index} className='gradientBackground py-4 px-4 rounded-xl border border-[#262626] items-center justify-center flex flex-col'>
                            <img src={item?.logoServices} alt="" />
                            <h1 className="font-[500] text-PrimaryText text-[18px] leading-[27px] text-primaryText pt-4">{item?.heading}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeServices