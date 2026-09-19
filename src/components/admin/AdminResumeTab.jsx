import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { FileUp, Check, RefreshCw, FileText, ExternalLink } from 'lucide-react';

export default function AdminResumeTab() {
  const { activeResumeUrl, customResumePdf, uploadCustomResumePdf, resetResumePdfToDefault } = usePortfolio();
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setUploadMessage('❌ Please select a valid PDF file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      uploadCustomResumePdf(dataUrl);
      setUploadMessage('✅ New Resume PDF uploaded and activated successfully!');
      setTimeout(() => setUploadMessage(''), 4000);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6 text-slate-200">
      <div className="border-b border-white/[0.08] pb-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-purple-400" />
          Resume PDF Manager
        </h3>
        <p className="text-xs text-slate-400">
          Upload your latest PDF resume directly from your computer to replace the download link.
        </p>
      </div>

      {/* Upload Zone */}
      <div className="p-8 rounded-2xl bg-white/[0.02] border-2 border-dashed border-purple-500/40 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/40 flex items-center justify-center mx-auto">
          <FileUp className="w-6 h-6" />
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Upload New PDF Resume</h4>
          <p className="text-xs text-slate-400 mt-1">Select a `.pdf` file from your device</p>
        </div>

        <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-600 to-indigo-600 cursor-pointer shadow-md hover:scale-105 transition-all">
          <span>Browse File</span>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {uploadMessage && (
          <p className="text-xs font-mono font-medium text-cyan-300 animate-fadeIn">
            {uploadMessage}
          </p>
        )}
      </div>

      {/* Current Active Resume Status */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs">
        <div>
          <span className="text-slate-400 block font-mono">Current Active Resume:</span>
          <span className="font-semibold text-white">
            {customResumePdf ? 'Custom Uploaded PDF Resume' : 'Default Official Resume (Sunny_Kumar_Resume.pdf)'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={activeResumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-cyan-300 border border-white/[0.08] flex items-center gap-1 hover:bg-white/[0.08]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Preview Active PDF</span>
          </a>

          {customResumePdf && (
            <button
              type="button"
              onClick={resetResumePdfToDefault}
              className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-300 border border-red-500/20 flex items-center gap-1 hover:bg-red-500/20"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset to Default</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
