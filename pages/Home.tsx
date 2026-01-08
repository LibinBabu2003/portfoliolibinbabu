
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resumeData } from '../data/resumeData';

// Fix: Cast motion components to any to bypass strict JSX property checks in this environment
const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 overflow-hidden">
      <div className="z-10 text-center max-w-4xl">
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="px-3 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full">
            Available for Opportunities
          </span>
        </MotionDiv>

        <MotionH1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter"
        >
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">{resumeData.name}</span>
        </MotionH1>

        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-400 mb-10 font-light"
        >
          {resumeData.title} <span className="text-slate-600">|</span> Fresher specialized in Machine Learning & AI
        </MotionP>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link 
            to="/projects"
            className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all flex items-center gap-2 overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/contact"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all border border-slate-700 flex items-center gap-2"
          >
            Get In Touch
            <Mail size={20} />
          </Link>
        </MotionDiv>

        <MotionDiv
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-16 flex items-center justify-center gap-8 text-slate-500"
        >
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
        </MotionDiv>
      </div>

      {/* Decorative Blur Circles */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
};

export default Home;
