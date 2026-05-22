import React from 'react';
import { motion } from 'motion/react';
import { services } from '../../constants';

export default function Services() {
  return (
    <section className="py-40 px-[5%] bg-white border-b border-brand-border scroll-mt-[100px]" id="solutions">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-lime"></div>
              <span className="font-sans text-[10px] font-bold tracking-[6px] uppercase text-brand-slate">Capabilities</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-space text-[clamp(40px,5vw,72px)] leading-[1] text-brand-dark tracking-tighter font-bold uppercase"
            >
              INDUSTRIAL <br />
              <span className="text-lime">SOLUTIONS GRID.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border border border-brand-border">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-12 hover:bg-off-white transition-all duration-500 group flex flex-col justify-between min-h-[320px] relative overflow-hidden"
              >
                <div>
                  <div className="w-12 h-12 bg-off-white flex items-center justify-center border border-brand-border text-brand-slate group-hover:text-lime group-hover:bg-brand-dark transition-colors duration-500 mb-8">
                    <service.icon size={20} />
                  </div>
                  <h3 className="font-space text-2xl font-bold text-brand-dark transition-colors uppercase tracking-tight mb-4">{service.title}</h3>
                  <p className="font-sans text-[11px] text-brand-slate leading-relaxed uppercase tracking-[2px] font-bold max-w-[240px]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
