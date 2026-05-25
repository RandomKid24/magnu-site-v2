import React from 'react';
import { motion } from 'motion/react';
import { products } from '../../constants';

export default function Products() {
  return (
    <section id="products" className="py-20 px-[5%] bg-black overflow-hidden border-b border-white/10 scroll-mt-[100px]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-lime" />
                <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-[6px]">Component Manifest</span>
             </div>
             <h2 className="font-space text-[clamp(32px,4vw,56px)] leading-[1.1] text-white tracking-tighter font-bold uppercase">
                PRECISION <br />
                <span className="text-lime">PRODUCT PORTFOLIO.</span>
             </h2>
          </div>
          <div className="text-right">
            <p className="font-sans text-[10px] text-gray-400 uppercase tracking-[4px] font-bold max-w-xs leading-relaxed">
              "Engineered for reliability, manufactured for <span className="text-lime">micron-level</span> fidelity."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="group relative aspect-square bg-zinc-950 overflow-hidden cursor-pointer rounded-sm"
            >
              {/* Image Container */}
              <div className="absolute inset-0 z-10 opacity-70 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105">
                 <img 
                   src={product.image} 
                   alt={product.title}
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                 />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
