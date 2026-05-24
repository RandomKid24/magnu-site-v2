import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../../constants';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section className="py-20 px-[5%] bg-white scroll-mt-[100px]" id="contact">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-[1px] w-12 bg-lime"></div>
                <span className="font-sans text-[10px] font-bold tracking-[6px] uppercase text-brand-slate">Inquiries</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-space text-[clamp(40px,5vw,72px)] leading-[1] text-brand-dark tracking-tighter mb-12 font-bold uppercase"
              >
                START A <br />
                <span className="text-lime">PRECISION</span> PROJECT.
              </motion.h2>

              <div className="space-y-12">
                <div className="group flex items-start gap-8">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-brand-border transition-colors group-hover:border-lime bg-off-white">
                    <Mail size={20} className="text-brand-dark" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold text-brand-slate tracking-[3px] uppercase block mb-2">Email Baseline</span>
                    <a href={`mailto:${contactInfo.email}`} className="font-space text-xl text-brand-dark hover:text-lime transition-colors">{contactInfo.email}</a>
                  </div>
                </div>

                <div className="group flex items-start gap-8">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-brand-border transition-colors group-hover:border-lime bg-off-white">
                    <Phone size={20} className="text-brand-dark" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold text-brand-slate tracking-[3px] uppercase block mb-2">Direct Line</span>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="font-space text-xl text-brand-dark hover:text-lime transition-colors">{contactInfo.phone}</a>
                  </div>
                </div>

                <div className="group flex items-start gap-8">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-brand-border transition-colors group-hover:border-lime bg-off-white">
                    <MapPin size={20} className="text-brand-dark" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold text-brand-slate tracking-[3px] uppercase block mb-2">Base Operations</span>
                    <p className="font-sans text-xs text-brand-slate leading-relaxed uppercase tracking-widest font-bold max-w-xs">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-16 border border-brand-border bg-off-white relative shadow-2xl">
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 bg-off-white z-20 flex flex-col items-center justify-center p-10 text-center"
                  >
                    <div className="w-20 h-20 bg-lime rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 size={40} className="text-white" />
                    </div>
                    <h3 className="font-space text-3xl font-bold text-brand-dark mb-4 uppercase tracking-tighter">Transmission Received</h3>
                    <p className="font-sans text-xs text-brand-slate uppercase tracking-widest font-bold leading-relaxed">Our engineering team will review your specifications and contact you shortly.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="mt-10 font-space text-[10px] font-bold text-lime hover:text-brand-dark transition-colors tracking-[4px] uppercase underline underline-offset-8"
                    >
                      New Submission
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-10"
                  >
                    <div className="grid sm:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="font-sans text-[10px] font-bold text-brand-slate tracking-[4px] uppercase">First Name</label>
                        <input required type="text" className="w-full bg-transparent border-b border-brand-border py-4 text-brand-dark focus:outline-none focus:border-lime transition-colors font-sans text-sm placeholder:text-brand-border" placeholder="John" />
                      </div>
                      <div className="space-y-4">
                        <label className="font-sans text-[10px] font-bold text-brand-slate tracking-[4px] uppercase">Last Name</label>
                        <input required type="text" className="w-full bg-transparent border-b border-brand-border py-4 text-brand-dark focus:outline-none focus:border-lime transition-colors font-sans text-sm placeholder:text-brand-border" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="font-sans text-[10px] font-bold text-brand-slate tracking-[4px] uppercase">Email Address</label>
                      <input required type="email" className="w-full bg-transparent border-b border-brand-border py-4 text-brand-dark focus:outline-none focus:border-lime transition-colors font-sans text-sm placeholder:text-brand-border" placeholder="john@enterprise.com" />
                    </div>
                    <div className="space-y-4">
                      <label className="font-sans text-[10px] font-bold text-brand-slate tracking-[4px] uppercase">Project Description</label>
                      <textarea required rows={4} className="w-full bg-transparent border-b border-brand-border py-4 text-brand-dark focus:outline-none focus:border-lime transition-colors font-sans text-sm resize-none placeholder:text-brand-border" placeholder="Describe your manufacturing requirements..." />
                    </div>
                    <button 
                      disabled={formState === 'submitting'}
                      className="btn-primary-custom w-full flex items-center justify-center gap-4 group"
                    >
                      {formState === 'submitting' ? 'Processing...' : (
                        <>
                          Send Message
                          <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
