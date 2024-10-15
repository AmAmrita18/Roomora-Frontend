import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import hotelIcon from "../../assets/images/common/hotel_icon.png";
import EditHotelModal from "./EditHotelModal"; 
import { AuthContext } from "../../context/AuthContext";

const HotelsList = ({ hotelsData, handleGetHotels }) => {
  const {admin, deleteHotel} = useContext(AuthContext)
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);
  const [roomsData, setRoomsData] = useState([])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = hotelsData.filter(
      (hotel) =>
        hotel.hotel_name.toLowerCase().includes(term) ||
        hotel.location.city.toLowerCase().includes(term) ||
        hotel.hotel_type.toLowerCase().includes(term)

    );
    setFilteredHotels(filtered);
  };

  useEffect(() => {
    const aggregatedRooms = filteredHotels.map((hotel) => {
      const totalRooms = hotel.rooms.reduce((acc, room) => acc + room.total_rooms, 0);
      const availableRooms = hotel.rooms.reduce((acc, room) => acc + room.available_rooms, 0);
  
      return {
        hotel_name: hotel.hotel_name,
        location: hotel.location.city, 
        total_rooms: totalRooms,
        available_rooms: availableRooms,
      };
    });
  
    setRoomsData(aggregatedRooms);
    console.log({aggregatedRooms})
  }, [filteredHotels, hotelsData]);
  

  const handleEdit = (hotel) => {
    setSelectedHotel(hotel); 
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
    setSelectedHotel(null); 
  };

  const handleHotelDelete = async (hotel_id) => {
    const success = await deleteHotel({email: admin.email, hotel_id})
    if(success) {
      await handleGetHotels()
    }
  }

  return (
    <>
      <motion.div
        className={`bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8`}
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
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Total Rooms
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Available Rooms
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {filteredHotels.map((hotel, idx) => (
                <motion.tr
                  key={hotel._id}
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
                    {hotel.hotel_name}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {hotel.hotel_type}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {hotel.location.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {roomsData[idx]?.total_rooms}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {roomsData[idx]?.available_rooms}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {hotel.owner.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button
                      className="text-indigo-400 hover:text-indigo-300 mr-2"
                      onClick={() => handleEdit(hotel)} 
                    >
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleHotelDelete(hotel._id)} className="text-red-400 hover:text-red-300">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        {isModalOpen && (
          <EditHotelModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            hotelData={selectedHotel} 
            handleGetHotels={handleGetHotels}
          />
        )}
      </motion.div>
      <div className="py-6 px-4 mb-8">
      </div>
    </>
  );
};

export default HotelsList;
