import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { ClipLoader } from 'react-spinners';
import WhatsAppLink from './WhatsAppLink';
import ReactStars from 'react-stars';

const HotelDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [hotel, setHotel] = useState(location.state?.hotel || null);
  const [loading, setLoading] = useState(!hotel);
  const [error, setError] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleExternalLinkClick = (url) => {
    const whatsappMessage = `Hola! Vi este hospedaje ${hotel.nombre} en ${hotel.localidad} y estaba interesado en reservar.`;
    const whatsappUrl = `https://wa.me/3517045448?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    window.scrollTo(0, 0);
  };

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

  const imagenes = [
    hotel.imagen_principal_1,
    hotel.imagen_principal_2,
    hotel.imagen_principal_3,
    hotel.imagen_principal_4,
    hotel.imagen_principal_5
  ].filter(img => img);

  const handleShowAllImages = () => {
    setShowAllImages(true);
  };

  const handleCloseAllImagesModal = () => {
    setShowAllImages(false);
  };

  const handleCloseImageModal = () => {
    setSelectedImage(null);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const phoneNumber = process.env.REACT_APP_WSP;
  const message = `Hola! Quiero reservar el siguiente hospedaje:\n\nNombre: ${hotel.nombre}\nLocalidad: ${hotel.localidad}\nPaís: ${hotel.pais}\nPrecio por noche: $${hotel.precio}\n\nDirección: ${hotel.direccion}\nCantidad de personas: ${hotel.huespedes}\n\n${hotel.link_booking}`;

  return (
    <div>
      <Navbar />
      <div className="hotel-detail-container">
        <div className="hotel-header">
          <div className="hotel-info-header">
            <div className="hotel-title">
              <h1>{hotel.nombre}</h1>
              <p className="hotel-location">{hotel.localidad}, {hotel.pais}</p>
            </div>
            <ReactStars
                count={5}
                value={hotel.calificacion}
                size={24}
                color2={'#ffd700'}
                edit={false}
              />
            <p className="hotel-price">
              ${hotel.precio} <span className="price-per-night">por noche <span style={{color: 'red'}}>*</span></span>
            </p>

          </div>
          <div className="container">
            <div className="main-image">
              <img src={hotel.imagen_principal_1} alt="Imagen principal" />
            </div>
            <div className="thumbnail-images">
              {imagenes.slice(1, 3).map((img, index) => (
                <img key={index} src={img} alt={`Imagen secundaria ${index + 1}`} onClick={() => handleImageClick(img)} />
              ))}
              {imagenes.length > 3 && (
                <div className="more-images" style={{ backgroundImage: `url(${imagenes[3]})` }} onClick={handleShowAllImages}>
                  <span>...</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hotel-main">
          <div className="hotel-info">
            <div className="hotel-rating">
              <br />
              <ReactStars
                size={36}
                count={5}
                value={hotel.calificacion}
                color2={'#ffd700'}
                edit={false}
              />
            </div>
            <h3>Datos generales</h3>
            <p>Dirección: {hotel.direccion}</p>
            <p>Cantidad de personas: {hotel.huespedes}</p>
            <div className="hotel-description">
              <h3>Descripción</h3>
              <p>{hotel.datos}</p>
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
              <p className="price-note">* Los precios son referenciales y están sujetos a cambios dependiendo de las fechas, la disponibilidad y la cantidad de personas que se hospeden. </p>
            </div>
            <div className="hotel-reservation">
              <h3>Reserva</h3>
              <div className='reservation-button__content'>
                <button className="reservation-button reservation-button__booking" onClick={() => window.open(hotel.link_booking, '_blank')}>Reservar en Booking</button>
                <div onClick={handleExternalLinkClick} className=" reservation-button reservation-button__wp">
                  Resevar por WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAllImages && (
        <div className="modal" onClick={handleCloseAllImagesModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseAllImagesModal}>&times;</span>
            <div className="modal-images">
              {imagenes.map((img, index) => (
                <img key={index} src={img} alt={`Imagen ${index + 1}`} onClick={() => handleImageClick(img)} />
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedImage && (
        <div className="modal full-image-modal" onClick={handleCloseImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-min" onClick={handleCloseImageModal}>&times;</span>
            <img src={selectedImage} alt="Imagen seleccionada" className="full-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDetail;
