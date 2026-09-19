import React from 'react';
import {
  ExternalLink,
  Code2,
  CheckCircle2,
  Hotel,
  Database,
  Tv,
  Music,
  Camera,
  Layers,
  Server,
  Sparkles,
  Lock
} from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectCard({ project }) {
  const renderVisualPreview = () => {
    switch (project.id) {
      case 'ai-job-prep':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-purple-900/50 via-pink-950/60 to-[#0c0d16] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Gemini AI Engine</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Full Stack MERN
              </span>
            </div>

            <div className="z-10 p-3 rounded-lg bg-[#111320]/80 border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-medium text-white mb-1">
                <span>AI Interview & Resume Scoring</span>
                <span className="text-purple-300 font-mono">Puppeteer PDF</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                <span>● Skill Gap Analysis</span>
                <span>● JWT Auth</span>
              </div>
            </div>

            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        );

      case 'makememory':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-purple-900/40 via-indigo-950/60 to-[#0c0d16] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono">
                <Hotel className="w-3.5 h-3.5 text-purple-400" />
                <span>Hotel Engine</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Render Hosted
              </span>
            </div>

            <div className="z-10 p-3 rounded-lg bg-[#111320]/80 border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-medium text-white mb-1">
                <span>Grand Luxury Suite (100+ Listings)</span>
                <span className="text-cyan-400 font-mono">CRUD Engine</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                <span>● MongoDB Docs</span>
                <span>● Express REST</span>
              </div>
            </div>

            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        );

      case 'auth-system':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-blue-900/40 via-cyan-950/60 to-[#0c0d16] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <Server className="w-3.5 h-3.5 text-cyan-400" />
                <span>Authentication System</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                JWT + Nodemailer
              </span>
            </div>

            <div className="z-10 p-2.5 rounded-lg bg-[#111320]/80 border border-white/[0.08] backdrop-blur-md font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-400 border-b border-white/[0.06] pb-1 mb-1.5">
                <span>OTP VERIFY</span>
                <span>BCRYPT SALT</span>
                <span>JWT REFRESH</span>
              </div>
              <div className="flex items-center justify-between text-slate-300 text-[10.5px]">
                <span className="text-purple-300">Protected Routes</span>
                <span className="text-emerald-400">200 OK</span>
              </div>
            </div>

            <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        );

      default:
        return (
          <div className="h-44 w-full bg-[#111320] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Web Application</span>
              </div>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                {project.category}
              </span>
            </div>

            <div className="z-10 p-3 rounded-lg bg-[#111320]/80 border border-white/[0.08] backdrop-blur-md">
              <span className="text-xs font-medium text-white block truncate">{project.title}</span>
              <span className="text-[10px] font-mono text-cyan-400 block mt-0.5 truncate">{project.tagline}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#131522]/90 to-[#0b0c14]/95 border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.25)] flex flex-col justify-between">
      
      {/* Top Banner Visual */}
      <div className="border-b border-white/[0.06]">
        {renderVisualPreview()}
      </div>

      {/* Main Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/[0.04] text-purple-300 border border-purple-500/20">
              {project.category}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Featured
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-xs text-cyan-300 font-mono mt-1 mb-3">
            {project.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Key Features Bullet List */}
          {(project.features || []).length > 0 && (
            <div className="mb-5 space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Key Highlights:
              </span>
              <ul className="space-y-1">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Technologies and Action Buttons */}
        <div>
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06] mb-5">
            {(project.technologies || []).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-slate-300 group-hover:border-purple-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links Row */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>{project.statusNote || 'Render Active'}</span>
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors border border-white/[0.08]"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              ) : null}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition-all shadow-md"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-400 bg-white/[0.03] border border-white/[0.06] cursor-default">
                  <Lock className="w-3 h-3 text-slate-400" />
                  Source Soon
                </span>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
