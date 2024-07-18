import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/HotelCard.css';
import no_img from '../images/no-image.png';

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleReservarClick = () => {
    navigate(`/hospedaje/${hotel.id}`, { state: { hotel } });
    window.scrollTo(0, 0); 
  };

  return (
    <div className="hotel-card" key={hotel.id}>
      <img className="hotel-card__image" src={hotel.imagen_principal_1 ? hotel.imagen_principal_1 : no_img} alt={hotel.id} />
      <div className="hotel-card__content">
        <div>
          <h2 className="hotel-card__title">{hotel.nombre}</h2>
          <h3 className="hotel-card__location">{hotel.localidad}, {hotel.pais}</h3>
        </div>
        <ul className="hotel-card__details">
          <li>{hotel.tipo_alojamiento}</li>
          <li>Máximo {hotel.huespedes} personas</li>
          <li>{hotel.cochera ? 'Con cochera' : 'Sin cochera'}</li>
          <li>{hotel.pileta ? 'Pileta disponible' : 'Sin pileta'}</li>
          <li>{hotel.baños === 1 ? "Un baño" : `${hotel.baños} baños`}</li>
        </ul>
        <div className="hotel-card__footer">
          <div className="hotel-card__price">
            <div>${hotel.precio}</div>
            <div className="hotel-card__price-pn">por noche</div>
          </div>
          <button className="hotel-card__button" onClick={handleReservarClick}>Reservar</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
