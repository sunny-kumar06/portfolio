import React, { useState } from 'react';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

const filterCategories = [
  { id: 'ALL', label: 'All Projects' },
  { id: 'FULL STACK', label: 'Full Stack' },
  { id: 'BACKEND', label: 'Backend' },
  { id: 'FRONTEND', label: 'Frontend' }
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const filteredProjects =
    selectedFilter === 'ALL'
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#070709]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Things I've <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">Built</span>
          </h2>

          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Real-world projects where I explored frontend development, backend systems, APIs and database integration.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterCategories.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-purple-400/40'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 text-[10px] font-mono opacity-75">
                    ({tab.id === 'ALL' ? projects.length : projects.filter(p => p.category === tab.id).length})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="transition-all duration-500 animate-fadeIn"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
