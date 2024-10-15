import React, { useState, useContext, useEffect } from "react";
import RoomCard from "./RoomCard";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";

const RoomType = () => {
  const { getHotel } = useContext(AuthContext);
  const { hotel_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [hotel, setHotel] = useState(null);

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [selectedDays, setSelectedDays] = useState(1);

  const [numOfRooms, setNumOfRooms] = useState(1);

  const handleNumOfRoomsChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 5) {
      setNumOfRooms(value);
    }
  };

  // Handle Check-In Date Change and validate days
  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
    // Reset the check-out date if check-in is after check-out
    if (new Date(e.target.value) >= new Date(checkOutDate)) {
      setCheckOutDate("");
      setSelectedDays(1);
    }
  };

  // Handle Check-Out Date Change and calculate days
  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
    calculateDays(checkInDate, e.target.value);
  };

  const calculateDays = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return;
    const checkInDateObj = new Date(checkIn);
    const checkOutDateObj = new Date(checkOut);
    const diffInTime = checkOutDateObj - checkInDateObj;
    const days = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    setSelectedDays(days > 0 ? days : 1);
  };

  // Fetch hotel details
  const handleGetHotel = async () => {
    try {
      setLoading(true);
      const response = await getHotel(hotel_id);
      setHotel(response);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetHotel();
  }, [hotel_id]);

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        {/* Date Selection Section */}
        <div className="bg-backgroundDark p-6 border border-borderCol rounded-lg shadow-lg mb-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label htmlFor="checkIn" className="text-sm text-white mb-2">
                Check-In Date:
              </label>
              <input
                type="date"
                id="checkIn"
                value={checkInDate}
                onChange={handleCheckInDateChange}
                className="p-2 bg-primaryBackground text-white rounded"
                min={new Date().toISOString().split("T")[0]} // Prevent past dates
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="checkOut" className="text-sm text-white mb-2">
                Check-Out Date:
              </label>
              <input
                type="date"
                id="checkOut"
                value={checkOutDate}
                onChange={handleCheckOutDateChange}
                className="p-2 bg-primaryBackground text-white rounded"
                min={checkInDate || new Date().toISOString().split("T")[0]} // Prevent earlier than check-in
                disabled={!checkInDate} // Disable until check-in is selected
              />
            </div>
            {/* Number of Rooms to Book */}
            <div className="mb-4">
              <label
                htmlFor="numOfRooms"
                className="text-sm text-primaryText mb-2 block"
              >
                Number of Rooms (1-5):
              </label>
              <input
                type="number"
                id="numOfRooms"
                value={numOfRooms}
                onChange={handleNumOfRoomsChange}
                min="1"
                max="5"
                className="p-2 w-full bg-primaryBackground text-white rounded"
              />
            </div>
            <div className="flex items-center">
              <p className="text-[20px] text-primaryText ">
                Selected Days:{" "}
                <span className="bg-purple px-3 rounded-md shadow-md">
                  {selectedDays}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Room Cards Section */}
        <div className="grid grid-cols-1 gap-6">
          {hotel && hotel.rooms.length > 0 ? (
            hotel.rooms.map((room, index) => (
              <RoomCard
                key={index}
                roomType={room.roomType}
                numOfRooms={numOfRooms}
                pricePerDay={room.price}
                selectedDays={selectedDays}
                services={room.room_facilities}
                id={room._id}
                check_in={checkInDate}
                check_out={checkOutDate}
                total_rooms={room.total_rooms}
                available_rooms={room.available_rooms}
                handleGetHotel={handleGetHotel}
              />
            ))
          ) : (
            <p className="text-white">No rooms available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomType;
