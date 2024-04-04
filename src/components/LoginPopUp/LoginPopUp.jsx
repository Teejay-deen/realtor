import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const Login = "Login";
  const SignUp = "Sign Up";
  const [currentState, setCurrentState] = useState(Login);
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === Login ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="Password" placeholder="Your Password" required />
        </div>

        <button>{currentState === SignUp ? "Create Account" : Login}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree the terms of use and privacy policy.</p>
        </div>
        {currentState === Login ? (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setCurrentState(SignUp)}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span onClick={() => setCurrentState(Login)}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
