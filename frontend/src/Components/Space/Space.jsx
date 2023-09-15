import React, { useState,useEffect } from 'react'
import './Space.css'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Space = () => {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (


    <div>
     
     
      <div className="container">

        <div className="header">
          <div className="text">Space</div>
          <div className="underline"></div>
        </div>
          
        <div>
       
        <div style={{ height: '100vh', width: '550px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </div>
         
          <div className="input">
            <img src="" alt="" />
            <input type="Number"  placeholder='Numbers of 4 wheelers'/>
            
          </div> 
          <div className="input">
            <img src="" alt="" />
            <input type="Number"  placeholder='Numbers of 2 wheelers'/>
            
          </div> 
          <div className="input">
            <img src="" alt="" />
            <input type="Number"  placeholder='Slots for EV'/>
            
          </div> 
          <div className="submit-container">
          <div className={"submit"} >Submit</div>
          
      </div> 
        </div>
        
      </div>
   
  )
}
