import React, { useContext, useState } from "react";
import DropdownList from "./DropdownList";
import { FaHotel } from "react-icons/fa";
import { MdBedroomChild } from "react-icons/md";
import { RiPriceTag2Fill } from "react-icons/ri";
import constants from "../../utils/constants";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const DropdownBar = ({ handleGetHotels }) => {
  const {selectedFilters, setSelectedFilters} = useContext(AuthContext)

  const handleFilterChange = (filterKey, selectedValue) => {
    const updatedFilters = { ...selectedFilters, [filterKey]: selectedValue };
    const {hotel_type, room_type } = updatedFilters
    console.log({updatedFilters})
    setSelectedFilters(updatedFilters);
    
    handleGetHotels();
  };

  const dropdownsData = [
    {
      key: "hotel_type",
      icon: <FaHotel />,
      label: "Hotel Type",
      options: constants.hotel_types,
    },
    {
      key: "roomType",
      icon: <MdBedroomChild />,
      label: "Room Type",
      options: constants.room_types,
    },
    {
      key: "priceRange",
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
      <DropdownList dropdowns={dropdownsData} onFilterChange={handleFilterChange} />
    </div>
  );
};

export default DropdownBar;
