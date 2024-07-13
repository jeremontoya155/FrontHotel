// Login.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-domain.com/api/login', { username, password });
      if (response.data.message === 'Login successful') {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        onLogin();
      } else {
        setLoginError('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      setLoginError('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  if (isLoggedIn) {
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
