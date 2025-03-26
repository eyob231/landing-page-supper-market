import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">Simple Supermarket</NavLink>
        </div>
        <nav className="nav">
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn login">Login</button>
          <button className="btn signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;