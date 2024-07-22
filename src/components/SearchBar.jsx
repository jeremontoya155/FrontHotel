import React, { useState } from 'react';
import { FaSlidersH } from 'react-icons/fa';

const SearchBar = ({ searchTerm = '', setSearchTerm, filters = {}, setFilters }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    if (endDate && new Date(e.target.value) > new Date(endDate)) {
      setEndDate('');
    }
  };

  /* const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
 */
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  /* const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
  };
 */
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="search-bar">
      <h2 className='search-bar__title'>Filtros</h2>
      <div className="search-bar__date-container">
        <label>Nombre del Hotel</label>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-bar__input search-bar__input-dest"
        />
      </div>
      <div className="search-bar__date-container">
        <label>Localidad</label>
        <input
          type="text"
          name="localidad"
          placeholder="Buscar por localidad..."
          value={filters.localidad || ''}
          onChange={handleFilterChange}
          className="search-bar__input search-bar__input-dest"
        />
      </div>
      {/* <div className="search-bar__dates">
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
      </div> */}
      <div className="search-bar__date-container">
        <label>Huéspedes</label>
        <select
          id="guests"
          name="huespedes"
          value={filters.huespedes || 1}
          onChange={handleFilterChange}
          className="search-bar__input search-bar__input-huesp"
        >
          {[...Array(8).keys()].map(i => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>
      {/* <div className="search-bar__date-container">
        <label>Pileta</label>
        <input
          type="checkbox"
          name="pileta"
          checked={filters.pileta || false}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="search-bar__date-container">
        <label>Cochera</label>
        <input
          type="checkbox"
          name="cochera"
          checked={filters.cochera || false}
          onChange={handleCheckboxChange}
        />
      </div> */}
      {/* <div className="search-bar__date-container">
        <button className="search-bar__button">Buscar</button>
      </div> */}
      {/* <div className="search-bar__date-container">
        <button className="search-bar__settings">
          <FaSlidersH />
        </button>
      </div> */}
    </div>
  );
};

export default SearchBar;
