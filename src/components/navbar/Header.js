import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/a-logo.png';
import Navbar from './Navbar';
import ArrowDown from '../../images/arrow_down.svg';
// import ArrowUp from '../../images/arrow_up.svg';
import CardIcon from '../../images/add_card.svg';

const Header = () => (
  <header className="header">
    <Navbar />
    <Link to='/'>
      <img src={logo} className="app-logo" alt="logo" />
    </Link>
    <div className="navBtn">
      <div className='currencyModal modals'>
        $<img src={ArrowDown} alt="arrow_icon"/>
      </div>
      <div className='cardModal modals'>
        <img src={CardIcon} alt="card_icon" />
      </div>
    </div>
  </header>
);
export default Header;