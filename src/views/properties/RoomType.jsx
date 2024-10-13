import React, { useState } from "react";
import RoomCard from "./RoomCard";
import { div } from "framer-motion/client";

const RoomType = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [selectedDays, setSelectedDays] = useState(1);

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
    calculateDays(e.target.value, checkOutDate);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
    calculateDays(checkInDate, e.target.value);
  };

  const calculateDays = (checkIn, checkOut) => {
    const checkInDateObj = new Date(checkIn);
    const checkOutDateObj = new Date(checkOut);
    const diffInTime = checkOutDateObj - checkInDateObj;
    const days = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    setSelectedDays(days > 0 ? days : 1);
  };

  const rooms = [
    {
      type: "Deluxe",
      price: 150,
      services: [
        "Air Conditioning",
        "Free Wi-Fi",
        " 24/7 Room Service",
        "Flat-screen TV",
        "Complimentary Toiletries",
        "Coffee/Tea Maker",
        " Safe Deposit Box",
      ],
      id: "deluxe"
    },
    {
      type: "Premier",
      price: 200,
      services: [
        "Air Conditioning",
        "Free Wi-Fi",
        " 24/7 Room Service",
        "Flat-screen TV",
        "Complimentary Toiletries",
        "Coffee/Tea Maker",
        " Safe Deposit Box",
        "Complimentary Breakfast",
        "Mini Bar",
        " Bathrobes and Slippers",
        " Premium Bedding",
        "  Daily Newspaper",
      ],
      id: "premier"

    },
    {
      type: "Luxury",
      price: 300,
      services: [
        "Air Conditioning",
        "Free Wi-Fi",
        " 24/7 Room Service",
        "Flat-screen TV",
        "Complimentary Toiletries",
        "Coffee/Tea Maker",
        " Safe Deposit Box",
        "Complimentary Breakfast",
        "Mini Bar",
        " Bathrobes and Slippers",
        " Premium Bedding",
        "  Daily Newspaper",
        " All Premier Room services",
        " Private Balcony",
        " Ocean or City View",
        " Access to Private Lounge",
        " Complimentary Airport Shuttle",
        "In-room Spa Services",
        "Personal Concierge Service",
      ],
      id: "luxury"

    },
  ];

  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="bg-backgroundDark p-6 border border-borderCol rounded-lg shadow-lg mb-6">
          <div className="w-full grid grid-cols-3 gap-4 justify-between">
            <div className="w-full flex flex-col">
              <label htmlFor="checkIn" className="text-sm text-white mb-2">
                Check-In Date:
              </label>
              <input
                type="date"
                id="checkIn"
                value={checkInDate}
                onChange={handleCheckInDateChange}
                className="p-2 bg-primaryBackground text-white rounded"
              />
            </div>
            <div className="w-full  flex flex-col">
              <label htmlFor="checkOut" className="text-sm text-white mb-2">
                Check-Out Date:
              </label>
              <input
                type="date"
                id="checkOut"
                value={checkOutDate}
                onChange={handleCheckOutDateChange}
                className="p-2 bg-primaryBackground text-white rounded"
              />
            </div>
            <div>
              <p className="w-full text-[20px] text-primaryText mt-4 border-l border-borderCol pl-4">
                Selected Days:{" "}
                <span className="bg-purple px-3 rounded-md shadow-md">
                  {" "}
                  {selectedDays}
                </span>
              </p>
            </div>{" "}
          </div>
        </div>

        {/* Room Cards Section */}
        <div className="grid grid-cols-1 justify-between gap-6">
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
              roomType={room.type}
              pricePerDay={room.price}
              selectedDays={selectedDays}
              services={room.services}
              id={room.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomType;
