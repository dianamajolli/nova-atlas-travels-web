// src/App.js
import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

// Import i18n configuration
import './i18n/i18n'; // This initializes i18next

function App() {
  return (
    // Suspense fallback can be a simple loading text or a spinner component
    <Suspense fallback="Loading...">
      <div className="App">
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;

