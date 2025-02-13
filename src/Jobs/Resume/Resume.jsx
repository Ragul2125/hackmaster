import React, { useState } from "react";
import "./Resume.css";
import pending from "../../assets/pending.svg";
import appointed from "../../assets/appointed.svg";
import decline from "../../assets/decline.svg";
import Pending from "./Comp/Pending";
import Selectec from "./Comp/Selectec";
import Notselected from "./Comp/Notselected";
import { Outlet, useNavigate } from "react-router-dom";

const Resume = () => {
  const [open,setOpen]=useState(null)
  const handlepending = ()=>{
    setOpen(0)
  }
  const handleselected = ()=>{
    setOpen(1)
  }
  const handleNotselected = ()=>{
    setOpen(2)
  }
  return (
    <div className="resume-pg">
      <div className="resume-cards">
        <div className="resume-card" onClick={handlepending}>
          <div className="content">
            <h4>Pending Appicant</h4>
            <h2>213</h2>
          </div>
          <div className="img">
            <img src={pending} alt="" />
          </div>
        </div>
        <div className="resume-card" onClick={handleselected}>
          <div className="content">
            <h4>Appointed Appicant</h4>
            <h2>203</h2>
          </div>
          <div className="img">
            <img src={appointed} alt="" />
          </div>
        </div>
        <div className="resume-card" onClick={handleNotselected}>
          <div className="content">
            <h4>Declient Appicant</h4>
            <h2>200</h2>
          </div>
          <div className="img">
            <img src={decline} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        {open === 0 && <Pending/>}
        {open === 1 && <Selectec/>}
        {open === 2 && <Notselected/>}

      </div>
    </div>
  );
};

export default Resume;
