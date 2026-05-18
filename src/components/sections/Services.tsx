import React from 'react';
import { motion } from 'motion/react';
import { Activity, Cpu, ShieldAlert, RotateCcw, HelpCircle } from 'lucide-react';
import { SectionHeader } from '../ui/Shared';

export default function Services() {
  return (
    <section className="py-40 px-[5%] bg-off-white border-b border-brand-border snap-start" id="solutions">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="Engineering Fields" title="Our Solutions." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              Icon: Activity, 
              title: "Switchgear Assembly", 
              desc: "High-voltage and medium-voltage switchgear mechanisms assembled to rigorous utility standards." 
            },
            { 
              Icon: Cpu, 
              title: "Control Panel Testing", 
              desc: "Full functional testing, calibration, and wiring verification of industrial control panels." 
            },
            { 
              Icon: ShieldAlert, 
              title: "R&D & Prototyping", 
              desc: "Collaborative engineering of prototype components with rapid iteration cycles." 
            },
            { 
              Icon: RotateCcw, 
              title: "Vertical Milling", 
              desc: "Precise slotting, pocketing, and profiling of heavy mechanical components." 
            },
            { 
              Icon: HelpCircle, 
              title: "CNC Turning", 
              desc: "Rotational metal sizing, threading, and boring with absolute concentricity." 
            },
            { 
              Icon: HelpCircle, 
              title: "Precision Calibration", 
              desc: "Final metrology testing of finished components under clean-room conditions." 
            }
          ].map((sol, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white p-12 border border-brand-border hover:shadow-2xl hover:border-lime/30 transition-all duration-500 group flex flex-col justify-between min-h-[320px]"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-off-white flex items-center justify-center border border-brand-border text-brand-slate group-hover:text-lime group-hover:bg-brand-dark transition-colors duration-500">
                  <sol.Icon size={20} />
                </div>
                <h4 className="font-space text-2xl font-bold uppercase tracking-tight text-brand-dark">{sol.title}</h4>
                <p className="font-sans text-sm text-brand-slate font-light leading-relaxed">{sol.desc}</p>
              </div>
              <div className="pt-8 border-t border-brand-border/40 mt-6 flex justify-between items-center text-[10px] font-bold tracking-[2px] uppercase text-brand-slate/40 group-hover:text-brand-dark transition-colors">
                <span>Standard Protocol</span>
                <span>// ISO Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
