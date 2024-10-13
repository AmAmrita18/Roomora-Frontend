import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Keyboard } from "swiper/modules";
import BtnBlack from "../../components/Buttons/BtnBlack.jsx";

// Sample feedback data
const feedbackData = [
  {
    feedbackQues: "How do I search for properties on Estatein?",
    feedbackAns:
      "Lorem ipsum dolor sit amet elit. Soluta officia totam corporis ipsum labore.",
  },
  {
    feedbackQues: "How do I search for properties on Estatein?",
    feedbackAns: "Amazing service! Will definitely recommend to others.",
  },
  {
    feedbackQues: "How do I search for properties on Estatein?",
    feedbackAns:
      "The experience was good, but there were some issues with the booking.",
  },
  {
    feedbackQues: "How do I search for properties on Estatein?!",
    feedbackAns: "Exceptional experience! I loved every moment of my stay.",
  },
];

const FAQCard = () => {
  const swiperRef = useRef(null); // Create a ref for Swiper instance

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="relative">
          <Swiper
            ref={swiperRef} 
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            keyboard={{
              enabled: true,
            }}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination, Keyboard]}
            className="mySwiper"
          >
            {feedbackData.map((feedback, index) => (
              <SwiperSlide key={index} className="">
                <div className="space-y-6  cardsStyling rounded-xl my-16 cursor-pointer transition-all duration-700 ease-in-out  hover:scale-95">
                  <div className="mt-7 flex flex-col">
                    <h5 className="cards-heading">{feedback.feedbackQues}</h5>
                    <p className="custom-para py-6">{feedback.feedbackAns}</p>
                    <BtnBlack
                      className="mb-3 w-[45%] "
                      onClick={() => alert(`${item.heading} button clicked!`)}
                    >
                      Read More
                    </BtnBlack>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

         
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
