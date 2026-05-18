import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Settings } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Infrastructure', href: '#industries' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 h-20 flex items-center",
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-950 flex items-center justify-center rounded-xl rotate-3">
             <span className="text-lime text-2xl font-black -rotate-3">M</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn(
              "text-2xl font-bold font-display tracking-tight transition-colors text-slate-900"
            )}>
              MAGNUS <span className="text-lime-dark">ENTERPRISES</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-all hover:text-lime-dark",
                    scrolled ? "text-slate-600" : "lg:text-white text-slate-600"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className={cn(
            "px-8 py-3 text-sm font-bold tracking-wider rounded-xl transition-all shadow-xl",
            scrolled ? "bg-slate-950 text-white shadow-slate-950/10" : "bg-white text-slate-950 lg:bg-lime lg:text-slate-950 shadow-lime/20"
          )}>
            GET IN TOUCH
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 transition-colors text-slate-900"
          )} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[68px] left-0 right-0 bg-white border-b border-slate-100 md:hidden flex flex-col p-6 gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-slate-900 py-4 border-b border-slate-50 uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              className="bg-slate-950 text-white py-4 rounded-xl font-bold uppercase tracking-widest mt-4"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
