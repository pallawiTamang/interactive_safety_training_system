import React from 'react';
import { Shield, LogIn, ExternalLink, Menu, X } from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function LandingNav() {
  const { setLoginModalOpen, loginAs } = useTraining();
  const companyUrl = import.meta.env.VITE_COMPANY_URL || 'http://localhost:5173';
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white backdrop-blur-md border-b border-slate-200 py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 p-0.5 shadow-lg shadow-emerald-950/50">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-emerald-700 font-extrabold text-lg">
                <Shield className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-slate-900">SafeLearn</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Automotive Logistics
                </span>
              </div>
              <span className="text-[10px] text-slate-600 block tracking-wider uppercase font-medium">
                Health & Safety Training System
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <a href="#/" className="text-sm font-medium text-slate-600 hover:text-emerald-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors">
              Home
            </a>
            <a href="#/topics" className="text-sm font-medium text-slate-600 hover:text-emerald-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors">
              Training
            </a>
            <a href="#/topics" className="text-sm font-medium text-slate-600 hover:text-emerald-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors">
              Safety Topics
            </a>
            <a href="#/tutorials" className="text-sm font-medium text-slate-600 hover:text-emerald-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors">
              Tutorials
            </a>
            <a href="#/about" className="text-sm font-medium text-slate-600 hover:text-emerald-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors">
              About
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-100 border border-slate-200 transition-colors"
              title="Visit EduSpark Technologies Company Website"
            >
              <span>EduSpark (Team 9)</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <button
              onClick={() => setLoginModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold text-xs hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login / Demo</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLoginModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-black font-bold text-xs"
            >
              Login
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-2">
          <a href="#/" onClick={() => setMobileMenu(false)} className="block py-2 text-sm text-slate-600 hover:text-emerald-700">Home</a>
          <a href="#/topics" onClick={() => setMobileMenu(false)} className="block py-2 text-sm text-slate-600 hover:text-emerald-700">Training</a>
          <a href="#/topics" onClick={() => setMobileMenu(false)} className="block py-2 text-sm text-slate-600 hover:text-emerald-700">Safety Topics</a>
          <a href="#/tutorials" onClick={() => setMobileMenu(false)} className="block py-2 text-sm text-slate-600 hover:text-emerald-700">Tutorials</a>
          <a href="#/about" onClick={() => setMobileMenu(false)} className="block py-2 text-sm text-slate-600 hover:text-emerald-700">About</a>
          <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-2 text-xs text-cyan-700 border-t border-slate-200">
            <span>EduSpark Technologies Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </nav>
  );
}