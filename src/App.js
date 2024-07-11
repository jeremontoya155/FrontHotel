// App.js
import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Destinos from './components/Destinos';
import HotelCatalog from './components/HotelCatalog';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Banner />
        <Destinos />
        <HotelCatalog />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
