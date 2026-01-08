
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Briefcase, Award, GraduationCap, ChevronRight } from 'lucide-react';

// Fix: Cast motion.div to any to bypass strict JSX property checks in this environment
const MotionDiv = motion.div as any;

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-heading">Experience & <span className="text-cyan-400">Learning</span></h2>
        <p className="text-slate-400">A journey through industry internship and academic certifications.</p>
      </div>

      <div className="space-y-16">
        {/* Work Experience */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-cyan-400/10 text-cyan-400 rounded-xl">
              <Briefcase size={24} />
            </div>
            <h3 className="text-2xl font-bold">Work Experience</h3>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-6 pl-8 space-y-12">
            {resumeData.experience.map((exp, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-cyan-400">{exp.company}</p>
                  </div>
                  <span className="text-slate-500 text-sm font-medium bg-slate-900 px-3 py-1 rounded-full border border-slate-800 mt-1">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex gap-2">
                      <ChevronRight size={14} className="text-cyan-400 shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-purple-400/10 text-purple-400 rounded-xl">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.certifications.map((cert, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl hover:border-purple-400/30 transition-all"
              >
                <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                <p className="text-purple-400 text-sm mb-4 font-medium">{cert.issuer}</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {cert.description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
