import React, { useState } from 'react' //importing necessary libraries and dependency
import './LoginReg.css'
import email_icon from "../Assets/person.png"
import password_icon from "../Assets/password.png"

import { signup,signin,authenticate,isAuthenticated } from '../../auth'
import {Link,useNavigate} from "react-router-dom"

import { SocialIcon } from 'react-social-icons'

export const LoginReg = () => {


let navigate = useNavigate()
const {user} = isAuthenticated()//** */

const [signupDetails,setSignupDetails] = useState({
  username:"",
  email:"",
  password:"",
  role:2,
  success:false,
  error:"",
  loading:"",
  didRedirect:false
})

const {username,email,password,role,error,success,didRedirect,loading} = signupDetails

// ----
const onSignIn = (e) => {
  e.preventDefault();
  setSignupDetails({...signupDetails,error:false,loading:true})
  signin({email,password})
  .then(data => {
      if(data.err){
          setSignupDetails({...signupDetails,error:data.err,loading:false})
      }else{
          authenticate(data,() => {
              setSignupDetails({...signupDetails,didRedirect:true})
          })
      }
  })
  .catch(console.log("SIGNIN DATABASE FAILED"))
}

const performRedirect = () => {

  if(didRedirect){
      if(user && user.role === 1){
          return navigate("/space")
      }else{
          return navigate("/rental")
      }
  }
  if(isAuthenticated()){
      navigate("/rental")
  }
}

//--




const handleChange = name => event => {
    setSignupDetails({...signupDetails,error:false,[name]:event.target.value})
} 
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


const successMessage = () => {
  return (
      <div className='row'>
          <div className='col-md-6 offset-sm-3 text-left'>
              <div className='alert alert-success' style={{display: success ? "" : 'none'}}>
                  New account has been created.Please LOGIN
              </div>
          </div>
      </div>

  )
}

const errorMessage = () => {
  return (
      <div className='row'>
      <div className='col-md-6 offset-sm-3 text-left'>
          <div className='alert alert-danger' style={{display: error ? "" : 'none'}}>
              {error}
          </div>
      </div>
  </div>
  )
}


  return (
    <div>
     
     {/* form for Login and signup */}
      <div className="container">

        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id' onChange={handleChange("email")} value={email}/>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password"  placeholder='Password' onChange={handleChange("password")} value={password}/>
          </div>
          
          
        </div>

       
        <div className="submit-container">
          <div className={"submit"} onClick={onSignIn}>Login</div>

          {/* {success && successMessage()}
        {error && errorMessage()} */}
        {performRedirect()}
          

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
