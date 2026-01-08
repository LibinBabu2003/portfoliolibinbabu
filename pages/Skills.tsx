
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Code2, BrainCircuit, BarChart3, Database, Wrench, Loader2 } from 'lucide-react';
import SkillSphere from '../components/SkillSphere';

// Fix: Cast motion components to any to bypass strict JSX property checks in this environment
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;

const SphereLoader = () => (
  <div className="w-full h-[400px] md:h-[600px] flex flex-col items-center justify-center bg-slate-900/20 rounded-3xl border border-slate-800/50">
    <Loader2 className="text-cyan-400 animate-spin mb-4" size={32} />
    <p className="text-slate-500 text-xs uppercase tracking-widest">Loading 3D Workspace</p>
  </div>
);

const Skills: React.FC = () => {
  const categories = Array.from(new Set(resumeData.skills.map(s => s.category)));

  const getIcon = (cat: string) => {
    switch(cat) {
      case 'Programming': return <Code2 size={24} />;
      case 'AI Domains': return <BrainCircuit size={24} />;
      case 'Machine Learning': return <BrainCircuit size={24} />;
      case 'Data Analysis': return <BarChart3 size={24} />;
      case 'Databases': return <Database size={24} />;
      default: return <Wrench size={24} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-8">
        <MotionH2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 font-heading"
        >
          My Technical <span className="text-cyan-400">Universe</span>
        </MotionH2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A visualization of my core competencies. Use the interactive 3D sphere to explore my tech stack or scroll for a detailed breakdown.
        </p>
      </div>

      {/* 3D Interactive Skill Sphere with localized Suspense */}
      <div className="mb-20 relative">
        <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
        <Suspense fallback={<SphereLoader />}>
          <SkillSphere />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, idx) => (
          <MotionDiv
            key={category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-cyan-400/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-400/10 text-cyan-400 rounded-2xl group-hover:scale-110 transition-transform">
                {getIcon(category)}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{category}</h3>
            </div>

            <div className="space-y-6">
              {resumeData.skills.filter(s => s.category === category).map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-cyan-400/60 text-xs font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
                    <MotionDiv
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>

      <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800 text-center">
        <h4 className="text-xl font-bold mb-6 text-white">Foundational Knowledge</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {['Probability & Statistics', 'Linear Algebra', 'DBMS', 'Object Oriented Programming', 'Data Structures', 'Algorithms'].map(f => (
             <span key={f} className="px-4 py-2 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-slate-400 text-sm border border-slate-700/50 transition-colors">
               {f}
             </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
