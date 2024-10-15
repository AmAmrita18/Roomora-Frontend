import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0  w-[90%] max-w-[1200px] z-50 flex items-center justify-center mx-auto gradientBackground border border-borderCol shadow-lg rounded-xl">
      <div className="p-6 rounded-lg shadow-lg w-full mx-auto">
        <button onClick={onClose} className="text-primaryText w-[30px] h-[30px] rounded-full hover:bg-red-700 bg-red-600 float-right">X</button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
