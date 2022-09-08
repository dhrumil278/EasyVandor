import React from 'react'
import { Outlet } from 'react-router-dom';
// import Shop from '../components/shop';
import VerticalNavbar from '../components/verticalNavbar';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

function EasyVandor() {

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