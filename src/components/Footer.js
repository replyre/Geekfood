import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src="./logo2.svg" alt="logo" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        consequuntur amet culpa cum itaque neque.
      </p>
      <ul>
        <li>About</li>
        <li>Career</li>
        <li>History</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Blogs</li>
      </ul>
      <div className="icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-dribbble"></i>
      </div>
    </div>
  );
};

export default Footer;
