import React, {useState, useEffect} from "react";
import bgImage from "/bg.jpg"
import stars from "../../assets/images/common/stars.png";
import PropertiesCard from "./PropertiesCard";

const PropertiesSection = () => {
 

  return (

    <div className="w-full bg-gradient-to-r from-backgroundDark from-30% via-backgroundDark via-70% to-[#2A213F] to-90% ...">
      <div className="w-[90%] max-w-[1200px] mx-auto pt-10 pb-10">
      <div className=" flex justify-center items-center flex-col"
      // style={{
      //   backgroundImage: `url('${bgImage}')`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   objectFit: "cover",
      //   backgroundPosition:"center"
      // }}
      >
          <div>
          <img src={stars} alt="" />
          <h1 className='custom-heading'>Find Your Dream Stay</h1>
          </div>
          <p className="custom-para pt-6 pb-10 text-center w-[80%]">
            At Roomora, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
       
        
        <PropertiesCard/>
      </div>
    </div>

    
  );
};

export default PropertiesSection;
