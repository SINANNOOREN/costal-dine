
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimationProviderProps {
  children: React.ReactNode;
}

export const FadeIn: React.FC<{
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}> = ({ children, duration = 0.5, delay = 0, className = '', direction = 'up' }) => {
  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case 'down':
        return { hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case 'left':
        return { hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case 'right':
        return { hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case 'none':
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default:
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={getDirectionVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn: React.FC<{
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}> = ({ children, duration = 0.5, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Stagger: React.FC<{
  children: React.ReactNode;
  className?: string;
  childrenDelay?: number;
  initialDelay?: number;
}> = ({ children, className = '', childrenDelay = 0.1, initialDelay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: childrenDelay,
            delayChildren: initialDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}> = ({ children, className = '', direction = 'up' }) => {
  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case 'down':
        return { hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case 'left':
        return { hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case 'right':
        return { hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case 'none':
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default:
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    }
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: getDirectionVariants().hidden,
        visible: {
          ...getDirectionVariants().visible,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default AnimationProvider;
