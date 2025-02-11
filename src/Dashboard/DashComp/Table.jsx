import React from "react";
import jobsLogo from "../../assets/jobs-logo.svg";

const Table = () => {
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Jobs</th>
              <th>Positions Left</th>
              <th>Applications</th>
              <th>Interviewed</th>
              <th>Rejected</th>
              <th>Feedback Pending</th>
              <th>Offered</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(12)].map((_, index) => (
              <tr key={index}>
                <td>
                  <img src={jobsLogo} alt="Job Logo" />
                  <div className="job-title">
                    <h2>Senior Data Analyst</h2>
                  </div>
                </td>
                <td>3</td>
                <td>123</td>
                <td>40</td>
                <td>33</td>
                <td>7</td>
                <td>2</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
