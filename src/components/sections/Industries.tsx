import { motion } from 'motion/react';
import { industries } from '@/src/constants';

export default function Industries() {
  return (
    <section id="industries" className="py-16 bg-black overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
           <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-4 mb-8">
                 <span className="w-10 h-px bg-white/10" />
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">Our Sectors</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.85] tracking-tighter uppercase">
                 Sectors We <br />
                 <span className="text-lime">Work In.</span>
              </h2>
           </div>
           <div className="lg:w-1/2 lg:pt-10">
              <p className="text-gray-400 font-medium text-xl leading-relaxed max-w-md border-l-4 border-white/10 pl-8">
                 We provide precision manufacturing solutions tailored to the unique demands of multiple critical industries.
              </p>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
           {industries.map((industry, i) => (
             <motion.div
               key={industry}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05 }}
               className="relative bg-black p-8 min-h-[240px] flex flex-col justify-start overflow-hidden"
             >
                {/* Structural Grid Background */}
                <div className="absolute inset-0 industrial-pattern opacity-[0.03]" />
                
                <div className="relative z-10">
                   <h4 className="text-2xl font-bold text-white leading-none uppercase tracking-tighter mb-4">
                      {industry}
                   </h4>
                   
                   <p className="text-gray-400 text-sm font-medium leading-relaxed mt-4">
                      Engineering solutions and precision component manufacturing for advanced applications in the {industry.toLowerCase()} sector.
                   </p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
