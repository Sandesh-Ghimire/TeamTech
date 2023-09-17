import React, { useState } from 'react'
import './SignUP.css'

import user_icon from "../Assets/email.png"

import email_icon from "../Assets/person.png"
import password_icon from "../Assets/password.png"
import { signup,signin,authenticate,isAuthenticated } from '../../auth'
import {Link,useNavigate} from "react-router-dom"
import Logout from '../Logout/Logout'

import { SocialIcon } from 'react-social-icons'

const SignUP = () => {
    let navigate = useNavigate()

    const [signupDetails,setSignupDetails] = useState({
        username:"",
        email:"",
        password:"",
        role:2,
        success:false,
        error:"",
        loading:"",
        didRedirect:""
      })
      
      const {username,email,password,role,error,success,didRedirect,loading} = signupDetails
      const handleChange = name => event => {
        setSignupDetails({...signupDetails,error:false,[name]:event.target.value})
    } 

    const {user} = isAuthenticated()//** */

    const onSubmit = async (e) => {
      e.preventDefault();
      setSignupDetails({...signupDetails,error:false})
      console.log("det",signupDetails)
      let data;
      try {
        data = await signup({username,email,password,role})
        console.log(data,"data")
      } catch (error) {
        console.log(error,"error")
      }
      if (data?.id?.length > 0) {
        setSignupDetails({...setSignupDetails,error:true,success:false})
      }else{
        setSignupDetails({...setSignupDetails,error:false,success:true})
      }
    } 

    const performRedirect = () => {

        if(didRedirect){
            if(user && user.role === 1){
                return navigate("/admin/dashboard")
            }else{
                return navigate("/user/dashboard")
            }
        }
        if(isAuthenticated()){
            navigate("/login")
        }
      }

  return (
    
    <div>
     <Logout/>
    <div className="container">

      <div className="header">
        <div className="text">PARKspace</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
        <img src={user_icon} alt="" />
        <input type="text"  placeholder='Name' onChange={handleChange("username")} value={username}/>
      </div>
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id' onChange={handleChange("email")} value={email}/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password"  placeholder='Password' onChange={handleChange("password")} value={password}/>
          
        </div>
        
        <select value={role} onChange={handleChange('role')} className='drop'>
          <option value={1}>Be a Lender</option>
          <option value={2}>User</option>
        </select>
      
        
      </div>
     
     
      <div className="submit-container">
        <div className={ "submit" } onClick={onSubmit}>SignUP</div>
        

      </div>
      <div className='social'>
      <SocialIcon url="www.reddit.com" />

<SocialIcon url="www.facebook.com" />

<SocialIcon url="www.github.com" />
      </div>
     
    </div>
 
    {performRedirect()}
  </div>
  )
}

export default SignUP