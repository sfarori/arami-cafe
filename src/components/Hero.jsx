import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex justify-center items-center text-center px-4">
      <div className="absolute inset-0 z-0 bg-black">
        <img src="/hero-bg.jpg" alt="Fondo Cerezas de Cafe" className="w-full h-full object-cover opacity-60" />
      </div>
      <div className="relative z-20 max-w-4xl mx-auto space-y-6 mt-16">
        <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:1}} className="mb-6 flex justify-center">
           <img src="/logo.png" alt="Arami Cafe Premium" className="h-32 md:h-48 object-contain drop-shadow-2xl" />
        </motion.div>
        
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8, delay:0.2}} className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          El sabor auténtico de <br/> nuestra tierra
        </motion.h1>
        
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, delay:0.4}} className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
          Descubre Arami Café orgánico, cultivado con cariño en las tierras altas y procesado con métodos artesanales de su mundo.
        </motion.p>
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8, delay:0.6}} className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <a href="https://wa.me/59171239162" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#E33B24] text-white px-12 py-3.5 rounded-[8px] font-bold text-sm hover:bg-[#c62d1a] hover:scale-105 transition-all text-center">
            Pide tu café
          </a>
          <a href="#historia" className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-3.5 rounded-[8px] font-bold text-sm hover:bg-white/20 transition-all shadow-xl text-center">
            Ver Historia
          </a>
        </motion.div>
      </div>
    </section>
  );
}
