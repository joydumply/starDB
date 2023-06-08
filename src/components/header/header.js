import React from 'react';

import { NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <NavLink to="/">
          StarDB
        </NavLink>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink to="/people/">People</NavLink>
        </li>
        <li>
          <NavLink to="/planets/">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/starships/">Starships</NavLink>
        </li>
        <li>
          <NavLink to="/login/">Login</NavLink>
        </li>
        <li>
          <NavLink to="/secret/">Secret</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;