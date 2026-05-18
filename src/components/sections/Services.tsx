import { motion } from 'motion/react';
import { services } from '@/src/constants';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-px bg-slate-300" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Service Catalog</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold font-display text-slate-950 leading-[0.85] tracking-tighter uppercase">
                 Industrial <br />
                 <span className="text-lime-dark">Capabilities.</span>
              </h2>
           </div>
           <p className="text-slate-500 font-medium max-w-sm mb-2 text-lg">
              Precision engineered solutions tailored for high-performance industrial applications.
           </p>
        </div>

        <div className="grid border-t border-l border-slate-200">
           {services.map((service, i) => (
             <motion.div
               key={service.title}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05 }}
               className="group relative grid md:grid-cols-12 items-center border-b border-r border-slate-200 bg-white hover:bg-slate-950 transition-colors duration-500 cursor-default"
             >
                {/* Index Column */}
                <div className="md:col-span-1 p-8 border-r border-slate-200 group-hover:border-white/10 flex md:flex-col items-center justify-between h-full">
                   <span className="text-[10px] font-black text-slate-300 group-hover:text-white/20 transition-colors">0{i+1}</span>
                   <service.icon className="w-4 h-4 text-slate-300 group-hover:text-lime transition-colors" />
                </div>

                {/* Title Column */}
                <div className="md:col-span-5 p-8 md:p-12">
                   <h4 className="text-2xl md:text-3xl font-bold text-slate-950 group-hover:text-white uppercase tracking-tighter transition-colors">
                      {service.title}
                   </h4>
                </div>

                {/* Description Column */}
                <div className="md:col-span-12 lg:col-span-5 p-8 md:p-12 border-l border-slate-200 group-hover:border-white/10">
                   <p className="text-base text-slate-500 group-hover:text-white/40 font-medium leading-relaxed transition-colors">
                      {service.description}
                   </p>
                </div>

                {/* Action Column */}
                <div className="md:col-span-1 p-8 flex justify-center border-l border-slate-200 group-hover:border-white/10">
                   <div className="w-12 h-12 rounded-full border border-slate-200 group-hover:border-lime group-hover:bg-lime flex items-center justify-center transition-all duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-black transition-colors" />
                   </div>
                </div>

                {/* Background Accent */}
                <div className="absolute right-0 bottom-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
                   <div className="text-6xl font-black text-white leading-none">SFX</div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

