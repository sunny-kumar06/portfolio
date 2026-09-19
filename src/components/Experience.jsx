import React from 'react';
import { Briefcase, Calendar, Award, Sparkles, CheckCircle2, ChevronRight, Users, Code } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Experience() {
  const { experienceTimeline } = usePortfolio();

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#080911]/80">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Professional association memberships, hackathon collaboration, and hands-on technical initiatives.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute top-6 bottom-6 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500/30 shadow-[0_0_12px_rgba(139,92,246,0.5)]" />

          <div className="space-y-12 sm:space-y-16">
            {experienceTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col sm:flex-row items-start group">
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0c0d16] border-2 border-purple-400 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-transform">
                    {idx === 0 ? <Users className="w-4 h-4 text-purple-300" /> : <Award className="w-4 h-4 text-cyan-300" />}
                  </div>

                  {/* Offset Layout */}
                  {isEven ? (
                    <>
                      <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-10 w-full">
                        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#131422] to-[#0c0d16] border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.2)]">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
                              <Calendar className="w-3 h-3" />
                              {item.period}
                            </span>
                            {item.badge && (
                              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                            {item.role || item.title}
                          </h3>
                          <div className="text-sm font-semibold text-purple-300 mb-3">
                            {item.title} — {item.organization}
                          </div>

                          {item.description && (
                            <p className="text-sm text-slate-300 leading-relaxed mb-5">
                              {item.description}
                            </p>
                          )}

                          {item.highlights && (
                            <div className="space-y-2 text-xs text-slate-300 mb-5">
                              {item.highlights.map((h, hIdx) => (
                                <p key={hIdx} className="flex items-start gap-2">
                                  <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </p>
                              ))}
                            </div>
                          )}

                          {item.keyInterests && (
                            <div>
                              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                                Key Focus:
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {item.keyInterests.map((tag, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="hidden sm:block sm:w-1/2" />
                    </>
                  ) : (
                    <>
                      <div className="hidden sm:block sm:w-1/2" />
                      <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pl-10 w-full">
                        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#131422] to-[#0c0d16] border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_15px_35px_-10px_rgba(6,182,212,0.2)]">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                              <Calendar className="w-3 h-3" />
                              {item.period}
                            </span>
                            {item.badge && (
                              <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                            {item.role || item.title}
                          </h3>
                          <div className="text-sm font-semibold text-cyan-300 mb-1">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-400 font-mono mb-4">
                            {item.organization}
                          </div>

                          {item.highlights && (
                            <div className="space-y-2 text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-5">
                              {item.highlights.map((h, hIdx) => (
                                <p key={hIdx} className="flex items-start gap-2">
                                  <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
