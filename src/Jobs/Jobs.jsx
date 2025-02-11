import React from "react";
import "./Jobs.css";
import { Outlet } from "react-router-dom";

const Jobs = () => {
  return (
    <>
      {" "}
      <div className="Jobs-pg">
        <h2>Jobs</h2>
        <div className="table">
          <table>
            <thead className="unassigned-thead">
              <th>Project Name</th>
              <th>Role</th>
              <th>Avg salary</th>
              <th>Working Hours</th>
              <th>Mode</th>
              <th>About</th>
              <th>More</th>
            </thead>

            <tbody>
              <tr>
                <td>AI Chatbot Development</td>
                <td>Lead Developer</td>
                <td>$120,000</td>
                <td>40 hrs/week</td>
                <td>Remote</td>
                <td>
                  Developing an AI chatbot for customer support using NLP.
                </td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>Web App Revamp</td>
                <td>Frontend Engineer</td>
                <td>$90,000</td>
                <td>35 hrs/week</td>
                <td>Hybrid</td>
                <td>Redesigning and improving UI/UX for a SaaS platform.</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>Cloud Infrastructure Setup</td>
                <td>DevOps Engineer</td>
                <td>$110,000</td>
                <td>45 hrs/week</td>
                <td>On-site</td>
                <td>Setting up scalable cloud infrastructure on AWS.</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>E-commerce Mobile App</td>
                <td>Full Stack Developer</td>
                <td>$105,000</td>
                <td>40 hrs/week</td>
                <td>Remote</td>
                <td>
                  Building a cross-platform mobile app for an e-commerce brand.
                </td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>AI Chatbot Development</td>
                <td>Lead Developer</td>
                <td>$120,000</td>
                <td>40 hrs/week</td>
                <td>Remote</td>
                <td>
                  Developing an AI chatbot for customer support using NLP.
                </td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>Web App Revamp</td>
                <td>Frontend Engineer</td>
                <td>$90,000</td>
                <td>35 hrs/week</td>
                <td>Hybrid</td>
                <td>Redesigning and improving UI/UX for a SaaS platform.</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>Cloud Infrastructure Setup</td>
                <td>DevOps Engineer</td>
                <td>$110,000</td>
                <td>45 hrs/week</td>
                <td>On-site</td>
                <td>Setting up scalable cloud infrastructure on AWS.</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>E-commerce Mobile App</td>
                <td>Full Stack Developer</td>
                <td>$105,000</td>
                <td>40 hrs/week</td>
                <td>Remote</td>
                <td>
                  Building a cross-platform mobile app for an e-commerce brand.
                </td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>AI Chatbot Development</td>
                <td>Lead Developer</td>
                <td>$120,000</td>
                <td>40 hrs/week</td>
                <td>Remote</td>
                <td>
                  Developing an AI chatbot for customer support using NLP.
                </td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>Web App Revamp</td>
                <td>Frontend Engineer</td>
                <td>$90,000</td>
                <td>35 hrs/week</td>
                <td>Hybrid</td>
                <td>Redesigning and improving UI/UX for a SaaS platform.</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>Cloud Infrastructure Setup</td>
                <td>DevOps Engineer</td>
                <td>$110,000</td>
                <td>45 hrs/week</td>
                <td>On-site</td>
                <td>Setting up scalable cloud infrastructure on AWS.</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>E-commerce Mobile App</td>
                <td>Full Stack Developer</td>
                <td>$105,000</td>
                <td>40 hrs/week</td>
                <td>Remote</td>
                <td>
                  Building a cross-platform mobile app for an e-commerce brand.
                </td>
                <td>
                  <button>View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Outlet/>
      </div>
    </>
  );
};

export default Jobs;
