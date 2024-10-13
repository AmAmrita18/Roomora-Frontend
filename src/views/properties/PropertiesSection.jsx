import React, {useState, useEffect} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import DropdownBar from "../../components/Dropdown/DropdownBar";
import stars from "../../assets/images/common/stars.png";
import PropertiesCard from "./PropertiesCard";

const PropertiesSection = () => {
 

  return (

    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto pt-16 pb-16">
      <div className=" flex justify-center items-center flex-col">
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
        <SearchBar />
        <DropdownBar />
        
        {/* <PropertiesDetails estate={estate}/> */}
        <PropertiesCard/>
      </div>
    </div>

    
  );
};

export default PropertiesSection;
