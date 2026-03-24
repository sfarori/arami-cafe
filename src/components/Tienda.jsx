import React, { useState } from 'react';

export default function Tienda() {
  const [filtro, setFiltro] = useState('Todos');
  
  const productos = [
    { id: 1, nombre: 'Café en Grano 250g', desc: 'Aroma Intenso y notas cítricas', badge: 'GRANO', badgeColor: 'bg-[#E33B24]', tipo: 'En Grano' },
    { id: 2, nombre: 'Café en Grano 500g', desc: 'Formato familiar para amantes del café', badge: 'GRANO', badgeColor: 'bg-[#E33B24]', tipo: 'En Grano' },
    { id: 3, nombre: 'Café Molido 250g', desc: 'Listo para tu cafetera favorita', badge: 'MOLIDO', badgeColor: 'bg-[#4F5B66]', tipo: 'Molido' },
    { id: 4, nombre: 'Café Molido 500g', desc: 'Sabor balanceado y cuerpo medio', badge: 'MOLIDO', badgeColor: 'bg-[#4F5B66]', tipo: 'Molido' },
  ];

  const filtrados = filtro === 'Todos' ? productos : productos.filter(p => p.tipo === filtro);

  return (
    <section id="cafes" className="py-24 px-6 md:px-16 bg-[#262626]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-[#E33B24] font-bold tracking-widest text-xs uppercase mb-2 block">Tienda Online</span>
            <h2 className="text-4xl font-extrabold text-white">Nuestros Cafés de Especialidad</h2>
          </div>
          <div className="flex gap-2">
            {['Todos', 'En Grano', 'Molido'].map(f => (
              <button 
                key={f}
                onClick={() => setFiltro(f)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${filtro === f ? 'bg-white text-black' : 'bg-transparent border border-gray-500 text-gray-300 hover:border-white hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtrados.map(prod => (
            <div key={prod.id} className="bg-[#333333] rounded-2xl p-4 flex flex-col group hover:bg-[#3A3A3A] transition-colors shadow-lg">
              <div className="relative bg-[#262626] rounded-xl aspect-square mb-4 p-6 flex items-center justify-center">
                <img src="/bolsa.png" alt={prod.nombre} className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-4 left-4 z-10 ${prod.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md`}>
                  {prod.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-white text-center px-2">{prod.nombre}</h3>
              <p className="text-gray-400 text-xs text-center mt-2 mb-6 h-8 px-2">{prod.desc}</p>
              <a href="https://wa.me/59171239162" target="_blank" rel="noopener noreferrer" className="mt-auto w-full bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-[#E33B24] hover:text-white transition-colors text-center block">
                Comprar ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
