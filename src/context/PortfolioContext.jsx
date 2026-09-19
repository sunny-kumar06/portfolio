import React, { createContext, useContext, useState, useEffect } from 'react';
import * as defaultData from '../data/portfolioData';

const PortfolioContext = createContext();

const STORAGE_KEY = 'sunny_portfolio_data_v2';
const ADMIN_PIN_KEY = 'sunny_admin_pin_v1';

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          personalInfo: parsed.personalInfo || defaultData.personalInfo,
          aboutHighlights: parsed.aboutHighlights || defaultData.aboutHighlights,
          skillCategories: parsed.skillCategories || defaultData.skillCategories,
          experienceTimeline: parsed.experienceTimeline || defaultData.experienceTimeline,
          featuredAchievement: parsed.featuredAchievement || defaultData.featuredAchievement,
          projects: parsed.projects || defaultData.projects,
          educationTimeline: parsed.educationTimeline || defaultData.educationTimeline,
          certifications: parsed.certifications || defaultData.certifications,
          customResumePdf: parsed.customResumePdf || null
        };
      }
    } catch (err) {
      console.error('Failed to load saved portfolio data from localStorage:', err);
    }
    return {
      personalInfo: defaultData.personalInfo,
      aboutHighlights: defaultData.aboutHighlights,
      skillCategories: defaultData.skillCategories,
      experienceTimeline: defaultData.experienceTimeline,
      featuredAchievement: defaultData.featuredAchievement,
      projects: defaultData.projects,
      educationTimeline: defaultData.educationTimeline,
      certifications: defaultData.certifications,
      customResumePdf: null
    };
  });

  const [adminPin, setAdminPin] = useState(() => {
    return localStorage.getItem(ADMIN_PIN_KEY) || 'admin123';
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Auto-save to localStorage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.error('Error saving data to localStorage:', err);
    }
  }, [data]);

  // Save PIN
  const updateAdminPin = (newPin) => {
    setAdminPin(newPin);
    localStorage.setItem(ADMIN_PIN_KEY, newPin);
  };

  // Helper actions
  const updatePersonalInfo = (newInfo) => {
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...newInfo }
    }));
  };

  const updateAboutHighlights = (newHighlights) => {
    setData(prev => ({ ...prev, aboutHighlights: newHighlights }));
  };

  const updateSkillCategories = (newCategories) => {
    setData(prev => ({ ...prev, skillCategories: newCategories }));
  };

  // Projects CRUD
  const addProject = (projectData) => {
    const newProj = {
      id: projectData.id || `project-${Date.now()}`,
      title: projectData.title || 'New Project',
      tagline: projectData.tagline || '',
      category: projectData.category || 'FULL STACK',
      featured: Boolean(projectData.featured),
      description: projectData.description || '',
      features: Array.isArray(projectData.features) ? projectData.features : [],
      technologies: Array.isArray(projectData.technologies) ? projectData.technologies : [],
      statusNote: projectData.statusNote || 'In Active Development',
      accentColor: projectData.accentColor || 'from-purple-500/20 via-indigo-500/20 to-cyan-500/20',
      glowColor: projectData.glowColor || 'rgba(139, 92, 246, 0.25)',
      liveUrl: projectData.liveUrl || '',
      githubUrl: projectData.githubUrl || ''
    };

    setData(prev => ({
      ...prev,
      projects: [newProj, ...prev.projects]
    }));
  };

  const updateProject = (id, updatedFields) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => (p.id === id ? { ...p, ...updatedFields } : p))
    }));
  };

  const deleteProject = (id) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  // Experience & Education CRUD
  const updateExperienceTimeline = (newTimeline) => {
    setData(prev => ({ ...prev, experienceTimeline: newTimeline }));
  };

  const updateFeaturedAchievement = (newAchievement) => {
    setData(prev => ({ ...prev, featuredAchievement: newAchievement }));
  };

  const updateEducationTimeline = (newTimeline) => {
    setData(prev => ({ ...prev, educationTimeline: newTimeline }));
  };

  const updateCertifications = (newCerts) => {
    setData(prev => ({ ...prev, certifications: newCerts }));
  };

  // Resume PDF Manager
  const uploadCustomResumePdf = (pdfDataUrl) => {
    setData(prev => ({
      ...prev,
      customResumePdf: pdfDataUrl
    }));
  };

  const resetResumePdfToDefault = () => {
    setData(prev => ({
      ...prev,
      customResumePdf: null
    }));
  };

  // Reset all to default code data
  const resetToDefault = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData({
      personalInfo: defaultData.personalInfo,
      aboutHighlights: defaultData.aboutHighlights,
      skillCategories: defaultData.skillCategories,
      experienceTimeline: defaultData.experienceTimeline,
      featuredAchievement: defaultData.featuredAchievement,
      projects: defaultData.projects,
      educationTimeline: defaultData.educationTimeline,
      certifications: defaultData.certifications,
      customResumePdf: null
    });
  };

  // Generate downloadable portfolioData.js code string for Git
  const exportDataJs = () => {
    const fileContent = `export const personalInfo = ${JSON.stringify(data.personalInfo, null, 2)};\n\n` +
      `export const aboutHighlights = ${JSON.stringify(data.aboutHighlights, null, 2)};\n\n` +
      `export const skillCategories = ${JSON.stringify(data.skillCategories, null, 2)};\n\n` +
      `export const experienceTimeline = ${JSON.stringify(data.experienceTimeline, null, 2)};\n\n` +
      `export const featuredAchievement = ${JSON.stringify(data.featuredAchievement, null, 2)};\n\n` +
      `export const projects = ${JSON.stringify(data.projects, null, 2)};\n\n` +
      `export const educationTimeline = ${JSON.stringify(data.educationTimeline, null, 2)};\n\n` +
      `export const certifications = ${JSON.stringify(data.certifications, null, 2)};\n`;

    const blob = new Blob([fileContent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolioData.js';
    a.click();
    URL.revokeObjectURL(url);
  };

  const activeResumeUrl = data.customResumePdf || data.personalInfo.resumeUrl || './Sunny_Kumar_Resume.pdf';

  return (
    <PortfolioContext.Provider
      value={{
        ...data,
        activeResumeUrl,
        adminPin,
        isAdminOpen,
        setIsAdminOpen,
        isAuthenticated,
        setIsAuthenticated,
        updateAdminPin,
        updatePersonalInfo,
        updateAboutHighlights,
        updateSkillCategories,
        addProject,
        updateProject,
        deleteProject,
        updateExperienceTimeline,
        updateFeaturedAchievement,
        updateEducationTimeline,
        updateCertifications,
        uploadCustomResumePdf,
        resetResumePdfToDefault,
        resetToDefault,
        exportDataJs
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
