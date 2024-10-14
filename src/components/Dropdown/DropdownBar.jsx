import React, { useState } from "react";
import DropdownList from "./DropdownList";
import { FaLocationDot } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa";
import { MdBedroomChild } from "react-icons/md";
import { RiPriceTag2Fill } from "react-icons/ri";
import constants from "../../utils/constants";

const DropdownBar = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (index, option) => {
    const updatedFilters = { ...selectedFilters, [index]: option };
    setSelectedFilters(updatedFilters);
    console.log("Selected Filters:", updatedFilters);
    // Apply further logic based on selected filters here
  };

  const dropdownsData = [
    {
      icon: <FaLocationDot />,
      label: "Location",
      options: constants.locations || [],
    },
    {
      icon: <FaHotel />,
      label: "Hotel Type",
      options: constants.hotel_types,
    },
    {
      icon: <MdBedroomChild />,
      label: "Room Type",
      options: constants.room_types,
    },
    {
      icon: <RiPriceTag2Fill />,
      label: "Pricing Range",
      options: [
        { value: "0-2000", label: "Rs 0 - Rs 2,000" },
        { value: "2000-5000", label: "Rs 2,000 - Rs 5,000" },
        { value: "5000-10000", label: "Rs 5,000 - Rs 10,000" },
        { value: "10000-20000", label: "Rs 10,000 - Rs 20,000" },
      ],
    },
  ];

  return (
    <div className="gradientBackground border border-borderCol p-2 rounded-xl flex items-center justify-center">
      <DropdownList dropdowns={dropdownsData} onSelectFilter={handleFilterChange} />
    </div>
  );
};

export default DropdownBar;
