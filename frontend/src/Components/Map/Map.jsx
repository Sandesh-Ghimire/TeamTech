
import React, { useRef, useState } from "react";
import Leaflet from "leaflet"
// import "./../Space/map.css"
import "leaflet/dist/leaflet.css" 
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
// import markerIcon from "./../Assets/images/marker-icon.png"
// import email from "./../Assets/email.png"
// import markerShadow from "./../Assets/images/marker-shadow.png"
// import markerRetina from "./../Assets/images/marker-icon-2x.png"

// import pin from "./pin.png"
// import markerIcon from "leaflet/dist/images/marker-icon.png"
// import markerShadow from "leaflet/dist/images/marker-shadow.png"
// import markerRetina from "leaflet/dist/images/marker-icon-2x.png"
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapComponent = () => {
    const mapRef = useRef();
    const zoom = 12;
    const containerStyle = {
        width: "100%",
        height: "400px"
    }
    const center = {
        lat: 28.626137,
        lng: 79.821603
    }
    const initialMarkers = [
        {
            position: {
                lat: 28.625485,
                lng: 79.821091
            },
            draggable: true
        }
    ];

    const [markers, setMarkers] = useState(initialMarkers);

    const mapClicked = async (event) => {
        console.log(event.latlng.lat, event.latlng.lng)  
    }

    const markerClicked = (marker, index) => {  
        console.log(marker.position.lat, marker.position.lng)
    }

    const markerDragEnd = (event, index) => {
        console.log(event.lat, event.lng)
    }

//     const allMarkers = [...markers];
// const marker = {
//     position: {
//         lat: 28.625043,
//         lng: 79.810135
//     }, 
//     draggable: true
// }
// allMarkers.push(marker);
// setMarkers(allMarkers)

// const index = 2;
// const filteredMarkers = markers.filter((m, i) => i != index);  
// setMarkers(filteredMarkers)

    return (
        <MapContainer
            style={containerStyle}
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            ref={mapRef}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapContent
                onClick={mapClicked}
            />
            {markers.map((marker, index) => (
                <MarkerContent
                    key={index}
                    position={marker.position}
                    draggable={marker.draggable}
                    onMarkerClick={event => markerClicked(marker, index)}
                    onDragEnd={event => markerDragEnd(event, index)}
                />
            ))}
        </MapContainer>
    );
};

const MapContent = ({ onClick }) => {  
    const map = useMapEvents({
        click: event => onClick(event)
    })
    return null;
}

const MarkerContent = (props) => {
    const markerRef = useRef();
    const { position, draggable, onMarkerClick, onDragEnd } = props;  
   
    return <Marker
        position={position}
        draggable={draggable}
        eventHandlers={{
            click: event => onMarkerClick(event),
            dragend: () => onDragEnd(markerRef.current.getLatLng())
        }}
        ref={markerRef}
    >
        <Popup>
            <b>{position.lat}, {position.lng}</b>
        </Popup>
    </Marker>
}

export default MapComponent;

