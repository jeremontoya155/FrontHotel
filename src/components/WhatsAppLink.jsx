import React from 'react';
import './WhatsAppLink.css'; // Ajusta la ruta según tu estructura

const WhatsAppLink = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      Contactar por WhatsApp
    </button>
  );
};

export default WhatsAppLink;

