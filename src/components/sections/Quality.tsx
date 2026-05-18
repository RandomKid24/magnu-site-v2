import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export default function Quality() {
  return (
    <section className="py-32 px-[5%] bg-brand-dark text-white border-b border-white/5 relative overflow-hidden snap-start">
      <div className="absolute inset-0 bg-dots text-white opacity-[0.02] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-24 h-24 mx-auto border-2 border-lime/30 rounded-full flex items-center justify-center relative group"
        >
          <div className="absolute inset-2 border border-lime/10 rounded-full animate-pulse"></div>
          <Award className="w-10 h-10 text-lime group-hover:scale-110 transition-transform duration-500" />
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl font-light italic leading-tight text-white/90"
        >
          "Quality is not an act, it is a habit. In our workshop, it is the law."
        </motion.h3>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-sans text-[10px] font-bold tracking-[8px] uppercase text-lime"
        >
          ISO 9001:2015 Certificated Facility // Nashik
        </motion.div>
      </div>
    </section>
  );
}
