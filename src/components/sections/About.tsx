import React from 'react';
import { motion } from 'motion/react';
import { philosophy } from '../../constants';

export default function About() {
  return (
    <section className="py-20 px-[5%] bg-off-white relative overflow-hidden scroll-mt-[100px]" id="about">
      {/* Background technical grid - very subtle */}
      <div className="absolute inset-0 bg-dots opacity-[0.03] pointer-events-none text-brand-dark"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* Left: Brand Identity (Sticky on Desktop) */}
          <div className="lg:w-1/3 lg:sticky lg:top-[150px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-lime-dark"></div>
                <span className="font-sans text-[10px] font-bold tracking-[8px] text-brand-slate uppercase">Established 2012</span>
              </div>
              
              <h2 className="font-space text-5xl font-bold text-brand-dark tracking-tighter leading-none uppercase">
                THE <br />
                <span className="text-lime-dark">MAGNUS</span> <br />
                CORE.
              </h2>
              
              <div className="pt-8 border-t border-brand-border max-w-[200px]">
                <p className="font-sans text-[10px] text-brand-slate uppercase tracking-widest leading-relaxed font-bold">
                  Engineered in Nashik. <br />
                  Deployed Globally.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Right: Detailed Narrative & Pillars */}
          <div className="lg:w-2/3 space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h3 className="font-sans text-2xl font-light text-brand-dark leading-relaxed mb-10">
                Magnus Enterprises is a <span className="font-bold underline decoration-lime-dark decoration-4 underline-offset-8">high-precision</span> manufacturing hub dedicated to the electrical, switchgear, and heavy engineering sectors.
              </h3>
              <p className="font-sans text-lg text-brand-slate leading-relaxed font-light">
                Since 2012, we have specialized in bridging the gap between complex design and physical reality. Our operations are governed by a single metric: <span className="text-brand-dark font-bold italic">Geometric Fidelity.</span>
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-24">
              {philosophy.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* HUD Corner Accent */}
                  <div className="absolute -top-4 -left-4 w-6 h-6 border-t border-l border-brand-border group-hover:border-lime-dark transition-colors duration-500"></div>
                  
                  <div className="flex flex-col gap-6 pt-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-white border border-brand-border text-brand-dark group-hover:bg-brand-dark group-hover:text-lime transition-all duration-500">
                      <item.icon size={20} />
                    </div>
                    <h4 className="font-space text-xl font-bold text-brand-dark uppercase tracking-tight">{item.title}</h4>
                    <p className="font-sans text-[11px] text-brand-slate leading-relaxed uppercase tracking-[2px] font-bold">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Technical Schematic Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-white overflow-hidden border border-brand-border group shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000" 
                alt="Process Precision" 
                className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Technical Overlay */}
              <div className="absolute inset-0 bg-lime-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative Scanning line for this image only */}
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-[1px] bg-lime-dark/30 z-10 pointer-events-none shadow-[0_0_10px_#82A300]"
              ></motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
