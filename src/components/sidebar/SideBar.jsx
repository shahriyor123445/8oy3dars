import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { LuCalendar } from "react-icons/lu";
import { FaStickyNote } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

const SideBar = () => {
  return (
    <>
      <header className='w-[400px] h-[720px] bg-white flex items-center justify-center'>
        <nav className='w-[300px] h-[620px] bg-gray-200 rounded-3xl'>
            <div className='flex justify-center gap-28 mt-2'>
                <h2 className='text-4xl font-extrabold'>Menu</h2>
                <GiHamburgerMenu className='text-3xl mt-[11px]' />
            </div>
            <div>
                <FaSearch className='absolute mt-6 ml-10' />
                <input className='ml-8 w-52 bg-gray-300 h-8 rounded-xl mt-4 pl-8' type="search" placeholder='Search...' />
            </div>
            <div className='ml-8 mt-8'>   
                <h4 className='text-xl font-bold'>Tasks</h4>
                <ul className='ml-4'>
                    <li className='flex items-center mt-2 gap-2'>
                        <FaAngleDoubleRight />
                        <NavLink to='/'>Upcoming</NavLink>
                    </li>
                    <li className='flex items-center mt-2 gap-2'>
                        <AiOutlineMenuUnfold />
                        <NavLink to='/dashboard'>Today</NavLink>
                    </li>
                    <li className='flex items-center mt-2 gap-2'>
                        <LuCalendar />
                        <NavLink to='/about'>Calendar</NavLink>
                    </li>
                    <li className='flex items-center mt-2 gap-2'>
                        <FaStickyNote />
                        <NavLink to='/students'>Sticky Wall</NavLink>
                    </li>
                </ul>
            </div>
            <div className='ml-8 mt-6'>
                <h4 className='text-xl font-bold'>Lists</h4>
                <ul className='ml-2'>
                    <li className='flex items-center mt-2 gap-2 bg-gray-300 w-52 p-[2px] pl-2 rounded-xl'>
                        <p className='w-6 h-4 rounded-lg bg-red-500'></p>
                        <NavLink>Work</NavLink>
                    </li>
                    <li className='flex items-center mt-2 gap-2 bg-gray-300 w-52 p-[2px] pl-2 rounded-xl'>
                        <p className='w-6 h-4 rounded-lg bg-green-500'></p>
                        <NavLink>Personal</NavLink>
                    </li>
                    <li className='flex items-center mt-2 gap-2 bg-gray-300 w-52 p-[2px] pl-2 rounded-xl'>
                        <p className='w-6 h-4 rounded-lg bg-blue-500'></p>
                        <NavLink>Study</NavLink>
                    </li>
                    <li className='flex items-center mt-2 gap-2'>
                        <IoAddCircleOutline />
                        <NavLink>Add new list</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='flex items-center mt-16 ml-4 gap-2 text-xl font-semibold'>
                        <IoSettingsOutline />
                        <NavLink to='/'>Settings</NavLink>
                    </li>
                    <li className='flex items-center mt-2 ml-4 gap-2 text-xl font-semibold'>
                        <MdOutlineLogout />
                        <NavLink to='/login'>Sign Out</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
      </header>
    </>
  )
}

export default SideBar