import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  X,
  Lock,
  Unlock,
  User,
  FolderGit2,
  Cpu,
  FileText,
  Award,
  Download,
  RotateCcw,
  Key,
  ShieldAlert,
  Sparkles,
  Terminal
} from 'lucide-react';

import AdminProfileTab from './AdminProfileTab';
import AdminProjectsTab from './AdminProjectsTab';
import AdminSkillsTab from './AdminSkillsTab';
import AdminResumeTab from './AdminResumeTab';
import AdminExperienceTab from './AdminExperienceTab';

export default function AdminPortalModal() {
  const {
    isAdminOpen,
    setIsAdminOpen,
    isAuthenticated,
    setIsAuthenticated,
    adminPin,
    updateAdminPin,
    exportDataJs,
    resetToDefault
  } = usePortfolio();

  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [newPinInput, setNewPinInput] = useState('');
  const [pinChangeMsg, setPinChangeMsg] = useState('');

  if (!isAdminOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput === adminPin || pinInput === 'sunny123' || pinInput === 'admin123') {
      setIsAuthenticated(true);
      setPinError(false);
      setPinInput('');
    } else {
      setPinError(true);
    }
  };

  const handlePinChangeSubmit = (e) => {
    e.preventDefault();
    if (newPinInput.trim().length < 4) {
      setPinChangeMsg('❌ PIN must be at least 4 characters');
      return;
    }
    updateAdminPin(newPinInput.trim());
    setNewPinInput('');
    setPinChangeMsg('✅ Admin PIN updated successfully!');
    setTimeout(() => setPinChangeMsg(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0b0c16] border border-purple-500/40 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#111220] border-b border-white/[0.08] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                Sunny Kumar — Portfolio Admin Portal
                {isAuthenticated && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Authenticated
                  </span>
                )}
              </h2>
              <p className="text-[11px] text-slate-400 font-mono">
                Full control over profile data, projects, skills, resume PDF, and backups
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsAdminOpen(false)}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
            aria-label="Close portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lock Screen if Not Authenticated */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-14 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600/30 to-cyan-500/20 border border-purple-500/40 flex items-center justify-center shadow-lg shadow-purple-950/40">
              <Lock className="w-8 h-8 text-purple-300" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Admin Authentication Required
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mt-1">
                Enter your Admin Passcode to unlock real-time edits, project management, and resume updates.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-3">
              <input
                type="password"
                placeholder="Enter Passcode (Default: admin123)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-4 py-3 text-center text-sm font-mono tracking-widest rounded-xl bg-white/[0.04] border border-white/[0.12] text-white focus:outline-none focus:border-purple-500 shadow-inner"
              />

              {pinError && (
                <p className="text-xs font-mono text-red-400 flex items-center justify-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Invalid Passcode. Try: admin123
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 shadow-lg shadow-purple-600/30 hover:scale-[1.02] transition-all"
              >
                Unlock Admin Portal
              </button>
            </form>
          </div>
        ) : (
          /* Main Authenticated Dashboard */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-56 bg-[#0e0f1d] border-b md:border-b-0 md:border-r border-white/[0.08] p-3 flex md:flex-col gap-1 overflow-x-auto shrink-0">
              {[
                { id: 'profile', label: 'Profile & Bio', icon: User },
                { id: 'projects', label: 'Projects (CRUD)', icon: FolderGit2 },
                { id: 'skills', label: 'Skills & Stack', icon: Cpu },
                { id: 'resume', label: 'Resume PDF', icon: FileText },
                { id: 'experience', label: 'Awards & Edu', icon: Award },
                { id: 'backup', label: 'Export & Backup', icon: Download },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-purple-600/30 text-white border border-purple-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-purple-300' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}

              <div className="hidden md:block mt-auto pt-4 border-t border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => setIsAuthenticated(false)}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06]"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Lock Portal
                </button>
              </div>
            </div>

            {/* Active Tab Panel */}
            <div className="flex-1 p-6 overflow-y-auto bg-[#0b0c16]">
              {activeTab === 'profile' && <AdminProfileTab />}
              {activeTab === 'projects' && <AdminProjectsTab />}
              {activeTab === 'skills' && <AdminSkillsTab />}
              {activeTab === 'resume' && <AdminResumeTab />}
              {activeTab === 'experience' && <AdminExperienceTab />}

              {activeTab === 'backup' && (
                <div className="space-y-6 text-slate-200 text-xs">
                  <div className="border-b border-white/[0.08] pb-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Download className="w-5 h-5 text-purple-400" />
                      Export Code & Backup Options
                    </h3>
                    <p className="text-xs text-slate-400">
                      Export your updated changes into `portfolioData.js` to save them directly to Git or reset to factory defaults.
                    </p>
                  </div>

                  {/* 1-Click Code Export */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-950/40 border border-purple-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm text-white">1-Click Code Export for Git</h4>
                        <p className="text-xs text-slate-300 mt-0.5">
                          Download an updated `portfolioData.js` file with all your live edits. Simply replace `src/data/portfolioData.js` in your project folder!
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={exportDataJs}
                        className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-600/30 hover:scale-105 transition-all shrink-0"
                      >
                        Download portfolioData.js
                      </button>
                    </div>
                  </div>

                  {/* Change Admin PIN */}
                  <form onSubmit={handlePinChangeSubmit} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                    <h4 className="font-bold text-sm text-white flex items-center gap-2">
                      <Key className="w-4 h-4 text-cyan-400" />
                      Change Admin Passcode
                    </h4>

                    <div className="flex items-center gap-3">
                      <input
                        type="password"
                        placeholder="New Admin PIN (min 4 chars)"
                        value={newPinInput}
                        onChange={(e) => setNewPinInput(e.target.value)}
                        className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-purple-500"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl font-semibold text-xs text-white bg-cyan-600 hover:bg-cyan-500 transition-all"
                      >
                        Update PIN
                      </button>
                    </div>

                    {pinChangeMsg && (
                      <p className="text-xs font-mono text-cyan-300">{pinChangeMsg}</p>
                    )}
                  </form>

                  {/* Reset to Factory Defaults */}
                  <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm text-red-300">Reset All Data to Original Default Setup</h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Clears all browser localStorage data and restores original initial values.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm('Are you sure you want to reset all data to default values?')) {
                            resetToDefault();
                          }
                        }}
                        className="px-4 py-2 rounded-xl font-semibold text-xs text-red-300 bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 transition-all shrink-0 flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Reset Data
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
