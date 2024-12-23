import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { FcCancel } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import hotelIcon from "../../assets/images/common/hotel_icon.png"
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";


const UsersList = ({usersData, handleGetUsers}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(usersData);

	const {updateUserStatus} = useContext(AuthContext)

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = usersData.filter(
			(user) => user.name.toLowerCase().includes(term) || user.address?.city.toLowerCase().includes(term)
		);

		setFilteredUsers(filtered);
	};

	const handleStatusChange = async (userId, status) => {
		const res = await updateUserStatus({userId, status})
		if(!res) {
			toast.error('Please try again!')
		} else {
			toast.success('User Status Updated Successfully')
			handleGetUsers()
		}
	}

	useEffect(() => {
		console.log({usersData})
		setFilteredUsers(usersData)
		console.log({filteredUsers})
	}, [usersData])

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Users List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search products...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Email
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Phone
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Location
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Status
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredUsers.map((user) => (
							<motion.tr
								key={user.hotel_id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
									<img
										src={hotelIcon}
										alt='Hotel Icon'
										className='size-10 rounded-full'
									/>
									{user.name}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{user.email}
								</td>

                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{user.phone || '-'}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{user.address?.city || '-'}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{user.status || '-'}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-red-400 hover:text-red-300 cursor-pointer'>
										{
											user.status === 'active' ? (
												<FcCancel onClick={() => handleStatusChange(user._id, 'disabled')} className="text-2xl"/>
											) : (
												<FaCheckCircle onClick={() => handleStatusChange(user._id, 'active')} className="text-green-600 text-xl" />
											)
										}
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default UsersList;