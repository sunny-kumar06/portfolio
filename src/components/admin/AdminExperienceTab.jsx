import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Award, GraduationCap, Save, Check, Sparkles } from 'lucide-react';

export default function AdminExperienceTab() {
  const {
    featuredAchievement,
    updateFeaturedAchievement,
    educationTimeline,
    updateEducationTimeline,
    certifications,
    updateCertifications
  } = usePortfolio();

  const [achievementForm, setAchievementForm] = useState({ ...featuredAchievement });
  const [eduForm, setEduForm] = useState([...educationTimeline]);
  const [saved, setSaved] = useState(false);

  const handleSaveAll = (e) => {
    e.preventDefault();
    updateFeaturedAchievement(achievementForm);
    updateEducationTimeline(eduForm);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <form onSubmit={handleSaveAll} className="space-y-6 text-slate-200 text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            Hackathons, Education & Achievements
          </h3>
          <p className="text-xs text-slate-400">
            Control award highlights, CGPA, university milestones, and certifications.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md hover:scale-105 transition-all"
        >
          {saved ? <Check className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
          <span>{saved ? 'Saved!' : 'Save All Changes'}</span>
        </button>
      </div>

      {/* Featured Hackathon Achievement */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
        <h4 className="font-bold text-amber-300 font-mono text-sm">🏆 Featured Hackathon Award</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-slate-400 font-mono mb-1">Award Placement</label>
            <input
              type="text"
              value={achievementForm.award || ''}
              onChange={e => setAchievementForm({ ...achievementForm, award: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white"
            />
          </div>

          <div>
            <label className="block text-slate-400 font-mono mb-1">Event Name</label>
            <input
              type="text"
              value={achievementForm.event || ''}
              onChange={e => setAchievementForm({ ...achievementForm, event: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-slate-400 font-mono mb-1">Award Description</label>
            <textarea
              rows={2}
              value={achievementForm.description || ''}
              onChange={e => setAchievementForm({ ...achievementForm, description: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white"
            />
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
        <h4 className="font-bold text-cyan-300 font-mono text-sm">🎓 Education Milestones</h4>

        {eduForm.map((edu, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div>
                <label className="block text-slate-400 text-[10px] font-mono">Institution</label>
                <input
                  type="text"
                  value={edu.institution || ''}
                  onChange={e => {
                    const updated = [...eduForm];
                    updated[idx].institution = e.target.value;
                    setEduForm(updated);
                  }}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-[10px] font-mono">Degree / Course</label>
                <input
                  type="text"
                  value={edu.degree || ''}
                  onChange={e => {
                    const updated = [...eduForm];
                    updated[idx].degree = e.target.value;
                    setEduForm(updated);
                  }}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-[10px] font-mono">CGPA / Score Badge</label>
                <input
                  type="text"
                  value={edu.scoreBadge || ''}
                  onChange={e => {
                    const updated = [...eduForm];
                    updated[idx].scoreBadge = e.target.value;
                    setEduForm(updated);
                  }}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
}
