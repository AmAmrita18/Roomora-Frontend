import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import HotelsList from './HotelsList';
import Loader from '../../components/Loader/Loader';

const Hotels = () => {
    const { getHotels } = useContext(AuthContext);
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
        <div className='flex-1 overflow-auto relative z-10 mx-auto py-6 px-4 lg:px-8'>
            <HotelsList hotelsData={hotels} />
        </div>
    );
};

export default Hotels;
