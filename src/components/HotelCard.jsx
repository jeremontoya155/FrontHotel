import React from 'react';
import './../styles/HotelCard.css';

const HotelCard = ({ hotel }) => {
    return (
        <>
            <div className="hotel-card" key={hotel.id}>
                <img className="hotel-card__image" src={hotel.imagen_principal_1} alt={hotel.id} />
                <div className="hotel-card__content">
                    <h2 className="hotel-card__title">{hotel.nombre}</h2>
                    <h3 className="hotel-card__location">{hotel.ubicacion}</h3>
                    <ul className="hotel-card__details">
                        {hotel.datos}
                        <p>Cochera: {hotel.cochera ? 'Sí' : 'No'}</p>
                        <p>Cochera: {hotel.cochera ? 'Sí' : 'No'}</p>
                        <p>Cochera: {hotel.cochera ? 'Sí' : 'No'}</p>
                        <p>Cochera: {hotel.cochera ? 'Sí' : 'No'}</p>
                        <p>Cochera: {hotel.cochera ? 'Sí' : 'No'}</p>
                        <p>Cochera: {hotel.cochera ? 'Sí' : 'No'}</p>

                        {/* {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                        ))} */}
                    </ul>
                    <div className="hotel-card__footer">
                        <div className="hotel-card__price">
                            <div>
                                ${hotel.precio}
                            </div>
                            <div className="hotel-card__price-pn">
                                por noche
                            </div>
                        </div>
                        <button className="hotel-card__button">Reservar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelCard;
