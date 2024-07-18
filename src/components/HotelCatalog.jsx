import React, { useEffect, useState } from 'react';
import WhatsAppLink from './WhatsAppLink';
import HotelCard from './HotelCard';
import SearchBar from './SearchBar';
import { ClipLoader } from 'react-spinners'; // Importar el spinner

const HotelCatalog = () => {
  const [hoteles, setHoteles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleReservarClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      alert('Enlace de reserva no disponible');
    }
  };

  const handleUbicacionClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      alert('Enlace de ubicación no disponible');
    }
  };

  return (
    <div className="hospedajes">
      <SearchBar />
      <h1>Lista de Hospedajes</h1>
      <div className="hotel-catalog">
        {hoteles.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default HotelCatalog;
