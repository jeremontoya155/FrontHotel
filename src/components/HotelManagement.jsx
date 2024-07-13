import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import EditHotel from './EditHotel'; // Asegúrate de importar EditHotel desde su ubicación correcta

const HotelManagement = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hoteles, setHoteles] = useState([]);
  const [nuevoHotel, setNuevoHotel] = useState({
    tipo_alojamiento: '',
    ubicacion: '',
    disponibilidad: true,
    precio: 0,
    datos: '',
    cochera: false,
    link_booking: '',
    link_maps: '',
    wsp: '',
    imagen_principal_1: '',
    imagen_principal_2: '',
    imagen_principal_3: ''
  });
  const [hotelEditando, setHotelEditando] = useState(null);

  useEffect(() => {
    checkLoginStatus();
    fetchHoteles();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('/api/check-login');
      if (response.data.isLoggedIn) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error al verificar el estado de inicio de sesión:', error);
    }
  };

  const fetchHoteles = async () => {
    try {
      const response = await axios.get('/api/hoteles');
      setHoteles(response.data);
    } catch (error) {
      console.error('Error al obtener hoteles:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('/api/logout');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoHotel({ ...nuevoHotel, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/hoteles', nuevoHotel);
      console.log('Respuesta al crear hotel:', response.data);
      setNuevoHotel({
        tipo_alojamiento: '',
        ubicacion: '',
        disponibilidad: true,
        precio: 0,
        datos: '',
        cochera: false,
        link_booking: '',
        link_maps: '',
        wsp: '',
        imagen_principal_1: '',
        imagen_principal_2: '',
        imagen_principal_3: ''
      });
      fetchHoteles();
    } catch (error) {
      console.error('Error al crear hotel:', error);
    }
  };

  const handleEditarHotel = async (hotelId) => {
    try {
      const response = await axios.put(`/api/hoteles/${hotelId}`, nuevoHotel); // Ajusta la ruta y cuerpo de la solicitud según el backend
      console.log('Respuesta al editar hotel:', response.data);
      setHotelEditando(null);
      fetchHoteles();
    } catch (error) {
      console.error('Error al editar hotel:', error);
    }
  };

  const handleEliminarHotel = async (hotelId) => {
    try {
      await axios.delete(`/api/hoteles/${hotelId}`);
      console.log('Hotel eliminado correctamente');
      fetchHoteles();
    } catch (error) {
      console.error('Error al eliminar hotel:', error);
    }
  };

  const renderHotelList = () => {
    return hoteles.map((hotel) => (
      <div key={hotel.id}>
        {hotelEditando === hotel.id ? (
          <EditHotel hotel={hotel} onUpdate={() => setHotelEditando(null)} />
        ) : (
          <div>
            <h3>{hotel.tipo_alojamiento}</h3>
            <p>{hotel.ubicacion}</p>
            {/* Mostrar otros detalles del hotel aquí */}
            <button onClick={() => setHotelEditando(hotel.id)}>Editar</button>
            <button onClick={() => handleEliminarHotel(hotel.id)}>Eliminar</button>
          </div>
        )}
      </div>
    ));
  };
  


  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div>
      <button onClick={handleLogout}>Cerrar sesión</button>
      <h2>Administración de Hoteles</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="tipo_alojamiento" placeholder="Tipo de Alojamiento" value={nuevoHotel.tipo_alojamiento} onChange={handleInputChange} required />
        <input type="text" name="ubicacion" placeholder="Ubicación" value={nuevoHotel.ubicacion} onChange={handleInputChange} required />
        <input type="text" name="datos" placeholder="Datos del hotel" value={nuevoHotel.datos} onChange={handleInputChange} />
        <input type="text" name="link_booking" placeholder="Link de Booking" value={nuevoHotel.link_booking} onChange={handleInputChange} />
        <input type="text" name="link_maps" placeholder="Link de Maps" value={nuevoHotel.link_maps} onChange={handleInputChange} />
        <input type="text" name="wsp" placeholder="Número de WhatsApp" value={nuevoHotel.wsp} onChange={handleInputChange} />
        <input type="text" name="imagen_principal_1" placeholder="URL de Imagen 1" value={nuevoHotel.imagen_principal_1} onChange={handleInputChange} />
        <input type="text" name="imagen_principal_2" placeholder="URL de Imagen 2" value={nuevoHotel.imagen_principal_2} onChange={handleInputChange} />
        <input type="text" name="imagen_principal_3" placeholder="URL de Imagen 3" value={nuevoHotel.imagen_principal_3} onChange={handleInputChange} />
        <label>
          Disponibilidad:
          <input type="checkbox" name="disponibilidad" checked={nuevoHotel.disponibilidad} onChange={(e) => setNuevoHotel({ ...nuevoHotel, disponibilidad: e.target.checked })} />
        </label>
        <label>
          Cochera:
          <input type="checkbox" name="cochera" checked={nuevoHotel.cochera} onChange={(e) => setNuevoHotel({ ...nuevoHotel, cochera: e.target.checked })} />
        </label>
        <input type="number" name="precio" placeholder="Precio" value={nuevoHotel.precio} onChange={handleInputChange} />
        <button type="submit">Crear Hotel</button>
      </form>
      <h3>Listado de Hoteles</h3>
      {renderHotelList()}
    </div>
  );
};

export default HotelManagement;
