
import React from 'react';
import Navbar from './Navbar';
import CanvasBackground from './CanvasBackground';
import AIChat from './AIChat';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Fix: Cast motion.div to any to bypass strict JSX property checks in this environment
const MotionDiv = motion.div as any;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen relative flex flex-col bg-slate-950">
      <CanvasBackground />
      <Navbar />
      <AIChat />
      <main className="flex-grow pt-16 relative z-10">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {children}
          </MotionDiv>
        </AnimatePresence>
      </main>
      <footer className="relative z-10 py-8 border-t border-slate-800/50 bg-slate-950/20 backdrop-blur-sm mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Libin Babu. AI/ML Engineering Portfolio.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
