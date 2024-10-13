import { motion } from "framer-motion";
import { Edit, Search, Trash2, Printer } from "lucide-react";
import { useEffect, useState } from "react";
import hotelIcon from "../../assets/images/common/hotel_icon.png"
import InvoicePage from "./InvoicePage";


const BookingsList = ({bookingsData}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredBookings, setFilteredBookings] = useState(bookingsData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = bookingsData.filter(
			(booking) => booking.user.name.toLowerCase().includes(term) || booking.hotel.hotel_name.toLowerCase().includes(term) 
		);

		setFilteredBookings(filtered);
	};

	useEffect(() => {
		console.log({bookingsData})
		setFilteredBookings(bookingsData)
		console.log({filteredBookings})
	}, [bookingsData])

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Hotels List</h2>
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
								Hotel Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Tenant Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Tenant Email
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Tenant Phone
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Check in
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Check out
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredBookings && filteredBookings.map((booking) => (
							<motion.tr
								key={booking.hotel_id}
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
									{booking.hotel.hotel_name}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{booking.user.name}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{booking.user.email}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{booking.user.phone || '-'}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{booking.check_in}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{booking.check_out}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<InvoicePage bookingDetails={booking} />
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default BookingsList;