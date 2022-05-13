import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/a-logo.png';
import Navbar from './Navbar';
import DropDown from './dropDown';
import CartIcon from '../cart/cartIcon'

const Header = () => {
  const [selected, setSelected] = useState("$");
  const [isActive, setIsActive] = useState(false);
  
  return(
    <header className="header">
      <Navbar />
      <Link to='/'>
        <img src={logo} className="app-logo" alt="logo" />
      </Link>
      <div className="navBtn">
        <div className='currencyModal modals'>
          <DropDown
          selected={selected}
          setSelected={setSelected}
          isActive={isActive}
          setIsActive={setIsActive}
          />
        </div>
        <div className='cardModal modals'>
          <CartIcon />
        </div>
      </div>
    </header>
  )
};
export default Header;