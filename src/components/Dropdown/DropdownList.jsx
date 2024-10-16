import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropdownList = ({ dropdowns = [], onFilterChange }) => {
  return (
    <div className="w-full">
      <div className="w-full h-full gap-2 max-w-[1200px] flex md:flex-row flex-col">
        {dropdowns.length > 0 ? (
          dropdowns.map((dropdown, index) => (
            <div key={index} className="w-full bg-backgroundDark rounded-xl">
              {/* <div className="bg-backgroundDark rounded-xl py-4 px-4 text-start flex flex-row gap-4 items-center justify-between border border-borderCol w-full text-[17px] leading-[19.58px] tracking-[-0.43px] text-primaryText">
                <div className="flex flex-row gap-x-2 items-center">
                  {dropdown.icon}
                  {dropdown.label}
                </div>
                <RiArrowDropDownLine className="text-[28px] bg-secondryBackground rounded-full font-thin text-primaryText" />
              </div> */}
              <select
                onChange={(e) => onFilterChange(dropdown.key, e.target.value)}
                className="bg-[#1E1E1E] mt-2 text-primaryText px-4 py-3 rounded-lg w-full"
              >
                <option value="">Select {dropdown.label}</option>
                {dropdown.options.map(({ value, label }, idx) => (
                  <option key={idx} value={value}>
                    {label}
                  </option>
                ))}
              </select>
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
