import { motion } from 'motion/react';
import { qualityEquipment } from '@/src/constants';
import { Ruler, CheckSquare, Microscope, ShieldCheck, Activity, Target } from 'lucide-react';

const qualityIcons = [Ruler, Microscope, CheckSquare, Target];

export default function Quality() {
  return (
    <section id="quality" className="py-24 bg-slate-950 relative overflow-hidden font-display">
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />
      
      {/* Decorative Serial Number Background */}
      <div className="absolute top-20 -right-20 text-[240px] font-black text-white/[0.02] leading-none select-none rotate-90">
        ISO-9001
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Documentation Header */}
          <div className="lg:col-span-5">
             <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-lime flex items-center justify-center text-black font-black text-xl">Q</div>
                <div className="h-px flex-grow bg-white/10" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Auth: QA-SYSTEM-v4</span>
             </div>

             <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.8] tracking-tighter uppercase mb-10">
                Zero <br />
                Defect <br />
                <span className="text-lime">Policy.</span>
             </h2>

             <p className="text-white/40 text-lg font-sans leading-relaxed max-w-md mb-16 border-l-2 border-lime/30 pl-8">
                We maintain strict quality standards using precision measuring instruments and inspection processes to ensure 100% manufacturing accuracy across all industrial components.
             </p>

             <div className="aspect-video bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-lime/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <ShieldCheck className="w-24 h-24 text-lime/20 group-hover:text-lime group-hover:scale-110 transition-all duration-700" strokeWidth={1} />
                </div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                   <div className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                   <span className="text-[10px] font-black text-white uppercase tracking-widest">ISO 9001:2015 CERTIFIED</span>
                </div>
             </div>
          </div>

          {/* Right Column: Measurement Readout */}
          <div className="lg:col-span-7">
             <div className="bg-white/[0.02] border border-white/5 p-1 px-1 rounded-3xl">
                <div className="grid grid-cols-2 gap-px bg-white/5">
                   {qualityEquipment.map((item, i) => (
                     <div key={item} className="bg-slate-950 p-10 group hover:bg-slate-900 transition-colors">
                        <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">Metric-0{i+1}</div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-8 group-hover:text-lime transition-colors">{item}</h3>
                        <div className="flex items-end justify-between">
                           <div className="h-8 w-px bg-white/10" />
                           <div className="text-2xl font-black text-white/10 font-mono tracking-tighter group-hover:text-white/40 transition-colors">
                              CAL-{(10.023 + i * 1.5).toFixed(3)}
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="mt-16 grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Inspection Rate</span>
                   <div className="text-3xl font-black text-white font-mono leading-none">100%</div>
                   <div className="w-full h-1 bg-white/5 mt-2 overflow-hidden">
                      <div className="w-full h-full bg-lime" />
                   </div>
                </div>
                <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Precision Yield</span>
                   <div className="text-3xl font-black text-white font-mono leading-none">99.98%</div>
                   <div className="w-full h-1 bg-white/5 mt-2 overflow-hidden">
                      <div className="w-[99%] h-full bg-lime" />
                   </div>
                </div>
                <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Error Margin</span>
                   <div className="text-3xl font-black text-white font-mono leading-none">±0.005</div>
                   <div className="w-full h-1 bg-white/5 mt-2 overflow-hidden">
                      <div className="w-[5%] h-full bg-lime" />
                   </div>
                </div>
             </div>

             <div className="mt-16 p-8 bg-lime rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl">QA</div>
                <div className="relative z-10">
                   <h4 className="text-black font-black text-xs uppercase tracking-[0.2em] mb-1">Status: Operational</h4>
                   <p className="text-black/60 text-lg font-bold uppercase tracking-tighter">Total Quality Management Integrated</p>
                </div>
                <CheckSquare className="w-12 h-12 text-black relative z-10" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

