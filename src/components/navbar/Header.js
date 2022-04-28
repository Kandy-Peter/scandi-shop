import React from 'react';
import logo from '../../images/a-logo.png';
import Navbar from './Navbar';

const Header = () => (
  <header className="header">
    <Navbar />
    <img src={logo} className="app-logo" alt="logo" />
    <div className="navBtn">
      <span className='currencyModal'>$</span>
      <span className='cardModal'>Panier</span>
    </div>
  </header>
);
export default Header;