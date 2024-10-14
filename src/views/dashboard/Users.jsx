import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import UsersList from './UsersList';
import Loader from '../../components/Loader/Loader';

const Users = () => {
    const { getUsers } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleGetUsers = async () => {
        console.log('here')
        try {
            setLoading(true);
            const response = await getUsers();
            setUsers(response);
            console.log({response})
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGetUsers();
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
            <UsersList usersData={users} handleGetUsers={handleGetUsers} />
        </div>
    );
};

export default Users;