import React from "react";
import "./Dashboard.css";
import Cards from "./DashComp/Cards";
import Table from "./DashComp/Table";
const Dashboard = () => {
  return (
    <div className="dash">
      <div className="add">
        <div className="req">
          <button>Request</button>
        </div>
        <div className="add-jobs">
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
