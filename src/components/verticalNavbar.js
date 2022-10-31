import React from 'react'
import '../Style/verticalNavbar.less';
import { ShopOutlined, ShoppingCartOutlined, PlusCircleOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink, Link } from 'react-router-dom';


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
                        <NavLink to='addShop' className={({ isActive }) => isActive ? 'active' : 'vertical-nav-item' } >
                            <PlusCircleOutlined />
                        </NavLink>
                        <NavLink to='addShopItem' className={({ isActive }) => isActive ? 'active' : 'vertical-nav-item' } >
                            <ShoppingOutlined />
                        </NavLink>
                    </div>
                    <div className="profile">
                        <Link to='profile'>
                            <Avatar className='profile-Avatar' size={40} src="https://joeschmoe.io/api/v1/random" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default verticalNavbar;
