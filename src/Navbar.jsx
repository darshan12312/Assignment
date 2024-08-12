import React from 'react'
import { PiDotsNine } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import Profile from "./assets/profile.jpg"

function Navbar() {
  return (
    <div className='h-24 w-full  text-black flex items-center justify-between p-10 ' >
     <div className="div flex gap-20 items-center">
     <PiDotsNine size={30} />
      <ul className=' flex gap-10'>
        <li>Home</li>
        <li>Movie</li>
        <li>TV Shows</li>
        <li>Watchlist</li>
      </ul>
     </div>
      <div className="profileIcons flex gap-5 items-center">
      <FaMagnifyingGlass size={20} />
      <IoIosNotificationsOutline size={30} />
      <img src={Profile} className='h-10 w-10 rounded-full' alt="" />
      </div>
    </div>
  )
}

export default Navbar
