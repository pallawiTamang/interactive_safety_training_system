import React from 'react';
import { Shield, ExternalLink } from 'lucide-react';

export default function LandingFooter() {
  const companyUrl = import.meta.env.VITE_COMPANY_URL || 'http://localhost:5173';

  return (
    <footer className="bg-white border-t border-slate-200 py-10 text-xs text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-700" />
          <span className="text-slate-900 font-bold">SafeLearn</span>
          <span>• Automotive Logistics Health & Safety Training System Prototype</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-cyan-700 hover:text-cyan-700"
          >
            <span>EduSpark Technologies (Team 9)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span>•</span>
          <span>University of Sunderland (CET257)</span>
        </div>
      </div>
    </footer>
  );
}