import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavComponent.css'; 
import logo from '../images/Stone-Logo-Outline.png';
const NavComponent = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo principal" />
      </Link>      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Galery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavComponent;