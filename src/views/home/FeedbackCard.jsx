import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Keyboard } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import feedbackProfile1 from "../../assets/images/Home/Profile.png";
const feedbackData = [
  {
    name: "Sophia Joy",
    identity: "CEO, ABC Company",
    rating: 4,
    heading: "Exceptional Service!",
    feedbackText:
      "Lorem ipsum dolor sit amet elit. Soluta officia totam corporis ipsum labore.",
    profilePic: feedbackProfile1, 
  },
  {
    name: "John Doe",
    identity: "Manager, XYZ Inc.",
    rating: 5,
    heading: "Exceptional Service!",
    feedbackText: "Amazing service! Will definitely recommend to others.",
    profilePic: feedbackProfile1,
  },
  {
    name: "Jane Smith",
    identity: "Freelancer",
    rating: 3,
    heading: "Exceptional Service!",
    feedbackText:
      "The experience was good, but there were some issues with the booking.",
    profilePic: feedbackProfile1,
  },
  {
    name: "Emma Brown",
    identity: "Marketing Specialist",
    rating: 5,
    heading: "Exceptional Service!",
    feedbackText: "Exceptional experience! I loved every moment of my stay.",
    profilePic: feedbackProfile1,
  },
];

const FeedbackCarousel = () => {
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
              <SwiperSlide
                key={index}
                className=""
              >
                <div className="space-y-6  cardsStyling rounded-xl my-16 cursor-pointer transition-all duration-700 ease-in-out  hover:scale-95">
                  <div className=" flex gap-2 text-yellow-500  justify-center items-center">
                    {[...Array(feedback.rating)].map((_, i) => (
                      <FaStar key={i} className="" />
                    ))}
                    {[...Array(5 - feedback.rating)].map((_, i) => (
                      <FaStar key={i} className="text-gray-300" />
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col">
                    <h5 className="cards-heading">{feedback.heading}</h5>

                    <p className=" custom-para py-4">{feedback.feedbackText}</p>
                  </div>
                  <div className="flex flex-row items-center gap-x-4">
                    <img
                      src={feedback.profilePic}
                      alt={feedback.name}
                      className="w-[60px] h-[60px] rounded-full"
                    />
                    <div>
                      <h5 className="text-[20px] leading-[30px] font-[500] text-primaryText">
                        {feedback.name}
                      </h5>
                      <p className="font-extralight text-secondryText text-[15px]">
                        {feedback.identity}
                      </p>
                    </div>
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

export default FeedbackCarousel;
