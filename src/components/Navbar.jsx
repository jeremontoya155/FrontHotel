// Navbar.js
import React from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <img
        className="logo-img"
        loading="lazy"
        alt=""
        src={logo}
      />

      <div className="navigation-wrapper">
        <div className="navigation">
          <Link className="nav-link" to='/'>INICIO</Link>
          <Link className="nav-link" to='/hotels'>HOSPEDAJES</Link>
          <Link className="nav-link" to='/'>NOSOTROS</Link>
          <a
            className="nav-link"
            href="https://wa.me/5493517045448?text=Hola!%20Estaba%20buscando%20un%20hospedaje%20para..."
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTACTO</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
