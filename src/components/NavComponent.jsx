import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavComponent.css'; 
import logo from '../images/logo_principal.png';
import logo_secundario from '../images/logo_secundario.png';
const NavComponent = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo principal" />
      </Link>      
      <Link to="/" className="logo_secundario">
        <img src={logo_secundario} alt="Logo principal" />
      </Link>   
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavComponent;