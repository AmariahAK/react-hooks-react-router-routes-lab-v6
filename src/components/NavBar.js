import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" activeClassName="active" exact>Home</NavLink>
      <NavLink to="/directors" activeClassName="active">Directors</NavLink>
      <NavLink to="/actors" activeClassName="active">Actors</NavLink>
    </nav>
  );
}

export default NavBar;
