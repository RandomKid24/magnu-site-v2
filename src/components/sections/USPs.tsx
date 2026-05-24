import { motion } from 'motion/react';
import { usps } from '@/src/constants';

export default function USPs() {
  return (
    <section id="usps" className="py-16 bg-white overflow-hidden border-t border-[#E8E4DF]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
           <div className="lg:w-1/2">
              <h3 className="text-5xl md:text-6xl font-bold text-brand-dark leading-[1] tracking-tighter uppercase font-space">
                 Our <br />
                 <span className="text-[#CCFF00] italic font-normal">USP's</span>
              </h3>
           </div>
           <div className="lg:w-1/2 lg:pt-8">
              <p className="text-brand-slate text-xl font-medium leading-tight mb-8 tracking-tight">
                 What sets us apart in the manufacturing landscape.
              </p>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-brand-border border border-brand-border">
           {usps.map((usp, i) => (
             <motion.div
               key={usp.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group relative bg-white p-8 hover:bg-off-white transition-all duration-500 min-h-[240px]"
             >
                <div className="relative z-10">
                   <h4 className="text-2xl font-bold text-brand-dark uppercase tracking-tighter mb-4 group-hover:-translate-y-1 transition-transform duration-500 font-space">
                      {usp.title}
                   </h4>
                   
                   <p className="text-brand-slate text-base font-medium leading-relaxed transition-all duration-500">
                      {usp.description}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
