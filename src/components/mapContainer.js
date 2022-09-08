import React from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MapContainer() { 
  const mapStyles = {        
    height: "100vh",
    width: "100%"
  };
  const defaultCenter = {
    lat: 22.575308, lng: 72.823668
  } 
  return (
    <>
    <h1>This is a Map Area</h1>
      {/* <LoadScript googleMapsApiKey='AIzaSyClz6C_WlEL5iJjmY_-qx9EzsjjeGPEy0o'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript> */}
    </>
  ) 
}

export default MapContainer;