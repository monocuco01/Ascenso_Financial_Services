import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full min-h-[90vh] flex items-center bg-ascenso-blue overflow-hidden pt-20">
      
      {/* Elementos decorativos de fondo (Opcional: Grano o gradiente) */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#C5A059 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Lado Izquierdo: Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="text-ascenso-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Consultoría de Alto Nivel
          </span>
          
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
            IMPULSAMOS TU <br />
            <span className="text-ascenso-gold italic font-light">ASCENSO</span> FINANCIERO
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Estrategias personalizadas para potenciar tu capital y optimizar tus metas. No solo asesoramos, trazamos la ruta hacia tu éxito.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Botón convertido en enlace (<a>) para redirigir al número */}
            <a 
              href="tel:+17792790155" 
              className="bg-ascenso-gold text-ascenso-blue px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 shadow-lg text-center cursor-pointer inline-block"
            >
              Solicitar Asesoría
            </a>
            <button className="border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-ascenso-blue transition-all duration-300 text-center inline-block">
              Nuestros Servicios
            </button>
          </div>
        </motion.div>

        {/* Lado Derecho: Imagen de impacto */}
        {/* Se quitó 'hidden md:block' y se ajustaron los márgenes y anchos para móviles */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full md:w-[85%] mx-auto md:ml-auto mt-12 md:mt-0"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://res.cloudinary.com/dziwyqnqk/image/upload/v1777056595/WhatsApp_Image_2026-04-14_at_17.24.08_hvzi0u.jpg" 
              alt="Consultoría Profesional" 
              className="w-full h-auto object-cover hover:grayscale transition-all duration-700"
            />
          </div>
          
          {/* Adorno dorado detrás de la foto */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-64 md:h-64 border-r-4 border-b-4 border-ascenso-gold/30 -z-10"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;