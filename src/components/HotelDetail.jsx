import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ClipLoader } from 'react-spinners';
import '../styles/HotelDetail.css'; // Asegúrate de crear este archivo CSS

const HotelDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const [hotel, setHotel] = useState(location.state?.hotel || null);
    const [loading, setLoading] = useState(!hotel);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!hotel) {
            fetch(`${process.env.REACT_APP_API_URL}/api/hoteles/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    setHotel(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching hotel details:', error);
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [id, hotel]);

    if (loading) {
        return (
            <div className='loading'>
                <ClipLoader size={150} color={"#dc5f00"} loading={loading} />
                <p>Cargando detalles del hospedaje...</p>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!hotel) {
        return <div>No se encontraron detalles del hospedaje.</div>;
    }

    return (
        <div>
            <div className="hotel-detail-container">
                <div className="hotel-header">
                    <div className="hotel-info-header">
                        <div className="hotel-title">
                            <h1 >{hotel.nombre}</h1>
                            <p className="hotel-location">{hotel.localidad}, {hotel.pais}</p>
                        </div>
                        <p className="hotel-price">${hotel.precio} por noche</p>
                    </div>
                    <div className="hotel-images">
                        <img src={hotel.imagen_principal_1} alt="Imagen principal" className="hotel-main-image" />
                        <div className="hotel-secondary-images">
                            <img src={hotel.imagen_principal_2} alt="Imagen secundaria 1" className="hotel-secondary-image" />
                            <img src={hotel.imagen_principal_3} alt="Imagen secundaria 2" className="hotel-secondary-image" />
                            {/* Puedes añadir más imágenes aquí si es necesario */}
                        </div>
                    </div>
                </div>
                <div className="hotel-main">
                    <div className="hotel-info">
                        <div className="hotel-services">
                            <h3>Servicios</h3>
                            <p>{hotel.servicios?.join(', ')}</p>
                        </div>
                        <div className="hotel-description">
                            <h3>Descripción general</h3>
                            <p>{hotel.datos}</p>
                        </div>
                        <div className="hotel-rating">
                            <h3>Calificación</h3>
                            <p>{hotel.calificacion} estrellas</p>
                        </div>
                        <div className="hotel-map">
                            <h3>Mapa</h3>
                            <iframe
                                src={hotel.link_maps}
                                width="100%"
                                height="300"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="hotel-prices">
                            <h3>Resumen de precios</h3>
                            <p>1 noche: ${hotel.precio}</p>
                            <p>2 noches: ${hotel.precio * 2}</p>
                            <p>3 noches: ${hotel.precio * 3}</p>
                        </div>
                        <div className="hotel-reservation">
                            <h3>Reserva</h3>
                            <p>Dirección: {hotel.direccion}</p>
                            <p>Cantidad de personas: {hotel.huespedes}</p>
                            <button className="reservation-button" onClick={() => window.open(hotel.link_booking, '_blank')}>Reservar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;
