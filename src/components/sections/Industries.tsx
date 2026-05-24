import { motion } from 'motion/react';
import { industries } from '@/src/constants';

export default function Industries() {
  return (
    <section id="industries" className="py-16 bg-white overflow-hidden border-t border-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
           <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-4 mb-8">
                 <span className="w-10 h-px bg-slate-950/20" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Our Sectors</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-slate-950 leading-[0.85] tracking-tighter uppercase">
                 Sectors We <br />
                 <span className="text-lime-dark">Work In.</span>
              </h2>
           </div>
           <div className="lg:w-1/2 lg:pt-10">
              <p className="text-slate-500 font-medium text-xl leading-relaxed max-w-md border-l-4 border-slate-100 pl-8">
                 We provide precision manufacturing solutions tailored to the unique demands of multiple critical industries.
              </p>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-slate-950 border border-slate-950 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
           {industries.map((industry, i) => (
             <motion.div
               key={industry}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05 }}
               className="group relative bg-white p-8 hover:bg-lime transition-all duration-500 min-h-[240px] flex flex-col justify-start overflow-hidden"
             >
                {/* Structural Grid Background */}
                <div className="absolute inset-0 industrial-pattern opacity-[0.03] group-hover:opacity-[0.1] transition-opacity" />
                
                <div className="relative z-10">
                   <h4 className="text-2xl font-bold text-slate-950 leading-none uppercase tracking-tighter mb-4 group-hover:translate-x-1 transition-transform duration-500">
                      {industry}
                   </h4>
                   
                   <p className="text-slate-500 group-hover:text-black/60 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      Engineering solutions and precision component manufacturing for advanced applications in the {industry.toLowerCase()} sector.
                   </p>
                </div>

                {/* Vertical Stripe */}
                <div className="absolute top-0 right-0 w-1 h-0 bg-slate-950 group-hover:h-full transition-all duration-700 delay-100" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
