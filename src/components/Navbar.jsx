import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center">
        <img src="/logo.png" alt="Arami Cafe Premium" className="h-20 object-contain drop-shadow-lg" />
      </div>
      <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] text-gray-300">
        <a href="#inicio" className="hover:text-white transition-colors">INICIO</a>
        <a href="#historia" className="hover:text-white transition-colors">NUESTRA HISTORIA</a>
        <a href="#cafes" className="hover:text-white transition-colors">NUESTROS CAFÉS</a>
        <a href="#contacto" className="hover:text-white transition-colors">CONTACTO</a>
      </div>
      <a href="https://wa.me/59171239162" target="_blank" rel="noopener noreferrer" className="bg-[#E33B24] text-white px-10 py-3 rounded-[8px] font-bold text-[14px] tracking-wider hover:bg-[#c62d1a] transition-all text-center">
        Pide tu café
      </a>
    </nav>
  );
}
