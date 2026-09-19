import React from 'react';
import { GraduationCap, School, BookOpen, Calendar, MapPin, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const iconMap = {
  GraduationCap,
  School,
  BookOpen
};

export default function Education() {
  const { educationTimeline } = usePortfolio();

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#090a13]/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Formal education fostering deep analytical, problem-solving, and computer science fundamentals.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationTimeline.map((item, index) => {
            const Icon = iconMap[item.icon] || GraduationCap;
            const isLatest = index === 0;

            return (
              <div
                key={index}
                className={`group relative p-6 sm:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                  isLatest
                    ? 'bg-gradient-to-br from-[#151726]/90 to-[#0e0f1a]/95 border-purple-500/30 shadow-[0_10px_30px_-10px_rgba(139,92,246,0.2)] hover:border-purple-400/50'
                    : 'bg-[#10111d]/70 border-white/[0.08] hover:border-white/[0.15]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Left Column: School & Degree */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl border shrink-0 ${
                        isLatest
                          ? 'bg-purple-600/20 border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                          : 'bg-white/[0.04] border-white/[0.08] text-slate-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {item.institution}
                        </h3>
                        {item.scoreBadge && (
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {item.scoreBadge}
                          </span>
                        )}
                      </div>

                      <p className="text-sm font-semibold text-cyan-300">
                        {item.degree}
                      </p>

                      <p className="text-xs text-slate-400 mt-2 font-mono">
                        {item.focus}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Duration & Status Badge */}
                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{item.period}</span>
                    </div>

                    <span className="text-[11px] font-mono text-slate-400 sm:text-right">
                      {item.status}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
