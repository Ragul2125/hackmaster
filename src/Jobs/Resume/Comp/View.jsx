import React from "react";
import "../Resume.css"; // Import the external CSS file

const CandidateProfile = () => {
  return (
    <div className="candidate-profile">
      <div className="header">
        <h2>Regul</h2>
        <p>ragul@gmail.com | +91 7384975983420</p>
      </div>
      <div className="candidate-container">
        <div className="left">
          <h3>Candidate File</h3>
          <div className="resume">
            <p>Resume</p>
          </div>
          <h3>Last Experience</h3>
          <p>Senior Data Analyst</p>
          <p>Google (May 2021 - Present)</p>
          <h3>Responsible for</h3>
          <ul>
            <li>
              Data Exploration and Analysis: They perform exploratory data
              analysis{" "}
            </li>
            <li>
              to uncover insights, trends, and patterns in the data, often using
              statistical and{" "}
            </li>
            <li>visualisation techniques.</li>
            <li>
              Data Cleaning and Preprocessing: Data analysts are responsible for
              cleaning and preparing raw{" "}
            </li>
            <li>
              Reporting and Communication: Data analysts communicate their
              findings{" "}
            </li>
          </ul>
        </div>
        <div className="right">
          <div class="score-card">
            <div class="score-header">
              <div class="score-circle">75</div>
              <p class="score-text">
                <span class="bold">Score</span>{" "}
                <span class="green-text">Potential Fit</span>
              </p>
            </div>

            <ul class="score-list">
              <li>
                Qualifications and skills <span class="check">✔</span>
              </li>
              <li>
                Experience <span class="check">✔</span>
              </li>
              <li>
                Education <span class="check">✔</span>
              </li>
              <li>
                Keywords Match <span class="cross">✖</span>
              </li>
              <li>
                Years of Experience <span class="check">✔</span>
              </li>
              <li>
                Job Hopping <span class="cross">✖</span>
              </li>
              <li>
                Cultural Fit <span class="check">✔</span>
              </li>
              <li>
                Interview Performance <span class="check">✔</span>
              </li>
              <li>
                References <span class="cross">✖</span>
              </li>
              <li>
                Additional Factors <span class="check">✔</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
