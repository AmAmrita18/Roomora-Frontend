import React from "react";
import Icon1 from "../../assets/images/Home/ServicesIcon1.png";
import Icon2 from "../../assets/images/Home/ServicesIcon2.png";
import Icon3 from "../../assets/images/Home/ServicesIcon3.png";
import Icon4 from "../../assets/images/Home/ServicesIcon4.png";
import arrow from "../../assets/images/Home/arrowIcon.png";
import stars from "../../assets/images/common/stars.png";
import ContactUsForm from "../../components/Forms/ContactUsForm";

const GetInTouch = () => {
  const ServicesHome = [
    {
      logoServices: Icon1,
      heading: "info@roomora.com",
      arrow: arrow,
    },
    {
      logoServices: Icon2,
      heading: "+91 XXXXXX4340",
      arrow: arrow,
    },
    {
      logoServices: Icon3,
      heading: "Facebook - LinkedIn - Twitter",
      arrow: arrow,
    },
    
  ];
  return (
    <div className="w-full ">
      <div className="w-[90%] max-w-[1200px] mx-auto py-28 ">
        <div className="pb-14">
          <img src={stars} alt="" />

          <h1 className="custom-heading ">How Can We Assist You? Contact Us!</h1>
          <p className="custom-para pt-6 pb-10 w-[80%]">
            At Roomora, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>

        <div className="grid grid-cols-3 justify-between gap-4 border-8  border-secondryBackground p-3 rounded-xl">
          {ServicesHome.map((item, index) => (
            <div
              key={index}
              className="gradientBackground py-4 px-4 rounded-xl border border-[#262626] items-center justify-center flex flex-col"
            >
              <img src={item?.logoServices} alt="" />
              <h1 className="font-[500] text-PrimaryText text-[18px] leading-[27px] text-primaryText pt-4">
                {item?.heading}
              </h1>
            </div>
          ))}
        </div>
        <ContactUsForm/>
      </div>
    </div>
  );
};

export default GetInTouch;
