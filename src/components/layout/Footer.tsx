import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Facebook, ArrowUpRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../../constants';

export default function Footer({
  scrollToId
}: {
  scrollToId: (e: React.MouseEvent, id: string) => void;
}) {
  return (
    <footer className="relative py-24 px-[5%] bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Background Dots & Glow */}
      <div className="absolute inset-0 bg-dots opacity-[0.02] pointer-events-none text-white/5 z-0" />
      <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] bg-lime/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Branding & Quality Statement */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center relative select-none">
                <img src="/logo.png" alt="Magnus Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(204,255,0,0.1)]" />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <span className="font-space text-2xl font-bold tracking-tighter uppercase">Magnus</span>
                <span className="font-sans text-[8px] font-bold tracking-[6px] uppercase text-lime">Enterprises</span>
              </div>
            </div>
            <p className="font-sans text-xs text-gray-400 uppercase tracking-widest font-bold leading-relaxed max-w-xs">
              ISO 9001:2015 Certified Precision Machining & Switchgear Assembly Facility. Nashik, India.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-8 h-8 flex items-center justify-center bg-zinc-950 border border-white/10 text-lime">
                <ShieldCheck size={16} />
              </div>
              <span className="font-space text-[10px] font-bold tracking-[3px] uppercase">QMS CERTIFIED</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-6">
            <h4 className="font-space text-xs font-bold tracking-[4px] uppercase text-white/40 border-b border-white/10 pb-2">
              Site Navigation
            </h4>
            <ul className="space-y-3 list-none">
              {['Products', 'Solutions', 'Fleet', 'Gallery', 'About', 'Contact'].map((item) => {
                const id = item.toLowerCase().replace(' ', '-');
                return (
                  <li key={item}>
                    <motion.a 
                      whileHover={{ x: 4, color: "#CCFF00" }}
                      href={`#${id}`} 
                      className="group inline-flex items-center gap-2 font-sans text-[10px] font-bold tracking-[3px] uppercase text-gray-400 transition-colors duration-300"
                      onClick={(e) => scrollToId(e, id)}
                    >
                      <span>{item}</span>
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-6">
            <h4 className="font-space text-xs font-bold tracking-[4px] uppercase text-white/40 border-b border-white/10 pb-2">
              Our Capabilities
            </h4>
            <ul className="space-y-3 list-none font-sans text-[10px] font-bold tracking-[3px] uppercase text-gray-400">
              <li>CNC VMC Milling</li>
              <li>CNC Turning</li>
              <li>Switchgear Mechanism</li>
              <li>Automatic Tapping</li>
              <li>Laser Sheet Processing</li>
            </ul>
          </div>

          {/* Column 4: Quick Contact */}
          <div className="space-y-6">
            <h4 className="font-space text-xs font-bold tracking-[4px] uppercase text-white/40 border-b border-white/10 pb-2">
              Contact Base
            </h4>
            <ul className="space-y-4 list-none">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-lime flex-shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="font-sans text-[10px] font-bold tracking-[3px] uppercase text-gray-400 hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-lime flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="font-sans text-[10px] font-bold tracking-[3px] uppercase text-gray-400 hover:text-white transition-colors break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-lime flex-shrink-0 mt-0.5" />
                <span className="font-sans text-[9px] font-bold tracking-[3px] uppercase text-gray-400 leading-relaxed">
                  {contactInfo.address}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <span className="font-sans text-[9px] font-bold tracking-[6px] uppercase text-gray-400/30 text-center md:text-left">
            © 2026 Magnus Enterprises | Nashik, India | ISO 9001:2015
          </span>

          {/* Socials */}
          <div className="flex gap-6">
            {[
              { Icon: Linkedin, href: "https://linkedin.com/company/magnus-enterprises" },
              { Icon: Twitter, href: "https://twitter.com/magnus_ent" },
              { Icon: Facebook, href: "https://facebook.com/magnus.enterprises.nashik" }
            ].map(({ Icon, href }, i) => (
              <motion.a 
                key={i} 
                whileHover={{ scale: 1.15, rotate: 5, color: "#CCFF00", borderColor: "#CCFF00" }}
                whileTap={{ scale: 0.95 }}
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400/50 hover:text-lime transition-colors duration-300"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Developer Marker */}
          <span className="font-sans text-[9px] font-bold tracking-[4px] uppercase text-gray-400/50 hover:text-lime transition-colors cursor-default">
            Forged by Beforth
          </span>
        </div>
      </div>
    </footer>
  );
}
