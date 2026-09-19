import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Save, Check, User, Mail, Phone, MapPin, GraduationCap, Sparkles, Award } from 'lucide-react';

export default function AdminProfileTab() {
  const { personalInfo, updatePersonalInfo } = usePortfolio();
  const [formData, setFormData] = useState({ ...personalInfo });
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleParagraphChange = (idx, text) => {
    const updated = [...(formData.aboutParagraphs || [])];
    updated[idx] = text;
    setFormData(prev => ({ ...prev, aboutParagraphs: updated }));
  };

  const handleAddParagraph = () => {
    setFormData(prev => ({
      ...prev,
      aboutParagraphs: [...(prev.aboutParagraphs || []), 'New bio paragraph...']
    }));
  };

  const handleRemoveParagraph = (idx) => {
    setFormData(prev => ({
      ...prev,
      aboutParagraphs: (prev.aboutParagraphs || []).filter((_, i) => i !== idx)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePersonalInfo(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-slate-200">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <User className="w-5 h-5 text-purple-400" />
            Personal Info & Profile Bio
          </h3>
          <p className="text-xs text-slate-400">
            Control headlines, descriptions, contact info, CGPA, and bio text.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-600/30 hover:scale-105 transition-all"
        >
          {saved ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Saved!</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div>
          <label className="block text-slate-300 font-mono mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-mono mb-1">Status Badge Text</label>
          <input
            type="text"
            name="statusBadge"
            value={formData.statusBadge || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-slate-300 font-mono mb-1">Main Professional Role / Title</label>
          <input
            type="text"
            name="role"
            value={formData.role || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-slate-300 font-mono mb-1">Sub-tagline</label>
          <input
            type="text"
            name="tagline"
            value={formData.tagline || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-mono mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-mono mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-mono mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-mono mb-1">Joy University CGPA</label>
          <input
            type="text"
            name="cgpa"
            value={formData.cgpa || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-slate-300 font-mono mb-1">LinkedIn Profile URL</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-slate-300 font-mono mb-1">Hero Description</label>
          <textarea
            rows={3}
            name="heroDescription"
            value={formData.heroDescription || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* About Me Paragraphs Editor */}
      <div className="pt-4 border-t border-white/[0.08]">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-mono text-purple-300 uppercase tracking-wider font-bold">
            About Me Narrative Paragraphs
          </label>
          <button
            type="button"
            onClick={handleAddParagraph}
            className="px-3 py-1 rounded-lg text-xs bg-white/[0.04] hover:bg-white/[0.08] text-cyan-300 border border-white/[0.08]"
          >
            + Add Paragraph
          </button>
        </div>

        <div className="space-y-3">
          {(formData.aboutParagraphs || []).map((p, pIdx) => (
            <div key={pIdx} className="flex gap-2 items-start">
              <span className="text-xs font-mono text-slate-500 pt-2">{pIdx + 1}.</span>
              <textarea
                rows={2}
                value={p}
                onChange={(e) => handleParagraphChange(pIdx, e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-200 focus:outline-none focus:border-purple-500"
              />
              <button
                type="button"
                onClick={() => handleRemoveParagraph(pIdx)}
                className="px-2 py-1.5 text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}
