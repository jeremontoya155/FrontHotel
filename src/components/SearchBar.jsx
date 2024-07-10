import React from 'react';
import { FaSlidersH } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Elegí tu próximo destino..."
        className="search-bar__input search-bar__input-dest"
      />
      <div className="search-bar__dates">
        <input
          type="date"
          placeholder="Fecha de Llegada"
          className="search-bar__date"
        /> 
        <input
          type="date"
          placeholder="Fecha de Salida"
          className="search-bar__date"
        />
      </div>
      <input
        type="number"
        placeholder="Huéspedes"
        className="search-bar__input search-bar__input-huesp"
      />
      <button className="search-bar__button">Buscarrr</button>
      <button className="search-bar__settings">
        <FaSlidersH />
      </button>
    </div>
  );
};

export default SearchBar;
