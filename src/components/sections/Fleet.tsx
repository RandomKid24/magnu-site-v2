import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../ui/Shared';

export default function Fleet() {
  return (
    <section className="py-40 px-[5%] relative overflow-hidden snap-start" id="precision-fleet">
      <div className="absolute inset-0 bg-dots text-brand-border opacity-[0.1] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader subtitle="Technology Catalog" title="Unmatched Capability." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border border border-brand-border shadow-2xl">
          {[
            { 
              id: '01', 
              type: 'Vertical Milling', 
              make: 'Cosmos', 
              specs: '800x450 mm Table // 24 Tool Stations // 8000 RPM',
              image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800'
            },
            { 
              id: '02', 
              type: 'CNC Turning (I)', 
              make: 'Macpower CNC', 
              specs: 'Max Dia: 320 mm // Max Length: 325 mm // 8 Tool Stations',
              image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
            },
            { 
              id: '03', 
              type: 'CNC Turning (II)', 
              make: 'Ace Micromatics', 
              specs: 'Max Dia: 250 mm // Max Length: 300 mm // 12 Tool Stations',
              image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800'
            },
            { 
              id: '04', 
              type: 'DRO Milling', 
              make: 'Custom Precision', 
              specs: 'Digital Read Out // High-Accuracy Manual Milling',
              image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
            },
            { 
              id: '05', 
              type: 'Drilling & Tapping', 
              make: 'Industrial Grade', 
              specs: 'High Speed // Precision Threading Capabilities',
              image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
            },
            { 
              id: '06', 
              type: 'Bandsaw Cutting', 
              make: 'Shivam Engineering', 
              specs: 'Max Cutting Dia: 200 mm // Rapid Metal Sizing',
              image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=800'
            }
          ].map((machine, i) => (
            <motion.div 
              key={machine.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white p-12 flex flex-col group hover:bg-brand-dark transition-colors duration-700 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-lime translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="font-space text-[10px] font-bold tracking-[4px] uppercase text-brand-slate mb-8 group-hover:text-white/40">Component Registry // {machine.id}</span>
              <h3 className="font-space text-3xl font-bold mb-6 uppercase tracking-tighter group-hover:text-white transition-colors">{machine.type}</h3>
              <div className="aspect-square bg-off-white overflow-hidden mb-10">
                <img 
                  src={machine.image} 
                  alt={machine.type} 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-auto space-y-4">
                <p className="font-sans text-[10px] font-bold tracking-[3px] uppercase text-brand-slate group-hover:text-lime">Make: {machine.make}</p>
                <p className="font-sans text-xs text-brand-slate font-light leading-relaxed group-hover:text-white/60">{machine.specs}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specs Table */}
        <div className="mt-32 border border-brand-border bg-white shadow-xl overflow-hidden">
          <div className="p-8 border-b border-brand-border bg-off-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="font-space text-xl font-bold uppercase tracking-tight text-brand-dark">Metrology Specifications</h4>
              <p className="font-sans text-xs text-brand-slate">Real-time capacity tolerances and mechanical calibrations.</p>
            </div>
            <div className="bg-brand-dark text-lime font-space text-[9px] font-bold tracking-[3px] uppercase px-4 py-2 border border-lime/10">
              0,001mm precision limit
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-brand-border bg-off-white/50 text-[10px] font-bold tracking-[3px] uppercase text-brand-slate">
                  <th className="p-6 font-sans">Index</th>
                  <th className="p-6 font-sans">Machine Group</th>
                  <th className="p-6 font-sans">Manufacturer</th>
                  <th className="p-6 font-sans">Engineering Thresholds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border text-sm">
                {[
                  { nr: '1', name: 'Vertical Milling', make: 'Cosmos', specs: 'Table: 800x450 mm // Stations: 24 // Speed: 8000 RPM' },
                  { nr: '2', name: 'CNC Turning - 1', make: 'Macpower CNC', specs: 'Max Dia: 320 mm // Max Length: 325 mm // Stations: 8' },
                  { nr: '3', name: 'CNC Turning - 2', make: 'Ace Micromatics', specs: 'Max Dia: 250 mm // Max Length: 300 mm // Stations: 12' },
                  { nr: '4', name: 'Bandsaw', make: 'Shivam Engineering', specs: 'Max Cutting Dia: 200 mm' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-off-white/50 transition-colors">
                    <td className="p-6 font-space font-bold text-xs text-brand-slate">0{row.nr}</td>
                    <td className="p-6 font-space font-bold text-brand-dark uppercase tracking-tight">{row.name}</td>
                    <td className="p-6 font-sans font-medium text-brand-slate">{row.make}</td>
                    <td className="p-6 font-sans text-xs text-brand-slate/80">{row.specs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
