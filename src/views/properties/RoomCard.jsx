import React, { useContext, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import BtnPurple from "../../components/Buttons/BtnPurple";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import BookingSuccess from "./BookingSuccess";

const RoomCard = ({
  total_rooms,
  available_rooms,
  roomType,
  numOfRooms,
  pricePerDay,
  selectedDays,
  services,
  id,
  check_in,
  check_out,
  handleGetHotel
}) => {
  const { bookHotel, user } = useContext(AuthContext);
  const { hotel_id } = useParams();
  const [bookingSuccess, setBookingSuccess] = useState();
  const [bookingDetails, setBookingDetails] = useState();

  // Total price calculation based on selected days and number of rooms
  const totalPrice = selectedDays * pricePerDay * numOfRooms;

  const handleBooking = async () => {
    if (!user) {
      alert("Please login to make bookings");
      return;
    }
    try {
      const res = await bookHotel({
        user: user._id,
        hotel: hotel_id,
        room: id,
        check_in,
        check_out,
        totalPrice,
        numOfRooms,
      });

      if (res) {
        setBookingDetails(res);
        setBookingSuccess(true);
      }
    } catch (err) {
      alert("Booking Failed, please try again!");
    }
  };

  const handleCloseModal = () => {
    setBookingSuccess(false)
    handleGetHotel()
  }

  return (
    <div className="cardsStyling" id={roomType.toLowerCase()}>
      <div className="mb-4 flex flex-row justify-between">
        <div>
          <h2 className="text-[26px] font-bold mb-2">{roomType}</h2>
          <div className="flex flex-col">
            <h1 className="text-primaryText pb-4 text-[18px] lg:leading-[25.6px] leading-tight tracking-[-0.8px]">
              <span>Total Rooms: </span> {total_rooms}
            </h1>
            <h1 className="text-primaryText pb-4 text-[18px] lg:leading-[25.6px] leading-tight tracking-[-0.8px]">
              <span>Available Rooms: </span> {available_rooms}
            </h1>
          </div>
        </div>
        <div className="">
          <p className="text-primaryText text-[18px] mb-2">
            Price:{" "}
            <span className="bg-purple px-3 py-2 rounded-md shadow-md">
              Rs {pricePerDay} /day
            </span>
          </p>
          <p className="text-primaryText text-[18px]">
            Days to Book:{" "}
            <span className="bg-purple px-3 rounded-md shadow-md">
              {selectedDays}
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-borderCol pt-4 mb-4">
        <h4 className="text-lg font-semibold mb-2 text-purple-400">
          Services Included:
        </h4>
        <ul className="flex gap-3">
          {services.map((service, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <FaCircleCheck className="text-purple" /> {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="text-lg font-semibold">
          Total Price:{" "}
          <span className="bg-purple px-3 py-2 rounded-md shadow-md">
            Rs {totalPrice}
          </span>
        </p>
        <BtnPurple onClick={handleBooking}>Book Now</BtnPurple>
      </div>
      {bookingSuccess && (
        <BookingSuccess
          isOpen={bookingSuccess}
          onClose={() => handleCloseModal()}
          bookingDetails={bookingDetails}
        />
      )}
    </div>
  );
};

export default RoomCard;