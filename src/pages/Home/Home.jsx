import React, { useState } from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Hero category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
