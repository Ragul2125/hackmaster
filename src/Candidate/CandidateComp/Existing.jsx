import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import logo from '../../assets/profileImg.svg';

const roleColors = {
  "Front-end": "#ff4d4d",
  "Back-end": "#4d79ff",
  "Full-stack": "#2dbf4b",
  "Designer": "#ffae42",
  "Manager": "#8e44ad",
  "DevOps": "#16a085",
  "QA": "#e67e22"
};

const candidates = [
  { id: "23UAI117", name: "Vishal", project: "CreativeTech", salary: "90000", role: "Front-end" },
  { id: "23UAI118", name: "Rahul", project: "CodeMinds", salary: "95000", role: "Back-end" },
  { id: "23UAI119", name: "Neha", project: "DesignWorks", salary: "87000", role: "Designer" },
  { id: "23UAI120", name: "Karan", project: "BuildSoft", salary: "92000", role: "Full-stack" },
  { id: "23UAI121", name: "Aditi", project: "TestersHub", salary: "88000", role: "QA" },
  { id: "23UAI122", name: "Sanjay", project: "InfraTech", salary: "97000", role: "DevOps" },
  { id: "23UAI123", name: "Ritika", project: "CreativeTech", salary: "89000", role: "Manager" }
];

const Existing = ({ searchQuery }) => {
  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.project.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>  
      <div className='Existing-table'>
        <table>
          <thead>
            <tr>
              <th>Candidate ID</th>
              <th>Name</th>
              <th>Projects Ongoing</th>
              <th>Salary</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.length > 0 ? (
              filteredCandidates.map((candidate, index) => (
                <tr key={index}>
                  <td>{candidate.id}</td>
                  <td>{candidate.name}</td>
                  <td className='projectDpName'>
                    <img src={logo} alt="Project Logo" />
                    {candidate.project}
                  </td>
                  <td>{candidate.salary}</td>
                  <td style={{ color: roleColors[candidate.role] || "#000" }}>
                    {candidate.role}
                  </td>
                  <td><BsThreeDotsVertical /></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "10px" }}>
                  No candidates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Existing;
