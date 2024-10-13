import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Loader from '../components/Loader/Loader';

const Test = () => {
    const { user, getHotels, bookHotel } = useContext(AuthContext);
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleGetHotels = async () => {
        try {
            setLoading(true);
            const response = await getHotels();
            setHotels(response);
        } catch (error) {
            console.error("Error fetching hotels:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleBooking = async (hotelId, roomId) => {
        // console.log("Ola!! Hotel Booked!!!")
        console.log({hotelId, roomId})
        await bookHotel({user: user._id, hotel: hotelId, room: roomId, "check_in": "2024-10-23T23:12:20.000Z","check_out": "2024-10-25T23:12:20.000Z" })
    }

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
    <div className="w-full h-full flex justify-center items-center text-white">
        {
            hotels && hotels.map((hotel) => (
                <div className="py-3 px-4 border-blue-400 flex flex-col gap-y-3">
                    <img src={hotel.photos[0]} alt="img" className='w-[240px] h-[240px]' />
                    <h3 className='text-xl font-semibold'>{hotel.hotel_name}</h3>
                    <button onClick={() => handleBooking(hotel._id, hotel.rooms[0]._id)} className='py-2 px-2 border border-purple'>Book Hotel</button>
                </div>
            ))
        }
    </div>
  )
}

export default Test