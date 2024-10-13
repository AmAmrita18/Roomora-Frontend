import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import DropdownBar from "../../components/Dropdown/DropdownBar";
import PropertiesCard from "../properties/PropertiesCard.jsx";

const HomeProperties = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto pt-16 pb-16">
        <SearchBar />
        <DropdownBar />
        <PropertiesCard isHome={true}/>
      </div>
    </div>
  );
};

export default HomeProperties;
