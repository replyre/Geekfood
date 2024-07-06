import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <div className="section1">
      <div>
        <p>Let us find your</p>
        <p> Forever Food.</p>
      </div>
      <p style={{ lineHeight: "30px", textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>
      <div className="buttons">
        <button>Search Now</button>
        <button>Know more</button>
      </div>
    </div>
  );
};

export default Section1;
