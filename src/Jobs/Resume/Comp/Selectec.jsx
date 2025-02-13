import React from 'react'
import dp from '../../../assets/profileImg.svg'
import { FaLinkedinIn } from "react-icons/fa";
import '../Resume.css'
const Appointed = () => {
  return (
    <div className='appointed-pg'>
        <div className='appointed-card'>
            <div className='left-side'>
                <img src={dp}/>
                <div className='aa'>
                    <h3>Vidhesh</h3>
                    <div>
                        <p>vidhesh@gmail.com</p>
                        <p>|</p>
                        <p>+91 9360534654</p>
                    </div>
                    <p><FaLinkedinIn/></p>
                </div>
            </div>
            <div className='right-side'>
                <div className='bb'>
                    <p>Round</p>
                    <p>Assigned To</p>
                    <p>Interview Date</p>
                </div>
                <div className='cc'>
                    <input type='text' placeholder='eg:technical'/>
                    <input type='text' placeholder='eg:ragul'/>
                    <input type='date'/>
                </div>
            </div>
        </div>
        <div className='appointed-card'>
            <div className='left-side'>
                <img src={dp}/>
                <div className='aa'>
                    <h3>Vidhesh</h3>
                    <div>
                        <p>vidhesh@gmail.com</p>
                        <p>|</p>
                        <p>+91 9360534654</p>
                    </div>
                    <p><FaLinkedinIn/></p>
                </div>
            </div>
            <div className='right-side'>
                <div className='bb'>
                    <p>Round</p>
                    <p>Assigned To</p>
                    <p>Interview Date</p>
                </div>
                <div className='cc'>
                    <input type='text' placeholder='eg:technical'/>
                    <input type='text' placeholder='eg:ragul'/>
                    <input type='date'/>
                </div>
            </div>
        </div>
        <div className='appointed-card'>
            <div className='left-side'>
                <img src={dp}/>
                <div className='aa'>
                    <h3>Vidhesh</h3>
                    <div>
                        <p>vidhesh@gmail.com</p>
                        <p>|</p>
                        <p>+91 9360534654</p>
                    </div>
                    <p><FaLinkedinIn/></p>
                </div>
            </div>
            <div className='right-side'>
                <div className='bb'>
                    <p>Round</p>
                    <p>Assigned To</p>
                    <p>Interview Date</p>
                </div>
                <div className='cc'>
                    <input type='text' placeholder='eg:technical'/>
                    <input type='text' placeholder='eg:ragul'/>
                    <input type='date'/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Appointed