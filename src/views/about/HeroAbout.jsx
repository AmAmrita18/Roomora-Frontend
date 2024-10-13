import React from 'react'
import BtnBlack from '../../components/Buttons/BtnBlack.jsx';
import BtnPurple from '../../components/Buttons/BtnPurple.jsx';
import heroAboutImg from '../../assets/images/Home/heroHomeBuiding.png'

const HeroAbout = () => {
    const heroHomeDataSales = [
        {
            heading: "200+",
            subheading: "Happy Customers."
        },
        {
            heading: "10k+",
            subheading: "Properties For Clients"
        },
        {
            heading: "16+",
            subheading: "Years Of Experience"
        }
    ];

    return (
        <div className='w-full bg-gradient-to-r from-backgroundDark from-30% via-backgroundDark via-70% to-[#2A213F] to-90% ...'>
            <div className='w-[90%] h-full mx-auto max-w-[1200px] py-28 flex flex-row'>
                <div className='w-[50%]'>
                    <h1 className='custom-heading'>Our Journey</h1>
                    <p className='custom-para pt-6 pb-10'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
                   
                    <div className="flex flex-row gap-4">
                        {heroHomeDataSales.map((item, index) => (
                            <div key={index} className="flex flex-col gradientBackground shadow-xl rounded-lg py-2 px-2 mt-10 border border-borderCol it">
                                <h3 className="custom-heading">{item.heading}</h3>
                                <p className="custom-para">{item.subheading}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='w-[50%]'>
                    <img src={heroAboutImg} alt=""  className="animate-slide-in w-[550px] h-[450px]"/>
                </div>
            </div>
        </div>
    )
}

export default HeroAbout