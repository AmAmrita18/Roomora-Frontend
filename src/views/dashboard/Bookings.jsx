import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import BookingsList from './BookingsList';
import Loader from '../../components/Loader/Loader';

const Bookings = () => {
    const { getBookings } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleGetBookings = async () => {
        try {
            setLoading(true);
            const response = await getBookings();
            setBookings(response);
        } catch (error) {
            console.error("Error fetching hotels:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGetBookings();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-1 items-center justify-center h-[80vh]">
                <Loader />
            </div>
        );
    }

    return (
        <div className='flex-1 overflow-auto relative z-10 mx-auto py-6 px-4 lg:px-8'>
            <BookingsList bookingsData={bookings} handleGetBookings={handleGetBookings} />
        </div>
    );
};

export default Bookings;
