import React from "react";
import stars from "../../assets/images/common/stars.png";

const HeroProperties = () => {
  return (
    <div className="w-full bg-secondryBackground">
      <div className="w-[90%] max-w-[1200px] mx-auto pt-24 pb-12">
        <div>
          <img src={stars} alt="" />
          <h1 className="custom-heading">Find Your Dream Stay </h1>
          <p className="custom-para pt-6 pb-10 w-[80%]">
            At Roomora, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroProperties;
