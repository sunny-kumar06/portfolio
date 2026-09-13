import React from 'react';
import { Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/[0.08] pt-14 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          {/* Left Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#0c0d16] rounded-lg flex items-center justify-center">
                  <span className="font-mono font-bold text-xs bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                    SK
                  </span>
                </div>
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                Sunny Kumar
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-lg leading-relaxed">
              Pre-Final Year B.Tech CSE | MERN Stack Developer | Backend Enthusiast | DSA Learner
            </p>
          </div>

          {/* Right Action Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-500/10 border border-white/[0.08] hover:border-purple-500/30 text-slate-400 hover:text-purple-300 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/[0.08] hover:border-cyan-500/30 text-slate-400 hover:text-cyan-300 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-all ml-2"
              title="Back to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} Sunny Kumar. All rights reserved.
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            Crafted with modern React, Vite & Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  );
}
