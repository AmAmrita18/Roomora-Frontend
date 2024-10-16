import React from "react";
import { useForm } from "react-hook-form";
import BtnPurple from "../Buttons/BtnPurple";
import toast from "react-hot-toast";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="flex items-center text-primaryText ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondryBackground border border-purple
         p-6 rounded-lg shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Hotel Booking Form</h2>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-primaryText">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`inputStyle ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-primaryText">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email",
              },
            })}
            className={`inputStyle ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-primaryText">
            Phone No.
          </label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            className={`inputStyle ${errors.phone ? "border-red-500" : ""}`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-primaryText">
            Preferred Location
          </label>
          <select
            {...register("location", { required: "Location is required" })}
            className="inputStyle"
          >
            <option value="">Select a location</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Tokyo">Tokyo</option>
          </select>
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-primaryText">
            Hotel Type
          </label>
          <select
            {...register("hotelType", { required: "Hotel type is required" })}
            className="inputStyle"
          >
            <option value="">Select hotel type</option>
            <option value="Luxury">Luxury</option>
            <option value="Standard">Standard</option>
            <option value="Budget">Budget</option>
          </select>
          {errors.hotelType && (
            <p className="text-red-500 text-sm">{errors.hotelType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-primaryText">
            Room Type
          </label>
          <select
            {...register("roomType", { required: "Room type is required" })}
            className="inputStyle"
          >
            <option value="">Select room type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
          {errors.roomType && (
            <p className="text-red-500 text-sm">{errors.roomType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-primaryText">
            Budget
          </label>
          <select
            {...register("budget", { required: "Budget is required" })}
            className="inputStyle"
          >
            <option value="">Select a budget</option>
            <option value="$500 - $1000">$500 - $1000</option>
            <option value="$1000 - $2000">$1000 - $2000</option>
            <option value="$2000+">$2000+</option>
          </select>
          {errors.budget && (
            <p className="text-red-500 text-sm">{errors.budget.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-primaryText">
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className={`inputStyle ${errors.message ? "border-red-500" : ""}`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <BtnPurple type="submit" className="px-8">
          Login
        </BtnPurple>
      </form>
    </div>
  );
}
