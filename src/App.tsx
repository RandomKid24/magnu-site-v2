import React from 'react';
import { useScroll, useTransform } from 'motion/react';
import { ScrollProgress, ScrollToTop } from './components/ui/Shared';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Fleet from './components/sections/Fleet';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Quality from './components/sections/Quality';
import Contact from './components/sections/Contact';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  const heroImageY = useTransform(scrollY, [0, 1000], [0, 300]);
  const grainY = useTransform(scrollY, [0, 3000], [0, -150]);

  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-off-white text-brand-dark min-h-screen snap-y snap-proximity overflow-y-auto scroll-smooth">
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar 
        scrollToId={scrollToId}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Hero Section */}
      <Hero 
        scrollToId={scrollToId}
        grainY={grainY}
        heroImageY={heroImageY}
      />

      {/* Philosophy Section */}
      <About grainY={grainY} />

      {/* Fleet Section */}
      <Fleet />

      {/* Solutions Grid */}
      <Services />

      {/* Process Gallery */}
      <Gallery />

      {/* Quality Badge */}
      <Quality />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer scrollToId={scrollToId} />

      {/* Floating Scroll to Top Widget */}
      <ScrollToTop />
    </div>
  );
};

export default App;
