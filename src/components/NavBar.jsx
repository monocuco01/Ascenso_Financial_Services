import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-ascenso.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Contenedor del Logo */}
        <div className="flex items-center cursor-pointer pl-4 md:pl-10">          
          <img 
            src={logo} 
            alt="Ascenso Financial Services" 
            className="h-8 md:h-12 w-auto object-contain transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Links Desktop - Ahora en azul ascenso */}
        <div className="hidden md:flex items-center gap-10">
          {['Inicio', 'Servicios', 'Proceso', 'Nosotros'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-ascenso-blue/90 hover:text-ascenso-gold text-xs uppercase tracking-widest font-bold transition-colors"
            >
              {item}
            </a>
          ))}

         
          
          {/* Botón convertido en enlace a WhatsApp */}
          <a 
            href="https://wa.me/17792790155"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ascenso-blue text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-ascenso-gold hover:text-ascenso-blue transition-all duration-300 rounded-sm cursor-pointer"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Toggle - Color azul para que sea visible */}
        <div className="md:hidden text-ascenso-blue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;