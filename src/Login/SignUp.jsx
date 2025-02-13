import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import Image from "../assets/sigin.svg";
import logo from "../assets/logo.svg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNo: "",
    companyName: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 console.log(formData);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/create-Hr", formData);
      console.log(response.data);
      alert("Sign up successful!");
    } catch (err) {
      console.error(err);
      setError("Signup failed. Try again.");
    }
  };

  return (
    <div className="full-pg">
      <div className="login-card">
        <div className="name-sec">
          <img src={logo} alt="logo" />
          <h2>Hr Sync</h2>
        </div>
        <div className="both">
          <div className="img">
            <img src={Image} alt="signup" />
          </div>
          <div className="v">
            <div className="t">
              <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phoneNo"
                placeholder="Phone Number"
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />

              {error && <p className="error">{error}</p>}

              <div className="btn">
                <button type="submit" className="login-btn">Sign Up</button>
                <p className="or">Or</p>
                <button type="button" className="login-google">Sign Up with Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
