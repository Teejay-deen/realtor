import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Faq from "./pages/FAQ/Faq";
import BecomeAgent from "./pages/Become an Agent/BecomeAgent";
import ContactUs from "./pages/Contact Us/ContactUs";
import { useState } from "react";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* adding the tenary operator for loginpopup */}
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/become-agent" element={<BecomeAgent />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
