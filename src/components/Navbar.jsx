import React, { useState, useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '/logo.png';
import BtnPurple from './Buttons/BtnPurple.jsx';
import { AuthContext } from '../context/AuthContext.jsx';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the menu toggle

const Navbar = () => {
  const { user, admin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleNavigateToLogin = () => {
    navigate('/auth', { state: { from: location } });
  };

  return (
    <>
      <div className="w-full gradientBackground py-1 shadow-xl border-b border-borderCol sticky top-0 z-50">
        <div className="w-[90%] max-w-[1200px] py-4 mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex gap-3 items-center">
            <img src={logo} alt="Logo" className="w-[48px] h-[48px]" />
            <h1 className="text-[24px] font-[500] text-primaryText leading-[27px]">Roomora</h1>
          </div>

          {/* Menu Toggle Button (for mobile view) */}
          <div className="lg:hidden ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primaryText text-2xl focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } lg:flex flex-col lg:flex-row items-center justify-center gap-6 absolute lg:static top-[80px] px-6 left-0 w-full lg:w-auto lg:bg-transparent bg-backgroundDark lg:py-0 py-24 lg:border-0 border-t border-borderCol lg:gap-6`}
          >
            <ul className="flex flex-col text-center lg:flex-row lg:items-center  gap-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
                    className={({ isActive }) =>
                      isActive
                        ? 'py-3 px-5 border border-borderCol text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-[#703BF7] to-primaryText leading-[27px] font-[500] text-primaryText rounded-md'
                        : 'text-primaryText py-3 px-5 hover:text-secondryText text-[18px] leading-[27px] font-[500] transition duration-300'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* User/Admin buttons */}
            {user && (
              <NavLink to={'/profile'} className="flex flex-row gap-4">
                <BtnPurple className="px-8">Profile</BtnPurple>
              </NavLink>
            )}
            {admin && (
              <NavLink to={'/dashboard'} className="flex flex-row gap-4">
                <BtnPurple className="px-8">Dashboard</BtnPurple>
              </NavLink>
            )}
            {!user && !admin && (
              <div className="flex flex-row gap-4">
                <BtnPurple onClick={() => handleNavigateToLogin()} className="px-8">
                  Login
                </BtnPurple>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
