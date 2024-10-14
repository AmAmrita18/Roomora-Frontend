import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../../components/Loader/Loader";
import { motion } from "framer-motion";
import { Edit, Search, Trash2, Printer } from "lucide-react";
import hotelIcon from "../../assets/images/common/hotel_icon.png";
import InvoicePage from "../dashboard/InvoicePage";
const BookingsHistory = () => {
  const { getUserBookings, user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBookings, setFilteredBookings] = useState(bookings);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = bookings.filter(
      (booking) =>
        booking.user.name.toLowerCase().includes(term) ||
        booking.hotel.hotel_name.toLowerCase().includes(term)
    );

    setFilteredBookings(filtered);
  };
  const handleGetUserBookings = async () => {
    try {
      setLoading(true);
      const response = getUserBookings(user._id).then(res => setFilteredBookings(res));
    //   setBookings(response);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
        console.log({bookings})
        setFilteredBookings(bookings)
        console.log({filteredBookings})
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUserBookings();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto relative z-10 mx-auto py-6 px-4 lg:px-8">
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-100">Hotels List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Hotel Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Room Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Check in
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Check out
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Total Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Download Invoice
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {filteredBookings &&
                filteredBookings.map((booking) => (
                  <motion.tr
                    key={booking.hotel_id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                      <img
                        src={hotelIcon}
                        alt="Hotel Icon"
                        className="size-10 rounded-full"
                      />
                      {booking.hotel.hotel_name}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {booking.room.roomType}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(booking.check_in).getDate() + "-" + new Date(booking.check_in).getMonth() + "-" + new Date(booking.check_in).getFullYear()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(booking.check_out).getDate() + "-" + new Date(booking.check_out).getMonth() + "-" + new Date(booking.check_out).getFullYear()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Rs. {booking.totalPrice}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <InvoicePage bookingDetails={booking} />
                    </td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </div>
      </motion.div>{" "}
    </div>
  );
};

export default BookingsHistory;
