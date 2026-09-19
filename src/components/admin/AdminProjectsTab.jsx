import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { FolderGit2, Plus, Edit2, Trash2, Check, ExternalLink, Sparkles, Star } from 'lucide-react';

export default function AdminProjectsTab() {
  const { projects, addProject, updateProject, deleteProject } = usePortfolio();
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const emptyProjectForm = {
    title: '',
    tagline: '',
    category: 'FULL STACK',
    featured: false,
    description: '',
    featuresStr: '',
    techStr: '',
    statusNote: 'In Active Development',
    liveUrl: '',
    githubUrl: ''
  };

  const [formData, setFormData] = useState(emptyProjectForm);

  const startEdit = (proj) => {
    setEditingId(proj.id);
    setIsAdding(false);
    setFormData({
      ...proj,
      featuresStr: (proj.features || []).join('\n'),
      techStr: (proj.technologies || []).join(', ')
    });
  };

  const startAdd = () => {
    setEditingId(null);
    setIsAdding(true);
    setFormData(emptyProjectForm);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const processedFeatures = formData.featuresStr
      ? formData.featuresStr.split('\n').map(s => s.trim()).filter(Boolean)
      : [];
    const processedTech = formData.techStr
      ? formData.techStr.split(',').map(s => s.trim()).filter(Boolean)
      : [];

    const projectPayload = {
      title: formData.title,
      tagline: formData.tagline,
      category: formData.category,
      featured: Boolean(formData.featured),
      description: formData.description,
      features: processedFeatures,
      technologies: processedTech,
      statusNote: formData.statusNote || 'Production Ready',
      liveUrl: formData.liveUrl || '',
      githubUrl: formData.githubUrl || ''
    };

    if (isAdding) {
      addProject(projectPayload);
      setIsAdding(false);
    } else if (editingId) {
      updateProject(editingId, projectPayload);
      setEditingId(null);
    }
  };

  return (
    <div className="space-y-6 text-slate-200">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-purple-400" />
            Project Manager (CRUD)
          </h3>
          <p className="text-xs text-slate-400">
            Add new projects, update demo links, modify feature lists, or remove projects.
          </p>
        </div>

        {!isAdding && !editingId && (
          <button
            type="button"
            onClick={startAdd}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:scale-105 transition-all shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Project</span>
          </button>
        )}
      </div>

      {/* Project Form (Add or Edit) */}
      {(isAdding || editingId) && (
        <form onSubmit={handleSave} className="p-5 rounded-2xl bg-white/[0.03] border border-purple-500/30 space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <span className="font-bold font-mono text-purple-300">
              {isAdding ? '➕ Create New Project' : '✏️ Edit Project Specs'}
            </span>
            <button
              type="button"
              onClick={() => { setIsAdding(false); setEditingId(null); }}
              className="text-slate-400 hover:text-white"
            >
              Cancel
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-mono mb-1">Project Name</label>
              <input
                required
                type="text"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-mono mb-1">Category</label>
              <select
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#121320] border border-white/[0.08] text-white"
              >
                <option value="FULL STACK">FULL STACK</option>
                <option value="BACKEND">BACKEND</option>
                <option value="FRONTEND">FRONTEND</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-slate-300 font-mono mb-1">Tagline / Brief Subtitle</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={e => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-slate-300 font-mono mb-1">Description</label>
              <textarea
                rows={2}
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-mono mb-1">Features (One per line)</label>
              <textarea
                rows={3}
                value={formData.featuresStr}
                onChange={e => setFormData({ ...formData, featuresStr: e.target.value })}
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-mono mb-1">Technologies (Comma separated)</label>
              <textarea
                rows={3}
                value={formData.techStr}
                onChange={e => setFormData({ ...formData, techStr: e.target.value })}
                placeholder="React.js, Node.js, Express.js, MongoDB"
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-mono mb-1">Live Demo URL (Optional)</label>
              <input
                type="text"
                value={formData.liveUrl}
                onChange={e => setFormData({ ...formData, liveUrl: e.target.value })}
                placeholder="https://..."
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-mono mb-1">GitHub Repo URL (Optional)</label>
              <input
                type="text"
                value={formData.githubUrl}
                onChange={e => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="https://github.com/..."
                className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white"
              />
            </div>

            <div className="md:col-span-2 flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                  className="rounded bg-white/[0.04] border-white/[0.1] text-purple-600 focus:ring-purple-500"
                />
                <span>Highlight as Featured Project</span>
              </label>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-600/30 hover:scale-105 transition-all"
              >
                Save Project
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Projects Listing */}
      <div className="space-y-3">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
          >
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-white text-sm">{proj.title}</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-purple-300">
                  {proj.category}
                </span>
                {proj.featured && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    ⭐ Featured
                  </span>
                )}
              </div>
              <p className="text-slate-400 text-xs mt-1">{proj.tagline || proj.description}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => startEdit(proj)}
                className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20"
                title="Edit Project"
              >
                <Edit2 className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => deleteProject(proj.id)}
                className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/20"
                title="Delete Project"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
