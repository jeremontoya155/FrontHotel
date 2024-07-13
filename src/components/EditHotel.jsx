import React, { useState } from 'react';
import axios from 'axios';

const EditHotel = ({ hotel, onUpdate }) => {
  const [editedHotel, setEditedHotel] = useState({
    tipo_alojamiento: hotel.tipo_alojamiento,
    ubicacion: hotel.ubicacion,
    disponibilidad: hotel.disponibilidad,
    precio: hotel.precio,
    datos: hotel.datos,
    cochera: hotel.cochera,
    link_booking: hotel.link_booking,
    link_maps: hotel.link_maps,
    wsp: hotel.wsp,
    imagen_principal_1: hotel.imagen_principal_1,
    imagen_principal_2: hotel.imagen_principal_2,
    imagen_principal_3: hotel.imagen_principal_3
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedHotel({ ...editedHotel, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setEditedHotel({ ...editedHotel, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/hoteles/${hotel.id}`, editedHotel);
      console.log('Respuesta al actualizar hotel:', response.data);
      onUpdate(); // Actualiza la lista de hoteles después de editar uno
    } catch (error) {
      console.error('Error al actualizar hotel:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="tipo_alojamiento" placeholder="Tipo de Alojamiento" value={editedHotel.tipo_alojamiento} onChange={handleInputChange} required />
      <input type="text" name="ubicacion" placeholder="Ubicación" value={editedHotel.ubicacion} onChange={handleInputChange} required />
      <input type="text" name="datos" placeholder="Datos del hotel" value={editedHotel.datos} onChange={handleInputChange} />
      <input type="text" name="link_booking" placeholder="Link de Booking" value={editedHotel.link_booking} onChange={handleInputChange} />
      <input type="text" name="link_maps" placeholder="Link de Maps" value={editedHotel.link_maps} onChange={handleInputChange} />
      <input type="text" name="wsp" placeholder="Número de WhatsApp" value={editedHotel.wsp} onChange={handleInputChange} />
      <input type="text" name="imagen_principal_1" placeholder="URL de Imagen 1" value={editedHotel.imagen_principal_1} onChange={handleInputChange} />
      <input type="text" name="imagen_principal_2" placeholder="URL de Imagen 2" value={editedHotel.imagen_principal_2} onChange={handleInputChange} />
      <input type="text" name="imagen_principal_3" placeholder="URL de Imagen 3" value={editedHotel.imagen_principal_3} onChange={handleInputChange} />
      <label>
        Disponibilidad:
        <input type="checkbox" name="disponibilidad" checked={editedHotel.disponibilidad} onChange={handleCheckboxChange} />
      </label>
      <label>
        Cochera:
        <input type="checkbox" name="cochera" checked={editedHotel.cochera} onChange={handleCheckboxChange} />
      </label>
      <input type="number" name="precio" placeholder="Precio" value={editedHotel.precio} onChange={handleInputChange} />
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default EditHotel;
