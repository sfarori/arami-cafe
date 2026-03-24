import React from 'react';

export default function Proceso() {
  const pasos = [
    {
      titulo: 'Cultivo Sostenible',
      desc: 'Nuestras plantas crecen en un entorno ideal, respetando el medio ambiente.',
      img: '/cultivo.JPG'
    },
    {
      titulo: 'Secado al Sol',
      desc: 'El proceso natural de secado al sol resalta los aromas y sabores únicos.',
      img: '/secado.jpeg'
    },
    {
      titulo: 'Tostado de Autor',
      desc: 'Tostamos cada lote meticulosamente para garantizar la máxima calidad.',
      img: '/tostado.JPG'
    }
  ];

  return (
    <section id="proceso" className="py-24 px-6 md:px-16 bg-[#1F1F1F] border-y border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white">El Proceso Artesanal</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Desde la plantación hasta tu taza, cada grano es tratado con pasión y cuidado, creando una experiencia inigualable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pasos.map((paso, index) => (
            <div key={index} className="bg-transparent group cursor-pointer transition-transform hover:-translate-y-2">
              <div className="overflow-hidden rounded-2xl mb-6 shadow-2xl">
                <img 
                  src={paso.img} 
                  alt={paso.titulo} 
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{paso.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{paso.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
