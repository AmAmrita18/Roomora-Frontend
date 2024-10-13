import React from "react";
import stars from "../../assets/images/common/stars.png";

const Experience = () => {
  const RoomoraExperience = [
    {
      serialNo: "Step 01",
      title: "Discover a World of Possibilities",
      description:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
    {
      serialNo: "Step 02",
      title: "Discover a World of Possibilities",
      description:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
    {
      serialNo: "Step 03",
      title: "Discover a World of Possibilities",
      description:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
    {
      serialNo: "Step 04",
      title: "Discover a World of Possibilities",
      description:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
    {
      serialNo: "Step 05",
      title: "Discover a World of Possibilities",
      description:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
    {
      serialNo: "Step 06",
      title: "Discover a World of Possibilities",
      description:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto pt-36">
        <div className="">
          <img src={stars} alt="" />
          <h1 className=" custom-heading">Navigating the Roomora Experience</h1>
          <p className="custom-para pt-6 pb-10 w-[80%]">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
        <div
          className="grid grid-cols-3 gap-x-6 gap-y-12 pt-10"
        >
          {RoomoraExperience.map((items, index) => (
            <div key={index} className="shadow-2xl">
              <h1 className="font-[500] px-6 py-4 text-[20px] leading-[30px] text-primaryText border-l mr-3 border-[#2A213F]">{items.serialNo}</h1>
              <div className="border-l border-t border-[#2A213F] bg-clip-border p-6 rounded-r-xl bg-gradient-to-r from-backgroundDark from-30% via-backgroundDark via-70% to-[#2A213F] to-95% ... ">
                <h1 className="cards-heading">{items.title}</h1>
                <p className="custom-para pt-4">{items.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;


// border-4 border-transparent bg-clip-border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500