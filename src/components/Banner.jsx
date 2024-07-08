import React from 'react';
import img_banner from '../images/baner.png';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${img_banner})` }}>
      <div className="overlay"></div>
      <div className="banner-content">
        <h1>Encontrá tu <br /> departamento ideal <br /> junto a TemporariosNYC</h1>
      </div>
    </div>
  );
};

export default Banner;
