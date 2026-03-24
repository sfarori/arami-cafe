import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Proceso from './components/Proceso';
import Tienda from './components/Tienda';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#242424] text-white font-sans selection:bg-[#E33B24] selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Historia />
      <Proceso />
      <Tienda />
      <CTA />
      <Footer />
    </div>
  );
}
