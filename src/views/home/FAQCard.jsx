import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Keyboard } from "swiper/modules";
import BtnBlack from "../../components/Buttons/BtnBlack.jsx";

const feedbackData = [
  {
    feedbackQues: "How can I book a hotel room on Roomora?",
    feedbackAns:
      "Simply search for hotels using our filters, select your preferred room, and complete the booking through our secure payment process.",
  },
  {
    feedbackQues: "What is the cancellation policy for bookings on Roomora?",
    feedbackAns:
      "Yes, cancellation is available. The cancellation policies vary by hotel. You can view the specific policy for each booking before confirming your reservation. ",
  },
  {
    feedbackQues: "Are there any additional charges during my stay?",
    feedbackAns:
      "Additional charges may apply for services like room service, spa treatments, or late check-outs. These can be reviewed during the booking process.",
  },
 
  {
    feedbackQues: "How do I contact Roomora customer support?",
    feedbackAns:
      "You can reach our 24/7 customer support team through the 'Contact Us' section on the website or via the support hotline provided in your booking confirmation.",
  },
];


const FAQCard = () => {
  const swiperRef = useRef(null);

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
                      className="mb-3 w-[45%] ">
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
