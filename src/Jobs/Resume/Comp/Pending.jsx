import React from "react";
import { useNavigate } from "react-router-dom";

const Pending = () => {
  const Navigate =useNavigate();
  const handleview = ()=>{
    Navigate("/hr/view")
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>Experience</th>
            <th>About</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={handleview}>
            <td>John Doe</td>
            <td>+1234567890</td>
            <td>johndoe@example.com</td>
            <td>5 years</td>
            <td>
              A passionate developer with expertise in front-end and back-end
              technologies.
            </td>
            <td>
              <button>view</button>
            </td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>+0987654321</td>
            <td>janesmith@example.com</td>
            <td>3 years</td>
            <td>
              Specializes in UI/UX design and creating user-friendly interfaces.
            </td>
            <td>
              <button>view</button>
            </td>
          </tr>
          <tr>
            <td>Michael Johnson</td>
            <td>+1122334455</td>
            <td>michael.johnson@example.com</td>
            <td>7 years</td>
            <td>
              Experienced full-stack developer with a focus on scalable web
              applications.
            </td>
            <td>
              <button>view</button>
            </td>
          </tr>
          <tr>
            <td>Emily Davis</td>
            <td>+2233445566</td>
            <td>emilydavis@example.com</td>
            <td>4 years</td>
            <td>
              Passionate about data analytics and machine learning projects.
            </td>
            <td>
              <button>view</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pending;
