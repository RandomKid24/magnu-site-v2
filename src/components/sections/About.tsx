import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../ui/Shared';

export default function About({
  grainY
}: {
  grainY: any;
}) {
  return (
    <section className="py-40 px-[5%] bg-white border-y border-brand-border relative overflow-hidden snap-start" id="about">
      <motion.div 
        style={{ y: grainY }}
        className="absolute inset-0 bg-grain opacity-[0.4] pointer-events-none"
      ></motion.div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <SectionHeader subtitle="The Narrative" title="Engineered with Precision." />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-xl text-brand-slate font-light leading-relaxed mb-10"
            >
              Founded to redefine the industrial landscape in Nashik, Magnus Enterprises has evolved into a tier-1 partner for companies that demand zero margin for error. Our philosophy is rooted in the belief that absolute accuracy is the only standard worth pursuing.
            </motion.p>
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-brand-border">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h4 className="font-space text-2xl font-bold mb-3 uppercase tracking-tight flex items-center gap-2">
                  <span className="text-lime text-xs">●</span> Vision
                </h4>
                <p className="font-sans text-sm text-brand-slate leading-relaxed">
                  Our objective is to provide the best value by delivering the most flexible and scalable solutions for the companies on the move.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h4 className="font-space text-2xl font-bold mb-3 uppercase tracking-tight flex items-center gap-2">
                  <span className="text-lime text-xs">●</span> Mission
                </h4>
                <p className="font-sans text-sm text-brand-slate leading-relaxed">
                  We are committed in making Magnus the team that will win the trust of business leaders for all their Product needs.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] bg-brand-dark overflow-hidden group border border-lime/20"
          >
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
              alt="Precision Fabrication"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
