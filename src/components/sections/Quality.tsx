import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle } from 'lucide-react';

export default function Quality() {
  return (
    <section className="py-20 px-[5%] bg-white text-brand-dark border-b border-brand-border relative overflow-hidden scroll-mt-[100px]">
      <div className="absolute inset-0 bg-dots text-brand-dark opacity-[0.02] pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 flex flex-col items-center"
            >
              <h2 className="font-space text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold uppercase tracking-tight italic text-center">
                "Quality is not an act, it is a habit. <br />
                In our workshop, <span className="text-lime">it is the law.</span>"
              </h2>
              
              <div className="flex flex-col gap-1 items-center">
                <span className="font-space text-2xl font-bold tracking-tight text-brand-dark uppercase">
                  ISO 9001:2015
                </span>
                <span className="font-sans text-sm font-bold text-brand-slate uppercase tracking-[4px]">
                  Certificated Facility
                </span>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto w-full">
              {[
                "Multi-stage micron inspection",
                "Calibrated measuring instruments",
                "Raw material traceability",
                "Zero-defect delivery policy"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center">
                  <CheckCircle size={16} className="text-lime opacity-40 flex-shrink-0" />
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[2px] text-brand-slate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
