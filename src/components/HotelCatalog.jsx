import React, { useEffect, useState } from 'react';
import HotelCard from './HotelCard';
/* import SearchBar from './SearchBar'; */
import logo from '../images/logotipo.jpg';
import { ClipLoader } from 'react-spinners'; // Importar el spinner

const HotelCatalog = () => {
  const [hoteles, setHoteles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    huespedes: 1,
    pileta: false,
    cochera: false,
    localidad: ''
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/hoteles`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setHoteles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching hoteles:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className='loading'>
        <ClipLoader size={150} color={"#dc5f00"} loading={loading} />
        <p>Cargando hospedajes...</p>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (hoteles.length === 0) {
    return <div>No se encontraron hoteles disponibles.</div>;
  }

  const filteredHoteles = hoteles.filter(hotel =>
    (searchTerm === '' || hotel.nombre.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filters.localidad === '' || hotel.localidad.toLowerCase().includes(filters.localidad.toLowerCase())) &&
    (filters.huespedes <= hotel.huespedes) &&
    (!filters.pileta || hotel.pileta) &&
    (!filters.cochera || hotel.cochera)
  );

  return (
    <div>
      <div className="nosotros-logo-section">
        <img src={logo} alt="Logo de Temporarios New York" className="nosotros-logo" />
      </div>
      <div className="hospedajes">
       {/*  <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          setFilters={setFilters}
        /> */}
        <h1>Lista de Hospedajes</h1>
        <div className="hotel-catalog">
          {filteredHoteles.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelCatalog;
