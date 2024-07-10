import React from 'react';
import img_banner from '../images/baner.png';
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
      <div class="banner1">
        <div class="rental-options">
          <div class="somos-la-opcin-container">
            <span class="somos-la-opcin"
            >Somos la opción Nro 2 de Alquileres Temporarios, por día, por
              semana o meses, en cualquiera de nuestras localizaciones y en
              diferentes ciudades</span
            >
            <span class="span">.</span>
          </div>
          <div class="encontra-tu-departamento-ideal">
            <b class="temporarios-nyc">
              <p class="temporarios-nyc1">Temporarios NYC</p>
              <p class="alquileres-temporarios">ALQUILERES TEMPORARIOS</p>
            </b>
          </div>
          <b class="viv-la-experiencia">Viví la experiencia...</b>
        </div>
        <div class="wrapper-whatsapp-image-2024-07-wrapper">
          <div class="wrapper-whatsapp-image-2024-07">
            <img
              class="whatsapp-image-2024-07-02-at-1"
              loading="lazy"
              alt=""
              src={img_banner}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
