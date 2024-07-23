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
          <Link className="nav-link" to='/hospedajes' onClick={closeMenu}>HOSPEDAJES</Link>
          <Link className="nav-link" to='/nosotros' onClick={closeMenu}>NOSOTROS</Link>
          <a
            className="nav-link"
            href="https://wa.me/5493517045448?text=Hola!%20Estaba%20buscando%20un%20hospedaje%20para..."
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            CONTACTO
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
