import React, { useState,useEffect } from 'react'
import './User.css'
// import GoogleMapReact from 'google-map-react';
import Map from "../Map/Map";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const User = () => {
  const [selects,setSelects]=useState();
    // const defaultProps = {
    //     center: {
    //       lat: 10.99835602,
    //       lng: 77.01502627
    //     },
    //     zoom: 11
    //   };
  return (
    <div>
      <div className="container3">
        <div className="header">
          <div className="text">Available Space</div>
          <div className="underline"></div>
        </div>
        <Map/>
        {/* <div>
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
    </div> */}
    <div className="input">   
         <input type="Text"  placeholder='Area'/>  
    </div> 
    <div className='usr'>
    <select value={selects} onChange={e=>setSelects(e.target.value)} className='drop'>
    <option className='op'>Two wheeler</option>
            <option className='op'>Four wheeler</option>
            <option>EV</option>
    </select>
    </div>
    <p className='para'>Estimated hours:</p>
          <div className='inputh'>
          <input type="Number"  placeholder='Hours'/>
          </div>
          <h4 className='ava'>Available slots:</h4>
          <div className="submit-container">
          <div className={"submit"} >Book Now</div>
          </div> 
          </div> 
      </div>
  )
}
