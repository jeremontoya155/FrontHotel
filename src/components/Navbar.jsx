import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleExternalLinkClick = (url) => {
    window.open(url, '_blank');
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <span onClick={() => handleLinkClick('/')}>
        <img
          className="logo-img"
          loading="lazy"
          alt="Logo"
          src={logo}
        />
      </span>
      <div className="navigation-wrapper">
        <div className="navigation"> 
          <span className="nav-link" onClick={() => handleLinkClick('/')}>INICIO</span>
          <span className="nav-link" onClick={() => handleLinkClick('/hospedajes')}>HOSPEDAJES</span>
          <span className="nav-link" onClick={() => handleLinkClick('/nosotros')}>NOSOTROS</span>
          <span
            className="nav-link"
            onClick={() => handleExternalLinkClick('https://wa.me/5493517045448?text=Hola!%20Estaba%20buscando%20un%20hospedaje%20para...')}
          >
            CONTACTO
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
