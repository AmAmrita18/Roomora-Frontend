import React from "react";
import stars from "../../assets/images/common/stars.png";
import BtnBlack from "../../components/Buttons/BtnBlack.jsx";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineMenuBook } from "react-icons/md";

const ValuedClients = () => {
  const clientsInfo = [
    {
      time: "Since 2019",
      title: "Trackier",
      domain: "Commercial Real Estate",
      category: "Luxury Home Development",
      description:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      time: "Since 2019",
      title: "Trackier",
      domain: "Commercial Real Estate",
      category: "Luxury Home Development",
      description:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto border-b border-borderCol pt-36">
        <div>
          <img src={stars} alt="" />
          <h1 className="custom-heading">Our Valued Clients</h1>
          <p className="custom-para pt-6 pb-10 w-[80%]">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>

        <div className="flex flex-row gap-6 pt-10">
          {clientsInfo.map((item, index) => (
            <div key={index} className="border cardsStyling rounded-xl py-8 px-6">
              <div className="flex flex-row justify-between">
                <div className="">
                  <h2 className="custom-para">{item.time}</h2>
                  <h1 className="text-primaryText cards-heading">
                    {item.title}
                  </h1>
                </div>
                <BtnBlack
                  onClick={() => alert(`${item.heading} button clicked!`)}
                >
                  Visit Website{" "}
                </BtnBlack>
              </div>
              <div className="flex flex-row justify-between py-8 hover:brightness-105">
                <div className="">
                  <h1 className="custom-para flex items-center gap-2"><RxDashboard />
                  Domain</h1>
                  <h1 className="secondary-heading">{item.domain}</h1>
                </div>
                <div className="border-l border-borderCol pl-12">
                  <h1 className="custom-para flex items-center gap-2"><MdOutlineMenuBook />
                  Category</h1>
                  <h1 className="secondary-heading">{item.category}</h1>
                </div>
              </div>
              <div className="border border-borderCol p-6 flex flex-col gap-y-2 rounded-xl shadow-xl">
                <h1 className="custom-para">What They Said 🤗</h1>
                <h1 className="white-para">{item.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuedClients;
