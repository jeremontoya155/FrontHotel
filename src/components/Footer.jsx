import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo_byn from '../images/logotipo.jpg';

const Footer = () => {
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
    <footer className="footer">
      <section className="footer-container">
        <div className="component-child"></div>
        <div className="inicio-todos-hospedajes-container4">
          <span className="inicio-todos-hospedajes-container5">
            <span className="footer-item" onClick={() => handleLinkClick('/')}>Inicio</span>
            <span className="footer-item" onClick={() => handleLinkClick('/hospedajes')}>Todos nuestros hospedajes</span>
            <span className="footer-item" onClick={() => handleExternalLinkClick('https://wa.me/5493513509500?text=Hola!%20Quiero%20publicar%20mi%20departamento')}>Publica tu departamento</span>
            <span className="footer-item" onClick={() => handleLinkClick('/nosotros')}>Nosotros</span>
            <span className="footer-item" onClick={() => handleExternalLinkClick('https://wa.me/5493513509500?text=Hola!%20Estaba%20buscando%20un%20hospedaje%20para...')}>Contacto</span>
            <span className="footer-item" onClick={() => handleLinkClick('/')}>Preguntas frecuentes</span>
            <span className="footer-item" onClick={() => handleLinkClick('/')}>Términos y condiciones</span>
          </span>
        </div>
        <div className="logo-incial-frame">
          <span onClick={() => handleLinkClick('/')}>
            <img className="logo-incial-icon3" loading="lazy" alt="Logo" src={logo_byn} />
          </span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
