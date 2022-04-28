import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'All',
    },
    {
      id: 2,
      path: '/Tech',
      text: 'Tech',
    },
    {
      id: 3,
      path: '/Women',
      text: 'Women',
    },
  ];

  return (
    <nav>
      <ul className="nav-links flex-center-center">
        {links.map((link) => (
          <li key={link.id} className="nav-item">
            <NavLink to={link.path} className={(navData) => (navData.isActive ? 'active-link' : 'none')}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;