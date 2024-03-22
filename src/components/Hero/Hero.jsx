import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-contents">
        <h2>Welcome To Felami Housing And Properties</h2>
        <p>
          Real estate Searching Platform to Find The House Of Your Dream Using
          Our Platform Buy Properties, Sell Properties, Rent Properties and
          Shortlet
        </p>
        <div className="button-menu">
          <button>Rent</button>
          <button>Sale</button>
          <button>Shortlet</button>
          <button>Services</button>
          <button>Hotel Booking</button>
        </div>

        <div className="search">
         <label>Looking for</label>
         <label>Location</label>
         <label>Property size</label>
         <label>Budget</label>


         <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
