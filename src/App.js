// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop'; // <-- IMPORT
import HomePage from './pages/HomePage';
import AmenitiesPage from './pages/AmenitiesPage';
import ResidencesPage from './pages/ResidencesPage';
import NeighborhoodPage from './pages/NeighborhoodPage';
import AvailabilityPage from './pages/AvailabilityPage';
import GalleryPage from './pages/GalleryPage';
import ContactUsPage from './pages/ContactUsPage';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <-- ADD THIS COMPONENT HERE */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/residences" element={<ResidencesPage />} />
          <Route path="/neighborhood" element={<NeighborhoodPage />} />
          <Route path="/availability" element={<AvailabilityPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          {/* Add other routes here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;