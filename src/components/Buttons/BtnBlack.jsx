import React from 'react';

const BtnBlack = ({ onClick, children, className = '', type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-3 px-5 cursor-pointer gradientBackground  hover:bg-gradient-to-br hover:from-backgroundDark hover:to-primaryBackground border border-borderCol text-[18px] leading-[27px] font-[500] text-primaryText rounded-md ${className}`}
        >
            {children}            
        </button>
    );
};

export default BtnBlack;
