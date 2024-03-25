import React from "react";
import "./Looking.css";

const serviceKey = "service";
const lookingKey = "looking";
const types = {
  service: <Service />,
  looking: <Looking />,
};

export const Looking = () => {
  return (
    <div className="looking">
      <label>Looking for</label>
      <select name="sale" id="Looking">
        <option value="Sale">Sale</option>
        <option value="Rent">Rent</option>
      </select>
    </div>
  );
};

export const Service = () => {
  return (
    <div className="looking">
      <label>Service</label>
      <select name="budget" id="Looking">
        <option value="budget">Type of service</option>
        <option value="saab">Mid-Range</option>
        <option value="affordable">Affordable</option>
        <option value="luxury">Luxury</option>
      </select>
    </div>
  );
};
