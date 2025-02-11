import React, { useState } from "react";
import "../Candidate.css";
import dp from "../../assets/profileImg.svg";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const requested = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleViewClick = () => {
    setShowPopup(true);
  };
  return (
    <>
      <div className="req-pg">
        <div className="card">
          <div className="a">
            <div className="card-1" onClick={handleViewClick}>
              <img src={dp} />
              <h4>Kosapsi</h4>
              <p>Tester</p>
              <button>Assign</button>
            </div>
            <div className="card-1" onClick={handleViewClick}>
              <img src={dp} />
              <h4>Kosapsi</h4>
              <p>Tester</p>
              <button>Assign</button>
            </div>
            <div className="card-1" onClick={handleViewClick}>
              <img src={dp} />
              <h4>Kosapsi</h4>
              <p>Tester</p>
              <button>Assign</button>
            </div>
            <div className="card-1" onClick={handleViewClick}>
              <img src={dp} />
              <h4>Kosapsi</h4>
              <p>Tester</p>
              <button>Assign</button>
            </div>

            <div className="card-1" onClick={handleViewClick}>
              <img src={dp} />
              <h4>Kosapsi</h4>
              <p>Tester</p>
              <button>Assign</button>
            </div>
            <div className="card-1" onClick={handleViewClick}>
              <img src={dp} />
              <h4>Kosapsi</h4>
              <p>Tester</p>
              <button>Assign</button>
            </div>
            <div className="card-1" onClick={handleViewClick}>
              <img src={dp} />
              <h4>Kosapsi</h4>
              <p>Tester</p>
              <button>Assign</button>
            </div>
            <div className="card-1" onClick={handleViewClick}>
              <img src={dp} />
              <h4>Kosapsi</h4>
              <p>Tester</p>
              <button>Assign</button>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="pop-over">
            <div className="pop-card">
              <div className="btn">
              <button className="close-btn" onClick={() => setShowPopup(false)}>
                x
              </button>
              </div>
              <img src={dp} />
              <h3>Jenifer</h3>
              <h5>Web Developer</h5>
              <p>
                A kiddo who uses Bootstrap and Laravel in web development.
                Currently playing around with design via Figma
              </p>
              <div className="three">
                <div>
                  <h4>Technician</h4>
                </div>
                <div>
                  <h4>FrontEnd</h4>
                </div>
                <div>
                  <h4>UI/UX</h4>
                </div>
              </div>
              <div className="social-icons">
                <p>
                  <FaTwitter />
                </p>
                <p>
                  <FaLinkedinIn />
                </p>
                <p>
                  <GrInstagram />
                </p>
                <p>
                  <FaGithub />
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default requested;
