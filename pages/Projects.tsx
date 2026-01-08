
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';

// Fix: Cast motion components to any to bypass strict JSX property checks in this environment
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <MotionH2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 font-heading"
        >
          Selected <span className="text-purple-400">Projects</span>
        </MotionH2>
        <p className="text-slate-400">Hands-on implementations of Machine Learning and Data Analysis pipelines.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((project, idx) => (
          <MotionDiv
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all group"
          >
            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-950 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('https://picsum.photos/400/300')] opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
               <h3 className="text-xl font-bold text-center px-6 z-10 group-hover:text-purple-400 transition-colors">
                  {project.title}
               </h3>
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3 mb-8">
                {project.achievements.map((point, i) => (
                  <div key={i} className="flex gap-3 text-xs text-slate-300">
                    <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-slate-800 text-[10px] uppercase tracking-wider font-bold rounded-md text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                      <Github size={18} /> Code
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default Projects;
