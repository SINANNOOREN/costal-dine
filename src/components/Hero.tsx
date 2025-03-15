
import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/animation-provider';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(15, 45, 64, 0.7), rgba(15, 45, 64, 0.7)), url("https://images.unsplash.com/photo-1514516345957-556ca7c90a34?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute w-60 h-60 rounded-full bg-coastal-gold opacity-10 top-20 left-20"
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-coastal-navy opacity-10 bottom-20 right-20"
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <FadeIn direction="down" delay={0.2}>
          <h2 className="text-coastal-gold font-montserrat uppercase tracking-[0.3em] text-sm md:text-base mb-4">
            Welcome to
          </h2>
        </FadeIn>

        <FadeIn delay={0.4} className="mb-6">
          <h1 className="text-white font-playfair text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Coastal Dine
          </h1>
          <div className="w-24 h-1 bg-coastal-gold mx-auto"></div>
        </FadeIn>

        <FadeIn delay={0.6} className="mb-8 max-w-2xl mx-auto">
          <p className="text-white/90 font-montserrat text-base md:text-lg mt-6">
          Since 2015, Coastal Dine in Calicut has been serving mouthwatering seafood and coastal delicacies with a touch of tradition and warmth.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="#menu"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Menu
            </motion.a>
            <motion.a
              href="#reservations"
              className="btn-outline text-white border-white hover:bg-white hover:text-coastal-navy"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Table
            </motion.a>
          </div>
        </FadeIn>

        
      </div>
    </section>
  );
};

export default Hero;
