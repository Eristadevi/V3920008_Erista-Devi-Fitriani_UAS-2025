import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import komponen halaman
import LandingPage from './component/landingpage';
import GalleryPage from './component/GalleryPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Halaman Galeri */}
          <Route path="/gallery" element={<GalleryPage />} />
          
          =
        </Routes>
      </div>
    </Router>
  );
}

export default App;