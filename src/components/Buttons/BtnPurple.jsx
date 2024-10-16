import React from 'react';

const BtnPurple = ({ onClick, children, className = '', type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-3 px-5 cursor-pointer bg-purple hover:bg-violet-700 shadow-xl text-[18px] leading-[27px] font-[500] text-primaryText rounded-md ${className}`}
        >
            {children}
        </button>
    );
};

export default BtnPurple;
