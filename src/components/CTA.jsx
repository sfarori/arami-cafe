import React from 'react';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-[#262626]">
      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] p-12 md:p-20 text-center text-black shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">¿Eres mayorista o tienes un café?</h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Ofrecemos soluciones personalizadas para negocios, restaurantes y cafeterías que deseen elevar la experiencia de su café.
        </p>
        <a href="https://wa.me/59171239162" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-12 py-4 rounded-xl font-bold hover:bg-[#E33B24] transition-colors text-lg shadow-lg">
          Contáctanos
        </a>
      </div>
    </section>
  );
}
