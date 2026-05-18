import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar({
  scrollToId,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}: {
  scrollToId: (e: React.MouseEvent, id: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 50], ["rgba(252, 250, 247, 0.2)", "rgba(252, 250, 247, 0.95)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["rgba(232, 228, 223, 0)", "rgba(232, 228, 223, 1)"]);
  const navBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

  return (
    <>
      <motion.nav 
        style={{ 
          backgroundColor: navBg, 
          borderBottomColor: navBorder,
          backdropFilter: navBlur
        }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[100px] border-b transition-all duration-500"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-brand-dark flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-lime translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="font-space text-lg font-bold text-white relative z-10 group-hover:text-brand-dark transition-colors">M</span>
          </div>
          <div className="flex flex-col -space-y-1.5">
            <span className="font-space text-2xl font-bold tracking-tighter text-brand-dark uppercase">
              Magnus
            </span>
            <span className="font-sans text-[8px] font-bold tracking-[4px] uppercase text-brand-slate">
              Enterprises <span className="text-lime">.</span>
            </span>
          </div>
        </motion.div>
        
        <ul className="hidden lg:flex gap-8 xl:gap-12 list-none">
          {['About', 'Precision Fleet', 'Solutions', 'Gallery', 'Contact'].map((item) => {
            const id = item.toLowerCase().replace(' ', '-');
            return (
              <li key={item}>
                <motion.a 
                  key={item} 
                  whileHover={{ y: -2, color: "#82A300" }}
                  href={`#${id}`} 
                  className="nav-link"
                  onClick={(e) => scrollToId(e, id)}
                >
                  {item}
                </motion.a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => scrollToId(e, 'contact')}
            className="btn-primary-custom group"
          >
            Request Quote
          </motion.button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-brand-dark z-[60] flex flex-col items-center justify-start lg:justify-center overflow-y-auto space-y-8 lg:space-y-12 p-10 py-24"
          >
            <button className="absolute top-10 right-10 text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            {['About', 'Precision Fleet', 'Solutions', 'Gallery', 'Contact'].map((item) => {
              const id = item.toLowerCase().replace(' ', '-');
              return (
                <motion.a 
                  key={item} 
                  whileHover={{ scale: 1.1, color: "#CCFF00" }}
                  whileTap={{ scale: 0.9 }}
                  href={`#${id}`} 
                  className="font-serif text-4xl text-white transition-colors"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    scrollToId(e, id);
                  }}
                >
                  {item}
                </motion.a>
              );
            })}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                scrollToId(e, 'contact');
              }}
              className="btn-primary-custom !bg-lime !text-brand-dark mt-10"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
