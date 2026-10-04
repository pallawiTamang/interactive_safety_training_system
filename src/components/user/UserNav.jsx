import React, { useState } from 'react';
import { 
  Shield, BookOpen, Sparkles, HelpCircle, TrendingUp, Award, User, LogOut, 
  Menu, X, ExternalLink, Zap, SwitchCamera 
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function UserNav() {
  const { currentView, setCurrentView, currentUser, logout, loginAs, safetyPoints } = useTraining();
  const [mobileMenu, setMobileMenu] = useState(false);
  const companyUrl = import.meta.env.VITE_COMPANY_URL || 'http://localhost:5173';
  const userInitials = (currentUser?.name || 'Alex Morgan')
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'modules', label: 'Safety Modules' },
    { id: 'activity-ppe', label: 'PPE Activity' },
    { id: 'activity-hazard', label: 'Hazard Sim' },
    { id: 'manual-handling', label: 'Lifting Practice' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'quiz', label: 'Quizzes' },
    { id: 'progress', label: 'My Progress' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'profile', label: 'Profile' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white backdrop-blur-md border-b border-slate-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentView('home')}
              className="flex items-center gap-2.5 group text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-emerald-700 font-black">
                  <Shield className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                  <span>SafeLearn</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Learner
                  </span>
                </div>
                <span className="text-[9px] text-slate-600 uppercase tracking-widest font-mono">
                  Bay 4 Automotive Portal
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentView === item.id || (item.id === 'modules' && currentView === 'lesson')
                    ? 'bg-emerald-500/20 text-emerald-700 border border-emerald-500/40 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Status & Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Points Chip */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-700" />
              <span>{safetyPoints} Pts</span>
            </div>

            {/* Role Switcher Demo shortcut */}
            <button
              onClick={() => loginAs('admin')}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-cyan-700 border border-slate-200 hover:border-cyan-600 transition-colors"
              title="Switch to Supervisor Admin Dashboard Demo"
            >
              <SwitchCamera className="w-3 h-3 text-cyan-700" />
              <span>Switch to Admin</span>
            </button>

            {/* Profile Avatar */}
            <button
              onClick={() => setCurrentView('profile')}
              className="flex items-center gap-2 p-1 pl-2 rounded-xl bg-slate-100 border border-slate-200 hover:border-slate-600 transition-colors"
            >
              <div className="text-right">
                <div className="text-xs font-bold text-slate-900 leading-tight">{currentUser?.name || 'Alex Morgan'}</div>
                <div className="text-[10px] text-slate-600">{currentUser?.id || 'EMP-4091'}</div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center text-slate-900 font-extrabold text-xs">
                {userInitials}
              </div>
            </button>

            {/* Logout */}
            <button
              onClick={logout}
              className="p-2 rounded-lg text-slate-600 hover:text-rose-700 hover:bg-rose-50 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="xl:hidden flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-xs font-bold">
              <Zap className="w-3 h-3 fill-amber-400 text-amber-700" />
              <span>{safetyPoints}</span>
            </div>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900"
            >
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentView(item.id);
                setMobileMenu(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-emerald-700 hover:bg-slate-100"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={() => { loginAs('admin'); setMobileMenu(false); }}
              className="text-xs text-cyan-700 font-semibold"
            >
              Switch to Supervisor Admin
            </button>
            <button onClick={logout} className="text-xs text-rose-700 font-semibold">
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}