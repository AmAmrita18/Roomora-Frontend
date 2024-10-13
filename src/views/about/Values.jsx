import React from "react";
import Icon1 from "../../assets/images/About/iconAbout1.png";
import Icon2 from "../../assets/images/About/iconAbout4.png";
import Icon3 from "../../assets/images/About/iconAbout3.png";
import Icon4 from "../../assets/images/About/iconAbout2.png";
import stars from "../../assets/images/common/stars.png";
import BtnPurple from "../../components/Buttons/BtnPurple";

const Values = () => {
  const ServicesHome = [
    {
      logoServices: Icon1,
      heading: "Trust",
      description: "Trust is the cornerstone of every successful real estate transaction."
    },
    {
      logoServices: Icon2,
      heading: "Excellence",
      description: "We set the bar high for ourselves. From the properties we list to the services we provide."
    },
    {
      logoServices: Icon3,
      heading: "Client-Centric",
      description: "Your dreams and needs are at the center of our universe. We listen, understand."
    },
    {
      logoServices: Icon4,
      heading: "Our Commitment",
      description: "We are dedicated to providing you with the highest level of service, professionalism, and support."
    },
  ];
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-row pt-36 gap-x-12">
        <div className="w-[30%]">
          <img src={stars} alt="" />

          <h1 className="custom-heading">Our Values</h1>
          <p className="custom-para pt-6 pb-4">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
          <p className="custom-para pb-10">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
          <BtnPurple
                  onClick={() => alert(`${item.heading} button clicked!`)}
                >
                  Visit Website{" "}
                </BtnPurple>
        </div>
        
        <div className="w-[70%]">
          <div className="grid grid-cols-2 justify-between gap-4 border-8 border-secondryBackground p-3 rounded-xl">
            {ServicesHome.map((item, index) => (
              <div
                key={index}
                className="gradientBackground py-4 px-4 rounded-xl border border-[#262626] items-center justify-center flex flex-col"
              >

                <img src={item.logoServices} alt="" />
                <h1 className="font-[500] text-PrimaryText text-[18px] leading-[27px] text-primaryText pt-4">
                  {item.heading}
                </h1>
                <p className="custom-para">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
