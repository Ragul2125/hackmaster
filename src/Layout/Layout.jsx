import React from 'react';
import './Layout.css';
import { Routes, Route } from "react-router-dom";

// Importing pages
import Dashboard from "../Dashboard/Dashboard";
import Navbars from "../Navbar/Navbar";
import Jobs from "../Jobs/Jobs.jsx";
import Login from "../Login/Login.jsx";
import SignUp from "../Login/SignUp.jsx";
import Candidate from '../Candidate/Candidate.jsx';
import Existing from '../Candidate/CandidateComp/Existing.jsx';
import Requested from '../Candidate/CandidateComp/Requested.jsx';
import Task from '../Task/Task.jsx';
import Resume from '../Jobs/Resume/Resume.jsx';
import View from '../Jobs/Resume/Comp/View.jsx'
import Attendance from '../Attendance/Attendance.jsx'
const Layout = () => {
  return (
    <div className="client-layout">
      <Navbars />
      <div className="client-content">
        <Routes>
          {/* Dashboard */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* Jobs Route with Nested Resume Route */}
          <Route path="jobs" element={<Jobs />}>
            {/* Resume is nested under Jobs */}
            
          </Route>

          {/* Candidate Routes */}
          <Route path="candidate" element={<Candidate />}>
            <Route path="existing" element={<Existing />} />
           
          </Route>

          {/* Task Route */}
          <Route path="task" element={<Task />} />
          <Route path="resume" element={<Resume />} />
          <Route path="view" element={<View />} />
          <Route path="requested" element={<Requested />} />
          <Route path="attendence" element={<Attendance />} />


          {/* Authentication Routes */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
