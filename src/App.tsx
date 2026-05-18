import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Menu,
  X,
  CheckCircle2,
  ArrowUp,
  ArrowRight,
  Instagram,
  Mail,
  Phone,
  Circle,
  Maximize2
} from 'lucide-react';
import { cn } from './lib/utils';

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          whileHover={{ scale: 1.1, backgroundColor: "#1a1a1a" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-brand-dark text-white rounded-full flex items-center justify-center shadow-2xl transition-colors group"
          aria-label="Scroll to top"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="#CCFF00"
              strokeWidth="2"
              style={{ pathLength: scrollYProgress }}
              transition={{ duration: 0.1 }}
            />
          </svg>
          <ArrowUp className="w-5 h-5 group-hover:text-lime transition-colors relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-lime z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

const SectionHeader = ({ subtitle, title, light = false }: { subtitle: string, title: string, light?: boolean }) => (
  <div className="mb-20">
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center gap-4 mb-4"
    >
      <div className={cn("w-[3px] h-6", light ? "bg-white/30" : "bg-lime")}></div>
      <span className={cn("font-sans text-[11px] font-bold tracking-[5px] uppercase", light ? "text-white/50" : "text-brand-slate")}>
        {subtitle}
      </span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className={cn("font-space text-5xl md:text-7xl font-bold leading-tight tracking-tighter uppercase", light ? "text-white" : "text-brand-dark")}
    >
      {title}
    </motion.h2>
  </div>
);

const Counter = ({ value, duration = 2, suffix = "" }: { value: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 50], ["rgba(252, 250, 247, 0.2)", "rgba(252, 250, 247, 0.95)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["rgba(232, 228, 223, 0)", "rgba(232, 228, 223, 1)"]);
  const navBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  
  const heroImageY = useTransform(scrollY, [0, 1000], [0, 300]);
  const grainY = useTransform(scrollY, [0, 3000], [0, -150]);

  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className="bg-off-white text-brand-dark min-h-screen snap-y snap-proximity overflow-y-auto scroll-smooth">
      <ScrollProgress />
      
      {/* Navigation */}
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
        
        <ul className="hidden md:flex gap-12 list-none">
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

        <div className="hidden md:block">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => scrollToId(e, 'contact')}
            className="btn-primary-custom group"
          >
            Request Quote
          </motion.button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            className="fixed inset-0 bg-brand-dark z-[60] flex flex-col items-center justify-center space-y-12 p-10"
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-off-white overflow-hidden pt-20 snap-start" id="home">
        {/* Architectural Background */}
        <motion.div 
          style={{ y: grainY }}
          className="absolute inset-0 z-0 opacity-[0.03] bg-grain pointer-events-none"
        ></motion.div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark hidden lg:block z-0 overflow-hidden">
          <motion.img 
            style={{ y: heroImageY }}
            src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2600" 
            alt="CNC Machining" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-75 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-off-white via-off-white/20 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 w-full px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="h-[1px] w-12 bg-lime"></div>
                  <span className="font-sans text-[10px] font-bold tracking-[6px] uppercase text-brand-slate">ISO 9001:2015 Tier-1 Manufacturing</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-space text-[clamp(54px,8vw,120px)] leading-[0.85] text-brand-dark tracking-tighter mb-10 font-bold uppercase"
                >
                  ENGINEERING <br />
                  FOR THE <span className="text-lime">MICRON</span> <br />
                  ABSOLUTE.
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-sans text-xl text-brand-slate max-w-lg leading-relaxed font-light mb-12"
                >
                  Specializing in high-accuracy Vertical Milling and CNC Turning. We deliver the components that drive heavy industry, with zero tolerance for error.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap items-center gap-8"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => scrollToId(e, 'precision-fleet')}
                    className="btn-primary-custom px-16 group"
                  >
                    Our Fleet
                  </motion.button>
                  
                  <div className="flex items-center gap-4 py-2 border-l border-brand-border pl-8">
                    <div className="flex flex-col">
                      <span className="font-sans text-xs font-bold text-brand-dark">Nashik, India</span>
                      <span className="font-sans text-[10px] text-brand-slate uppercase font-medium tracking-widest">Base Operations</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="mt-16 grid grid-cols-3 gap-12 border-t border-brand-border pt-12"
                >
                  <div className="space-y-1">
                    <div className="font-space text-3xl font-bold text-lime">
                      <Counter value={14} suffix="+" />
                    </div>
                    <div className="font-sans text-[9px] font-bold tracking-[2px] uppercase text-brand-slate">Years Active</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-space text-3xl font-bold text-lime">
                      <Counter value={2500} suffix="+" duration={3} />
                    </div>
                    <div className="font-sans text-[9px] font-bold tracking-[2px] uppercase text-brand-slate">Projects</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-space text-3xl font-bold text-lime">
                      <Counter value={12} suffix="+" />
                    </div>
                    <div className="font-sans text-[9px] font-bold tracking-[2px] uppercase text-brand-slate">Core Machines</div>
                  </div>
                </motion.div>
              </div>

              {/* Technical Blueprint Elements for Desktop */}
              <div className="hidden lg:flex flex-col items-end gap-12 text-right">
                <div className="space-y-2">
                  <div className="font-space text-5xl font-bold text-brand-dark/20 uppercase">0,001mm</div>
                  <div className="font-sans text-[9px] font-bold tracking-[4px] uppercase text-brand-slate/40">Geometric Precision</div>
                </div>
                <div className="space-y-2">
                  <div className="font-space text-5xl font-bold text-brand-dark/20 uppercase">8000 RPM</div>
                  <div className="font-sans text-[9px] font-bold tracking-[4px] uppercase text-brand-slate/40">Rotation Velocity</div>
                </div>
                <div className="w-[1px] h-32 bg-gradient-to-b from-lime to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Nav-Link styles reference bottom scroll indicator */}
        <div className="absolute bottom-10 left-[5%] flex items-center gap-6">
          <div className="w-10 h-[10px] flex items-center justify-center">
            <div className="w-[1px] h-full bg-brand-dark/20"></div>
          </div>
          <span className="font-sans text-[9px] font-bold tracking-[4px] uppercase text-brand-slate/40">Scroll to Explore</span>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-[5%] bg-white border-y border-brand-border relative overflow-hidden snap-start" id="about">
        <motion.div 
          style={{ y: grainY }}
          className="absolute inset-0 bg-grain opacity-[0.4] pointer-events-none"
        ></motion.div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionHeader subtitle="The Narrative" title="Engineered with Precision." />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-sans text-xl text-brand-slate font-light leading-relaxed mb-10"
              >
                Founded to redefine the industrial landscape in Nashik, Magnus Enterprises has evolved into a tier-1 partner for companies that demand zero margin for error. Our philosophy is rooted in the belief that absolute accuracy is the only standard worth pursuing.
              </motion.p>
              <div className="grid grid-cols-2 gap-12 pt-10 border-t border-brand-border">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h4 className="font-space text-2xl font-bold mb-3 uppercase tracking-tight flex items-center gap-2">
                    <span className="text-lime text-xs">●</span> Vision
                  </h4>
                  <p className="font-sans text-sm text-brand-slate leading-relaxed">
                    Our objective is to provide the best value by delivering the most flexible and scalable solutions for the companies on the move.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h4 className="font-space text-2xl font-bold mb-3 uppercase tracking-tight flex items-center gap-2">
                    <span className="text-lime text-xs">●</span> Mission
                  </h4>
                  <p className="font-sans text-sm text-brand-slate leading-relaxed">
                    We are committed in making Magnus the team that will win the trust of business leaders for all their Product needs.
                  </p>
                </motion.div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] bg-brand-dark overflow-hidden group border border-lime/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200"
                alt="Precision Work"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Section - Premium Catalog Style */}
      <section className="py-40 px-[5%] relative overflow-hidden snap-start" id="precision-fleet">
        <div className="absolute inset-0 bg-dots text-brand-border opacity-[0.1] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader subtitle="Technology Catalog" title="Unmatched Capability." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border border border-brand-border shadow-2xl">
            {[
              { 
                id: '01', 
                type: 'Vertical Milling', 
                make: 'Cosmos', 
                specs: '800x450 mm Table // 24 Tool Stations // 8000 RPM',
                image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800'
              },
              { 
                id: '02', 
                type: 'CNC Turning', 
                make: 'Macpower / Ace', 
                specs: 'Max Dia: 320 mm // Length: 325 mm // High Precision',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
              },
              { 
                id: '03', 
                type: 'DRO Milling', 
                make: 'Custom Precision', 
                specs: 'Digital Read Out // High-Accuracy Manual Milling',
                image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800'
              },
              { 
                id: '04', 
                type: 'Drilling & Tapping', 
                make: 'Industrial Grade', 
                specs: 'High Speed // Precision Threading Capabilities',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
              },
              { 
                id: '05', 
                type: 'Bandsaw Cutting', 
                make: 'Shivam Engineering', 
                specs: 'Max Cutting Dia: 200 mm // Rapid Metal Sizing',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
              }
            ].map((machine, i) => (
              <motion.div 
                key={machine.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white p-12 flex flex-col group hover:bg-brand-dark transition-colors duration-700 relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-lime translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="font-space text-[10px] font-bold tracking-[4px] uppercase text-brand-slate mb-8 group-hover:text-white/40">Component Registry // {machine.id}</span>
                <h3 className="font-space text-3xl font-bold mb-6 uppercase tracking-tighter group-hover:text-white transition-colors">{machine.type}</h3>
                <div className="aspect-square bg-off-white overflow-hidden mb-10">
                  <img 
                    src={machine.image} 
                    alt={machine.type} 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-auto space-y-4">
                  <p className="font-sans text-[10px] font-bold tracking-[3px] uppercase text-brand-slate group-hover:text-lime">Make: {machine.make}</p>
                  <p className="font-sans text-xs text-brand-slate font-light leading-relaxed group-hover:text-white/60">{machine.specs}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Specifications Table */}
          <div className="mt-40">
            <SectionHeader subtitle="Data Registry" title="Machine Specs." />
            <div className="overflow-x-auto border border-brand-border">
              <table className="w-full text-left font-sans text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white uppercase text-[10px] tracking-[3px] font-bold">
                    <th className="p-6 border-r border-white/10">Sr No.</th>
                    <th className="p-6 border-r border-white/10">Machine</th>
                    <th className="p-6 border-r border-white/10">Make</th>
                    <th className="p-6">Specification</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    { nr: '1', name: 'Vertical Milling', make: 'Cosmos', specs: 'Table: 800x450 mm // Stations: 24 // Speed: 8000 RPM' },
                    { nr: '2', name: 'CNC Turning - 1', make: 'Macpower CNC', specs: 'Max Dia: 320 mm // Max Length: 325 mm // Stations: 8' },
                    { nr: '3', name: 'CNC Turning - 2', make: 'Ace Micromatics', specs: 'Max Dia: 250 mm // Max Length: 300 mm // Stations: 12' },
                    { nr: '4', name: 'Bandsaw', make: 'Shivam Engineering', specs: 'Max Cutting Dia: 200 mm' },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-brand-border hover:bg-off-white transition-colors">
                      <td className="p-6 border-r border-brand-border font-bold text-brand-slate">{row.nr}</td>
                      <td className="p-6 border-r border-brand-border font-bold uppercase tracking-tight">{row.name}</td>
                      <td className="p-6 border-r border-brand-border text-brand-slate">{row.make}</td>
                      <td className="p-6 text-brand-slate whitespace-pre-line">{row.specs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Measuring Instruments Table */}
          <div className="mt-40">
            <SectionHeader subtitle="Calibration Registry" title="Metrology Tools." />
            <div className="overflow-x-auto border border-brand-border">
              <table className="w-full text-left font-sans text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white uppercase text-[10px] tracking-[3px] font-bold">
                    <th className="p-6 border-r border-white/10">Sr No.</th>
                    <th className="p-6 border-r border-white/10">Instrument</th>
                    <th className="p-6 border-r border-white/10">Make</th>
                    <th className="p-6">Least Count</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    { nr: '1', name: 'Dial Vernier Caliper (0 – 200 mm)', make: 'Insize', val: '0.02 mm' },
                    { nr: '2', name: 'Digital Vernier Caliper (0 – 150 mm)', make: 'Insize', val: '0.01 mm' },
                    { nr: '3', name: 'Micrometer (0–25 & 25-50 mm)', make: 'Insize', val: '0.001 mm' },
                    { nr: '4', name: 'Dial Guage', make: 'Insize', val: '0.01 mm' },
                    { nr: '5', name: 'Dial Vernier Caliper (0-300 mm)', make: 'Insize', val: '0.02 mm' },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-brand-border hover:bg-off-white transition-colors">
                      <td className="p-6 border-r border-brand-border font-bold text-brand-slate">{row.nr}</td>
                      <td className="p-6 border-r border-brand-border font-bold uppercase tracking-tight">{row.name}</td>
                      <td className="p-6 border-r border-brand-border text-brand-slate">{row.make}</td>
                      <td className="p-6 font-bold text-lime-dark">{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-40 px-[5%] bg-brand-dark text-white snap-start" id="solutions">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="Industrial Expertise" title="Tailored Fabrication." light />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {[
              { title: 'Switchgear Assembly', desc: 'Expert assembly of industrial electrical components with rigorous accuracy.' },
              { title: 'Switchgear Mechanism', desc: 'Precision-engineered mechanisms for high-voltage switchgear units.' },
              { title: 'Milling & Turning', desc: 'CNC and manual machining for complex geometric industrial elements.' },
              { title: 'Drilling & Tapping', desc: 'High-speed precision drilling and internal threading for industrial parts.' },
              { title: 'Cutting & Parting', desc: 'Accurate metal parting and sizing for raw material preparation.' },
              { title: 'Welding', desc: 'Industrial grade welding services for structural and component integrity.' },
              { title: 'Laser Cutting', desc: 'High-speed plate cutting for intricate designs and customized parts.' },
              { title: 'Product R&D', desc: 'Collaborative engineering from prototyping to high-volume production.' },
              { title: 'Die Mould Manufacturing', desc: 'Precision mold and die making for various manufacturing processes.' }
            ].map((sol, i) => (
              <motion.div 
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="text-lime flex items-center gap-2">
                   <Circle fill="currentColor" size={8} />
                   <div className="h-[1px] w-8 bg-white/20"></div>
                </div>
                <h3 className="font-space text-2xl font-bold uppercase tracking-tight">{sol.title}</h3>
                <p className="font-sans text-sm text-white/40 font-light leading-relaxed">
                  {sol.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Gallery */}
      <section className="py-40 px-[5%] bg-white relative overflow-hidden snap-start" id="gallery">
        <motion.div 
          style={{ y: grainY }}
          className="absolute inset-0 bg-grain opacity-[0.4] pointer-events-none"
        ></motion.div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader subtitle="Visual Registry" title="Precision in Motion." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                url: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800",
                caption: "High-Speed Spindle Analysis",
                sub: "Calibration Stage"
              },
              { 
                url: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
                caption: "Machined Steel Components",
                sub: "Aerospace Specification"
              },
              { 
                url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
                caption: "Vertical Milling Operations",
                sub: "3-Axis Configuration"
              },
              { 
                url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
                caption: "CNC Lathe Precision Turning",
                sub: "Cylindrical Mastery"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group cursor-crosshair"
              >
                <div className="aspect-[3/4] overflow-hidden bg-brand-dark mb-6 relative">
                  <img 
                    src={item.url} 
                    alt={item.caption}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={16} />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="font-sans text-[9px] font-bold tracking-[3px] uppercase text-brand-slate block">
                    {item.sub}
                  </span>
                  <h4 className="font-space text-sm font-bold uppercase tracking-tight text-brand-dark">
                    {item.caption}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Badge */}
      <section className="py-40 px-[5%] bg-off-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-10 border-2 border-brand-dark mb-12"
          >
            <div className="space-y-2">
              <div className="font-space text-5xl font-bold tracking-tighter uppercase">ISO 9001:2015</div>
              <div className="font-sans text-[10px] font-bold tracking-[8px] uppercase text-brand-slate">Quality Governance</div>
            </div>
          </motion.div>
          <p className="font-space text-2xl md:text-3xl font-light leading-relaxed uppercase tracking-tight text-brand-dark">
            "We do not just manufacture parts; we craft the components of industrial evolution."
          </p>
        </div>
      </section>

      {/* Contact Section */}
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
                    initial={{ opacity: 0, inset: 0 }}
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
                  <div className="flex justify-between items-end">
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
                  <div className="flex justify-between items-end">
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
                  <div className="flex justify-between items-end">
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

      {/* Footer */}
      <footer className="py-24 px-[5%] bg-brand-dark text-white text-center snap-start">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col items-center -space-y-2">
            <span className="font-space text-5xl font-bold tracking-tighter uppercase">Magnus</span>
            <span className="font-sans text-[11px] font-bold tracking-[10px] uppercase text-white/20">Enterprises</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['About', 'Precision Fleet', 'Solutions', 'Gallery', 'Contact'].map((item) => {
              const id = item.toLowerCase().replace(' ', '-');
              return (
                <motion.a 
                  key={item} 
                  whileHover={{ y: -2, color: "#82A300" }}
                  href={`#${id}`} 
                  className="footer-link"
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
                className="text-white/30 transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-sans text-[9px] font-bold tracking-[6px] uppercase text-white/10">
            <span className="text-center md:text-left">© 2026 Magnus Enterprises // Nashik, India // All Rights Reserved</span>
            <span className="text-white/30 tracking-[4px] hover:text-lime transition-colors cursor-default">Forged by Beforth</span>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default App;
