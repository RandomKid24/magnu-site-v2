import { motion } from 'motion/react';
import { products } from '@/src/constants';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-slate-200" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Product Portfolio</span>
             </div>
             <h2 className="text-4xl md:text-7xl font-bold font-display text-slate-950 leading-[0.85] tracking-tighter uppercase font-medium">
                Component <br />
                <span className="text-lime-dark">Manifest.</span>
             </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm mb-2 text-lg italic">
            "Engineered for reliability, manufactured for precision."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {products.map((product, i) => (
            <motion.div
              key={product}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative h-[450px] bg-white overflow-hidden"
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                 <div>
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2 group-hover:text-lime transition-colors">MG-{200 + i}</div>
                    <h4 className="text-xl font-bold text-slate-950 uppercase tracking-tighter leading-none group-hover:translate-x-1 transition-transform cursor-default">
                      {product}
                    </h4>
                 </div>
                 
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Specifications</div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase">
                          <span>Material</span>
                          <span className="text-slate-950">Industrial Grade</span>
                       </div>
                       <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase">
                          <span>Tolerance</span>
                          <span className="text-slate-950">±0.005mm</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Image Overlay */}
              <div className="absolute inset-0 z-10 group-hover:scale-105 transition-transform duration-700 opacity-20 group-hover:opacity-100 grayscale group-hover:grayscale-0">
                 <img 
                   src={`https://picsum.photos/seed/${product.replace(/\s+/g, '-').toLowerCase()}/800/1200`} 
                   alt={product}
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-white/60 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Technical Marker */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-slate-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30">
                 <div className="w-1.5 h-1.5 bg-lime rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

