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
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const Navigate = useNavigate();
    const handledash = ()=>{
        Navigate("/hr/dashboard")
    }
    const handlejob = ()=>{
        Navigate("/hr/jobs")
    }
    const handlecandidate = ()=>{
        Navigate("/hr/candidate")
    }
    const handletask = ()=>{
        Navigate("/hr/task")
    }
    const handleleave = ()=>{
        Navigate("/hr/leave")
    }

  return (
    <>
        <div className='side-navbar'>
            <div className='logo-sec'>
                <img src={logo} alt="" />
            </div>
            <div className='nav-sec'>
                <ul>
                    <li onClick={handledash}><AiOutlineHome/> </li>
                    <li onClick={handlejob}><SlHandbag/></li>
                    <li onClick={handlecandidate}><GoPeople/></li>
                    <li onClick={handletask}><MdTaskAlt/></li>
                    <li onClick={handleleave}><SlCalender/></li>
                    
                </ul>
                <div className='logout'><IoIosLogOut/></div>
            </div>
            
        </div>
    </>
  )
}

export default Navbar