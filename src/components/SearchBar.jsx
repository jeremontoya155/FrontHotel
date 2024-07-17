import React, { useState } from 'react';
import { FaSlidersH } from 'react-icons/fa';

const SearchBar = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    if (endDate && new Date(e.target.value) > new Date(endDate)) {
      setEndDate('');
    }
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="search-bar">
      <div className="search-bar__date-container">
        <label>¿A donde viajas?</label>
        <input
          type="text"
          placeholder="Elegí tu próximo destino..."
          className="search-bar__input search-bar__input-dest"
        />
      </div>
      <div className="search-bar__dates">
        <div className="search-bar__date-container">
          <label htmlFor="start-date">Fecha de Llegada</label>
          <input
            id="start-date"
            type="date"
            value={startDate}
            min={today}
            onChange={handleStartDateChange}
            className="search-bar__date"
          />
        </div>
        <div className="search-bar__date-container">
          <label htmlFor="end-date">Fecha de Salida</label>
          <input
            id="end-date"
            type="date"
            value={endDate}
            min={startDate || today}
            onChange={handleEndDateChange}
            className="search-bar__date"
          />
        </div>
      </div>
      
      <div className="search-bar__date-container">
        <label>Huespedes</label>
        <select
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          className="search-bar__input search-bar__input-huesp"
        >
          {[...Array(8).keys()].map(i => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
        
      </div>
      <div className="search-bar__date-container">

        <button className="search-bar__button">Buscar</button>
      </div>
      <div className="search-bar__date-container">


        <button className="search-bar__settings">
          <FaSlidersH />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
