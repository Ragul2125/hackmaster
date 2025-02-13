import React, { useState } from "react";
import "./Dashboard.css";
import Cards from "./DashComp/Cards";
import Table from "./DashComp/Table";
import AddJobs from "./DashComp/Addjobs";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  // const [openpop,setOpenPop] =useState(false)
  const Navigate = useNavigate();
  const handleOpen = ()=>{
    Navigate("/hr/addjobs")
  }
  const handlereq = ()=>{
    Navigate("/hr/candidate")
  }

  return (
    <div className="dash">
      <div className="add">
        <div className="req" onClick={handlereq}>
          <button>Request</button>
        </div>
        <div className="add-jobs" onClick={handleOpen}>
          <button>Add Job</button>
        </div>
      </div>
      <div className="cards-container">
        <Cards />
      </div>
      <Table />
    </div>

  );
};

export default Dashboard;
