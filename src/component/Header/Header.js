import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
         <nav className='header'>
            <img src={logo} alt="logo" />
            <div className='menu'>
                <a href="/Shop">Shop</a>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Inventory">Inventory</a>
            </div>
         </nav>
    );
};

export default Header;