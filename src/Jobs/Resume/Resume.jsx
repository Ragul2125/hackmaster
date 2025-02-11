import React from "react";
import "./Resume.css";
import pending from "../../assets/pending.svg";
import appointed from "../../assets/appointed.svg";
import decline from "../../assets/decline.svg";
import Pending from "./Comp/Pending";
import Selectec from "./Comp/Selectec";
import Notselected from "./Comp/Notselected";

const Resume = () => {
  return (
    <div className="resume-pg">
      <div className="resume-cards">
        <div className="resume-card">
          <div className="content">
            <h4>Pending Appicant</h4>
            <h2>213</h2>
          </div>
          <div className="img">
            <img src={pending} alt="" />
          </div>
        </div>
        <div className="resume-card">
          <div className="content">
            <h4>Appointed Appicant</h4>
            <h2>203</h2>
          </div>
          <div className="img">
            <img src={appointed} alt="" />
          </div>
        </div>
        <div className="resume-card">
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
        {/* <Pending/> */}
        <Selectec/>
        {/* <Notselected/> */}
      </div>
    </div>
  );
};

export default Resume;
