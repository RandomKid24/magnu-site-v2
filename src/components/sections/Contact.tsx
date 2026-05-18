import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/Shared';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name or Enterprise is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project narrative is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Narrative must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section className="py-40 px-[5%] bg-white snap-start" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-32"
        >
          <div>
            <SectionHeader subtitle="Initiate Contact" title="Let's Collaborate." />
            <div className="space-y-12">
              <div className="flex items-center gap-10 group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-brand-border transition-colors group-hover:border-lime bg-white"
                >
                  <MapPin className="text-lime" size={20} />
                </motion.div>
                <div className="flex flex-col -space-y-1">
                  <span className="font-sans text-[10px] font-bold tracking-[30%] uppercase text-brand-slate mb-1">Locality</span>
                  <p className="font-space text-lg font-bold leading-tight uppercase text-brand-dark">
                    Survey No. 107/2, Near Datir Mala, Ambad Gaon, Ambad, Nashik – 422010
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10 group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-brand-border transition-colors group-hover:border-lime bg-white"
                >
                  <Mail className="text-lime" size={20} />
                </motion.div>
                <div className="flex flex-col -space-y-1">
                  <span className="font-sans text-[10px] font-bold tracking-[30%] uppercase text-brand-slate mb-1">Email</span>
                  <a href="mailto:magnusenterprises20@gmail.com" className="font-space text-lg font-bold leading-tight uppercase hover:text-lime transition-colors text-brand-dark">
                    magnusenterprises20@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-10 group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-brand-border transition-colors group-hover:border-lime bg-white"
                >
                  <Phone className="text-lime" size={20} />
                </motion.div>
                <div className="flex flex-col -space-y-1">
                  <span className="font-sans text-[10px] font-bold tracking-[30%] uppercase text-brand-slate mb-1">Support</span>
                  <a href="tel:+917720046700" className="font-space text-lg font-bold leading-tight uppercase hover:text-lime transition-colors text-brand-dark">
                    +91 77200 46700
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-16 border border-brand-border bg-off-white relative">
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-off-white z-20 flex flex-col items-center justify-center p-10 text-center"
                >
                  <div className="w-20 h-20 bg-lime rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="text-brand-dark w-10 h-10" />
                  </div>
                  <h3 className="font-space text-3xl font-bold uppercase tracking-tighter mb-4">Transmission Successful</h3>
                  <p className="font-sans text-brand-slate font-light">Your message has been logged in our precision database. We will respond shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-10" onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div className="flex justify-between items-end flex-wrap gap-2">
                  <label className={cn("font-sans text-[10px] font-bold tracking-[3px] uppercase transition-colors", errors.name ? "text-red-500" : "text-brand-slate")}>Credentials</label>
                  {errors.name && <span className="text-red-500 text-[9px] font-bold uppercase tracking-wider">{errors.name}</span>}
                </div>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  className={cn(
                    "w-full bg-transparent border-b py-4 font-serif text-xl outline-none transition-colors", 
                    errors.name ? "border-red-500" : "border-brand-border focus:border-brand-dark"
                  )} 
                  placeholder="Name or Enterprise" 
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end flex-wrap gap-2">
                  <label className={cn("font-sans text-[10px] font-bold tracking-[3px] uppercase transition-colors", errors.email ? "text-red-500" : "text-brand-slate")}>Digital Address</label>
                  {errors.email && <span className="text-red-500 text-[9px] font-bold uppercase tracking-wider">{errors.email}</span>}
                </div>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={cn(
                    "w-full bg-transparent border-b py-4 font-serif text-xl outline-none transition-colors", 
                    errors.email ? "border-red-500" : "border-brand-border focus:border-brand-dark"
                  )}
                  placeholder="email@server.com" 
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end flex-wrap gap-2">
                  <label className={cn("font-sans text-[10px] font-bold tracking-[3px] uppercase transition-colors", errors.message ? "text-red-500" : "text-brand-slate")}>Project Narrative</label>
                  {errors.message && <span className="text-red-500 text-[9px] font-bold uppercase tracking-wider">{errors.message}</span>}
                </div>
                <textarea 
                  rows={3} 
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  className={cn(
                    "w-full bg-transparent border-b py-4 font-serif text-xl outline-none transition-colors resize-none", 
                    errors.message ? "border-red-500" : "border-brand-border focus:border-brand-dark"
                  )}
                  placeholder="Specifications..."
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={cn(
                  "btn-primary-custom w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed",
                  isSubmitting && "bg-brand-slate"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : "Commit Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
