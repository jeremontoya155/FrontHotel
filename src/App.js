// App.js
import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Destinos from './components/Destinos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Banner />
        <Destinos />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
