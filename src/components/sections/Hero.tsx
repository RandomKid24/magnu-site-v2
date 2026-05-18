import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Settings } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-white flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden lg:overflow-visible">
      {/* Background Ambience - Restricted to its own layer to prevent affecting main flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-950 diagonal-split opacity-10 lg:opacity-100 hidden lg:block" />
        <div className="absolute inset-0 blueprint-grid opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Main Messaging */}
          <div className="w-full lg:w-[65%]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-10 h-[2px] bg-lime-dark" />
                <span className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">
                  Manufacturing Excellence · Nashik, India
                </span>
              </div>

              <h1 className="text-[clamp(42px,7vw,100px)] font-bold font-display leading-[0.9] tracking-tighter text-slate-950 mb-4 uppercase">
                MAGNUS <br className="hidden sm:block" />
                <span className="text-lime-dark">ENTERPRISES.</span>
              </h1>
              
              <div className="text-xl font-bold font-display text-slate-400 uppercase tracking-widest mb-10">
                Precision Machining & Industrial Manufacturing
              </div>

              <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
                <div>
                  <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium font-sans mb-10">
                    Reliable CNC machining, fabrication, switchgear assembly, and custom manufacturing solutions engineered for modern industries.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#services" 
                      className="px-8 py-4 bg-slate-950 hover:bg-lime hover:text-black text-white font-black text-sm tracking-widest uppercase transition-all flex items-center gap-3 rounded-xl group shadow-2xl shadow-slate-900/20"
                    >
                      Our Capabilities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-6 pt-2">
                   <div className="flex items-center gap-5 group">
                      <div className="w-11 h-11 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-lime-dark transition-colors">
                        <Settings className="w-5 h-5 animate-[spin_10s_linear_infinite]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-1">QMS Standard</div>
                        <div className="text-sm font-bold text-slate-900">ISO 9001:2015</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-5 group">
                      <div className="w-11 h-11 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-lime-dark transition-colors">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-1">Sector Focus</div>
                        <div className="text-sm font-bold text-slate-900">Switchgear & Machinery</div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative side element */}
          <div className="w-full lg:w-[35%] hidden lg:flex justify-end pr-10">
             <div className="relative">
                <div className="text-[180px] font-black text-slate-100/40 leading-none select-none tracking-tighter">
                   M
                </div>
                <div className="absolute top-1/2 -left-1/4 w-[150%] h-[2px] bg-slate-100/50" />
                <div className="absolute -top-4 right-0 py-2 border-b-2 border-lime text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase whitespace-nowrap">
                   Industrial Unit 01
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
