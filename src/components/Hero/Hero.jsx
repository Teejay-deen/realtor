import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {

  const style ={
    display: "none",
    visibility: "hidden"
  }

  const [menu, setMenu] = useState("")
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
          <button className={ menu === "Services" ? "typeOfServices" : ""} onClick={()=>setMenu("typeOfServices")}>Services</button>
          <button>Hotel Booking</button>

        </div>

        <div className="searchbar">
          <div className="looking">
            <label>Looking for</label>
            <select name="sale" id="Looking">
              <option value="Sale">Sale</option>
              <option value="Rent">Rent</option>
            </select>
          </div>

          <div className="location">
            <label>Location</label>
            <select className="location" name="location" id="location">
              <option value="any">any</option>
              <option value="Kwara">Kwara</option>
              <option value="Abuja">Abuja</option>
              <option value="Lagos">Lagos</option>
              <option value="Ibadan">Ibadan</option>
              <option value="Niger">Niger</option>
            </select>
          </div>

          <div className="propertySize">
            <label>Property size</label>
            <select name="propertySize" id="property">
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Duplex">Duplex</option>
              <option value="Mansion">Mansion</option>
              <option value="Chalet">Chalet</option>
              <option value="Studio">Studio</option>
              <option value="Guest">Guest House</option>
              <option value="Cabin">Cabin</option>
              <option value="Castle">Castle</option>
              <option value="Ranch">Ranch</option>
            </select>
          </div>

          <div className="budget">
          <label>Budget</label>
            <select name="budget" id="budgets">
              <option value="budget">Budgets</option>
              <option value="saab">Mid-Range</option>
              <option value="affordable">Affordable</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          <div className=" typeOfServices " >
          <label>Budget</label>
            <select name="budget" id="type">
              <option value="budget">Budgets</option>
              <option value="saab">Mid-Range</option>
              <option value="affordable">Affordable</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
        

        
          <div className="button">
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
