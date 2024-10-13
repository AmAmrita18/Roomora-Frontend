import React from "react";
import stars from "../../assets/images/common/stars.png";

const Achievement = () => {
  const achievementList = [
    {
      title: "3+ Years of Excellence",
      description:
        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
    },
    {
      title: "Happy Clients",
      description:
        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
    },
    {
      title: "Industry Recognition",
      description:
        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
    },
  ];
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto pt-36">
        <div>
          <img src={stars} alt="" />
          <h1 className="custom-heading">Our Achievements</h1>
          <p className="custom-para pt-6 pb-10 w-[80%]">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {achievementList.map((item, index) => (
            <div key={index} className="cardsStyling  cursor-pointer transition-all duration-700 ease-in-out  hover:scale-95 flex flex-col">
              <h1 className="cards-heading pt-4">{item.title}</h1>
              <p className="custom-para py-6">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
