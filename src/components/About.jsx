import React from 'react';
import {
  GraduationCap,
  Layers,
  Server,
  Binary,
  Sparkles,
  Briefcase,
  CheckCircle2,
  Code,
  MapPin,
  Calendar
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const iconMap = {
  GraduationCap,
  Layers,
  Server,
  Binary,
  Sparkles,
  Briefcase
};

export default function About() {
  const { personalInfo, aboutHighlights } = usePortfolio();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090a12]/60">
      {/* Decorative Blur Spots */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Dedicated B.Tech Computer Science student building scalable web systems and modern architectures.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Text Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl shadow-xl">
              <div className="space-y-4 text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                {(personalInfo.aboutParagraphs || []).map((para, idx) => (
                  <p key={idx} className="relative pl-4 border-l-2 border-purple-500/40">
                    {para}
                  </p>
                ))}
              </div>

              {/* Quick Info Badges */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">University Standing</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Joy University (CGPA: {personalInfo.cgpa || '8.8'})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.location || 'Chennai, Tamil Nadu, India'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Cards Column */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutHighlights.map((item, index) => {
                const Icon = iconMap[item.iconName] || Code;
                return (
                  <div
                    key={index}
                    className="group relative p-5 rounded-2xl bg-gradient-to-br from-[#12131f]/80 to-[#0c0d16]/90 border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.2)]"
                  >
                    {/* Hover subtle glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.accent} border ${item.border} text-white shadow-sm`}>
                            <Icon className="w-5 h-5 text-purple-300" />
                          </div>
                          <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 px-2 py-0.5 rounded-md bg-white/[0.04]">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Core Competency</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
