import React from "react";
import "./Login.css";
// import Image from '../assets/image.jpg'
import logo from "../assets/logo.svg";
const SignUp = () => {
  return (
    <>
      <div className="full-pg">
        <div className="login-card">
          <div className="name-sec">
            <img src={logo} alt="" />
            <h2>Hr Sync</h2>
          </div>
          <div className="both">
            <div className="img">
              <img src={Image} />
            </div>
            <div className="v">
              <div className="t">
                <h2>Sign Up</h2>
              </div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="UserName" />

              <input type="text" placeholder="Password" />
              <input type="text" placeholder="Re-enter Password" />

              <div className="btn">
              <button className="login-btn">Sign Up</button>
              <p className="or">Or</p>
              <button className="login-google">Sign Up with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
