import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
// import Shop from '../components/shop';
import VerticalNavbar from '../components/verticalNavbar';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

function EasyVandor() {
    const navigate = useNavigate()
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