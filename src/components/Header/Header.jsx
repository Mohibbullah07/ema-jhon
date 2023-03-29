import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <div className='header-logo'>
          <img src={logo} alt="" />
          </div>

          <div className='header-anchor'>
            <a href="/order">Order</a>
            <a href="/orderreview">Order Review</a>
            <a href="/managenventory">Manage Inventory</a>
            <a href="/loginh">Login</a>
          </div>
        </nav>
    );
};

export default Header;