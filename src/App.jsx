import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Destinos from './components/Destinos';
import HotelCatalog from './components/HotelCatalog';
import Login from './components/Login';
import HotelManagement from './components/HotelManagement'; // Importa el componente de gestión de hoteles

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <Destinos />
              </>
            } />
            <Route path="/hotels" element={<HotelCatalog />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            {/* Ruta protegida para la gestión de hoteles */}
            <Route path="/hotel-management" element={<HotelManagement/>} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
