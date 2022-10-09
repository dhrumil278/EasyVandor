import React from 'react'
import '../Style/verticalNavbar.less';
import { ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';


function verticalNavbar() {
    return (
        <>
            <div className="main-veertical-nav">
                <div className="vertical-nav-items">
                    <div className="v-nav-items">
                        <NavLink to='shop' className={({ isActive }) => isActive ? 'active' : 'vertical-nav-item' } >
                            <ShopOutlined />
                        </NavLink>
                        <NavLink to='cart' className={({ isActive }) => isActive ? 'active' : 'vertical-nav-item' } >
                            <ShoppingCartOutlined />
                        </NavLink>
                    </div>
                    <div className="profile">
                        <Avatar className='profile-Avatar' size={40} src="https://joeschmoe.io/api/v1/random" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default verticalNavbar;
