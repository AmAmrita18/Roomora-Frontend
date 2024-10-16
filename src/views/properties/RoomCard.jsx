import React, { useContext, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import BtnPurple from "../../components/Buttons/BtnPurple";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
  handleGetHotel,
}) => {
  const { bookHotel, user } = useContext(AuthContext);
  const { hotel_id } = useParams();
  const [bookingSuccess, setBookingSuccess] = useState();
  const [bookingDetails, setBookingDetails] = useState();
  const navigate = useNavigate()
  const location = useLocation()
  const totalPrice = selectedDays * pricePerDay * numOfRooms;

  const handleBooking = async () => {
    if (!user) {
      navigate("/auth", { state: { from: location } });
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
      toast.error("Booking Failed, please try again!");
    }
  };

  const handleCloseModal = () => {
    setBookingSuccess(false);
    handleGetHotel();
  };

  return (
    <div className="cardsStyling" id={roomType.toLowerCase()}>
      <div className="mb-4 flex flex-row justify-between">
        <div>
          <h2 className="text-[28px] font-bold mb-6">{roomType}</h2>
          <div className="flex flex-col">
            <p className="text-primaryText text-lg font-semibold mb-2">
              Price:{" "}
              <span className="bg-primaryText bg-opacity-10 px-3 py-2 rounded-r-md rounded-tl-md shadow-md">
                Rs {pricePerDay} /day
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-10">
          
          <div className="flex flex-col gap-y-3 justify-center items-end">
          <h1 className="text-primaryText text-lg font-semibold ">
              {" "}
              Available Rooms:{" "}
              <span className="bg-primaryText bg-opacity-10 px-3 py-1 rounded-r-md rounded-tl-md shadow-md ">
                {available_rooms}
              </span>
            </h1>
          <p className="text-primaryText text-lg font-semibold ">
            Days to Book:{" "}
            <span className="bg-primaryText bg-opacity-10 px-3 py-1 rounded-r-md rounded-tl-md shadow-md">
              {selectedDays}
            </span>
          </p>
          <h1 className="text-primaryText text-lg font-semibold ">
            Rooms to Book:{" "}
            <span className="bg-primaryText bg-opacity-10 px-3 py-1 rounded-r-md rounded-tl-md shadow-md">
              {" "}
              {numOfRooms}
            </span>
          </h1>
        </div>
        </div>
      </div>

      <div className="flex justify-between flex-row border-t border-borderCol pt-4 mb-4">
        <div className=" ">
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
        
      </div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-lg font-semibold">
          Total Price:{" "}
          <span className="bg-primaryText bg-opacity-10 px-3 py-2 rounded-r-md rounded-tl-md shadow-md">
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
