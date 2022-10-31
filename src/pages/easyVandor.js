import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
// import Shop from '../components/shop';
import VerticalNavbar from '../components/verticalNavbar';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useGeolocated } from "react-geolocated";

function EasyVandor() {
    const navigate = useNavigate()
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    
        // console.log(coords.latitude);
    useEffect(()=>{
        navigate('shop')
    },[])

    return (
        <>
            <div className="easyVandorPage" style={{ display:'flex', }}>
                <VerticalNavbar />
                <Outlet />
            </div>
        </>
    )
}

export default EasyVandor;