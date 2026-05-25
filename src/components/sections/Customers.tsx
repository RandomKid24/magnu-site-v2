import { motion } from 'motion/react';
import { customers } from '@/src/constants';

export default function Customers() {
  return (
    <section id="customers" className="py-16 bg-black overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter font-space">
            Our <span className="text-lime">Customers</span>
          </h2>
          <p className="text-gray-400 text-xl mt-6">
            Trusted by industry leaders across the globe.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {customers.map((customer, i) => (
            <motion.div
              key={customer}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-3 bg-black border border-white/10 shadow-sm hover:border-lime transition-colors duration-300"
            >
              <span className="font-space font-bold text-white uppercase tracking-wide">
                {customer}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
