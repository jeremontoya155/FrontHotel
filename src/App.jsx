import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Destinos from './components/Destinos';
import HotelCatalog from './components/HotelCatalog';
import Nosotros from './components/Nosotros';
import HotelDetail from './components/HotelDetail';
import WhatsApp from './images/whatsapp.png';

const BookingFrame = lazy(() => import('./components/BookingFrame'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Destinos />
                  <Suspense fallback={<div>Cargando...</div>}>
                    <BookingFrame />
                  </Suspense>
                </>
              }
            />
            <Route path="/hospedajes" element={<HotelCatalog />} />
            <Route path="/hospedaje/:id" element={<HotelDetail />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
        <a
          href="https://wa.me/5493513509500?text=Hola!%20Estaba%20buscando%20un%20hospedaje%20para..."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src={WhatsApp} alt="WhatsApp" /> {/* Reemplaza con la URL del icono de WhatsApp */}
        </a>
      </div>
    </Router>
  );
}

export default App;
