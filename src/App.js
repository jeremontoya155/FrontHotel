// App.js
import React from 'react';
import './App.css';
import HotelCatalog from './components/HotelCatalog';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Banner />
        <HotelCatalog />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
