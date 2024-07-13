import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importa los estilos CSS aquí

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Utiliza useNavigate para la redirección

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Intentando iniciar sesión con:', username, password);
    try {
      const response = await axios.post('/api/login', { username, password });
      console.log('Respuesta del servidor:', response.data);
      if (response.data.message === 'Login successful') {
       // Llama a la función de inicio de sesión proporcionada por el componente padre
        // Redirige al usuario a la página de gestión de hoteles
        navigate('/hotel-management');
      } else {
        setLoginError('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      setLoginError('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h2>Inicio de sesión</h2>
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
