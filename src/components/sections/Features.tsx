import { motion } from 'motion/react';
import { whyChooseUs } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { Check } from 'lucide-react';

export default function Features() {
  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden border-t border-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 mb-32 items-start">
           <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-3 bg-slate-950 text-white py-1 px-4 mb-10 text-[9px] font-black tracking-[0.4em] uppercase">
                 Magnus Standard // Ver: 2024
              </div>
              <h3 className="text-7xl md:text-9xl font-black text-slate-950 leading-[0.75] tracking-tighter uppercase">
                 Engineered <br />
                 By <span className="text-lime-dark italic font-normal">Data.</span>
              </h3>
           </div>
           <div className="lg:w-1/2 lg:pt-16">
              <div className="max-w-md">
                 <p className="text-slate-500 text-2xl font-medium leading-tight mb-12 tracking-tight">
                    Our manufacturing protocols are built on three decades of technical iteration and precision engineering feedback.
                 </p>
                 <div className="flex items-center gap-6">
                    <div className="flex -space-x-4">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black">M{i}</div>
                       ))}
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Ops Active</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid lg:grid-cols-12 border-t border-slate-950">
           {whyChooseUs.map((feature, i) => (
             <motion.div
               key={feature}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05 }}
               className={cn(
                 "group relative p-12 lg:p-20 border-b border-slate-950 overflow-hidden",
                 i % 2 === 0 ? "lg:col-span-7 lg:border-r" : "lg:col-span-5"
               )}
             >
                {/* Micro BG Marker */}
                <div className="absolute top-10 right-10 text-[100px] font-black text-slate-50 group-hover:text-lime/10 transition-colors leading-none pointer-events-none uppercase">
                  {feature.charAt(0)}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                   <div className="flex items-center gap-4 mb-12">
                      <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-lime group-hover:border-lime transition-all">
                         <Check className="w-3 h-3 text-slate-300 group-hover:text-black" strokeWidth={3} />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 group-hover:text-slate-950 transition-colors uppercase tracking-[0.3em]">Protocol_0{i+1}</span>
                   </div>

                   <h4 className="text-3xl lg:text-5xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-8 group-hover:translate-x-4 transition-transform duration-500">
                      {feature}
                   </h4>

                   <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm mb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Certified industrial implementation across all Nashik and regional manufacturing facilities.
                   </p>

                   <div className="mt-auto flex items-center gap-2">
                       <div className="w-2 h-2 bg-slate-900 group-hover:bg-lime transition-colors" />
                       <div className="w-12 h-[1px] bg-slate-100 group-hover:bg-slate-950 transition-colors" />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

