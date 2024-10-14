import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/logo.png'
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdCall, MdLocationPin  } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const navOptions = [
  {
    id: `FNAV001`,
    title: `Home`,
    url: `/`,
  },
  {
    id: `FNAV002`,
    title: `About Us`,
    url: `/about`,
  },
  {
    id: `FNAV003`,
    title: `Properties`,
    url: `/properties`,
  },
  {
    id: `FNAV004`,
    title: `Contact Us`,
    url: `/contact`,
  },
]

const Footer = () => {
  return (
    <div className='w-full '>
      <div className="w-[90%] max-w-[1200px] mx-auto py-12 border-t border-borderCol flex flex-col justify-center items-center gap-y-4 px-6 ">
        <div className="flex pb-8 items-center gap-x-2">
          <img src={logo} alt="..." className='w-[32px] h-[32px] object-cover' />
          <h2 className='text-[24px]  font-[500] text-primaryText leading-[27px]'>Roomora</h2>
        </div>
        <div className='flex items-center'>
          <ul className='flex '>
            {navOptions.map(({id, title, url}) => (
              <li key={id}>
                <NavLink 
                  to={url}
                  className={({ isActive }) =>
                    isActive
                      ? 'py-3 px-5 bg-secondryBackground border border-borderCol text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-[#703BF7] to-primaryText leading-[27px] font-[500] text-primaryText rounded-md'
                      : 'text-primaryText py-3 px-5 hover:text-secondryText text-[18px] leading-[27px] font-[500] transition duration-300'
                  }
                >
                  {title}
                </NavLink>                
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:flex-row flex-col-reverse gap-y-3 md:gap-y-0 gap-x-3 mt-4 mb-2 items-center text-primaryText">
          <div className="flex gap-x-2 items-center">
            <FaEnvelope className='text-[16px] text-violet-500' />
            <p className='text-sm font-[500]'>contact@roomora.com</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <MdCall className='text-[16px] text-violet-500' />
            <p className='text-sm font-[500]'>+91 xxxxxx4340</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <MdLocationPin className='text-[16px] text-violet-500' />
            <p className='text-sm font-[500]'>Bharat</p>
          </div>
        </div>
        <div className="w-full mx-auto mt-6 py-4 flex flex-col md:flex-row justify-center items-center md:justify-between bg-[#1C1C1C] px-4 rounded-xl md:rounded-full">
          <div className="flex gap-x-2">
            <div className="flex gap-x-2 items-center px-2 py-2 rounded-full cursor-pointer bg-[#703BF7] w-[32px] h-[32px]">
              <FaFacebook className='text-[16px] text-primaryText' />
            </div>
            <div className="flex gap-x-2 items-center px-2 py-2 rounded-full cursor-pointer bg-[#703BF7] w-[32px] h-[32px]">
              <FaLinkedin className='text-[16px] text-primaryText' />
            </div>
            <div className="flex gap-x-2 items-center px-2 py-2 rounded-full cursor-pointer bg-[#703BF7] w-[32px] h-[32px]">
              <FaXTwitter className='text-[16px] text-primaryText' />
            </div>
          </div>
          <div className="flex gap-x-2 mt-3 md:mt-0 text-secondryText items-center text-sm">
            &copy;2024 Roomora | All Rights Reserved
          </div>
          <div className="flex gap-x-2 text-[#B3B3B3] items-center">
            <NavLink to={"#"} className={`py-2 text-sm`}>
              Privacy Policy
            </NavLink>
             |
            <NavLink to={"#"} className={`py-2 text-sm`}>
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer