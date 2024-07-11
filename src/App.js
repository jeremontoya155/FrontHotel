import React from 'react';
import './App.css';
import HotelCatalog from './components/HotelCatalog';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

import Destinos from './components/Destinos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Banner />
        <Destinos />
        <HotelCatalog />
      </main>
     
    </div>
  );
}

export default App;
