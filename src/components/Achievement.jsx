import React from 'react';
import { Trophy, Award, Sparkles, Zap, Shield, Cpu, Activity, Star } from 'lucide-react';
import { featuredAchievement } from '../data/portfolioData';

export default function Achievement() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-purple-600/15 via-amber-500/10 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Honors & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-amber-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Achievement</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Recognized for technical excellence, real-time IoT architecture, and rapid prototyping under high-intensity competition.
          </p>
        </div>

        {/* Highlight Showcase Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#161726]/90 via-[#0e101d]/90 to-[#090a12]/95 border border-amber-500/30 shadow-[0_0_50px_-10px_rgba(245,158,11,0.15),0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            
            {/* Top Corner Ribbon */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0">
              <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20">
                <Star className="w-3.5 h-3.5 fill-black" />
                Featured Distinction
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 sm:pt-0">
              
              {/* Left Column: Animated Trophy & Rank Badge */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
                <div className="relative group">
                  {/* Glowing halo behind trophy */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                  
                  {/* Outer Frame */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-amber-500/20 via-purple-500/10 to-transparent border border-amber-500/40 p-1 flex items-center justify-center shadow-2xl">
                    <div className="w-full h-full rounded-[22px] bg-[#0c0d16]/90 flex flex-col items-center justify-center p-4">
                      <div className="relative mb-2">
                        <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400 animate-float-slow filter drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                        <Sparkles className="w-5 h-5 text-amber-200 absolute -top-1 -right-1 animate-pulse" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300/90 font-semibold">
                        Joy University
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Information & Details */}
              <div className="lg:col-span-8 flex flex-col items-start text-left">
                
                {/* Huge Award Text */}
                <div className="mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                    Award Placement
                  </span>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white flex items-center gap-3">
                    <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200 bg-clip-text text-transparent">
                      {featuredAchievement.award}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {featuredAchievement.event}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-purple-300 mb-4">
                  {featuredAchievement.organizer}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {featuredAchievement.description}
                </p>

                {/* Tag Pills */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                    Demonstrated Competencies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featuredAchievement.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-amber-500/10 border border-amber-500/25 text-amber-200 hover:bg-amber-500/20 transition-colors shadow-sm"
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
