import React, { useState } from "react";
import "../Dashboard.css";
import Cardimg from '../../assets/inter.svg'
const Cards = () => {
  // Function to handle hover events
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <>
      {[...Array(5)].map((_, index) => (
        <div
          className="div"
          key={index}
          onMouseEnter={() => setHoverIndex(index)} // Set hover index
          onMouseLeave={() => setHoverIndex(-1)} // Reset hover index
        >
          <div className={`counts ${hoverIndex === index ? "hovered" : ""}`}>
            <h1>123</h1>
          </div>
          <div className="cards">
            <p>Interview Scheduled</p>
           <div className="image">
           <img src={Cardimg} alt="" />
           </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
