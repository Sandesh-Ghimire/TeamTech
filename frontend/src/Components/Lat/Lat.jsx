// import { useRef } from 'react'
// import React,{ useState } from 'react'
// import { useMemo } from 'react'
// import { useCallback} from 'react'
// // import { Marker } from 'react'
// // import { Popup} from 'react'
// import { render } from 'react'


// // import {
// //     MapContainer,
// //     TileLayer,Marker,Popup,
// //     useMap,
// //   } from "react-leaflet"

// import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
// import { useMap ,useMapEvents} from 'https://cdn.esm.sh/react-leaflet/hooks'

// const center = {
//     lat: 51.505,
//     lng: -0.09,
//   }
  

  
//   function DraggableMarker() {
//     const [draggable, setDraggable] = useState(true)
//     const [position, setPosition] = useState(center)
//     const markerRef = useRef(null)
//     const eventHandlers = useMemo(
//       () => ({
//         dragend() {
//           const marker = markerRef.current
//           if (marker != null) {
//             setPosition(marker.getLatLng())
//           }
//         },
//       }),
//       [],
//     )
//     const toggleDraggable = useCallback(() => {
//       setDraggable((d) => d)
//     }, [])
  
//     return (
//       <Marker
//         draggable={draggable}
//         eventHandlers={eventHandlers}
//         position={position}
//         ref={markerRef}>
//         <Popup minWidth={90}>
//           <span onClick={toggleDraggable}>
//             {draggable
//               ? `${position.lat}`
//               : 'Click here to make marker draggable'}
//           </span>
//         </Popup>
//       </Marker>
//     )
//   }
  
//   render(
//     <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <DraggableMarker />
//     </MapContainer>,
//   )