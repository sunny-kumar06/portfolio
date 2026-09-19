import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Settings, Shield, Sparkles, Terminal } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const { personalInfo, setIsAdminOpen } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Global keyboard shortcut to open Admin Portal (Ctrl + Shift + A or Cmd + Shift + A)
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsAdminOpen]);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#070709]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Sunny Kumar Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0b0c12] rounded-xl flex items-center justify-center">
                <span className="font-mono font-bold text-sm bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                  SK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors text-base sm:text-lg flex items-center gap-1.5">
                {personalInfo.name || 'Sunny Kumar'}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase hidden sm:block">
                MERN Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] backdrop-blur-md px-3 py-1.5 rounded-full shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/[0.1] shadow-[0_0_12px_rgba(139,92,246,0.25)] border border-white/[0.1]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Admin Portal Button */}
            <button
              type="button"
              onClick={() => setIsAdminOpen(true)}
              className="p-2 rounded-xl text-slate-400 hover:text-purple-300 hover:bg-white/[0.06] border border-white/[0.08] transition-all"
              title="Open Admin Portal (Ctrl + Shift + A)"
              aria-label="Admin Portal"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Resume Button */}
            <button
              type="button"
              onClick={onOpenResume}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-purple-200 transition-transform group-hover:-translate-y-0.5" />
                Resume
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-white/[0.08] ${
          mobileMenuOpen
            ? 'max-h-[550px] bg-[#090a12]/95 backdrop-blur-2xl opacity-100 py-4 px-6'
            : 'max-h-0 bg-transparent opacity-0 py-0 px-6 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-1.5 pt-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white bg-purple-600/20 border border-purple-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
                )}
              </a>
            );
          })}

          <div className="pt-3 mt-2 border-t border-white/[0.08] space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg shadow-purple-600/20"
            >
              <FileText className="w-4 h-4" />
              View & Download Resume
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAdminOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono text-slate-300 bg-white/[0.04] rounded-xl border border-white/[0.08]"
            >
              <Settings className="w-4 h-4 text-purple-400" />
              Admin Portal Access
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
