import React from 'react';
import logo from '../../images/logo.png'
import style from './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />

            <div className='nav'>
            <a href="/shop">Shop</a>
            <a href="/order">Order review</a>
            <a href="/inventoty">Manage Inventory</a>
            </div>

        </div>
    );
};

export default Header;