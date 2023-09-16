import React, { useState } from 'react' //importing necessary libraries and dependency
import './Payment.css'
import qr from './qr.png'

export const Payment = () => {


  return (
    <div>
     
    
      <div className="container">
    
    <div className='ads'>
      <h2>Your Favorite Payment System</h2>
     <img className='qr' src={qr} alt="" />
    </div>

   
  
       
      </div>
      
   

    </div>
  )
}
