import React, { useEffect, useState } from "react";
import BtnPurple from "../Buttons/BtnPurple";

const SearchBar = ({ placeholder = "Enter a destination or property", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  useEffect(()=>{
    if (query=="" && onSearch) {
      onSearch(query);
    }
  },[query])

  return (
    <div className="w-full">
      <div className="w-[90%] flex max-w-[1200px] mx-auto  justify-center">
        <form className="flex w-[80%] gradientBackground shadow-xl items-center border border-borderCol m-4 rounded-md overflow-hidden">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="p-5 w-full bg-transparent focus:outline-none text-primaryText"
          />
          <BtnPurple
          type="submit"
            onClick={() => handleSearch()}
            className="w-[200px] m-2"
          >
            Find Hotel
          </BtnPurple>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
