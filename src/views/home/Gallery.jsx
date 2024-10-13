import React from "react";
import image1 from "../../assets/images/Home/images1.jpg";
import image2 from "../../assets/images/Home/images3.jpg";
import image3 from "../../assets/images/Home/images2.jpg";
import image4 from "../../assets/images/Home/images4.jpg";
import BtnPurple from "../../components/Buttons/BtnPurple.jsx";
const Gallery = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] flex md:flex-row flex-col-reverse max-w-[1200px] mx-auto md:px-0 px-4 pt-36">
        <div className="md:w-[50%] lg:w-[65%] flex flex-row lg:gap-x-6 gap-x-4 lg:gap-y-6 cursor-pointer">
          <div className="md:mt-[90px] ">
            <img
              src={image1}
              alt=""
              className="w-[374px] md:h-[553px] transition-all duration-700 ease-in-out  hover:scale-110 hover:brightness-100 brightness-75  h-[350px] object-cover rounded-xl cursor-pointer shadow-xl "
            />
          </div>
          <div className="grid grid-row-2 gap-y-4">
            <div className="">
              <img
                src={image2}
                alt=""
                className="w-[374px] transition-all duration-700 ease-in-out  hover:scale-110 hover:brightness-100 brightness-75 md:h-[363px] h-[260px] object-cover rounded-xl cursor-pointer"
              />
            </div>
            
            <div className=" ">
              <img
                src={image4}
                alt=""
                className="w-[374px] md:h-[363px] h-[260px] object-cover rounded-xl transition-all duration-700 ease-in-out  hover:scale-110 hover:brightness-100 brightness-75 cursor-pointer"
              />
            </div>
          </div>
          
          <div className="md:mt-[90px] ">
            <img
              src={image3}
              alt=""
              className="w-[374px] md:h-[553px] h-[350px] object-cover rounded-xl transition-all duration-700 ease-in-out  hover:scale-110 hover:brightness-100 brightness-75 cursor-pointer"
            />
          </div>
         
        </div>

        <div className="md:w-[50%] lg:w-[35%] lg:pl-16 md:pl-6 md:py-44 pb-16 md:pb-0">
          <h1 className="custom-heading">
            Discover The World Of Positive Aura{" "}
          </h1>
          <p className="custom-para mt-4">
            Submerge into the heart of the ocean with us. At Tamarin Ocean Pro,
            we weave through the water’s embrace, uncovering and capturing the
            silent dance of aquatic life. Witness the grace of the sea in our
            gallery.
          </p>
          <p className="custom-para mb-4">
            Our lens reflects the azure soul of Mauritius. Each dive is a
            canvas, each moment a brushstroke of marine marvels. Glide with us
            past coral gardens and into the tranquil deep. Here, the ocean's
            poetry comes to life.
          </p>
          <BtnPurple
            onClick={() => alert("Contact Us button clicked!")}
            className="mt-4"
          >
            Explore More{" "}
          </BtnPurple>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
