import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import Avatar from "react-avatar";
import constants from "../../utils/constants.js";
import BtnBlack from "../../components/Buttons/BtnBlack.jsx";

const AdminProfilePage = () => {
  const { admin, logout, updateProfile } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newProfilePhoto, setNewProfilePhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(
    admin?.profile_photo || null
  );

  // Admin details form state
  const [adminDetails, setAdminDetails] = useState(admin);

  // Address fields in the form
  const [address, setAddress] = useState({
    city: admin?.address?.city || "",
    state: admin?.address?.state || "",
    country: admin?.address?.country || "",
    zipcode: admin?.address?.zipcode || "",
    landmark: admin?.address?.landmark || "",
    locality: admin?.address?.locality || "",
    type: admin?.address?.type || constants.address_type.home,
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setAdminDetails({
      ...adminDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  // Handle profile photo upload and preview
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePhoto(file);

      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
	setAdminDetails({...adminDetails, address:address})
    updateProfile(adminDetails)
    alert("Profile Updated!");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      className="bg-secondryBackground bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-xl rounded-2xl p-8 m-8 border border-borderCol overflow-y-auto w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {previewPhoto ? (
            <img
              src={previewPhoto}
              alt="Profile"
              className="rounded-full w-24 h-24 object-cover mr-4"
            />
          ) : (
            <Avatar
              name={admin.name}
              round={true}
              size="60"
            />
          )}

          <div>
            <h3 className="text-2xl font-semibold text-gray-100">
              {adminDetails.name}
            </h3>
            <p className="text-gray-400">
              {adminDetails.email}
            </p>
          </div>
        </div>
        <button
          onClick={handleEditToggle}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* Form Section */}
      {isEditing && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-100 mb-2">
            Update Profile Photo
          </h4>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePhotoChange}
            className="block w-full text-gray-200 file:bg-indigo-600 file:border-none file:py-2 file:px-4 file:rounded-lg file:cursor-pointer file:mr-4"
          />
        </div>
      )}

      {/* Admin Details Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="gradientBackground p-4 rounded-lg border border-borderCol">
          <h4 className="text-lg font-semibold text-gray-100 mb-2">Name</h4>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={adminDetails.name}
              onChange={handleInputChange}
              className="w-full bg-primaryBackground text-white p-2 rounded-md border border-borderCol"
            />
          ) : (
            <p className="text-gray-300">{adminDetails.name}</p>
          )}
        </div>

        {/* Email Field (Non-editable) */}
        <div className="gradientBackground p-4 rounded-lg border border-borderCol">
          <h4 className="text-lg font-semibold text-gray-100 mb-2">Email</h4>
          <p className="text-gray-300">{adminDetails.email}</p>
        </div>

        {/* Phone Number Field */}
        <div className="gradientBackground p-4 rounded-lg border border-borderCol">
          <h4 className="text-lg font-semibold text-gray-100 mb-2">
            Phone Number
          </h4>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={adminDetails.phone}
              onChange={handleInputChange}
              className="w-full bg-primaryBackground text-white p-2 rounded-md border border-borderCol"
            />
          ) : (
            <p className="text-gray-300">
              {adminDetails.phone || "123-456-7890"}
            </p>
          )}
        </div>

        {/* Address Fields */}
        <div className="gradientBackground p-4 rounded-lg border border-borderCol md:col-span-2">
          <h4 className="text-lg font-semibold text-gray-100 mb-2">Address</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(address).map((field) => (
              <div key={field}>
                <label className="text-gray-400 capitalize">{field}</label>
                {isEditing ? (
                  <input
                    type="text"
                    name={field}
                    value={address[field]}
                    onChange={handleAddressChange}
                    className="w-full bg-primaryBackground text-white p-2 rounded-md border border-borderCol"
                  />
                ) : (
                  <p className="text-gray-300">{address[field] || field}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="flex justify-end mt-6">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-200"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      )}
      {/* Password Update Section */}
      <div className="gradientBackground p-4 rounded-lg flex justify-between border border-borderCol mt-6">
        <div className="flex flex-col gap-y-3">
          <h4 className="text-lg font-semibold text-gray-100 mb-2">
            Update Password
          </h4>
          {isEditingPassword ? (
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full bg-primaryBackground text-white p-2 rounded-md border border-borderCol"
            />
          ) : (
            <p className="text-gray-300">******</p>
          )}
        </div>
        <div className="flex flex-col gap-y-3">
          <button
            onClick={() => setIsEditingPassword(!isEditingPassword)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            {isEditingPassword ? "Cancel" : "Edit Password"}
          </button>
          {isEditingPassword && (
            <button
              onClick={() => setIsEditingPassword(!isEditingPassword)}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Save
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-6">
        <BtnBlack
          onClick={handleLogout}
          className="hover:border hover:border-red-700"
        >
          Logout
        </BtnBlack>
      </div>
    </motion.div>
  );
};

export default AdminProfilePage;
