import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Destinos from './components/Destinos';
import HotelCatalog from './components/HotelCatalog';
import Nosotros from './components/Nosotros';
import HotelDetail from './components/HotelDetail';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar  />
        <main>
          <Routes>
            <Route path="/" element={
              <>  
                <Banner />
                <Destinos />
              </>
            } />
            <Route path="/hospedajes" element={<HotelCatalog />} />
            <Route path="/hospedaje/:id" element={<HotelDetail />} />
            <Route path="/nosotros" element={<Nosotros />} />
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
