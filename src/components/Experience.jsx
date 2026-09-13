import React from 'react';
import { Briefcase, Calendar, Award, Sparkles, CheckCircle2, ChevronRight, Users, Code } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience() {
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
            
            {/* ITEM 1: ACM Student Member */}
            <div className="relative flex flex-col sm:flex-row items-start group">
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0c0d16] border-2 border-purple-400 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-transform">
                <Users className="w-4 h-4 text-purple-300" />
              </div>

              {/* Card Container - Left side for desktop */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-10 w-full">
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#131422] to-[#0c0d16] border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.2)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
                      <Calendar className="w-3 h-3" />
                      February 2026 – Present
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      Active Member
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                    ACM Student Member
                  </h3>
                  <div className="text-sm font-semibold text-purple-300 mb-3">
                    ACM — Association for Computing Machinery
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    ACM Student Member with a strong interest in Computer Science and emerging technologies. Actively engaging with the ACM community, technical learning opportunities, and professional networking.
                  </p>

                  {/* Key Interests tags */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Key Interests:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['Software Development', 'AI/ML', 'Full-Stack Development', 'Data Structures & Algorithms'].map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 2: Horizon 8 Hackathon — TANSAM */}
            <div className="relative flex flex-col sm:flex-row items-start group">
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0c0d16] border-2 border-cyan-400 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform">
                <Award className="w-4 h-4 text-cyan-300" />
              </div>

              {/* Empty placeholder for left side to offset to right */}
              <div className="hidden sm:block sm:w-1/2" />

              {/* Card Container - Right side for desktop */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pl-10 w-full">
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#131422] to-[#0c0d16] border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_15px_35px_-10px_rgba(6,182,212,0.2)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                      <Calendar className="w-3 h-3" />
                      24-Hour Hackathon
                    </span>
                    <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      2nd Place Winner
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                    Hackathon Participant
                  </h3>
                  <div className="text-sm font-semibold text-cyan-300 mb-1">
                    Horizon 8 Hackathon — TANSAM
                  </div>
                  <div className="text-xs text-slate-400 font-mono mb-4">
                    Host: Joy University
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-5">
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Participated in the 24-hour Horizon 8 Hackathon organized by TANSAM. Collaborated with a team to develop an IoT-based predictive maintenance solution for vehicle wire harness systems.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>The solution analyzed sensor data to identify potential electrical faults and predict failures before they occur.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Built a concept focused on reducing vehicle downtime through real-time monitoring and maintenance alerts.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Successfully presented the solution to a panel of judges, demonstrating technical implementation, teamwork and problem-solving skills.</span>
                    </p>
                  </div>

                  {/* Small tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.05]">
                    {['IoT', 'Predictive Maintenance', 'Sensor Data', 'Real-Time Monitoring', 'Teamwork'].map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
