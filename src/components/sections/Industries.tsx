import { motion } from 'motion/react';
import { industries } from '@/src/constants';

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white overflow-hidden border-t border-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 mb-24 items-start">
           <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-4 mb-8">
                 <span className="w-10 h-px bg-slate-950/20" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Sector Mapping</span>
              </div>
              <h2 className="text-6xl md:text-9xl font-black text-slate-950 leading-[0.8] tracking-tighter uppercase">
                 Industrial <br />
                 <span className="text-lime-dark">Vertics.</span>
              </h2>
           </div>
           <div className="lg:w-1/2 lg:pt-10">
              <p className="text-slate-500 font-medium text-xl leading-relaxed max-w-md border-l-4 border-slate-100 pl-8">
                 We provide strategic manufacturing support for high-stakes industrial sectors, delivering precision components that meet the most demanding engineering specifications.
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
               className="group relative bg-white p-12 lg:p-16 hover:bg-lime transition-all duration-500 min-h-[450px] flex flex-col justify-between overflow-hidden"
             >
                {/* Structural Grid Background */}
                <div className="absolute inset-0 industrial-pattern opacity-[0.03] group-hover:opacity-[0.1] transition-opacity" />
                
                <div className="relative z-10">
                   <div className="text-[10px] font-black text-slate-300 group-hover:text-black/40 uppercase tracking-widest mb-16">
                      Vertical Archive // 0{i+1}
                   </div>
                   
                   <h4 className="text-3xl font-black text-slate-950 leading-none uppercase tracking-tighter mb-8 group-hover:translate-x-2 transition-transform duration-500">
                      {industry}
                   </h4>
                   
                   <p className="text-slate-500 group-hover:text-black/60 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      Engineering solutions and precision component manufacturing for advanced applications in the {industry.toLowerCase()} sector.
                   </p>
                </div>

                <div className="relative z-10 pt-12 mt-auto border-t border-slate-100 group-hover:border-black/10 flex items-end justify-between">
                   <div className="flex flex-col gap-1">
                      <span className="text-[8px] font-black text-slate-300 group-hover:text-black/40 uppercase tracking-widest">Compliance</span>
                      <span className="text-xs font-black text-slate-950 uppercase">Verified</span>
                   </div>
                   <div className="w-10 h-10 border border-slate-200 group-hover:border-black/20 flex items-center justify-center">
                      <span className="text-[10px] font-black text-slate-950">{(41 + i * 2)}%</span>
                   </div>
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

