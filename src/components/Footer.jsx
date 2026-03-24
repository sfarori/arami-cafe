import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#121212] text-gray-400 py-16 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div className="space-y-6">
          <div className="flex items-center justify-center md:justify-start">
            <img src="/logo.png" alt="Arami Cafe Premium" className="h-16 object-contain" />
          </div>
          <p className="text-sm leading-loose">
            El sabor que une generaciones. Cultivado con amor, servido con pasión.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Explorar</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#historia" className="hover:text-white transition-colors">Nuestra Historia</a></li>
            <li><a href="#proceso" className="hover:text-white transition-colors">Proceso</a></li>
            <li><a href="#cafes" className="hover:text-white transition-colors">Nuestros Cafés</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Contacto</h4>
           <ul className="space-y-4 text-sm font-medium">
            <li>+591 71239162</li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Síguenos</h4>
           <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.facebook.com/AramiCafe" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E33B24] transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.instagram.com/arami.cafe/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E33B24] transition-colors">
                <FaInstagram size={18} />
              </a>
           </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between items-center text-gray-500 font-medium">
        <p className="mb-4 md:mb-0 text-center">© 2026 Arami Cafe Premium.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Políticas de Privacidad</a>
          <a href="#" className="hover:text-white">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
}
