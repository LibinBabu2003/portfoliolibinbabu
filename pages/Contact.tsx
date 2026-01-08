
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Mail, Phone, Linkedin, Github, Send, Loader2, AlertCircle } from 'lucide-react';

// Fix: Cast motion.div to any to bypass strict JSX property checks in this environment
const MotionDiv = motion.div as any;

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Fallback if no ID is provided, just simulate
    if (!resumeData.contactFormId || resumeData.contactFormId === "your_formspree_id_here") {
      console.warn("No Formspree ID found. Simulating submission...");
      setTimeout(() => {
        setLoading(false);
        setSent(true);
      }, 1500);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${resumeData.contactFormId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSent(true);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <MotionDiv
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-8 font-heading">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Conversation.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12">
            Interested in collaboration or hiring? I'm currently looking for new opportunities in the AI and Data Science space. 
            Feel free to reach out!
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 group-hover:border-cyan-400/50 transition-colors">
                <Mail className="text-cyan-400" size={28} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email Me</p>
                <a href={`mailto:${resumeData.email}`} className="text-xl text-white hover:text-cyan-400 transition-colors">
                  {resumeData.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 group-hover:border-cyan-400/50 transition-colors">
                <Phone className="text-cyan-400" size={28} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Call Me</p>
                <a href={`tel:${resumeData.phone}`} className="text-xl text-white hover:text-cyan-400 transition-colors">
                  {resumeData.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 hover:bg-cyan-500/10 rounded-xl border border-slate-800 hover:border-cyan-400/50 transition-all text-slate-400 hover:text-cyan-400">
                <Linkedin size={24} />
              </a>
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 hover:bg-cyan-500/10 rounded-xl border border-slate-800 hover:border-cyan-400/50 transition-all text-slate-400 hover:text-cyan-400">
                <Github size={24} />
              </a>
            </div>
          </div>
        </MotionDiv>

        {/* Enhanced 3D Animation Container with Hover Effects */}
        <MotionDiv
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ perspective: 1200 }}
          className="relative group"
        >
          <MotionDiv
            animate={{ 
              y: [0, -12, 0],
              rotateX: [0, 1.5, 0],
              rotateY: [0, -1.5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            whileHover={{ 
              scale: 1.02, 
              rotateX: 0, 
              rotateY: 0,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="relative"
          >
            {/* Background Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-50 group-hover:blur-xl transition-all duration-500"></div>
            
            <div className="relative p-8 md:p-12 bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-6 text-cyan-400">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
                  <button 
                    onClick={() => setSent(false)} 
                    className="mt-8 text-cyan-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-400 text-sm">
                      <AlertCircle size={18} />
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                    <input 
                      required
                      name="subject"
                      type="text" 
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                    <textarea 
                      required
                      name="message"
                      rows={4}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                      placeholder="Tell me more about your project..."
                    ></textarea>
                  </div>
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={24} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </div>
  );
};

export default Contact;
