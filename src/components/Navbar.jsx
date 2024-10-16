import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '/logo.png';
import BtnPurple from './Buttons/BtnPurple.jsx';
import { AuthContext } from '../context/AuthContext.jsx';

const Navbar = () => {
  const {user, admin} = useContext(AuthContext) 

  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleNavigateToLogin = () => {
    navigate("/auth", { state: { from: location } });
  }

  return (
    <>
      <div className="w-full gradientBackground py-1 shadow-xl border-b border-borderCol sticky top-0 z-50">
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
              <BtnPurple onClick={() => handleNavigateToLogin()} className="px-8">Login</BtnPurple>
            </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
