import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import hotelIcon from "../../assets/images/common/hotel_icon.png"


const HotelsList = ({hotelsData}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredHotels, setFilteredHotels] = useState(hotelsData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = hotelsData.filter(
			(hotel) => hotel.hotel_name.toLowerCase().includes(term) || hotel.location.city.toLowerCase().includes(term)
		);

		setFilteredHotels(filtered);
	};

	useEffect(() => {
		console.log({hotelsData})
		setFilteredHotels(hotelsData)
		console.log({filteredHotels})
	}, [hotelsData])

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
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Type
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Location
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Total Rooms
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Available Rooms
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Owner
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredHotels.map((hotel) => (
							<motion.tr
								key={hotel.hotel_id}
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
									{hotel.hotel_name}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{hotel.hotel_type}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{hotel.location.city}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{hotel.total_rooms}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{hotel.available_rooms}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{hotel.owner.name}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<Trash2 size={18} />
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
export default HotelsList;