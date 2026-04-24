import React from 'react';
import { motion } from 'framer-motion';
import { Target, Key, ShieldCheck, TrendingUp } from 'lucide-react';

const personalAreas = [
  {
    title: "Optimización de Score",
    desc: "Estrategias basadas en educación financiera para elevar tu puntaje de manera sostenible y real.",
    icon: <Target className="w-10 h-10" />
  },
  {
    title: "Perfilamiento Bancario",
    desc: "Preparamos tu perfil para que cumplas con los estándares que los bancos exigen para aprobar créditos.",
    icon: <Key className="w-10 h-10" />
  },
  {
    title: "Estrategia de Capital",
    desc: "Te enseñamos a usar el crédito como una herramienta de inversión para construir tu propio patrimonio.",
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    title: "Asesoría de Proyectos",
    desc: "Trazamos el plan financiero exacto para que la compra de tu casa o vehículo sea una realidad en tiempo récord.",
    icon: <TrendingUp className="w-10 h-10" />
  }
];

const Features = () => {
  return (
    // bg-white forzado y text-slate-900 para que nada sea blanco sobre blanco
    <section id="servicios" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado con contraste máximo */}
        <div className="mb-16 text-left">
          <p className="text-ascenso-gold font-bold tracking-[0.3em] uppercase text-sm mb-2">
            Nuestros Pilares
          </p>
          <h2 className="text-ascenso-blue text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Soluciones a <span className="text-ascenso-gold font-light italic">tu medida</span>
          </h2>
        </div>

        {/* Cuadrícula de cartas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personalAreas.map((area, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              // Carta con fondo gris muy claro para que se note sobre el fondo blanco
              className="group p-10 bg-slate-50 border border-slate-200 border-l-4 border-l-ascenso-gold shadow-md hover:shadow-2xl hover:bg-white transition-all duration-300 flex flex-col h-full"
            >
              {/* Icono en azul oscuro */}
              <div className="text-ascenso-blue mb-8 group-hover:text-ascenso-gold transition-colors duration-300">
                {area.icon}
              </div>

              {/* Título en azul oscuro (Ascenso Blue) */}
              <h3 className="text-[#0A1D37] font-black text-xl mb-4 leading-tight uppercase">
                {area.title}
              </h3>

              {/* Descripción en gris oscuro legible */}
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {area.desc}
              </p>

              {/* Decoración inferior */}
              <div className="mt-auto pt-6">
                <div className="w-10 h-1 bg-slate-200 group-hover:w-full group-hover:bg-ascenso-gold transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;