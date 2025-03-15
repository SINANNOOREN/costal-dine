import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import AnimationProvider from '@/components/ui/animation-provider';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Reservation from '@/components/Reservation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll to element when clicking on anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <AnimationProvider>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-coastal-gold origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <NavBar />
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
        <Footer />
        
        <motion.button
          className="fixed bottom-6 right-6 p-3 rounded-full bg-coastal-gold text-white shadow-lg z-40"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </AnimationProvider>
  );
};

export default Index;
