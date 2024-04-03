import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <img src={assets.logo2} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to="/">
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </li>
        </Link>

        <Link to="/about">
          <li
            onClick={() => setMenu("About")}
            className={menu === "About" ? "active" : ""}
          >
            About
          </li>
        </Link>

        <Link to="/blog">
          <li
            onClick={() => setMenu("Blog")}
            className={menu === "Blog" ? "active" : ""}
          >
            Blog
          </li>
        </Link>

        <Link to="/faq">
          <li
            onClick={() => setMenu("FAQ")}
            className={menu === "FAQ" ? "active" : ""}
          >
            FAQ
          </li>
        </Link>

        <Link to="/become-agent">
          <li
            onClick={() => setMenu("Become an Agent")}
            className={menu === "Become an Agent" ? "active" : ""}
          >
            Become an Agent
          </li>
        </Link>

        <Link to="/contact-us">
          <li
            onClick={() => setMenu("Contact Us")}
            className={menu === "Contact Us" ? "active" : ""}
          >
            Contact Us
          </li>
        </Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
