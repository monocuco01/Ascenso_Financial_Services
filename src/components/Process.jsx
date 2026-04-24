import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Diagnóstico 360°",
    desc: "Analizamos tu situación actual, score crediticio y hábitos financieros sin compromiso inicial."
  },
  {
    number: "02",
    title: "Plan de Ascenso",
    desc: "Diseñamos una estrategia personalizada con acciones exactas para mejorar tu perfil ante los bancos."
  },
  {
    number: "03",
    title: "Acompañamiento",
    desc: "Te guiamos en la ejecución del plan, asegurándonos de que cada paso te acerque a tu meta."
  },
  {
    number: "04",
    title: "Libertad Financiera",
    desc: "¡Meta cumplida! Ya estás listo para calificar a ese crédito, casa o vehículo que tanto deseas."
  }
];

const Process = () => {
  return (
    <section id="proceso" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-ascenso-gold text-xs font-bold tracking-[0.5em] uppercase mb-4">Metodología</h2>
          <h3 className="text-ascenso-blue text-4xl md:text-5xl font-black tracking-tighter uppercase">
            TU CAMINO AL <span className="text-ascenso-gold font-light italic">ÉXITO.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Línea decorativa que une los pasos en Desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 group"
            >
              {/* Círculo con el número */}
              <div className="w-16 h-16 bg-white border-2 border-ascenso-gold rounded-full flex items-center justify-center mb-8 group-hover:bg-ascenso-blue group-hover:border-ascenso-blue transition-all duration-500 shadow-xl">
                <span className="text-ascenso-blue font-black text-xl group-hover:text-white">
                  {step.number}
                </span>
              </div>

              <h4 className="text-ascenso-blue font-bold text-lg mb-4 tracking-tight uppercase">
                {step.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Botón de cierre de sección convertido a enlace */}
        <div className="mt-20 text-center">
          <a 
            href="tel:+17792790155"
            className="inline-block bg-ascenso-blue text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-ascenso-gold hover:text-ascenso-blue transition-all duration-500 rounded-sm cursor-pointer"
          >
            Iniciar mi proceso ahora
          </a>
        </div>

      </div>
    </section>
  );
};

export default Process;