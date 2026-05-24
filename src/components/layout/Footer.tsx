import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer({
  scrollToId
}: {
  scrollToId: (e: React.MouseEvent, id: string) => void;
}) {
  return (
    <footer className="py-24 px-[5%] bg-white text-brand-dark text-center snap-start border-t border-brand-border">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center -space-y-2">
          <span className="font-space text-5xl font-bold tracking-tighter uppercase">Magnus</span>
          <span className="font-sans text-[11px] font-bold tracking-[10px] uppercase text-lime">Enterprises</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {['About', 'Fleet', 'Solutions', 'Products', 'Gallery', 'Contact'].map((item) => {
            const id = item.toLowerCase().replace(' ', '-');
            return (
              <motion.a 
                key={item} 
                whileHover={{ y: -2, color: "#CCFF00" }}
                href={`#${id}`} 
                className="font-sans text-[10px] font-bold tracking-[3px] uppercase text-brand-slate transition-colors duration-300"
                onClick={(e) => scrollToId(e, id)}
              >
                {item}
              </motion.a>
            );
          })}
        </nav>

        <div className="flex justify-center gap-10">
          {[
            { Icon: Linkedin, href: "https://linkedin.com/company/magnus-enterprises" },
            { Icon: Twitter, href: "https://twitter.com/magnus_ent" },
            { Icon: Facebook, href: "https://facebook.com/magnus.enterprises.nashik" }
          ].map(({ Icon, href }, i) => (
            <motion.a 
              key={i} 
              whileHover={{ scale: 1.2, rotate: 10, color: "#CCFF00" }}
              whileTap={{ scale: 0.9 }}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-slate/50 transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
        <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-8 font-sans text-[9px] font-bold tracking-[6px] uppercase text-brand-slate/30">
          <span className="text-center md:text-left">© 2026 Magnus Enterprises // Nashik, India // ISO 9001:2015</span>
          <span className="text-brand-slate/50 tracking-[4px] hover:text-lime transition-colors cursor-default">Precision Manufacturing Baseline</span>
        </div>
      </div>
    </footer>
  );
}
