import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-brand ps-5">
      TodoList
    </div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
    </ul>
  </nav>
);