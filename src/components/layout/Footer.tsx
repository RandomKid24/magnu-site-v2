import { Mail, Phone, MapPin, ShieldCheck, Cpu } from 'lucide-react';
import { contactInfo } from '@/src/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between mb-24 gap-16 border-b border-white/5 pb-24">
          
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-12 bg-white flex items-center justify-center text-black font-black text-2xl">M</div>
               <div className="flex flex-col leading-none">
                 <span className="text-2xl font-black font-display tracking-tighter text-white uppercase">MAGNUS</span>
                 <span className="text-[10px] font-black text-lime uppercase tracking-[0.5em]">ENTERPRISES</span>
               </div>
            </div>
            <p className="text-white/40 text-lg leading-relaxed max-w-sm font-sans font-medium mb-10 italic">
              "Precision machining and manufacturing solutions for high-stakes industrial engineering."
            </p>
            <div className="flex items-center gap-4 text-lime bg-white/5 px-6 py-3 rounded-full border border-white/10 w-fit">
               <ShieldCheck className="w-5 h-5" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-10">
              <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20">Navigation</h4>
              <ul className="space-y-4">
                {['About', 'Services', 'Products', 'Quality', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-white/40 text-xs font-bold tracking-widest uppercase hover:text-lime transition-colors flex items-center gap-3 group">
                      <div className="w-1 h-1 bg-white/10 group-hover:bg-lime transform group-hover:scale-150 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20">Hq_Loc</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="w-4 h-4 text-lime shrink-0" />
                  <span className="text-white/40 text-[11px] font-bold uppercase leading-relaxed tracking-wider">
                    {contactInfo.address}
                  </span>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone className="w-4 h-4 text-lime shrink-0" />
                  <span className="text-white/40 text-[11px] font-bold uppercase tracking-wider">
                    {contactInfo.phone}
                  </span>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail className="w-4 h-4 text-lime shrink-0" />
                  <span className="text-white/40 text-[11px] font-bold uppercase tracking-wider truncate">
                    {contactInfo.email}
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-10 col-span-2 md:col-span-1">
               <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="flex items-center gap-3 mb-6">
                     <Cpu className="w-5 h-5 text-lime" />
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">System Status</span>
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center text-[9px] font-black text-white/20 uppercase tracking-widest">
                        <span>Production</span>
                        <span className="text-lime">Active</span>
                     </div>
                     <div className="flex justify-between items-center text-[9px] font-black text-white/20 uppercase tracking-widest">
                        <span>Quality Pass</span>
                        <span className="text-white">99.9%</span>
                     </div>
                     <div className="flex justify-between items-center text-[9px] font-black text-white/20 uppercase tracking-widest">
                        <span>Calibration</span>
                        <span className="text-white">Verified</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12">
           <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.5em]">
             &copy; {currentYear} MAGNUS ENTERPRISES // ALL RIGHTS RESERVED
           </div>
           <div className="flex items-center gap-12">
              <a href="#" className="group flex items-center gap-2">
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-white transition-colors">Privacy_Protocol</span>
              </a>
              <a href="#" className="group flex items-center gap-2">
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-white transition-colors">Legal_Notice.pdf</span>
              </a>
           </div>
        </div>
      </div>
    </footer>
  );
}
