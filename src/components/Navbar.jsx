// Navbar.js
import React from 'react';
import logo from "../images/logo.png";

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
          <a className="nav-link" href='/'>INICIO</a>
          <a className="nav-link" href='/hotels'>HOSPEDAJES</a>
          <a className="nav-link" href='/'>NOSOTROS</a>
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
