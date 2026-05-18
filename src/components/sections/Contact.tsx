import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactInfo } from '@/src/constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Details */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-0.5 bg-lime-dark" />
                  <h2 className="text-sm font-bold text-lime-dark tracking-widest uppercase">Contact Us</h2>
                </div>
                <h3 className="text-4xl font-bold font-display text-black mb-8 leading-tight uppercase tracking-tight">
                  Let's Discuss <br /> 
                  <span className="text-lime-dark">Your Project.</span>
                </h3>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center text-lime-dark shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-widest text-black uppercase mb-1">Our Location</h4>
                      <p className="text-slate-500 text-sm font-normal leading-relaxed font-sans">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center text-lime-dark shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-widest text-black uppercase mb-1">Email Us</h4>
                      <a href={`mailto:${contactInfo.email}`} className="text-slate-500 text-sm font-normal hover:text-lime-dark transition-colors font-sans">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center text-lime-dark shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-widest text-black uppercase mb-1">Call Us</h4>
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-slate-500 text-sm font-normal hover:text-lime-dark transition-colors font-sans">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-black text-white relative rounded-sm">
                   <div className="absolute top-0 right-0 p-2 opacity-20">
                      <div className="w-6 h-6 border-r border-t border-lime" />
                   </div>
                   <p className="text-sm text-white/50 leading-relaxed font-normal font-sans">
                     Our team of expert engineers is standing by to provide scalable solutions for your manufacturing needs.
                   </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-heavy relative"
              >
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      className="w-full bg-off-white border-none rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-lime transition-all font-medium font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="e.g. john@company.com"
                      className="w-full bg-off-white border-none rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-lime transition-all font-medium font-sans"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inquiry Details</label>
                    <textarea 
                      rows={6} 
                      className="w-full bg-off-white border-none rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-lime transition-all font-medium resize-none font-sans"
                      placeholder="Describe your manufacturing or engineering requirements..."
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <button className="w-full bg-black hover:bg-lime hover:text-black text-white font-bold text-sm tracking-widest uppercase py-5 transition-all flex items-center justify-center gap-4 group rounded-2xl">
                      Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-[0.2em] font-medium">
                      We usually respond within 24 business hours.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
