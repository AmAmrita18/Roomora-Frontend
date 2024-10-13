import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.png';
import BtnPurple from './Buttons/BtnPurple.jsx';
import LoginForm from './Forms/LoginForm.jsx';
import { IoIosCloseCircle } from "react-icons/io";
import { AuthContext } from '../context/AuthContext.jsx';

const Navbar = () => {
  const {user, admin} = useContext(AuthContext) 
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const [showLogin, setShowLogin] = useState(false); // State to toggle login form modal

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };

  const closeModal = () => {
    setShowLogin(false);
  };

  return (
    <>
      <div className="w-full gradientBackground py-1 shadow-xl border-b-[0.5px] border-borderCol">
        <div className="w-[80%] max-w-[1200px] py-4 mx-auto flex justify-between">
          <div className="flex gap-3 items-center">
            <img src={logo} alt="Logo" width={48} height={48} className="w-[48px] h-[48px]" />
            <h1 className="text-[24px] font-[500] text-primaryText leading-[27px]">Roomora</h1>
          </div>
          <div className="flex items-center">
            <ul className="flex ">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'py-3 px-5  border border-borderCol text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-[#703BF7] to-primaryText leading-[27px] font-[500] text-primaryText rounded-md'
                        : 'text-primaryText py-3 px-5 hover:text-secondryText text-[18px] leading-[27px] font-[500] transition duration-300'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {
            user && (
              <NavLink to={"/profile"} className="flex flex-row gap-4">
                <BtnPurple className="px-8">Profile</BtnPurple>
              </NavLink>
            ) 
          }
          {
            admin && (
              <NavLink to={"/dashboard"} className="flex flex-row gap-4">
                <BtnPurple className="px-8">Dashboard</BtnPurple>
              </NavLink>
            )
          }
          {
            !user && !admin && (
            <div className="flex flex-row gap-4">
              <BtnPurple onClick={toggleLoginForm} className="px-8">Login</BtnPurple>
            </div>
            )
          }
        </div>
      </div>

      {/* Modal for Login Form */}
      {showLogin && (
        <div className="fixed inset-0 bg-backgroundDark  bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-secondryBackground bg-opacity-90 border border-purple  p-8 rounded-lg shadow-2xl w-full max-w-md relative">
            <button
              className="absolute top-1 right-1 "
              onClick={closeModal}
            >
              <IoIosCloseCircle className='text-[32px] text-primaryBackground hover:text-purple rounded-full  hover:text-opacity-60'/>
            </button>
            <LoginForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
