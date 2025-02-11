import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { FaRegFolderOpen } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import logo from '../../assets/logo.svg'
import { IoIosLogOut } from "react-icons/io";
import { MdTaskAlt } from "react-icons/md";

import '../Navbar.css'
const Navbar = () => {
  return (
    <>
        <div className='side-navbar'>
            <div className='logo-sec'>
                <img src={logo} alt="" />
            </div>
            <div className='nav-sec'>
                <ul>
                    <li><AiOutlineHome/> </li>
                    <li><SlHandbag/></li>
                    <li><GoPeople/></li>
                    <li><MdTaskAlt/></li>
                    <li><SlCalender/></li>
                    
                </ul>
                <div className='logout'><IoIosLogOut/></div>
            </div>
            
        </div>
    </>
  )
}

export default Navbar