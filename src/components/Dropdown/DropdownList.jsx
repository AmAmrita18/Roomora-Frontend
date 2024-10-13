// src/components/DropdownList.jsx

import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

// Dynamic DropdownList Component
const DropdownList = ({ dropdowns = [] }) => {  // Default value if dropdowns is undefined
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle function to open/close dropdowns based on index
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="w-full h-full gap-2 max-w-[1200px] flex md:flex-row flex-col">
        {dropdowns.length > 0 ? (
          dropdowns.map((dropdown, index) => (
            <div
              key={index}
              className="w-full bg-backgroundDark  rounded-xl"
            >
              <button
                onClick={() => toggleDropdown(index)}
                className="bg-backgroundDark rounded-xl py-4 px-4 text-start flex flex-row gap-4 items-center justify-between border border-borderCol w-full text-[17px] leading-[19.58px] tracking-[-0.43px] text-primaryText"
              >
                <div className="flex flex-row gap-x-2 items-center">
                {dropdown.icon}
                {dropdown.label}
                </div>
                {openDropdown === index ? (
                  <RiArrowDropUpLine className="text-[28px] bg-secondryBackground rounded-full font-thin text-primaryText" />
                ) : (
                  <RiArrowDropDownLine className="text-[28px]  bg-secondryBackground rounded-full font-thin" />
                )}
              </button>
              {openDropdown === index && (
                <ul className="bg-[#1E1E1E] shadow-2xl md:w-[19%] w-[80%] absolute z-10 mt-4 flex flex-col rounded-3xl text-start">
                  {dropdown.options.map((option, idx) => (
                    <li
                      key={idx}
                      className={`text-[17px] leading-[19.58px] tracking-[-0.43px] text-primaryText px-8 py-5 ${
                        idx === 0 ? "rounded-t-3xl" : ""
                      } ${idx === dropdown.options.length - 1 ? "rounded-b-3xl" : ""} w-full hover:bg-purple`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        ) : (
          <p className="text-primaryText">No dropdown data available.</p>
        )}
      </div>
    </div>
  );
};

export default DropdownList;
