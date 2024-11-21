import React from 'react';
import BtnBlack from '../../components/Buttons/BtnBlack.jsx';
import BtnPurple from '../../components/Buttons/BtnPurple.jsx';
import heroHomeImg from '/image2.png';

const HeroHome = () => {
  const heroHomeDataSales = [
    {
      heading: '200+',
      subheading: 'Happy Customers.',
    },
    {
      heading: '10k+',
      subheading: 'Properties For Clients',
    },
    {
      heading: '16+',
      subheading: 'Years Of Experience',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-backgroundDark from-30% via-backgroundDark via-70% to-[#2A213F] to-90% ...">
      <div className="w-[90%] h-full mx-auto max-w-[1200px] py-28 flex flex-col-reverse lg:flex-row gap-x-10">
        {/* Text and buttons */}
        <div className="w-full lg:w-[50%]">
          <h1 className="hero-heading text-[28px] sm:text-[32px] lg:text-[48px]">
            Experience Your Dream Getaway with Roomora
          </h1>
          <p className="custom-para pt-6 pb-10 text-[14px] sm:text-[16px] lg:text-[18px]">
            Your journey to the perfect room begins here. Explore our listings
            to find the stay that matches your dreams where every room radiates
            a positive aura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BtnBlack>Book Now</BtnBlack>
            <BtnPurple>Browse Properties</BtnPurple>
          </div>
          <div className="flex flex-col sm:flex-row lg:gap-4">
            {heroHomeDataSales.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gradientBackground shadow-xl rounded-lg py-4 px-4 mt-10 border border-borderCol text-center sm:text-left"
              >
                <h3 className="custom-heading text-[24px]">{item.heading}</h3>
                <p className="custom-para text-[14px] sm:text-[16px]">
                  {item.subheading}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
          <img
            src={heroHomeImg}
            alt="Hero Home"
            className="animate-slide-in w-[90%] sm:w-[500px] lg:w-[700px] lg:h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
