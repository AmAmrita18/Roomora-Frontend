import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import InvoicePage from "../dashboard/InvoicePage";

const BookingSuccess = ({ isOpen, onClose, bookingDetails }) => {
  if (!isOpen) return null;

  useEffect(() => {
    console.log({ bookingDetails });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-lg relative text-white">
        {/* Title */}
        <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">
          Booking Confirmed!
        </h2>

        {/* Booking Information */}
        <div className="space-y-4 text-lg text-gray-300">
          <p>
            <span className="text-purple-400 font-semibold">Hotel:</span> {bookingDetails.hotel.hotel_name}
          </p>
          <p>
            <span className="text-purple-400 font-semibold">Room Type:</span> {bookingDetails.room.roomType}
          </p>
          <p>
            <span className="text-purple-400 font-semibold">User:</span> {bookingDetails.user.name}
          </p>
          <p>
            <span className="text-purple-400 font-semibold">Email:</span> {bookingDetails.user.email}
          </p>
          <p>
            <span className="text-purple-400 font-semibold">Phone:</span> {bookingDetails.user.phone}
          </p>
          <p>
            <span className="text-purple-400 font-semibold">Check-in:</span> {bookingDetails.check_in}
          </p>
          <p>
            <span className="text-purple-400 font-semibold">Check-out:</span> {bookingDetails.check_out}
          </p>
          <p className="text-xl font-bold text-purple-500">
            Total Price: Rs {bookingDetails.totalPrice}
          </p>
        </div>

        {/* Invoice Section */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <InvoicePage bookingDetails={bookingDetails} />
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-6">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
