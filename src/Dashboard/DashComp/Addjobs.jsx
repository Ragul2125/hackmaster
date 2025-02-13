import React, { useState } from "react";
import "./AddJobs.css";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom";

const AddJobs = () => {
  const [job, setJob] = useState({
    title: "",
    role: "",
    salaryRange: "",
    bond: "",
    jobType: "Online",
    workingHours: "",
    skillsRequired: "",
    qualifications: "",
    description: "",
    contact: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const token = localStorage.getItem("token"); // Get token from localStorage

      // Check if token is present
      if (!token) {
        alert("No token found! Please login.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/jobs/create",
        job,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token for authentication
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Job created:", response.data);
      alert("Job posted successfully!");
      navigate("/hr/dashboard"); // Redirect after success
    } catch (error) {
      console.error("Error posting job:", error.response?.data || error.message);
      if (error.response && error.response.status === 403) {
        alert("You are not authorized to post a job. Only HRs can do this.");
      } else {
        alert(error.response?.data?.message || "Failed to post job.");
      }
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2 className="title">Job Registration</h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="title" placeholder="Job Title" className="input-field" onChange={handleChange} required />
            <input type="text" name="role" placeholder="Role" className="input-field" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <input type="number" name="salaryRange" placeholder="Avg Salary ($)" className="input-field" onChange={handleChange} required />
            <input type="text" name="bond" placeholder="Bond (If any)" className="input-field" onChange={handleChange} />
          </div>

          <div className="form-group">
            <select name="jobType" className="input-field" onChange={handleChange} required>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            <input type="text" name="workingHours" placeholder="Working Hours" className="input-field" onChange={handleChange} />
          </div>

          <input type="text" name="skillsRequired" placeholder="Required Skills (Comma separated)" className="input-field" onChange={handleChange} required />
          <input type="text" name="qualifications" placeholder="Qualification" className="input-field" onChange={handleChange} required />

          <textarea name="description" placeholder="Job Description" className="input-field textarea" onChange={handleChange} required></textarea>
          <input type="text" name="contact" placeholder="Contact Information" className="input-field" onChange={handleChange} required />

          <button type="submit" className="submit-button">Submit Job</button>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
