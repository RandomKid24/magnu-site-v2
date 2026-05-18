import React from 'react';
import { motion } from 'motion/react';
import { Counter } from '../ui/Shared';

export default function Hero({
  scrollToId,
  grainY,
  heroImageY
}: {
  scrollToId: (e: React.MouseEvent, id: string) => void;
  grainY: any;
  heroImageY: any;
}) {
  return (
    <section className="relative min-h-screen flex items-center bg-off-white overflow-hidden pt-32 pb-32 lg:pb-36 snap-start" id="home">
      {/* Architectural Background */}
      <motion.div 
        style={{ y: grainY }}
        className="absolute inset-0 z-0 opacity-[0.03] bg-grain pointer-events-none"
      ></motion.div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark hidden lg:block z-0 overflow-hidden">
        <motion.img 
          style={{ y: heroImageY }}
          src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2600" 
          alt="CNC Machining" 
          className="w-full h-full object-cover grayscale contrast-125 brightness-75 scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-off-white via-off-white/20 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10 w-full px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-[1px] w-12 bg-lime"></div>
                <span className="font-sans text-[10px] font-bold tracking-[6px] uppercase text-brand-slate">ISO 9001:2015 Tier-1 Manufacturing</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-space text-[clamp(54px,8vw,120px)] leading-[0.85] text-brand-dark tracking-tighter mb-10 font-bold uppercase"
              >
                ENGINEERING <br />
                FOR THE <span className="text-lime">MICRON</span> <br />
                ABSOLUTE.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-sans text-xl text-brand-slate max-w-lg leading-relaxed font-light mb-12"
              >
                Specializing in high-accuracy Vertical Milling and CNC Turning. We deliver the components that drive heavy industry, with zero tolerance for error.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-8"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => scrollToId(e, 'precision-fleet')}
                  className="btn-primary-custom px-16 group"
                >
                  Our Fleet
                </motion.button>
                
                <div className="flex items-center gap-4 py-2 border-l border-brand-border pl-8">
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-bold text-brand-dark">Nashik, India</span>
                    <span className="font-sans text-[10px] text-brand-slate uppercase font-medium tracking-widest">Base Operations</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="mt-16 grid grid-cols-3 gap-4 sm:gap-12 border-t border-brand-border pt-12"
              >
                <div className="space-y-1">
                  <div className="font-space text-3xl font-bold text-lime">
                    <Counter value={14} suffix="+" />
                  </div>
                  <div className="font-sans text-[9px] font-bold tracking-[2px] uppercase text-brand-slate">Years Active</div>
                </div>
                <div className="space-y-1">
                  <div className="font-space text-3xl font-bold text-lime">
                    <Counter value={2500} suffix="+" duration={3} />
                  </div>
                  <div className="font-sans text-[9px] font-bold tracking-[2px] uppercase text-brand-slate">Projects</div>
                </div>
                <div className="space-y-1">
                  <div className="font-space text-3xl font-bold text-lime">
                    <Counter value={12} suffix="+" />
                  </div>
                  <div className="font-sans text-[9px] font-bold tracking-[2px] uppercase text-brand-slate">Core Machines</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Nav-Link styles reference bottom scroll indicator */}
      <div className="absolute bottom-8 left-[5%] hidden xl:flex items-center gap-6 z-20">
        <div className="w-10 h-[10px] flex items-center justify-center">
          <div className="w-[1px] h-full bg-brand-dark/20"></div>
        </div>
        <span className="font-sans text-[9px] font-bold tracking-[4px] uppercase text-brand-slate/40">Scroll to Explore</span>
      </div>
    </section>
  );
}
