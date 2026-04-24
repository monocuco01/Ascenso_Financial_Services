import React from 'react';
import logo from '../assets/logo-ascenso.png'; 

// Importamos las redes sociales, ahora incluyendo TikTok
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ascenso-blue border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Columna 1: Logo y Eslogan */}
          <div className="flex flex-col gap-6">
            <img 
              src={logo} 
              alt="Carpium Credit Elite Logo" 
              className="h-16 w-auto object-contain self-start grayscale brightness-200" 
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Transformamos perfiles financieros para abrir las puertas que siempre han estado cerradas. Tu ascenso comienza aquí.
            </p>
            {/* Contenedor de Redes Sociales */}
            <div className="flex gap-4 text-ascenso-gold">
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <FaTiktok className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <FaFacebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Navegación</h4>
            <ul className="flex flex-col gap-4">
              {['Inicio', 'Servicios', 'Proceso', 'Nosotros'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 text-sm hover:text-ascenso-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Ubicación actualizada */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Ubicación</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-ascenso-gold" /> Illinois, Estados Unidos
              </li>
            </ul>
          </div>

        </div>

        {/* Línea final de Copyright */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-slate-500 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} CARPIUM CREDIT ELITE. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p className="text-slate-600 text-[10px] mt-2">
            Desarrollado con precisión estratégica.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;