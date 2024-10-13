import React from "react";
import { useForm } from "react-hook-form";
import BtnPurple from "../../components/Buttons/BtnPurple"; // Assuming you have this button component
import profile from "../../assets/images/Home/Profile.png";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted!");
  };

  return (
    <div>
      <div
        className="w-full bg-secondryBackground border border-borderCol
             mt-10 shadow-2xl rounded-2xl py-8"
      >
        <div className="flex flex-row gap-3 items-center border border-borderCol bg-backgroundDark mx-6 my-5 rounded-xl px-3 py-4">
          <div>
            <img
              src={profile} 
              width={40}
              height={40}
              alt="Profile"
              className="object-cover rounded-full w-[40px] h-[40px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-primaryText text-[15px] leading-[17.28px] tracking-[-0.38px]">
              Roomora{" "}
            </h1>
            <h2 className="text-primaryText text-[13px] leading-[17.28px] tracking-[-0.38px]">
              View Profile
            </h2>
          </div>
        </div>

        {/* Form with react-hook-form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-end gap-y-4 mx-6"
        >
          {/* Name Field */}
          <div className="text-primaryText py-3 w-full bg-backgroundDark border border-borderCol rounded-xl">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="bg-transparent rounded-xl tracking-wider pl-3 text-[14px] font-[500] w-full border-none placeholder:text-primaryText outline-none focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm pl-3">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="text-primaryText py-3 w-full bg-backgroundDark border border-borderCol rounded-xl">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="bg-transparent tracking-wider pl-3 rounded-xl text-[14px] font-[500] w-full border-none placeholder:text-primaryText outline-none focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm pl-3">{errors.email.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="text-primaryText py-3 w-full bg-backgroundDark border border-borderCol rounded-xl">
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
              className="bg-transparent tracking-wider pl-3 rounded-xl text-[14px] font-[500] w-full border-none placeholder:text-primaryText outline-none focus:outline-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm pl-3">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Textarea Field */}
          <div className="text-primaryText py-3 w-full bg-backgroundDark border border-borderCol rounded-xl">
            <textarea
              id="textarea"
              name="textarea"
              rows="2"
              cols="50"
              placeholder="Hello, I am interested in..."
              {...register("textarea", { required: "This field is required" })}
              className="bg-transparent tracking-wider resize-none rounded-xl pl-3 text-[14px] font-[500] w-full border-none placeholder:text-primaryText outline-none focus:outline-none"
            ></textarea>
            {errors.textarea && (
              <p className="text-red-500 text-sm pl-3">
                {errors.textarea.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <BtnPurple type="submit">Send Request</BtnPurple>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
