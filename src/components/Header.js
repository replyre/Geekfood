import React, { useState } from "react";
import "./header.css";
import { Link, Router } from "react-router-dom";
const Header = () => {
  const [currenttab, setCurrentTab] = useState("Home");
  return (
    <>
      <nav>
        <div className="title">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="logo"></img>
          <div>GeekFoods</div>
        </div>
        <ul className="nav-links">
          <Link
            to="/"
            onClick={() => {
              setCurrentTab("Home");
            }}
          >
            <li
              style={
                currenttab == "Home"
                  ? { color: "royalblue" }
                  : { color: "white" }
              }
            >
              Home
            </li>{" "}
          </Link>

          <Link
            to="/quotes"
            onClick={() => {
              setCurrentTab("Quotes");
            }}
          >
            <li
              style={
                currenttab == "Quotes"
                  ? { color: "royalblue" }
                  : { color: "white" }
              }
            >
              Quotes
            </li>{" "}
          </Link>
          <Link
            to="/restaurants"
            onClick={() => {
              setCurrentTab("Restaurants");
            }}
          >
            <li
              style={
                currenttab == "Restaurants"
                  ? { color: "royalblue" }
                  : { color: "white" }
              }
            >
              Restaurants
            </li>{" "}
          </Link>
          <li>Foods</li>
          <li>Contact</li>
        </ul>
        <button>Sign In</button>
      </nav>
    </>
  );
};

export default Header;
