import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaPrint } from "react-icons/fa";

const Modal = ({ isOpen, onClose, bookingDetails }) => {


  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Confetti width={width} height={height} numberOfPieces={300} />
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-semibold mb-4">Booking Confirmed!</h2>
        <div className="mb-4">
          <p><strong>Hotel:</strong> {bookingDetails.hotel}</p>
          <p><strong>Room Type:</strong> {bookingDetails.roomType}</p>
          <p><strong>Total Price:</strong> Rs {bookingDetails.totalPrice}</p>
          <p><strong>Check-in:</strong> {bookingDetails.check_in}</p>
          <p><strong>Check-out:</strong> {bookingDetails.check_out}</p>
        </div>
        <button
          onClick={handlePrint}
          className="bg-purple-600 text-white py-2 px-4 rounded-md flex items-center gap-2"
        >
          <FaPrint /> Print Booking Details
        </button>
      </div>
    </motion.div>
  );
};

export default Modal;