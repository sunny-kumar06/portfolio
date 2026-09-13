import React from 'react';
import { X, Printer, Download, Mail, MapPin, ExternalLink, GraduationCap, Briefcase, Award, Code2, ShieldCheck } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { personalInfo, educationTimeline, experienceTimeline, projects, certifications, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0d0e17] border border-purple-500/30 shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#131422] border-b border-white/[0.08] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-white font-mono uppercase tracking-wider">
              Sunny Kumar — Resume Overview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 print:bg-white print:text-black">
          
          {/* Header Resume Banner */}
          <div className="border-b border-white/[0.1] pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {personalInfo.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-purple-400 mt-1">
              {personalInfo.role}
            </p>
            <p className="text-xs text-slate-400 font-mono mt-1">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-purple-400" />
                {personalInfo.linkedinDisplay}
              </a>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Objective Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.heroDescription}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              Education
            </h2>
            <div className="space-y-3">
              {educationTimeline.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <h3 className="font-bold text-white">{edu.institution}</h3>
                    <p className="text-slate-400">{edu.degree}</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">{edu.focus}</p>
                  </div>
                  <div className="text-right font-mono text-[11px] text-cyan-400 shrink-0">
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Frontend:</span>
                <span className="text-slate-400">HTML, CSS, JavaScript, Bootstrap, Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Backend:</span>
                <span className="text-slate-400">Node.js, Express.js, REST APIs</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Databases:</span>
                <span className="text-slate-400">MongoDB, MySQL</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Core & Tools:</span>
                <span className="text-slate-400">MERN Stack, Application Deployment, Render, Data Structures & Algorithms, AI/ML Exploration</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              Key Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm border-l-2 border-purple-500/40 pl-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white">{proj.title}</h3>
                    <span className="font-mono text-[10px] text-cyan-400 px-2 py-0.5 rounded bg-white/[0.04]">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-slate-300 mt-1 text-xs">{proj.description}</p>
                  <p className="text-[11px] font-mono text-slate-400 mt-1">
                    <span className="text-slate-400">Tech:</span> {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathon Achievement & Membership */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Experience & Achievements
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center justify-between font-bold text-amber-300">
                  <span>2nd PLACE — Horizon 8 Hackathon (TANSAM @ Joy University)</span>
                  <span className="text-[11px] font-mono text-amber-400">24-Hour Hackathon</span>
                </div>
                <p className="text-slate-300 text-xs mt-1">
                  Collaborated on an IoT-based predictive maintenance solution analyzing sensor data to prevent vehicle wire harness failures.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/20">
                <div className="flex items-center justify-between font-bold text-purple-300">
                  <span>ACM Student Member — Association for Computing Machinery</span>
                  <span className="text-[11px] font-mono text-purple-400">Feb 2026 – Present</span>
                </div>
                <p className="text-slate-300 text-xs mt-1">
                  Active engagement with ACM community, software development, DSA, and emerging AI/ML technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Certification
            </h2>
            <p className="text-xs text-slate-300">
              <span className="font-bold text-white">TCS iON Career Edge - Young Professional</span> — Tata Consultancy Services (TCS iON)
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#11121e] border-t border-white/[0.08] flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-slate-400">
            Status: Open to Internships
          </span>
          <a
            href={`mailto:${personalInfo.email}?subject=Internship%20Opportunity%20-%20Sunny%20Kumar`}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition-all shadow-md shadow-purple-600/20"
          >
            Contact for Internship
          </a>
        </div>

      </div>
    </div>
  );
}
