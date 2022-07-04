import React, { useState} from 'react'
import {FiSearch} from "react-icons/fi"
import {MdNotifications} from "react-icons/md"
import styled from 'styled-components'
import pics from "../image/profile.jpeg"
import { AiOutlineMenu } from "react-icons/ai"



const Navbar = () => {
 
  
  return (
    <Nav>
    <div className="bg-slate-200 dark:bg-slate-800">  
      <div className='flex w-full justify-between p-8 font-Mulish '>
        <div className='flex gap-6 '>       
        <AiOutlineMenu className='mt-2 text-xl cursor-pointer text-gray-400 '  onClick={() => {}}/>
        <h2 className="text-2xl font-bold dark:text-gray-400">Overview</h2>
        </div>      
        <div className='flex gap-x-6 '>
          <div className='flex gap-x-6 text-gray-400 pt-1 '>
            <FiSearch/>
            <MdNotifications />       
          </div>
          <div className='flex gap-x-4 '>
            <h1 className='text-gray-400'>|</h1>
            <p className='text-base font-normal dark:text-gray-400'>Abby Ferdinand</p>        
            <img src={pics} alt="" className="w-7 h-7 rounded-full "/>
          </div>            
        </div>        
      </div>
    </div>
    </Nav>
  )
}

const Nav = styled.div`

`
export default Navbar