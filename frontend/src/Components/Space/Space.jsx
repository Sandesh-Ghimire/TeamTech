import React, { useState,useEffect } from 'react'
import './Space.css'
import GoogleMapReact from 'google-map-react';
import Logout from '../Logout/Logout';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Space = () => {
  const [selects,setSelects]=useState();
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (


    <div>
      <Logout/>
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
            <input type="Number"  placeholder='Slots for 4 wheelers'/>
            
          </div> 
          <div className="input">
            <img src="" alt="" />
            <input type="Number"  placeholder='Slots for 2 wheelers'/>
            
          </div> 
          <div className="input">
            <img src="" alt="" />
            <input type="Number"  placeholder='Slots for EV'/>
            
            
          </div> 
        
          <div className='usr'>
          <select value={selects} onChange={e=>setSelects(e.target.value)} className='drop'>
            <option>Be a renter for a week</option>
            <option>Be a renter only on weekends</option>
                  </select>
          </div>
          <div className="submit-container">
          <div className={"submit"} >Submit</div>
          
      </div> 
        </div>
        
      </div>
   
  )
}
