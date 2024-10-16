import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import InvoicePage from "../dashboard/InvoicePage";

const BookingSuccess = ({ isOpen, onClose, bookingDetails }) => {
  if (!isOpen) return null;

  useEffect(() => {
    console.log({ bookingDetails });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-70 transition-opacity duration-300 ease-out animate-fade-in">
      <div className="gradientBackground border border-purple rounded-2xl shadow-2xl p-8 w-full max-w-lg relative text-white transform transition-transform duration-500 ease-out animate-zoom-in">
        <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">
          Booking Confirmed!
        </h2>

        <div className="space-y-4 text-lg text-gray-300">
          <p className="bookingSuccessHeading">
            Hotel:
            <span className="bookingSuccessSpan">{bookingDetails.hotel.hotel_name}</span>
          </p>
          <p className="bookingSuccessHeading">
            Room Type:<span className="bookingSuccessSpan"> {bookingDetails.room.roomType}</span>
          </p>
          <p className="bookingSuccessHeading">
            User:
            <span className="bookingSuccessSpan"> {bookingDetails.user.name}</span>
          </p>
          <p className="bookingSuccessHeading">
            Email:
            <span className="bookingSuccessSpan">{bookingDetails.user.email}</span>
          </p>
          <p className="bookingSuccessHeading">
            Phone:
            <span className="bookingSuccessSpan"> {bookingDetails.user.phone}</span>
          </p>
          <p className="bookingSuccessHeading">
            Check-in:
            <span className="bookingSuccessSpan"> {bookingDetails.check_in} </span>
          </p>
          <p className="bookingSuccessHeading">
            Check-out:
            <span className="bookingSuccessSpan">{bookingDetails.check_out}</span>
          </p>
          <p className="BookingSuccessHeading font-[700] text-[20px]">
            Total Price:{" "}
            <span className=" bookingSuccessSpan">Rs {bookingDetails.totalPrice}</span>
          </p>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-row gap-2 items-center justify-end">
          <h1>Download Invoice: </h1>
          <InvoicePage bookingDetails={bookingDetails} />
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="bg-red-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md transition-colors"
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
