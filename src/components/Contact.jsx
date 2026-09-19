import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { usePortfolio } from '../context/PortfolioContext';

export default function Contact() {
  const { personalInfo } = usePortfolio();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-r from-purple-600/15 via-indigo-600/15 to-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Final CTA Container */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#131525]/90 via-[#0d0f1b]/95 to-[#080911] border border-purple-500/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_-5px_rgba(139,92,246,0.2)] backdrop-blur-2xl text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{personalInfo.statusBadge || 'Open to Web Development & SDE Internships'}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            I'm currently looking for Web Development and Software Development internship opportunities where I can learn, contribute and grow.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4 text-purple-200" />
              <span>Email Me</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-purple-400" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/[0.08] text-left">
            
            {/* Email card with copy trigger */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs font-mono font-medium text-white hover:text-purple-300 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone card */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Direct Contact
                </span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-xs font-mono font-semibold text-white hover:text-emerald-300 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Location
                </span>
                <span className="text-xs font-semibold text-white">
                  {personalInfo.location}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
