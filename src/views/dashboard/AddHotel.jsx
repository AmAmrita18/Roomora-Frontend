import React, { useContext, useState } from "react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import CloudinaryPhotoUpload from "../../components/CloudinaryPhotoUpload";
import constants from "../../utils/constants";
import BtnPurple from "../../components/Buttons/BtnPurple";

const AddHotel = () => {
  const { admin, addHotel } = useContext(AuthContext);
  const { hotel_types, room_types } = constants;
  const methods = useForm({
    defaultValues: {
      hotel_name: "",
      location: {
        city: "",
        state: "",
        country: "",
        zipcode: "",
        landmark: "",
        locality: "",
      },
      description: "",
      hotel_type: "",
      facilities: [""],
      rooms: [
        {
          roomType: "",
          total_rooms: "",
          available_rooms: "",
          price: "",
          room_facilities: [""],
        },
      ],
      photos: [""],
      owner: {
        name: "",
        email: "",
        phone: "",
        profile_photo: "",
        address: {
          city: "",
          state: "",
          country: "",
          zipcode: "",
          landmark: "",
          locality: "",
        },
      },
    },
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = methods;

  const { fields: facilityFields, append: appendFacility } = useFieldArray({
    control,
    name: "facilities",
  });
  const { fields: roomFacilityFields, append: appendRoomFacility } =
    useFieldArray({
      control,
      name: "room_facilities",
    });

  const {
    fields: photoFields,
    append: appendPhoto,
    remove,
  } = useFieldArray({
    control,
    name: "photos",
  });

  const [photoPreviews, setPhotoPreviews] = useState([]);

  const { fields: roomFields, append: appendRoom } = useFieldArray({
    control,
    name: "rooms",
  });

  const onSubmit = (data) => {
    data.photos = data.photos.map((photo) => photo.url);
    const formData = { email: admin.email, ...data };
    console.log({ formData });
    addHotel(formData);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    if (photoPreviews.length + files.length > 10) {
      alert("You can only upload a maximum of 10 photos.");
      return;
    }

    const newPhotoPreviews = files.map((file) => URL.createObjectURL(file));
    setValue("photos", [...photoPreviews, ...files]);
    setPhotoPreviews((prev) => [...prev, ...newPhotoPreviews]); // Combine previews
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full p-6 gradientBackground border border-borderCol shadow-lg  text-white rounded-md max-w-4xl mx-auto my-10 overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Add New Hotel</h2>
        {/* Hotel Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Hotel Name</label>
          <input
            type="text"
            {...register("hotel_name", { required: true })}
            className="mt-1 block w-full p-2 bg-backgroundDark text-white border border-borderCol rounded-md"
          />
          {errors.hotel_name && (
            <span className="text-red-500 text-sm">Hotel name is required</span>
          )}
        </div>
        {/* Location Fields */}
        <h3 className="text-lg font-semibold mb-2">Location</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {["city", "state", "country", "zipcode", "landmark", "locality"].map(
            (field) => (
              <div key={field}>
                <label className="block text-sm font-medium capitalize">
                  {field}
                </label>
                <input
                  type="text"
                  {...register(`location.${field}`, { required: true })}
                  className="mt-1 block w-full p-2 bg-backgroundDark text-white border border-borderCol rounded-md"
                />
                {errors.location?.[field] && (
                  <span className="text-red-500 text-sm">{`${field} is required`}</span>
                )}
              </div>
            )
          )}
        </div>
        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description")}
            rows="3"
            className="mt-1 block w-full p-2 bg-backgroundDark text-white border border-borderCol rounded-md"
          />
        </div>
        {/* Hotel Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Hotel Type</label>
          <select
            {...register("hotel_type", { required: true })}
            className="mt-1 block w-full p-2 bg-backgroundDark text-white border border-borderCol rounded-md"
          >
            <option value="">Select Type</option>
            {hotel_types.map(({ value, label }, i) => (
              <option key={i} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors.hotel_type && (
            <span className="text-red-500 text-sm">Hotel type is required</span>
          )}
        </div>
        {/* Facilities */}
        <BtnPurple
          type="button"
          onClick={() => appendFacility("")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mb-3 rounded"
        >
          Add Facility
        </BtnPurple>{" "}
        <div className="grid grid-cols-4 gap-x-3">
          {facilityFields.map((field, index) => (
            <div key={field.id} className="mb-2">
              <input
                type="text"
                {...register(`facilities.${index}`, { required: true })}
                placeholder="Facility"
                className="mt-1 block w-full p-2 bg-backgroundDark text-white border border-borderCol rounded-md"
              />
            </div>
          ))}
        </div>
        {/* Rooms */}
        <h3 className="text-lg font-semibold mb-2 mt-6">Rooms</h3>
        {roomFields.map((room, index) => (
          <div
            key={room.id}
            className="mb-4 border bg-primaryBackground  border-borderCol p-4 rounded-md"
          >
            <h4 className="text-md font-semibold mb-2">Room {index + 1}</h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <select
                {...register(`rooms[${index}].roomType`, { required: true })}
                className="mt-1 block w-full p-2 bg-backgroundDark text-white border border-borderCol rounded-md"
              >
                <option value="">Room Type</option>
                {room_types.map(({ value, label }, i) => (
                  <option key={i} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <input
                type="number"
                {...register(`rooms.${index}.total_rooms`, {
                  required: true,
                  min: 1,
                })}
                placeholder="Total Rooms"
                className="mt-1 block w-full p-2 placeholder:text-primaryText bg-backgroundDark text-white border border-borderCol rounded-md"
              />
              <input
                type="number"
                {...register(`rooms.${index}.available_rooms`, {
                  required: true,
                  min: 0,
                })}
                placeholder="Available Rooms"
                className="mt-1 block w-full p-2 placeholder:text-primaryText bg-backgroundDark text-white border border-borderCol rounded-md"
              />
              <input
                type="number"
                {...register(`rooms.${index}.price`, {
                  required: true,
                  min: 0,
                })}
                placeholder="Price"
                className="mt-1 block w-full p-2 placeholder:text-primaryText bg-backgroundDark text-white border border-borderCol rounded-md"
              />
            </div>
            <BtnPurple
              type="button"
              onClick={() => appendRoomFacility({})} // Append a new facility for this room
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-3"
            >
              Add Facility
            </BtnPurple>

            <div className="grid grid-cols-4 gap-x-3">
              {roomFacilityFields.map((field, idx) => (
                <div key={field.id} className="mb-2">
                  <input
                    type="text"
                    {...register(`rooms[${index}].room_facilities[${idx}]`, {
                      required: true,
                    })}
                    placeholder="Facility"
                    className="mt-1 block w-full p-2 bg-backgroundDark text-white border border-borderCol rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <BtnPurple
          type="button"
          onClick={() =>
            appendRoom({
              roomType: "",
              total_rooms: "",
              available_rooms: "",
              price: "",
              discount: "",
            })
          }
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Room
        </BtnPurple>
        {/* Photos */}
        <CloudinaryPhotoUpload
          register={register}
          setValue={setValue}
          watch={watch}
        />
        {/* Owner Details */}
        <h3 className="text-lg font-semibold mb-2 mt-6">Owner Details</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            {...register("owner.name", { required: true })}
            placeholder="Owner Name"
            className="mt-1 block w-full p-2 bg-backgroundDark text-white border border-borderCol rounded-md"
          />
          <input
            type="email"
            {...register("owner.email", { required: true })}
            placeholder="Owner Email"
            className="mt-1 block w-full p-2 bg-backgroundDark text-white border border-borderCol rounded-md"
          />
          <input
            type="text"
            {...register("owner.phone", { required: true })}
            placeholder="Owner Phone"
            className="mt-1 block w-full p-2 bg-backgroundDark text-white border border-borderCol rounded-md"
          />
        </div>
        {/* Owner Address */}
        <h4 className="text-md font-semibold mb-2">Owner Address</h4>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {["city", "state", "country", "zipcode", "landmark", "locality"].map(
            (field) => (
              <div key={field}>
                <label className="block text-sm font-medium capitalize">
                  {field}
                </label>
                <input
                  type="text"
                  {...register(`owner.address.${field}`, { required: true })}
                  className="mt-1 block w-full p-2 bg-backgroundDark text-white border border-borderCol rounded-md"
                />
                {errors.owner?.address?.[field] && (
                  <span className="text-red-500 text-sm">{`${field} is required`}</span>
                )}
              </div>
            )
          )}
        </div>
        {/* Submit Button */}
        <BtnPurple
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Hotel
        </BtnPurple>
      </form>
    </FormProvider>
  );
};

export default AddHotel;
