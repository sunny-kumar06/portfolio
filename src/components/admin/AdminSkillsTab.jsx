import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Cpu, Plus, Trash2, Check, Code2 } from 'lucide-react';

export default function AdminSkillsTab() {
  const { skillCategories, updateSkillCategories } = usePortfolio();

  const [selectedCatId, setSelectedCatId] = useState(skillCategories[0]?.id || 'programming');
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillTag, setNewSkillTag] = useState('');

  const handleAddSkill = (catId) => {
    if (!newSkillName.trim()) return;

    const updated = skillCategories.map(cat => {
      if (cat.id === catId) {
        return {
          ...cat,
          skills: [
            ...cat.skills,
            { name: newSkillName.trim(), icon: 'Code2', tag: newSkillTag.trim() || 'Core' }
          ]
        };
      }
      return cat;
    });

    updateSkillCategories(updated);
    setNewSkillName('');
    setNewSkillTag('');
  };

  const handleDeleteSkill = (catId, skillIndex) => {
    const updated = skillCategories.map(cat => {
      if (cat.id === catId) {
        return {
          ...cat,
          skills: cat.skills.filter((_, idx) => idx !== skillIndex)
        };
      }
      return cat;
    });

    updateSkillCategories(updated);
  };

  return (
    <div className="space-y-6 text-slate-200">
      <div className="border-b border-white/[0.08] pb-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-purple-400" />
          Technical Skills & Categories
        </h3>
        <p className="text-xs text-slate-400">
          Add or remove skills across your stack categories.
        </p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <h4 className="font-bold text-sm text-purple-300">{category.title}</h4>
              <span className="text-[10px] font-mono text-slate-400">{category.skills.length} Skills</span>
            </div>

            {/* List of skills in this category */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-slate-200"
                >
                  <span className="font-semibold">{skill.name}</span>
                  {skill.tag && <span className="text-[10px] text-cyan-400 font-mono">({skill.tag})</span>}
                  <button
                    type="button"
                    onClick={() => handleDeleteSkill(category.id, idx)}
                    className="ml-1 text-slate-500 hover:text-red-400"
                    title="Remove skill"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Add skill row */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <input
                type="text"
                placeholder="Skill name (e.g. Next.js)"
                value={selectedCatId === category.id ? newSkillName : ''}
                onChange={(e) => {
                  setSelectedCatId(category.id);
                  setNewSkillName(e.target.value);
                }}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                placeholder="Tag (e.g. Framework)"
                value={selectedCatId === category.id ? newSkillTag : ''}
                onChange={(e) => {
                  setSelectedCatId(category.id);
                  setNewSkillTag(e.target.value);
                }}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-purple-500"
              />
              <button
                type="button"
                onClick={() => handleAddSkill(category.id)}
                className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
