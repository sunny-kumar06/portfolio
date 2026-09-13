import React, { useState } from 'react';
import { Terminal, Database, Server, Cpu, Check, Copy, Sparkles, Activity } from 'lucide-react';

const tabs = [
  {
    id: 'server',
    label: 'server.js',
    icon: Server,
    code: `// Express.js REST API & MERN Architecture
import express from 'express';
import { connectDB } from './config/db.js';
import hotelRoutes from './routes/hotels.js';

const app = express();
app.use(express.json());

// Establish persistence & endpoints
await connectDB({ cluster: "MongoDB", sql: "MySQL" });
app.use('/api/v1/hotels', hotelRoutes);
app.use('/api/v1/health', (req, res) => {
  res.status(200).json({ status: "healthy", role: "MERN Stack" });
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000 [Render Ready]");
});`
  },
  {
    id: 'schema',
    label: 'hotelSchema.js',
    icon: Database,
    code: `// Mongoose Data Modeling - MakeMemory
import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pricing: { type: Number, required: true },
  location: { type: String, default: "India" },
  features: [String],
  isAvailable: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export const Hotel = mongoose.model('Hotel', hotelSchema);`
  },
  {
    id: 'dsa',
    label: 'binarySearch.js',
    icon: Cpu,
    code: `// Data Structures & Algorithms - Binary Search
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1; // Element not found
}

// O(log N) Time Complexity • O(1) Space`
  },
  {
    id: 'runtime',
    label: 'system.env',
    icon: Activity,
    code: `# Developer Environment & Stack
NODE_ENV=production
FRAMEWORK=Express.js_v5
DATABASE_PRIMARY=MongoDB_Atlas
DATABASE_RELATIONAL=MySQL_Server
DEPLOYMENT_TARGET=Render_Cloud
DSA_FOCUS=Problem_Solving_and_Optimization
STATUS=Ready_For_Web_Dev_Internships`
  }
];

export default function HeroTerminal() {
  const [activeTab, setActiveTab] = useState('server');
  const [copied, setCopied] = useState(false);

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Status Badges around Terminal */}
      <div className="hidden sm:flex absolute -top-4 right-6 z-20 items-center gap-2 px-3 py-1 rounded-full bg-[#131522]/90 border border-purple-500/30 backdrop-blur-md text-[11px] text-purple-200 shadow-lg shadow-purple-950/40">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Node.js & Express REST API</span>
      </div>

      <div className="hidden sm:flex absolute -bottom-4 left-6 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131522]/90 border border-cyan-500/30 backdrop-blur-md text-[11px] text-cyan-200 shadow-lg shadow-cyan-950/40">
        <Database className="w-3.5 h-3.5 text-cyan-400" />
        <span>MongoDB + MySQL Schemas</span>
      </div>

      {/* Main Terminal Shell */}
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0c0d16]/90 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(139,92,246,0.15)]">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111320] border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/30" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/30" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-400/30" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              sunny@mern-workspace:~
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] transition-colors border border-white/[0.06]"
            title="Copy snippet"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center overflow-x-auto bg-[#0a0b13] border-b border-white/[0.06] px-2 py-1 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-all whitespace-nowrap ${
                  isActive
                    ? 'text-purple-300 bg-[#141624] border-t border-x border-purple-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-purple-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Code Content Area */}
        <div className="p-5 font-mono text-[12.5px] leading-relaxed overflow-x-auto text-slate-300 bg-[#0c0d16]/95 min-h-[290px]">
          <pre className="text-slate-200">
            <code>
              {currentTab.code.split('\n').map((line, idx) => {
                // Simple high-end syntax tinting
                const isComment = line.trim().startsWith('//') || line.trim().startsWith('#');
                const isKeyword = /^(import|export|const|function|let|await|return|while|if|else)/.test(
                  line.trim()
                );

                return (
                  <div key={idx} className="table-row group">
                    <span className="table-cell select-none pr-4 text-right text-[11px] text-slate-400 group-hover:text-slate-400 font-mono w-6">
                      {idx + 1}
                    </span>
                    <span
                      className={`table-cell pl-2 ${
                        isComment
                          ? 'text-slate-400 italic'
                          : isKeyword
                          ? 'text-purple-300'
                          : line.includes('status') || line.includes('true')
                          ? 'text-cyan-300'
                          : 'text-slate-200'
                      }`}
                    >
                      {line}
                    </span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Terminal Footer Bar */}
        <div className="px-4 py-2 bg-[#090a12] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Ready & Connected
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline text-slate-400">Render Deployment</span>
          </div>
          <div className="text-purple-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>MERN Engineer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
