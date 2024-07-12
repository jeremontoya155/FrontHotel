import React, { useEffect, useState } from 'react';
import './HotelCatalog.css';
import WhatsAppLink from './WhatsAppLink';

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
    return <div>Cargando hoteles...</div>;
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
    <div>
      <h1>Lista de Hoteles</h1>
      <div className="hoteles-container">
        {hoteles.map(hotel => (
          <div key={hotel.id} className="hotel-card">
            <h2>{hotel.tipo_alojamiento}</h2>
            <p>Ubicación: {hotel.ubicacion}</p>
            <p>Disponibilidad: {hotel.disponibilidad ? 'Disponible' : 'No Disponible'}</p>
            <p>Precio: ${hotel.precio}</p>
            <p>Datos: {hotel.datos}</p>
            <p>Cochera: {hotel.cochera ? 'Sí' : 'No'}</p>
            <button onClick={() => handleReservarClick(hotel.link_booking)}>
              {hotel.link_booking ? 'Reservar' : 'No disponible'}
            </button>
            <button onClick={() => handleUbicacionClick(hotel.link_maps)}>
              {hotel.link_maps ? 'Ubicación' : 'No disponible'}
            </button>
            {hotel.wsp && 
              <p>
                <WhatsAppLink phoneNumber={hotel.wsp} />
              </p>
            }
            {hotel.imagen_principal_1 && <img src={hotel.imagen_principal_1} alt="Imagen 1" style={{maxWidth: '200px'}} />}
            {hotel.imagen_principal_2 && <img src={hotel.imagen_principal_2} alt="Imagen 2" style={{maxWidth: '200px'}} />}
            {hotel.imagen_principal_3 && <img src={hotel.imagen_principal_3} alt="Imagen 3" style={{maxWidth: '200px'}} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelCatalog;

