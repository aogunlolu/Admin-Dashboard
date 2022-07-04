import React from 'react'
import {AiFillAlert, AiFillChrome, AiFillSetting } from "react-icons/ai"
import { FaTicketAlt} from "react-icons/fa"
import {BsPeople, BsFillPersonFill, BsBookmarkStarFill, BsLightbulbFill} from 'react-icons/bs'
import {MdArticle} from "react-icons/md"
import { Link } from 'react-router-dom'
import {AiOutlineClose } from "react-icons/ai"

const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-fit pt-6 md:pt-8 pb-6 px-6 bg-zinc-800 dark:bg-slate-900 font-Mulish">
        <div className='flex justify-end'>
        <AiOutlineClose className='closetab text-xl cursor-pointer mb-4  text-gray-400' onClick={() => {}}/>
        </div>    
        <div className="logo flex gap-5 ">
            <AiFillAlert className=' w-8 h-8 text-blue-500'/>
            <h2 className="text-lg text-gray-400 py-2 tracking-wider">Dashboard kit</h2>
        </div>
        <ul className='text-gray-500 text-lg pt-11 cursor-pointer'>
            <Link to="/home" className="flex gap-6 py-4 hover:bg-zinc-700 hover:text-neutral-200"> 
                <AiFillChrome className=' w-4 h-7'/>
                <li>Overview</li>
            </Link>
            <Link to='/ticket' className="flex gap-6 py-4 hover:bg-zinc-700 hover:text-neutral-200">
                <FaTicketAlt className=' w-4 h-7'/>
                <li>Tickets</li>
            </Link>
            <Link to="/editor"className="flex gap-6 py-4 hover:bg-zinc-700 hover:text-neutral-200">
                <BsLightbulbFill className=' w-4 h-7'/>
                <li>Editor</li>
            </Link>
            <Link to="/employee" className="flex gap-6 py-4 hover:bg-zinc-700 hover:text-neutral-200">
                <BsPeople className=' w-4 h-7'/>
                <li>Employees</li>            
            </Link>
            <Link to="/contact" className="flex gap-6 py-4 hover:bg-zinc-700 hover:text-neutral-200">
                <BsFillPersonFill className=' w-4 h-7'/>
                <li>Contacts</li>
            </Link>
            <Link to="/calender" className="flex gap-6 py-4 hover:bg-zinc-700 hover:text-neutral-200 ">
                <MdArticle className=' w-4 h-7'/>
                <li>Calender</li>
            </Link>           
        </ul>
        <ul className='text-gray-500 text-lg border-t border-zinc-700 mt-6'>
            <div className="flex gap-6 py-4 hover:bg-zinc-700 hover:text-neutral-200 ">
                <AiFillSetting className=' w-4 h-7'/>
                <li>Settings</li>
            </div>
            <div className="flex gap-6 py-4 hover:bg-zinc-700 hover:text-neutral-200">
                <BsBookmarkStarFill className=' w-4 h-7'/>
                <li>Subscription</li>
            </div>    
        </ul>
    </div>
  )
}

export default Sidebar