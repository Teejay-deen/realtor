import React from "react";
import Blog from "../../pages/Blog/Blog";
import "./SideBarHome.css";
import ProfileContainer from "../ProfileContainer/ProfileContainer";

const SideBarHome = () => {
  return (
    <div className="">
      <div className="sidebar">
        <Blog />
        <div className="side-bar-home">
          <div className="searchbar-list">
            <div className="list">
              <li>
                <input
                  className="text-field"
                  type="text"
                  placeholder="Type your search"
                />
              </li>
              <li>5 star</li>
              <li>5.7k</li>
              <li>message icon</li>
              <li>Notrifcation icon</li>
              {/* <span className="profile-image">
                <img src="" alt="" />
            </span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="profile-container">
        <ProfileContainer />
      </div>
    </div>
  );
};

export default SideBarHome;
