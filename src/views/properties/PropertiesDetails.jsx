import React, { useContext, useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import BtnPurple from "../../components/Buttons/BtnPurple.jsx";
import BtnBlack from "../../components/Buttons/BtnBlack.jsx";
import RoomType from "./RoomType.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const PropertiesDetails = () => {
  const { getHotel } = useContext(AuthContext);
  const { hotel_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [hotel, setHotel] = useState({});

  const handleGetHotel = async () => {
    try {
      setLoading(true);
      console.log({ hotel_id });
      const response = await getHotel(hotel_id);
      setHotel(response);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      console.log({ hotel });
      setLoading(false);
    }
  };

  const scrollToSectionDeluxe = () => {
    const section = document.getElementById("deluxe");
    section.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSectionPremier = () => {
    const section = document.getElementById("premier");
    section.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSectionLuxury = () => {
    const section = document.getElementById("luxury");
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    handleGetHotel();
    setLoading(false);
  }, [hotel_id]);

  console.log({
    hotel,
  });

  const [displayImage, setDisplayImage] = useState(0);
  const {
    hotel_name,
    photos,
    rooms,
    total_rooms,
    available_rooms,
    location,
    facilities,
    description,
  } = hotel || {};

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center h-[80vh]">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="w-full bg-gradient-to-r from-backgroundDark from-30% via-backgroundDark via-70% to-[#2A213F] to-90% ...">
        <div className="w-[90%] h-full mx-auto max-w-[1200px]  pt-12 pb-12 flex flex-col">
          <div className="">
            <div className="w-full flex flex-row">
              <div className="w-[60%]">
                <div className="">
                  {photos && (
                    <img
                      src={photos[displayImage]}
                      width={704}
                      height={520}
                      className="md:w-[704px]  md:h-[520px] w-[500px] h-[400px] shadow-2xl rounded-tr-[57px] object-cover"
                      alt=""
                    />
                  )}
                </div>

                <div className="flex w-full flex-row md:gap-6 gap-2 py-6 ">
                  {photos &&
                    photos.map(
                      (image, index) =>
                        index != displayImage && (
                          <div
                            onClick={() => setDisplayImage(index)}
                            key={`img` + index}
                            className="shadow-2xl  cursor-pointer"
                          >
                            <img
                              src={image}
                              alt=""
                              className="md:w-[80px] md:h-[80px] w-[60px] h-[50px] object-cover rounded-tr-2xl"
                            />
                          </div>
                        )
                    )}
                </div>
              </div>
              <div className="w-[40%] h-full  mb-10 lg:ml-6  shadow-2xl rounded-2xl ">
                <div className=" px-6 py-6 flex flex-col gap-y-3 cardsStyling">
                  <h1 className="text-primaryText text-[35px] md:font-normal font-bold ">
                    {hotel_name}
                  </h1>
                  <div className="flex flex-row justify-between items-center pb-3 border-b border-b-borderCol">
                    <h1 className="text-primaryText text-[16px] ">
                      {location?.city +
                        ", " +
                        location?.state +
                        ", " +
                        location?.country}
                    </h1>

                    <div className="flex flex-col">
                      <h1 className="text-primaryText text-lg font-semibold ">
                        {" "}
                        Available Rooms:{" "}
                        <span className="bg-primaryText bg-opacity-10 px-3 py-1 rounded-r-md rounded-tl-md shadow-md">
                          {rooms?.reduce(
                            (acc, curr) => acc + curr.available_rooms,
                            0
                          )}{" "}
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-2  border-b pb-4 border-borderCol justify-between">
                    {facilities &&
                      facilities.map((feature, index) => (
                        <li
                          key={index}
                          className="flex flex-row gap-2 items-center"
                        >
                          <FaCircleCheck />
                          {feature}
                        </li>
                      ))}
                  </div>
                  <div className="grid grid-cols-3 pb-4 pt-1 gap-2  border-b  border-borderCol ">
                    <BtnBlack
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSectionDeluxe();
                      }}
                      className=" "
                    >
                      Deluxe
                    </BtnBlack>
                    <BtnBlack
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSectionPremier();
                      }}
                      className=" "
                    >
                      Premier
                    </BtnBlack>
                    <BtnBlack
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSectionLuxury();
                      }}
                      className=" "
                    >
                      Luxury
                    </BtnBlack>
                  </div>
                  <div className=" ">
                    <p
                      className="text-primaryText text-[15px]  h-[180px] overflow-y-scroll"
                      style={{
                        WebkitLineClamp: 8,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {description}
                    </p>
                  </div>
                  <BtnPurple type="Submit">Book Now</BtnPurple>
                </div>
              </div>
            </div>

            <div className="w-full  ">
              <div className="py-6 shadow-2xl bg-secondryBackground border border-borderCol rounded-xl">
                <div className="flex justify-between">
                  <RoomType />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertiesDetails;
