import React from "react";
import stars from "../../assets/images/common/stars.png";

const Experience = () => {
  const RoomoraExperience = [
    {
      serialNo: "Step 01",
      title: "Discover the Perfect Hotel",
      description:
        "Your journey begins with exploring our carefully curated hotel listings. Use our intuitive search tools to filter hotels based on your preferences, including location, type, amenities, and price range.",
    },
    {
      serialNo: "Step 02",
      title: "Comprehensive Hotel Insights",
      description:
        "Gain in-depth insights into each hotel. Explore room types, guest reviews, hotel facilities, and nearby attractions to make an informed choice for your stay.",
    },
    {
      serialNo: "Step 03",
      title: "Select the Ideal Room",
      description:
        "Browse through various room options at each hotel. Use filters like room size, bed type, and availability to select the perfect room for your comfort and budget.",
    },
    {
      serialNo: "Step 04",
      title: "Easily Customize Your Stay",
      description:
        "Personalize your stay with options like special requests, additional services, or dining preferences. Make your experience unique and tailored to your needs.",
    },
    {
      serialNo: "Step 05",
      title: "Confirm Your Booking",
      description:
        "Finalize your reservation through our secure payment gateway. Enjoy a smooth booking experience, ensuring peace of mind and a hassle-free confirmation process.",
    },
    {
      serialNo: "Step 06",
      title: "Experience a Memorable Stay",
      description:
        "Your stay begins with a seamless check-in process. Enjoy exceptional service, comfort, and luxury throughout your time at the hotel, making your stay truly unforgettable.",
    },
  ];
  

  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto">
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


