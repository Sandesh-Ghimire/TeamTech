import React, { useState } from 'react' //importing necessary libraries and dependency
import './LoginReg.css'
import user_icon from "../Assets/email.png" //importing images
import email_icon from "../Assets/person.png"
import password_icon from "../Assets/password.png"
import { SocialIcon } from 'react-social-icons'

export const LoginReg = () => {

const [action,setAction] = useState("Sign Up"); 
const [selects,setSelects]=useState();
  return (
    <div>
     
     {/* form for Login and signup */}
      <div className="container">

        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ?<div></div>:
          <div className="input">
          <img src={user_icon} alt="" />
          <input type="text"  placeholder='Name'/>
        </div> }
          
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id'/>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password"  placeholder='Password'/>
            
          </div>
          
          {
            action==='Sign Up'&&
            (<select value={selects} onChange={e=>setSelects(e.target.value)} className='drop'>
            <option>Be a Lender</option>
            <option>User</option>
                  </select>)
          }
        
          
        </div>
      
        
        {action==="Sign Up"? <div></div>:  <div className="forgot-password">Forget Password? <span>click here</span></div>}
       
        <div className="submit-container">
          <div className={action==="Login"?"submit gray" :"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"? "submit gray": "submit" } onClick={()=>{setAction("Login")}}>Login</div>
          
     
        </div>
        {/* creating social buttons */}
        <div className='social'>  
        <SocialIcon url="www.reddit.com" />
        <SocialIcon url="www.facebook.com" />
        <SocialIcon url="www.github.com" />
        </div>
       
      </div>
   

    </div>
  )
}
