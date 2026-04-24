import React from 'react';

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-50 border border-slate-200 p-12 md:p-20 text-center relative overflow-hidden rounded-sm">
          {/* Adorno dorado en la esquina */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-ascenso-gold/20"></div>

          <h2 className="text-ascenso-blue text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
            ¿LISTO PARA TU <br />
            <span className="text-ascenso-gold font-light italic">PRÓXIMO NIVEL?</span>
          </h2>
          
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            No permitas que un número en el sistema detenga tus sueños. Agenda una consultoría inicial y descubre cómo podemos transformar tu perfil financiero.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* Botón convertido en enlace directo a WhatsApp */}
            <a 
              href="https://wa.me/17792790155"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ascenso-blue text-white px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-ascenso-gold hover:text-ascenso-blue transition-all duration-500 shadow-xl text-center"
            >
              Agendar vía WhatsApp
            </a>
            {/* Botón de correo convertido en un enlace mailto: */}
            <a 
              href="mailto:tu-correo@email.com"
              className="inline-block border-2 border-ascenso-blue text-ascenso-blue px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-ascenso-blue hover:text-white transition-all duration-500 text-center"
            >
              Enviar Correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;