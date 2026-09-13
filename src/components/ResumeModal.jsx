import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, Award, Code2, ShieldCheck, FileDown } from 'lucide-react';
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
              Sunny Kumar — Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Official PDF Download Button */}
            <a
              href={personalInfo.resumeUrl}
              download="Sunny_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs font-semibold text-white shadow-md shadow-purple-600/30 transition-all hover:scale-105"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>

            {/* Open In New Tab */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
              title="Open full PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Full PDF</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
              title="Print"
            >
              <Printer className="w-3.5 h-3.5 text-purple-400" />
              <span>Print</span>
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
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.phone}
              </a>
              <span>•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </a>
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
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
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
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white">{edu.institution}</h3>
                      {edu.scoreBadge && (
                        <span className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {edu.scoreBadge}
                        </span>
                      )}
                    </div>
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
                <span className="font-semibold text-white block mb-1">Programming Languages:</span>
                <span className="text-slate-400">C++, JavaScript, HTML, CSS</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Backend Development:</span>
                <span className="text-slate-400">Node.js, Express.js, RESTful APIs, EJS</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Frontend & Frameworks:</span>
                <span className="text-slate-400">React.js, Tailwind CSS, Bootstrap</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Databases & Tools:</span>
                <span className="text-slate-400">MongoDB, SQL Basic, Render, Railway, Git, GitHub, VS Code, Gemini AI</span>
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
                  <ul className="mt-1.5 space-y-0.5">
                    {proj.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="text-[11px] text-slate-400 list-disc list-inside">
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] font-mono text-slate-400 mt-1">
                    <span className="text-purple-300">Stack:</span> {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathon Achievement & Membership */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Achievements & Activities
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center justify-between font-bold text-amber-300">
                  <span>2nd Position — TANSON Horizon Hackathon (Joy University)</span>
                  <span className="text-[11px] font-mono text-amber-400">Award Winner</span>
                </div>
                <p className="text-slate-300 text-xs mt-1">
                  Developed an Augmented Reality (AR) based solution using Blender and IoT predictive maintenance for vehicle wire harnesses under strict time limits.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/20">
                <div className="flex items-center justify-between font-bold text-purple-300">
                  <span>ACM Sprint Technical Community — Member</span>
                  <span className="text-[11px] font-mono text-purple-400">Qualified Test</span>
                </div>
                <p className="text-slate-300 text-xs mt-1">
                  Active participant in coding activities, collaborative peer learning, and software architecture.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                <div className="font-bold text-cyan-300">
                  <span>DSA Practice & Problem Solving in C++</span>
                </div>
                <p className="text-slate-300 text-xs mt-1">
                  Regularly practicing Data Structures & Algorithms in C++ and solving problems on LeetCode and Codeforces.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#11121e] border-t border-white/[0.08] flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-slate-400">
            Joy University • CGPA 8.8
          </span>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Sunny_Kumar_Resume.pdf"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition-all shadow-md shadow-purple-600/20 flex items-center gap-1.5"
            >
              <FileDown className="w-3.5 h-3.5" />
              Download Resume (PDF)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
