import React from 'react';
import img_banner from '../images/baner.png';
import img_section from '../images/sectionimg.jpg';
import '../styles/Banner.css';
import SearchBar from './SearchBar';

const Banner = () => {
  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${img_banner})` }}>
        <div className="overlay"></div>
        <div className="banner-content">
          <h1>Encontrá tu <br /> departamento ideal <br /> junto a TemporariosNYC</h1>
        </div>
      </div>
      <SearchBar />
      <div className="section">
        <div className="rental-options">
          <div className="encontra-tu-departamento-ideal">
            <b className="temporarios-nyc">
              <p className="temporarios-nyc1">Temporarios NYC</p>
              <p className="alquileres-temporarios">ALQUILERES TEMPORARIOS</p>
            </b>
            <span className="somos-la-opcin-container">
              Somos la opción Nro 1 de Alquileres Temporarios, por día, por
              semana o meses, en cualquiera de nuestras localizaciones y en
              diferentes ciudades.
            </span>
          </div>
          <b className="viv-la-experiencia">Viví la experiencia...</b>
        </div>
        <div className="section-img-wrapper">
          <div className="wrapper-section-img">
            <img
              className="section-img-02-at-1"
              loading="lazy"
              alt=""
              src={img_section}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
