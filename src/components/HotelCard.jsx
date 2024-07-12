import React from 'react';
import './../styles/HotelCard.css';

const HotelCard = ({ image, title, location, details, price }) => {
    return (
        <div className="hotel-card">
            <img className="hotel-card__image" src={image} alt={title} />
            <div className="hotel-card__content">
                <h2 className="hotel-card__title">{title}</h2>
                <h3 className="hotel-card__location">{location}</h3>
                <ul className="hotel-card__details">
                    {details}
                    {/* {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))} */}
                </ul>
                <div className="hotel-card__footer">
                    <div className="hotel-card__price">
                        <div>
                            ${price}
                        </div>
                        <div className="hotel-card__price-pn">
                            por noche
                        </div>
                    </div>
                    <button className="hotel-card__button">Reservar</button>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
