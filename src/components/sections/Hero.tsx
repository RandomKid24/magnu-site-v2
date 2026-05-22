import React from 'react';
import { motion } from 'motion/react';

export default function Hero({
  scrollToId
}: {
  scrollToId: (e: React.MouseEvent, id: string) => void;
}) {
  return (
    <section 
      className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden" 
      id="home"
    >
      {/* Subtle blueprint textures & radial glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-dots text-white/5"></div>
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] bg-grain pointer-events-none"
      ></div>

      {/* Radial ambient glow behind the logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-lime/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none z-0"></div>

      {/* Center Branding Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        {/* Logo Image */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-48 h-48 md:w-60 md:h-60 mb-8 select-none"
        >
          <img 
            src="/logo.png" 
            alt="Magnus Logo" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(204,255,0,0.15)]"
          />
        </motion.div>

        {/* Brand Name */}
        <div className="flex flex-col items-center -space-y-2 mb-6">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-space text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase"
          >
            Magnus
          </motion.h1>
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[10px] md:text-xs font-bold tracking-[8px] md:tracking-[12px] uppercase text-lime ml-[8px] md:ml-[12px]"
          >
            Enterprises <span className="text-white">.</span>
          </motion.span>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-sans text-[9px] md:text-[11px] text-white/50 tracking-[5px] md:tracking-[7px] uppercase max-w-md mb-12 font-medium"
        >
          Engineering for the Micron Absolute
        </motion.p>

        {/* Scroll CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => scrollToId(e, 'about')}
            className="border border-white/20 hover:border-lime bg-transparent hover:bg-lime text-white hover:text-brand-dark font-bold text-[11px] tracking-[4px] uppercase px-16 py-5 transition-all duration-700 font-sans cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.02)]"
          >
            Explore Site
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-60">
        <span className="font-sans text-[8px] font-bold tracking-[4px] uppercase text-white/40">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-6 bg-lime"
        ></motion.div>
      </div>
    </section>
  );
}
