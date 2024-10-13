import React, { useState } from "react";
import BtnPurple from "../Buttons/BtnPurple";

const SearchBar = ({ placeholder = "Search For A Property", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="w-full">
      <div className="w-[90%] flex max-w-[1200px] mx-auto  justify-center">
        <div className=" flex w-[80%]  gradientBackground  shadow-xl items-center border border-borderCol m-4 rounded-md overflow-hidden">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="p-5 w-full bg-transparent focus:outline-none text-primaryText"
          />
          <BtnPurple
            onClick={() => alert("Searching...")}
            className=" w-[200px] m-2"
          >
            Find Hotel
          </BtnPurple>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
