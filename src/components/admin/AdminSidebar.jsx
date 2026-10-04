import React from 'react';
import { 
  LayoutDashboard, Users, BookOpen, HelpCircle, TrendingUp, BarChart3, 
  Bell, Settings, LogOut, ShieldCheck, SwitchCamera, ExternalLink 
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function AdminSidebar() {
  const { currentView, setCurrentView, logout, loginAs } = useTraining();
  const companyUrl = import.meta.env.VITE_COMPANY_URL || 'http://localhost:5173';

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'modules-mgmt', label: 'Training Modules', icon: BookOpen },
    { id: 'quiz-mgmt', label: 'Quiz Management', icon: HelpCircle },
    { id: 'user-progress', label: 'User Progress Audit', icon: TrendingUp },
    { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between flex-shrink-0 min-h-screen">
      <div>
        {/* Brand */}
        <div className="p-6 border-b border-slate-200 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-600 flex items-center justify-center text-slate-900 shadow-md">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
              <span>SafeLearn</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-200">
                Supervisor
              </span>
            </div>
            <span className="text-[9px] text-slate-600 block tracking-wider uppercase font-mono">
              Management Console
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-cyan-50 text-cyan-700 border border-cyan-700/60 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-700' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Controls in Sidebar */}
      <div className="p-4 border-t border-slate-200 space-y-2">
        {/* Switch to Employee Demo */}
        <button
          onClick={() => loginAs('employee')}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 border border-slate-200 text-xs font-semibold transition-colors"
          title="Switch to Learner Portal"
        >
          <SwitchCamera className="w-3.5 h-3.5 text-emerald-700" />
          <span>Switch to Employee Demo</span>
        </button>

        {/* Back link to EduSpark Company Site */}
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white text-slate-600 hover:text-cyan-700 text-[11px] transition-colors"
        >
          <span>EduSpark (Team 9) Site</span>
          <ExternalLink className="w-3 h-3 opacity-60" />
        </a>

        {/* Logout */}
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-rose-700 hover:bg-rose-50 text-xs font-semibold transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}