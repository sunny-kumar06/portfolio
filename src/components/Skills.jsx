import React, { useState } from 'react';
import {
  Code2,
  Palette,
  FileCode2,
  LayoutGrid,
  Wind,
  Cpu,
  Network,
  Globe,
  Database,
  Table2,
  Boxes,
  CloudUpload,
  Cloud,
  Workflow,
  Sparkles,
  CheckCircle,
  Layers
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const iconComponents = {
  Code2,
  Palette,
  FileCode2,
  LayoutGrid,
  Wind,
  Cpu,
  Network,
  Globe,
  Database,
  Table2,
  Boxes,
  CloudUpload,
  Cloud,
  Workflow,
  Sparkles,
  Layers
};

export default function Skills() {
  const { skillCategories } = usePortfolio();
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Modern technologies, frameworks, and engineering fundamentals I utilize to build responsive, robust web solutions.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
              }`}
            >
              All Categories
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Groups */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              
              {/* Category Title bar */}
              <div className="flex items-center gap-3 border-b border-white/[0.06] pb-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  — {category.description}
                </span>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, sIdx) => {
                  const Icon = iconComponents[skill.icon] || Code2;
                  return (
                    <div
                      key={sIdx}
                      className="group relative p-4 rounded-xl bg-[#0e101b]/80 border border-white/[0.08] hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_25px_-10px_rgba(139,92,246,0.25)] flex flex-col justify-between"
                    >
                      {/* Ambient hover glow */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-purple-500/40 flex items-center justify-center mb-3 transition-colors group-hover:bg-purple-600/10">
                          <Icon className="w-5 h-5 text-slate-300 group-hover:text-purple-300 transition-colors" />
                        </div>
                        
                        <h4 className="text-sm font-bold text-white group-hover:text-purple-200 transition-colors">
                          {skill.name}
                        </h4>
                        
                        <span className="mt-1 inline-block text-[10px] font-mono text-cyan-400 tracking-wider">
                          {skill.tag}
                        </span>
                      </div>

                      <div className="relative z-10 mt-4 pt-2.5 border-t border-white/[0.04] flex items-center justify-between text-[10.5px] text-slate-400">
                        <span className="flex items-center gap-1 text-slate-400 group-hover:text-emerald-400 transition-colors">
                          <CheckCircle className="w-3 h-3 text-emerald-400/80" />
                          Proficient
                        </span>
                        <span className="font-mono text-[9px] text-slate-400">Active</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
