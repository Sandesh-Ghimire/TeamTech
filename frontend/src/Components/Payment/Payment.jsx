import React, { useState } from 'react' //importing necessary libraries and dependency
import './Payment.css'
import qr from './qr.png'
import esewa from './esewa1.png'
import khalti from './Khalti.png'
export const Payment = () => {


  return (
    <div>
     
    
      <div className="container1">
    
    <div className='ads'>
      <h2>Your Favorite Payment System</h2>
     <img className='qr' src={qr} alt="" />

     <img className='esewa' src={esewa} alt="" />
     <img className='khalti' src={khalti} alt="" />
    </div>


   
  
       
      </div>
      
     

    </div>
  )
}
