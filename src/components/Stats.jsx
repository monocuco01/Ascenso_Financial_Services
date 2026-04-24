import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Puntos Promedio de Mejora", value: "+150" },
  { label: "Casos de Éxito", value: "500+" },
  { label: "Créditos Aprobados", value: "$2M+" },
  { label: "Clientes Satisfechos", value: "98%" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-ascenso-blue relative overflow-hidden">
      {/* Decoración sutil de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ascenso-gold/5 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-ascenso-gold text-5xl md:text-6xl font-black mb-2 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-white/70 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;