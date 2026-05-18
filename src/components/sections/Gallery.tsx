import React from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { SectionHeader } from '../ui/Shared';

export default function Gallery() {
  return (
    <section className="py-40 px-[5%] bg-white border-b border-brand-border relative overflow-hidden snap-start" id="gallery">
      <div className="absolute inset-0 bg-dots text-brand-border opacity-[0.08] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader subtitle="Visual Registry" title="Precision in Motion." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
              caption: "High-Speed Spindle Analysis",
              sub: "Calibration Stage"
            },
            { 
              url: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=800",
              caption: "Machined Steel Components",
              sub: "Aerospace Specification"
            },
            { 
              url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
              caption: "Vertical Milling Operations",
              sub: "3-Axis Configuration"
            },
            { 
              url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
              caption: "CNC Lathe Precision Turning",
              sub: "Cylindrical Mastery"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group cursor-crosshair"
            >
              <div className="aspect-[3/4] overflow-hidden bg-brand-dark mb-6 relative">
                <img 
                  src={item.url} 
                  alt={item.caption}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={16} />
                </div>
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[9px] font-bold tracking-[3px] uppercase text-brand-slate block">
                  {item.sub}
                </span>
                <h4 className="font-space text-sm font-bold uppercase tracking-tight text-brand-dark">
                  {item.caption}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
