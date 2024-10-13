import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useContext, useState } from "react";
import Avatar from "react-avatar";
import constants from "../../utils/constants.js";

const UserProfile = () => {
  const { user, logout, updateProfile, updatePassword } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newProfilePhoto, setNewProfilePhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(user?.profile_photo || null);
  const [password, setPassword] = useState('')

  // Admin details form state
  const [userDetails, setUserDetails] = useState(user);

  // Address fields in the form
  const [address, setAddress] = useState({
    city: user?.address?.city || "",
    state: user?.address?.state || "",
    country: user?.address?.country || "",
    zipcode: user?.address?.zipcode || "",
    landmark: user?.address?.landmark || "",
    locality: user?.address?.locality || "",
    type: user?.address?.type || constants.address_type.home,
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
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

  const handleSaveChanges = async () => {
    setUserDetails({...userDetails, address:address})
    await updateProfile(userDetails)
  };

  const handleUpdatePassword = async () => {
    await updatePassword({email: user.email, password})
    setIsEditingPassword(false)
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-xl rounded-2xl p-8 my-8 border border-gray-700 overflow-y-auto w-[80%] m-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Picture and Basic Info */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {previewPhoto ? (
            <img
              src={previewPhoto}
              alt="Profile"
              className="rounded-full w-24 h-24 object-cover mr-4"
            />
          ) : (
            <Avatar name={user.name} round={true} size="60" />
          )}

          <div>
            <h3 className="text-2xl font-semibold text-gray-100">
              {userDetails.name || "John Doe"}
            </h3>
            <p className="text-gray-400">
              {userDetails.email || "john.doe@example.com"}
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
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
          <h4 className="text-lg font-semibold text-gray-100 mb-2">Name</h4>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              className="w-full bg-gray-700 text-white p-2 rounded-md border border-gray-600"
            />
          ) : (
            <p className="text-gray-300">{userDetails.name || "John Doe"}</p>
          )}
        </div>

        {/* Email Field (Non-editable) */}
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
          <h4 className="text-lg font-semibold text-gray-100 mb-2">Email</h4>
          <p className="text-gray-300">{userDetails.email}</p>
        </div>

        {/* Phone Number Field */}
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
          <h4 className="text-lg font-semibold text-gray-100 mb-2">
            Phone Number
          </h4>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              className="w-full bg-gray-700 text-white p-2 rounded-md border border-gray-600"
            />
          ) : (
            <p className="text-gray-300">
              {userDetails.phone || "123-456-7890"}
            </p>
          )}
        </div>

        {/* Address Fields */}
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 md:col-span-2">
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
                    className="w-full bg-gray-700 text-white p-2 rounded-md border border-gray-600"
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
      <div className="bg-gray-900 p-4 rounded-lg flex justify-between border border-gray-700 mt-6">
        <div className="flex flex-col gap-y-3">
          <h4 className="text-lg font-semibold text-gray-100 mb-2">
            Update Password
          </h4>
          {isEditingPassword ? (
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full bg-gray-700 text-white p-2 rounded-md border border-gray-600"
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
              onClick={handleUpdatePassword}
              className="bg-teal-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Save
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-6">
        <button
          onClick={handleLogout}
          className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Logout
        </button>
      </div>
    </motion.div>
  );
};

export default UserProfile;
