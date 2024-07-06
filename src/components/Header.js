import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <nav>
        <div className="title">
          <img src="./logo.svg" alt="logo"></img>
          <div>GeekFoods</div>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Quote</li>
          <li>Restaurants</li>
          <li>Foods</li>
          <li>Contact</li>
        </ul>
        <button>Sign In</button>
      </nav>
    </>
  );
};

export default Header;
