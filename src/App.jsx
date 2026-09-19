import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievement from './components/Achievement';
import Projects from './components/Projects';
import Education from './components/Education';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';
import AdminPortalModal from './components/admin/AdminPortalModal';
import { Sparkles, Terminal } from 'lucide-react';

function PortfolioContent() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070709] text-white">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[2px] animate-spin">
            <div className="w-full h-full bg-[#070709] rounded-2xl" />
          </div>
          <span className="absolute font-mono font-bold text-base bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
            SK
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span>Initializing Portfolio Workspace...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 selection:bg-purple-500/30 selection:text-purple-200 relative">
      {/* Custom Desktop Glowing Cursor */}
      <CustomCursor />

      {/* Modern Sticky Glassmorphism Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Achievement />
        <Projects />
        <Education />
        <Certification />
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Recruiter Resume Viewer Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Admin Portal Modal */}
      <AdminPortalModal />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}
