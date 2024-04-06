import React from "react";
import "./ProfileContainer.css";
import { assets } from "../../assets/assets";

const ProfileContainer = () => {
  return (
    <div className="pro">
      <div className="profile-container">
        <img src={assets.profile_icon} alt="" />
        <div className="profile-name">
          <h2>Abdulsalam AbdulKareem</h2>
        </div>
        <span>@Spiderman</span>
        <span>Bronze</span>
      </div>
    </div>
  );
};

export default ProfileContainer;
