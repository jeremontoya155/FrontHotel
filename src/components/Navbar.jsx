import React, { useState } from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <Link to='/' className='logo-container' onClick={closeMenu}>
        <img
          className="logo-img"
          loading="lazy"
          alt="Logo"
          src={logo}
        />
      </Link>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navigation-wrapper ${menuOpen ? 'open' : ''}`}>
        <div className="navigation"> 
          <Link className="nav-link" to='/' onClick={closeMenu}>INICIO</Link>
          <Link className="nav-link" to='/hospedajes' onClick={closeMenu}>ALOJAMIENTOS</Link>
          <Link className="nav-link" to='/nosotros' onClick={closeMenu}>NOSOTROS</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
