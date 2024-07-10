// Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <h1>Bienvenido a la Lista de Hoteles</h1>
      {/* Puedes agregar contenido adicional aquí si es necesario */}
      <div class="banner1">
        <div class="rental-options">
          <div class="somos-la-opcin-container">
            <span class="somos-la-opcin"
            >Somos la opción Nro 1 de Alquileres Temporarios, por día, por
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
              src="./public/whatsapp-image-20240702-at-165802-adb6290b-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
