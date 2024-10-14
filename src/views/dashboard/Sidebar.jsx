import { FaHotel } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  // { name: "Overview", icon: FaChartBar, color: "#6366f1", href: "/" },
  { name: "Profile", icon: RiUserSettingsFill, color: "#6EE7B7", href: "/dashboard", },
  { name: "Hotels", icon: FaHotel, color: "#8B5CF6", href: "/dashboard/hotels" },
  { name: "Add Hotel", icon: MdAutoGraph, color: "#10B981", href: "/dashboard/addHotel" },
  { name: "Users", icon: FaUsersCog, color: "#6366f1", href: "/dashboard/users" },
  { name: "Bookings", icon: FaChartBar, color: "#10B981", href: "/dashboard/bookings" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div
        className={`h-full gradientBackground  bg-opacity-50 backdrop-blur-md p-4 flex flex-col  border-r border-borderCol`}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-purple flex transition-colors max-w-fit"
        >
          {isSidebarOpen ? (
            <AiOutlineMenuFold className="text-[24px]" />
          ) : (
            <AiOutlineMenuUnfold className="text-[24px]" />
          )}
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
            
          ))}
          
        </nav>
       
      </div>
    </motion.div>
  );
};
export default Sidebar;
