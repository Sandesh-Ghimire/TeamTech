import React from 'react'
import './LoginReg.css'

import user_icon from "../Assets/email.png"
import email_icon from "../Assets/person.png"
import password_icon from "../Assets/password.png"
export const LoginReg = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text"  placeholder='Name'/>
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id'/>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password"  placeholder='Password'/>
          </div>
        </div>
        <div className="forgot-password">Forget Password? <span>click here</span></div>
        <div className="submit-container">
          <div className="submit">Sign Up</div>
          <div className="submit">Login</div>

        </div>
      </div>


    </div>
  )
}
