import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certification() {
  const cert = certifications[0];

  return (
    <section className="py-20 relative overflow-hidden bg-[#070709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">Certification</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Continuous industry readiness and corporate professional development credentials.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#141524] via-[#0e101c] to-[#0a0b14] border border-purple-500/30 shadow-[0_15px_40px_-15px_rgba(139,92,246,0.25)] backdrop-blur-xl">
            
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {cert.badge}
              </span>
              <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                {cert.type}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/30 to-cyan-600/20 border border-purple-400/40 p-1 flex items-center justify-center shrink-0 shadow-lg">
                <Award className="w-8 h-8 text-purple-300" />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mt-1 font-mono">
                  {cert.issuer}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {cert.description}
            </p>

            {/* Core Competencies Learned */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                Key Professional Competencies:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cert.skillsCovered.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
