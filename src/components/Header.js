import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const SigninModal = () => {
  const [toggle, setToggle] = useState("login");
  return (
    <div class="card">
      <h2>
        {toggle.charAt(0).toLocaleUpperCase() +
          toggle.substring(1).toLocaleLowerCase()}{" "}
        Form
      </h2>
      <div class="login_register">
        <a
          href="#"
          class="login"
          style={
            toggle === "login"
              ? { background: "linear-gradient(90deg, #003a74, #006ad5)" }
              : { color: "black" }
          }
          onClick={() => {
            setToggle("login");
          }}
        >
          Login
        </a>
        <a
          href="#"
          class="register"
          style={
            toggle === "signup"
              ? {
                  background: "linear-gradient(90deg, #003a74, #006ad5)",
                  color: "white",
                }
              : { color: "black" }
          }
          onClick={() => {
            setToggle("signup");
          }}
        >
          Signup
        </a>
      </div>

      <form class="form">
        {toggle === "signup" && (
          <input type="name" placeholder="Name" class="name" />
        )}
        <input type="email" placeholder="Email Adress" class="email" />
        <input type="password" placeholder="password" class="pass" />
      </form>

      <a href="#" class="fp">
        Forgot password?
      </a>

      <button type="button" class="login_btn">
        {toggle.toUpperCase()}
      </button>

      <div class="footer_card">
        <p>Not a member?</p>
        <a href="#">Singup now</a>
      </div>
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <nav>
        <div className="title">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="logo"></img>
          <div>GreatFoods</div>
        </div>
        <ul className="nav-links">
          <Link to="/">
            <li
              style={
                location.pathname === "/"
                  ? { color: "royalblue" }
                  : { color: "white" }
              }
            >
              Home
            </li>{" "}
          </Link>

          <Link to="/quotes">
            <li
              style={
                location.pathname === "/quotes"
                  ? { color: "royalblue" }
                  : { color: "white" }
              }
            >
              Quotes
            </li>{" "}
          </Link>
          <Link to="/restaurants">
            <li
              style={
                location.pathname === "/restaurants"
                  ? { color: "royalblue" }
                  : { color: "white" }
              }
            >
              Restaurants
            </li>{" "}
          </Link>
          <Link to="/foods">
            <li
              style={
                location.pathname === "/foods"
                  ? { color: "royalblue" }
                  : { color: "white" }
              }
            >
              Foods
            </li>{" "}
          </Link>
          <Link to="/contact">
            <li
              style={
                location.pathname === "/contact"
                  ? { color: "royalblue" }
                  : { color: "white" }
              }
            >
              Contact
            </li>{" "}
          </Link>
        </ul>
        <div>
          <button onClick={onOpenModal}>Sign In</button>
          <Modal open={open} onClose={onCloseModal} center>
            <SigninModal />
          </Modal>
        </div>
      </nav>
    </>
  );
};

export default Header;
