import React, { useState } from "react";
import BtnPurple from "../Buttons/BtnPurple";

const SearchBar = ({ placeholder = "Enter a destination or property", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value)
    console.log(query)
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="w-full">
      <div className="w-[90%] flex max-w-[1200px] mx-auto  justify-center">
        <div className="flex w-[80%] gradientBackground shadow-xl items-center border border-borderCol m-4 rounded-md overflow-hidden">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder={placeholder}
            className="p-5 w-full bg-transparent focus:outline-none text-primaryText"
          />
          <BtnPurple
            onClick={handleSearch}
            className="w-[200px] m-2"
          >
            Find Hotel
          </BtnPurple>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
