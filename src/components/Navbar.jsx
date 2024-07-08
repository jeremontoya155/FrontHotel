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
          <a className="nav-link" href='/'>HOSPEDAJES</a>
          <a className="nav-link" href='/'>NOSOTROS</a>
          <a className="nav-link" href='/'>CONTACTO</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
