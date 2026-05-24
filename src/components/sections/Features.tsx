import { motion } from 'motion/react';
import { whyChooseUs } from '@/src/constants';
import { ShieldCheck, Cpu, Target, Users, Box, PenTool, Truck } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const icons = [ShieldCheck, Cpu, Target, Users, Box, PenTool, Truck];

const descriptions = [
  "Our entire manufacturing pipeline is certified to meet rigorous international quality standards.",
  "Equipped with state-of-the-art machinery capable of handling complex geometries.",
  "Every component undergoes strict multi-stage inspection using calibrated instruments.",
  "Our team consists of highly skilled engineers with decades of industrial experience.",
  "We source only premium materials to manufacture parts that withstand tough environments.",
  "From prototypes to mass production, our flexible setup adapts to your requirements.",
  "Streamlined processes and dedicated logistics ensure products are delivered exactly when needed."
];

// Tailwind classes for the bento grid spans
const bentoSpans = [
  "md:col-span-2 md:row-span-2", // 0: Large square
  "md:col-span-2 md:row-span-1", // 1: Wide rectangle
  "md:col-span-1 md:row-span-1", // 2: Small square
  "md:col-span-1 md:row-span-1", // 3: Small square
  "md:col-span-2 md:row-span-1", // 4: Wide rectangle
  "md:col-span-1 md:row-span-1", // 5: Small square
  "md:col-span-1 md:row-span-1", // 6: Small square
];

export default function Features() {
  return (
    <section id="why-us" className="py-20 px-[5%] bg-white border-b border-brand-border scroll-mt-[100px]">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-lime"></div>
              <span className="font-sans text-[10px] font-bold tracking-[6px] uppercase text-brand-slate">Advantages</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-space text-[clamp(32px,4vw,56px)] leading-[1.1] text-brand-dark tracking-tighter font-bold uppercase"
            >
               Why Choose <br />
               <span className="text-lime">Us?</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
            {whyChooseUs.map((feature, index) => {
              const Icon = icons[index % icons.length];
              const spanClass = bentoSpans[index];
              const isLarge = index === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "bg-off-white border border-brand-border hover:border-lime/50 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden",
                    spanClass,
                    isLarge ? "p-12" : "p-8"
                  )}
                >
                  {/* Subtle Background Icon for Bento Feel */}
                  <div className="absolute -right-12 -bottom-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                    <Icon size={isLarge ? 300 : 160} />
                  </div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className={cn(
                      "flex items-center justify-center border border-brand-border text-brand-slate group-hover:text-lime group-hover:bg-brand-dark transition-colors duration-500 bg-white",
                      isLarge ? "w-16 h-16 mb-12" : "w-12 h-12 mb-8"
                    )}>
                      <Icon size={isLarge ? 28 : 20} />
                    </div>
                    
                    <div>
                      <h3 className={cn(
                        "font-space font-bold text-brand-dark transition-colors uppercase tracking-tight mb-3",
                        isLarge ? "text-3xl lg:text-4xl" : "text-xl"
                      )}>
                        {feature}
                      </h3>
                      <p className={cn(
                        "font-sans text-brand-slate leading-relaxed font-medium",
                        isLarge ? "text-sm max-w-md" : "text-xs max-w-[240px]"
                      )}>
                        {descriptions[index]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
