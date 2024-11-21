import React from "react";

const BtnServices = ({ children, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      className={`py-3 px-5 cursor-pointer bg-backgroundDark border border-borderCol shadow-xl text-[18px] leading-[27px] font-[500] text-primaryText rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default BtnServices;
