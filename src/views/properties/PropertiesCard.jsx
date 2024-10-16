import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import BtnBlack from "../../components/Buttons/BtnPurple.jsx";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";
import DropdownBar from "../../components/Dropdown/DropdownBar";

const PropertiesCard = ({ isHome = false }) => {
  const { getHotels } = useContext(AuthContext);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = isHome ? 6 : 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const [records, setRecords] = useState([]);

  const nPage = Math.ceil(filteredHotels.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleGetHotels = async () => {
    try {
      setLoading(true);
      const response = await getHotels();
      setHotels(response);
      setFilteredHotels(response); 
      setRecords(response.slice(firstIndex, lastIndex)); 
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    const filtered = hotels.filter(
      (hotel) =>
        hotel.hotel_name.toLowerCase().includes(term) ||
        hotel.location.city.toLowerCase().includes(term) ||
        hotel.hotel_type.toLowerCase().includes(term)
    );
    setFilteredHotels(filtered); 
    setRecords(filtered.slice(firstIndex, lastIndex)); 
  };

  useEffect(() => {
    setRecords(filteredHotels.slice(firstIndex, lastIndex));
  }, [filteredHotels, currentPage]);

  useEffect(() => {
    handleGetHotels(); 
  }, []);

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="w-full flex flex-col pt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6">
          {records.map((hotel, idx) =>
            ((isHome && idx <= 2) || !isHome) && (
              <Link to={`/property/${hotel._id}`} key={hotel._id}>
                <div
                  key={hotel._id}
                  className="flex flex-col shadow-2xl transition-all duration-700 ease-in-out hover:scale-95 cardsStyling"
                >
                  <img
                    src={hotel.photos[0]}
                    alt="thumbnail"
                    className="w-full h-52 object-cover rounded-xl brightness-90"
                  />
                  <h3 className="text-primaryText text-[24px] py-4 leading-[27.65px] tracking-[-0.6px] ">
                    {hotel.hotel_name}
                  </h3>
                  <p className="customPara">{hotel.rooms.total_rooms}</p>
                  <div className="flex flex-row justify-between py-4">
                    <div className="text-primaryText">
                      <h1 className="text-[15px]">{hotel.location.city}</h1>
                      <h1 className="text-[18px] font-[400]">{hotel.hotel_type}</h1>
                    </div>
                    <BtnBlack>View Details</BtnBlack>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>

        <div className="flex gap-2 items-center justify-center pt-10">
          <button
            disabled={currentPage === 1}
            onClick={prevPage}
            className="mr-3 text-[40px] text-backgroundDark border border-purple bg-purple rounded-full"
          >
            <FaCircleArrowLeft />
          </button>
          {numbers.map((n, i) => (
            <div className="" key={i}>
              <button
                onClick={() => changeCurrentPage(n)}
                className={`text-primaryText px-3 w-[35px] rounded-xl border border-borderCol bg-backgroundDark text-[20px] ${
                  currentPage === n ? "bg-purple" : ""
                } `}
              >
                {n}
              </button>
            </div>
          ))}
          <button
            disabled={currentPage === nPage}
            onClick={nextPage}
            className="ml-3 text-[40px] bg-purple text-backgroundDark rounded-full"
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertiesCard;
