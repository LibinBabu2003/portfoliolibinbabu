
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { BookOpen, MapPin, Calendar, Heart, GraduationCap } from 'lucide-react';

// Fix: Cast motion.div to any to bypass strict JSX property checks in this environment
const MotionDiv = motion.div as any;

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <MotionDiv
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading">
            Building the <span className="text-cyan-400">Future</span> with Intelligent Data.
          </h2>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>{resumeData.summary}</p>
            <p>
              I am highly motivated to contribute to AI-driven solutions that solve real-world problems. 
              My journey involves exploring the depths of Neural Networks, NLP, and Predictive Analytics.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-center gap-4">
              <div className="p-3 bg-cyan-400/10 text-cyan-400 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase">Location</p>
                <p className="text-white font-medium">{resumeData.location}</p>
              </div>
            </div>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-center gap-4">
              <div className="p-3 bg-purple-400/10 text-purple-400 rounded-lg">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase">Availability</p>
                <p className="text-white font-medium">{resumeData.additional.availability}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-cyan-400" />
              Education
            </h3>
            <div className="p-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-1">{resumeData.education.degree}</h4>
              <p className="text-cyan-400 mb-2">{resumeData.education.institution}</p>
              <p className="text-slate-500 text-sm mb-4">{resumeData.education.period}</p>
              <div className="flex flex-wrap gap-2">
                {resumeData.education.courses.map(course => (
                  <span key={course} className="px-3 py-1 bg-slate-800/50 text-slate-400 rounded-full text-xs border border-slate-700">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Heart className="text-pink-400" />
              Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {resumeData.additional.interests.map(interest => (
                <div key={interest} className="px-4 py-2 bg-pink-400/5 border border-pink-400/10 rounded-xl text-slate-300 hover:border-pink-400/30 transition-all cursor-default">
                  {interest}
                </div>
              ))}
            </div>
          </section>
          
          <section>
             <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="text-blue-400" />
              Languages
            </h3>
            <div className="flex gap-4">
              {resumeData.additional.languages.map(lang => (
                 <div key={lang} className="px-4 py-2 bg-blue-400/5 border border-blue-400/10 rounded-xl text-slate-300">
                    {lang}
                 </div>
              ))}
            </div>
          </section>
        </div>
      </MotionDiv>
    </div>
  );
};

export default About;
