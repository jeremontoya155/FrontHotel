import React, { useEffect, useState } from 'react';

const Admin = ({ token }) => {
  const [hoteles, setHoteles] = useState([]);
  const [form, setForm] = useState({
    link_booking: '',
    disponibilidad: false,
    precio: '',
    datos: '',
    ubicacion: '',
    imagen_principal_1: '',
    imagen_principal_2: '',
    imagen_principal_3: '',
    tipo_alojamiento: '',
    cochera: false,
    link_maps: ''
  });

  useEffect(() => {
    fetch('/api/hoteles')
      .then(response => response.json())
      .then(data => setHoteles(data))
      .catch(error => console.error('Error fetching hoteles:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/hoteles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(form)
    });
    const newHotel = await response.json();
    setHoteles([...hoteles, newHotel]);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        {/* Add your form fields here */}
        <button type="submit">Add Hotel</button>
      </form>
      <h2>Lista de Hoteles</h2>
      <div>
        {hoteles.map(hotel => (
          <div key={hotel.id}>
            <h2>{hotel.tipo_alojamiento}</h2>
            {/* Add more hotel details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
