import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import BtnPurple from "../../components/Buttons/BtnPurple";

const RoomCard = ({ roomType, pricePerDay, selectedDays, services ,id }) => {
  const totalPrice = selectedDays * pricePerDay;

  return (
    <div className="cardsStyling" id={id}>
      <div className="mb-4 flex flex-row justify-between">
        <h2 className="text-[26px] font-bold mb-2">{roomType} Room</h2>
        <div className="">
          <p className="text-gray-400 mb-1">
            Price:{" "}
            <span className="text-lg text-purple-300">${pricePerDay}</span>/day
          </p>
          <p className="text-gray-400">
            Days to Book:{" "}
            <span className="text-lg text-purple-300">{selectedDays}</span>
          </p>
        </div>
      </div>

      <div className="border-t border-borderCol pt-4 mb-4">
        <h4 className="text-lg font-semibold mb-2 text-purple-400">
          Services Included:
        </h4>
        <ul className="space-y-2 grid grid-cols-4">
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
          <span className="text-xl text-purple-300">${totalPrice}</span>
        </p>
        <BtnPurple>Book Now</BtnPurple>
      </div>
    </div>
  );
};

export default RoomCard;
