import React, { useState } from "react";
import "./Attendance.css";
import Permission from "./AttendanceComp/Permission";
import LeaveTaken from "./AttendanceComp/LeaveTaken";
const Attendance = () => {
  const [open,setOpen]=useState(null);
  const handlepending = ()=>{
    setOpen(0)
  }
  const handleleave=()=>{
    setOpen(1)
  }
  return (
    <>
      <div className="Attendance-pg">
        <div className="top">
          
          <div className="card-a"  onClick={handlepending} >
            <div className="number-3">
              <h2>10</h2>
            </div>
            <div className="p">
              <h3>Pending</h3>
              <h3>Requests</h3>
            </div>
          </div>
          <div className='card-a' onClick={handleleave}>
                    <div className='number-2'>
                            <h2>23</h2>
                    </div>
                        <div className='p'>
                            <h3>Approved</h3>
                            <h3>Persons</h3>
                        </div>
                </div>
                <div className="card-a">
            <div className="number-1">
              <h2>16</h2>
            </div>
            <div className="p">
              <h3>Total</h3>
              <h3>Present</h3>
            </div>
          </div>
        </div>
        
        {open ===0 && <Permission/>}
       {open ===1 && <LeaveTaken/>}
      </div>
    </>
  );
};

export default Attendance;
