import React, { useState } from "react";
import "./Blog.css";
import { assets } from "../../assets/assets";
import SideBarHome from "../../components/SideBarHome/SideBarHome";
import { Link } from "react-router-dom";

const Blog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    {
      text: "Home",
      icon: "icon/home2.png",
    },

    {
      text: "Saved Listing",
      icon: "icon/home2.png",
    },

    {
      text: "Property",
      icon: "icon/home2.png",
    },

    {
      text: "Invest",
      icon: "icon/home2.png",
    },

    {
      text: "Request/Enquiry",
      icon: "icon/home2.png",
    },

    {
      text: "Leaderboard",
      icon: "icon/home2.png",
    },

    {
      text: "Challenge",
      icon: "icon/home2.png",
    },

    {
      text: "Community",
      icon: "icon/home2.png",
    },
    {
      text: "Group",
      icon: "icon/home2.png",
    },

    {
      text: "Invest",
      icon: "icon/home2.png",
    },

    {
      text: "Settings",
      icon: "icon/home2.png",
    },
  ];

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          <div className="nav-brand">
            {/* <img src={assets.logo2} alt="" />
            <h2>FHandP</h2> */}
          </div>
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {/* three hamburger line */}
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="nav-menu">
          {menuItems.map(({ text, icon }) => (
            <Link to="sidebar-home"><a
              href={<SideBarHome />}
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
            >
              <img src={icon} alt="" />
              {isExpanded && <p>{text}</p>}

              {!isExpanded && <div className="tooltip">{text}</div>}
            </a></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
