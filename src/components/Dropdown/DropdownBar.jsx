import React from "react";
import DropdownList from "./DropdownList";
import { FaLocationDot } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa";
import { MdBedroomChild } from "react-icons/md";
import { RiPriceTag2Fill } from "react-icons/ri";

const DropdownBar = () => {
  const dropdownsData = [
    {
      icon: <FaLocationDot />,
      label: "Location",
      options: [
        "Glamorous Makeover",
        "Skincare Treatment",
        "Hairstyling Session",
        "Bridal Makeup",
      ],
    },
    {
      icon: <FaHotel />,
      label: "Hotel Type",
      options: [
        "Bridal Grace",
        "Glam and Glow",
        "Cut and Curls",
        "Hair Colour",
        "Beauty Facial",
        "Meni-Pedi",
        "Waxing",
        "Cleanup",
        "Mehandi",
        "Threading",
      ],
    },
    {
      icon: <MdBedroomChild />,
      label: "Room Type",
      options: ["Classic", "Trendy", "Natural", "Glamorous"],
    },
    {
      icon: <RiPriceTag2Fill />,
      label: "Pricing Range",
      options: [
        "Rs 0 - Rs 2,000",
        "Rs 2,000 - Rs 5,000",
        "Rs 5,000 - Rs 10,000",
        "Rs 10,000 - Rs 20,000",
      ],
    },
  ];

  return (
    <div className=" gradientBackground border border-borderCol p-2 rounded-xl flex items-center justify-center">
      <DropdownList dropdowns={dropdownsData} />
    </div>
  );
};

export default DropdownBar;
