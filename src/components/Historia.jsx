import React from 'react';

export default function Historia() {
  return (
    <section id="historia" className="py-24 px-6 md:px-16 bg-[#262626] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div>
            <span className="text-[#E33B24] font-bold tracking-widest text-xs uppercase mb-2 block">Nuestra Historia</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Tradición que se siente en cada taza</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg">
            La población de Irupana es uno de los pueblos más atractivos de los yungas, un área productora agrícola, entre los productos destacados de esta región se encuentra el café. Es así que se crea Aramí (pedacito de cielo), productora de café orgánico de alta calidad bajo el mando de la familia Soukup.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white text-black p-6 rounded-2xl flex gap-4 items-start shadow-xl">
              <div className="text-[#E33B24] text-2xl mt-1">🌿</div>
              <div>
                <h4 className="font-bold text-lg">Sostenibilidad</h4>
                <p className="text-gray-500 text-sm mt-1">Cultivamos con respeto a la madre tierra.</p>
              </div>
            </div>
            <div className="bg-white text-black p-6 rounded-2xl flex gap-4 items-start shadow-xl">
              <div className="text-[#E33B24] text-2xl mt-1">🤲</div>
              <div>
                <h4 className="font-bold text-lg">Cosecha Manual</h4>
                <p className="text-gray-500 text-sm mt-1">Seleccionamos los mejores granos a mano.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Collage */}
        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <div className="flex flex-col gap-4">
            <img src="/manos.jpeg" alt="Cosecha manual" className="w-full h-1/2 object-cover rounded-2xl" />
            <img src="/irupana.png" alt="Irupana" className="w-full h-1/2 object-cover rounded-2xl" />
          </div>
          <div className="pt-12">
            <img src="/tostado.JPG" alt="Tostado" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
