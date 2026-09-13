import { ArrowRight, Download, Mail, ExternalLink, Sparkles, Terminal, Code2, ShieldCheck } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { personalInfo } from '../data/portfolioData';
import HeroTerminal from './HeroTerminal';

export default function Hero({ onOpenResume }) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[300px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Animated Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-purple-200">
                {personalInfo.statusBadge}
              </span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-2 mb-4">
              <span className="text-base sm:text-lg font-mono text-cyan-400 font-medium tracking-wide flex items-center gap-2">
                <span>👋</span>
                Hi, I'm Sunny Kumar
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Pre-Final Year{' '}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent glow-text-purple">
                  B.Tech CSE Student
                </span>{' '}
                & MERN Stack Developer
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-medium text-slate-300 mb-6 flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="text-purple-300 font-semibold">Backend Enthusiast</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-300 font-semibold">DSA Learner</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-300 font-semibold">Open to Internships</span>
            </p>

            {/* Professional Description */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mb-8">
              {personalInfo.heroDescription}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.12] hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] shadow-sm"
              >
                <Download className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/[0.08] w-full max-w-xl">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400">
                Connect:
              </span>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-purple-500/40 group-hover:bg-purple-600/10 transition-all">
                  <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-purple-400" />
                </div>
                <span className="hidden sm:inline">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                aria-label="Email Sunny Kumar"
              >
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-cyan-500/40 group-hover:bg-cyan-600/10 transition-all">
                  <Mail className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                </div>
                <span className="hidden sm:inline">{personalInfo.email}</span>
                <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

          </div>

          {/* Right Hero Column: Interactive Developer Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroTerminal />
          </div>

        </div>
      </div>
    </section>
  );
}
