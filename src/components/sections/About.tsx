import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { philosophy, machinery } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const [selectedMachine, setSelectedMachine] = useState(0);

  const machineSpecs: Record<string, any> = {
    "Vertical Milling Machines": {
      title: "Vertical Milling Center",
      description: "High-performance milling units with multi-tool magazines for precision component manufacturing.",
      specs: [
        { label: 'Table Size', value: '800 × 450 mm' },
        { label: 'Tool Stations', value: '24 Stations' },
        { label: 'Spindle Speed', value: '8,000 RPM' },
        { label: 'Control', value: 'CNC Precision' },
      ]
    },
    "CNC Turning Machines": {
      title: "CNC Turning Center",
      description: "Capable of handling complex turning operations for shafts, bushes, and high-precision rings.",
      specs: [
        { label: 'Max Diameter', value: '320 mm' },
        { label: 'Max Length', value: '325 mm' },
        { label: 'Tool Stations', value: '8-12 Stations' },
        { label: 'Accuracy', value: 'High' },
      ]
    },
    "DRO Milling Machines": {
      title: "DRO Milling Center",
      description: "Advanced milling with Digital Read Out systems for meticulous manual machining tasks.",
      specs: [
        { label: 'Digital RO', value: '3-Axis' },
        { label: 'Precision', value: 'Meticulous' },
        { label: 'Output', value: 'Industrial' },
        { label: 'Versatility', value: 'High' },
      ]
    },
    "Drilling Machines": {
      title: "Radial Drilling Center",
      description: "High-capacity drilling machines capable of handling large-diameter holes in heavy cast-iron and steel frameworks.",
      specs: [
        { label: 'Max Hole', value: '⌀50mm' },
        { label: 'Arm Length', value: '1600mm' },
        { label: 'Feed Speed', value: 'Variable' },
        { label: 'Control', value: 'Semi-Auto' },
      ]
    },
    "Bandsaw Machines": {
      title: "Industrial Cutting System",
      description: "Precision bandsaw units for material preparation and primary sizing of solid bars, heavy tubes, and plate stocks.",
      specs: [
        { label: 'Cut Width', value: 'Max 300mm' },
        { label: 'Blade Speed', value: 'CVD Control' },
        { label: 'Feeder', value: 'Automatic' },
        { label: 'Accuracy', value: '±0.5mm' },
      ]
    },
    "Tapping Machines": {
      title: "Automatic Tapping System",
      description: "High-speed internal threading unit designed for repetitive precision tapping operations in high-volume assembly lines.",
      specs: [
        { label: 'Thread Range', value: 'M2 - M24' },
        { label: 'Speed', value: 'Dual Step' },
        { label: 'Torque Guard', value: 'Pneumatic' },
        { label: 'Cycle Time', value: '4s / Hole' },
      ]
    }
  };

  const currentMachine = machineSpecs[machinery[selectedMachine]] || machineSpecs[machinery[0]];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full industrial-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column: Story */}
          <div className="lg:w-1/2">
            <div className="text-[120px] font-black text-slate-100 leading-none mb-4 absolute -left-10 top-20 -z-10 select-none">
              ABOUT
            </div>
            
            <h3 className="text-5xl md:text-7xl font-bold font-display text-black leading-[0.9] tracking-tighter uppercase mb-12">
              Reliable <br />
              <span className="text-lime-dark">Manufacturing.</span>
            </h3>
            
            <div className="space-y-8 text-slate-600 font-medium leading-relaxed max-w-xl font-sans text-xl">
              <p>
                Magnus Enterprises is a Nashik based precision machining and manufacturing company delivering high quality engineering solutions for industrial applications.
              </p>
              <p className="text-lg text-slate-500 font-light">
                With a strong focus on precision, scalability, and reliability, Magnus Enterprises supports businesses with flexible manufacturing solutions tailored to their operational requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-slate-200 mt-20 border border-slate-200">
               <div className="bg-white p-10">
                  <div className="text-[10px] font-black text-lime-dark uppercase tracking-[0.3em] mb-4">Our Vision</div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    To provide the best value by delivering flexible and scalable manufacturing solutions for companies on the move.
                  </p>
               </div>
               <div className="bg-white p-10">
                  <div className="text-[10px] font-black text-lime-dark uppercase tracking-[0.3em] mb-4">Our Mission</div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    To become the trusted manufacturing partner for businesses by delivering precision engineered products and dependable industrial solutions.
                  </p>
               </div>
            </div>
          </div>

          {/* Right Column: Infrastructure Toggle */}
          <div className="lg:w-1/2">
             <div className="bg-slate-950 rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
                <div className="grid grid-cols-2">
                   {/* Machinery List */}
                   <div className="flex flex-col border-r border-white/5 bg-slate-900/50">
                      {machinery.map((machine, i) => (
                        <button 
                          key={machine} 
                          onClick={() => setSelectedMachine(i)}
                          className={cn(
                            "w-full text-left p-6 border-b border-white/5 transition-all flex flex-col group",
                            selectedMachine === i ? "bg-lime text-black" : "hover:bg-white/5 text-white/40 hover:text-white"
                          )}
                        >
                           <span className={cn(
                             "text-[8px] font-black uppercase tracking-widest mb-1",
                             selectedMachine === i ? "text-black/40" : "text-white/10"
                           )}>UNIT-0{i+1}</span>
                           <span className="text-xs font-bold uppercase tracking-tight">{machine}</span>
                        </button>
                      ))}
                   </div>

                   {/* Machine Detail Container */}
                   <div className="p-10 flex flex-col min-h-[500px] bg-slate-900/50 backdrop-blur-xl">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedMachine}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col h-full"
                        >
                           <div className="text-[10px] font-black text-lime uppercase tracking-[0.4em] mb-10">Specifications</div>
                           
                           <h4 className="text-3xl font-bold text-white uppercase tracking-tighter leading-none mb-6">
                              {currentMachine.title}
                           </h4>
                           
                           <p className="text-white/40 text-sm font-sans mb-12 flex-grow">
                              {currentMachine.description}
                           </p>

                           <div className="space-y-6 pt-10 border-t border-white/5">
                              {currentMachine.specs.map((spec: any, i: number) => (
                                <div key={i} className="flex justify-between items-center group/spec">
                                   <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover/spec:text-lime transition-colors">{spec.label}</span>
                                   <span className="text-sm font-bold text-white tracking-tight">{spec.value}</span>
                                </div>
                              ))}
                           </div>
                        </motion.div>
                      </AnimatePresence>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

