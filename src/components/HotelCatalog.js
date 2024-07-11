import React, { useEffect, useState } from 'react';
import './HotelCatalog.css';
import WhatsAppLink from './WhatsAppLink'; // Ajusta la ruta según tu estructura

const HotelCatalog = () => {
  const [hoteles, setHoteles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/hoteles')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setHoteles(data))
      .catch(error => {
        console.error('Error fetching hoteles:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (hoteles.length === 0) {
    return <div>No se encontraron hoteles disponibles.</div>;
  }

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
            <p>Link a Booking: 
              {hotel.link_booking ? (
                <a href={hotel.link_booking} target="_blank" rel="noopener noreferrer">Reservar</a>
              ) : (
                'No disponible'
              )}
            </p>
            <p>Link a Maps: 
              {hotel.link_maps ? (
                <a href={hotel.link_maps} target="_blank" rel="noopener noreferrer">Ubicación</a>
              ) : (
                'No disponible'
              )}
            </p>
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

