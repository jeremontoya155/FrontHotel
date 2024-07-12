import React, { useEffect, useState } from 'react';
import HotelCard from './/HotelCard.jsx';
import SearchBar from './SearchBar.jsx';

const HotelCatalog = () => {
  const [hoteles, setHoteles] = useState([]);

  useEffect(() => {
    fetch('/api/hoteles')
      .then(response => response.json())
      .then(data => setHoteles(data))
      .catch(error => console.error('Error fetching hoteles:', error));
  }, []);

  /* const hotelDetails = [
    {
      image: img_bsas,
      title: 'NYC3',
      location: 'Centro, Córdoba',
      details: [
        'Departamento',
        'Máximo 2 personas',
        '1 cama de dos plazas',
        '1 baño',
        'Buena ubicación',
        'Cochera',
      ],
      price: '30.406',
    }
  ]; */

  return (
    <div className='hospedajes'>
      
      <SearchBar />
      <div className="hotel-catalog">
        {hoteles.map((hotel) => (
          <HotelCard
            key={hotel.id}
            image={hotel.imagen_principal_1}
            title={hotel.tipo_alojamiento}
            location={hotel.ubicacion}
            details={hotel.datos}
            price={hotel.precio}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelCatalog;
