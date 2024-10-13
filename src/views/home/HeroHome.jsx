import React from 'react'
import BtnBlack from '../../components/Buttons/BtnBlack.jsx';
import BtnPurple from '../../components/Buttons/BtnPurple.jsx';
// import heroHomeImg from '../../assets/images/Home/heroHomeBuiding.png'
import heroHomeImg from '/image2.png'

const HeroHome = () => {
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
            <div className='w-[90%] h-full mx-auto max-w-[1200px] py-28 flex flex-row gap-x-10'>
                <div className='w-[50%]'>
                    <h1 className='hero-heading'>Experience Your Dream Getaway with Roomora</h1>
                    <p className='custom-para pt-6 pb-10'>Your journey to the perfect room begins here. Explore our listings to find the stay that matches your dreams where every room radiates a positive aura..</p>
                    <div className='flex flex-row'>
                        <div className='flex gap-x-4'>
                            <BtnBlack onClick={() => alert(`${item.heading} button clicked!`)}>Book Now</BtnBlack>
                            <BtnPurple onClick={() => alert(`${item.heading} button clicked!`)}>Browse Properties</BtnPurple>
                        </div>
                    </div>
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
                    <img src={heroHomeImg} alt=""  className="animate-slide-in w-[700px] h-[600px]"/>
                </div>
            </div>
        </div>
    )
}

export default HeroHome