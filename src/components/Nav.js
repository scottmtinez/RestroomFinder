import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="Nav-container">
      <nav className="Nav-bar">
        <ul className="Nav-list">
          <li><h1 className="Nav-title">Restroom Finder</h1></li>
          <li className="Nav-item"><Link to="/">Home</Link></li>
          <li className="Nav-item"><Link to="/find">Find Restroom</Link></li>
          <li className="Nav-item"><Link to="/about">About Us</Link></li>
          <li className="Nav-item"><Link to="/contact">Contact Us</Link></li>
          <li className="Nav-item"><Link to="/account">Account</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
