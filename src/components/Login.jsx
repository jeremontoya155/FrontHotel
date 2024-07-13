import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Nuevo estado para manejar la autenticación

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Intentando iniciar sesión con:', username, password);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, { username, password });
      console.log('Respuesta del servidor:', response.data);
      if (response.data.message === 'Login successful') {
        onLogin(); // Llama a la función de inicio de sesión proporcionada por el componente padre
        setIsAuthenticated(true); // Actualiza el estado de autenticación
      } else {
        setLoginError('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      setLoginError('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  // Si está autenticado, redirige a /hotel-management
  if (isAuthenticated) {
    return <Navigate to="/hotel-management" />;
  }

  return (
    <div className="main-container">
      <div className="form-container">
        <h2>Iniciar sesión</h2>
        {loginError && <div className="error-message">{loginError}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Usuario</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <button type="submit">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
