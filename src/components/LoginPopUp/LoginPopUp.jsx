import React, { useState } from 'react'
import "./LoginPopUp.css"
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Sign Up")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                <input type="text" placeholder='Your Name' required />
                <input type="email" placeholder='Your Email' required />
            </div>
        </form>
    </div>
  )
}

export default LoginPopUp