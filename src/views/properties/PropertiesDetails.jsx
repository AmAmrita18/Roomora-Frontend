import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import profile from "../../assets/images/Home/Profile.png";
import { estates } from "./estates.js";
import { useParams } from "react-router-dom";
import BtnPurple from "../../components/Buttons/BtnPurple.jsx";
import BtnBlack from "../../components/Buttons/BtnBlack.jsx";
import RoomSelection from "./RoomType.jsx";
import RoomType from "./RoomType.jsx";
const PropertiesDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [estate, setEstate] = useState(null);

  const scrollToSectionDeluxe = () =>{
    const section = document.getElementById("deluxe");
    section.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToSectionPremier = () =>{
    const section = document.getElementById("premier");
    section.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToSectionLuxury = () =>{
    const section = document.getElementById("luxury");
    section.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const prop = estates.filter((est) => est.id == id);
    setEstate(prop[0]);
    setLoading(false);
  }, [id]);

  const [displayImage, setDisplayImage] = useState(0);
  const { title, images, price, address } = estate || {};

  const features = [
    "Free Wifi",
    "Terrace",
    "Parking",
    "Air Conditioning",
    "Room Service",
    "Flat Screens TV",
  ];
  const columnSize = Math.ceil(features.length / 2);
  const columns = [
    features.slice(0, columnSize),
    features.slice(columnSize, columnSize * 2),
    features.slice(columnSize * 2),
  ];
  return (
    <>
      {loading ? (
        <h2>loading....{id}</h2>
      ) : (
        <div className="w-full bg-gradient-to-r from-backgroundDark from-30% via-backgroundDark via-70% to-[#2A213F] to-90% ...">
          <div className="w-[90%] h-full mx-auto max-w-[1200px]  pt-12 pb-12 flex flex-col">
            <div className="">
              <div className="w-full flex flex-row">
                <div className="w-[60%]">
                  <div className="">
                    <img
                      src={images[displayImage]}
                      width={704}
                      height={520}
                      className="md:w-[704px]  md:h-[520px] w-[500px] h-[400px] shadow-2xl rounded-tr-[57px] object-cover"
                      alt=""
                    />
                  </div>

                  <div className="flex w-full flex-row md:gap-6 gap-2 py-6 ">
                    {images.map(
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
                {/* description  */}
                <div className="w-[40%]  mb-10 lg:ml-6  shadow-2xl rounded-2xl ">
                  <div className=" px-6 py-6 flex flex-col gap-y-3 cardsStyling">
                    <h1 className="text-primaryText text-[35px] md:font-normal font-bold lg:leading-[25.6px] leading-tight tracking-[-0.8px]">
                      {title}
                    </h1>
                    <div className="flex flex-row justify-between border-b border-b-borderCol">
                      <h1 className="text-primaryText text-[22px] lg:leading-[25.6px] leading-tight tracking-[-0.8px]">
                        {address}
                      </h1>
                      <h1 className="text-primaryText  pb-4 text-[18px] lg:leading-[25.6px] leading-tight tracking-[-0.8px]">
                        {price}
                      </h1>
                    </div>
                    <div className="flex md:flex-row flex-col  border-b pb-4 border-borderCol justify-between">
                      {columns.map((column, columnIndex) => (
                        <ul
                          key={columnIndex}
                          className="flex flex-col md:gap-y-4 gap-y-2 text-[15px] text-primaryText leading-[22px] tracking-[-0.38px]"
                        >
                          {column.map((feature, index) => (
                            <li
                              key={index}
                              className="flex flex-row gap-2 items-center"
                            >
                              <FaCircleCheck />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 pb-4 pt-1 gap-2  border-b  border-borderCol ">
                      <BtnBlack
                        onClick={(e) => {
                          e.preventDefault();
                          // scrollToSection(sectionId);
                          scrollToSectionDeluxe();
                        }}
                        className=" "
                      >
                        Deluxe
                      </BtnBlack>
                      <BtnBlack
                        onClick={(e) => {
                          e.preventDefault();
                          // scrollToSection(sectionId);
                          scrollToSectionPremier()
                        }}
                        className=" "
                      >
                        Premier
                      </BtnBlack>
                      <BtnBlack
                        onClick={(e) => {
                          e.preventDefault();
                          // scrollToSection(sectionId);
                          scrollToSectionLuxury();
                        }}
                        className=" "
                      >
                        Luxury
                      </BtnBlack>
                    </div>
                    <div className=" ">
                      {estate.description.map((desc, index) => (
                        <div key={`${estate.title + index}`}>
                          <p
                            className="text-primaryText text-[15px] leading-[22px] tracking-[-0.38px] h-[180px] overflow-y-scroll"
                            style={{
                              WebkitLineClamp: 8,
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {desc}
                          </p>
                          <br />
                        </div>
                      ))}
                    </div>
                    <BtnPurple type="Submit">Book Now</BtnPurple>
                  </div>
                </div>
              </div>

              <div className="w-full  ">
                {/* features div  */}
                <div className="py-6 shadow-2xl bg-secondryBackground border border-borderCol rounded-xl">
                  <div className="flex justify-between">
                    <RoomType />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertiesDetails;
