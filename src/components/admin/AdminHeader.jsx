import React from 'react';
import { Bell, ShieldCheck, User, Search, SwitchCamera } from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function AdminHeader() {
  const { currentUser, loginAs, setCurrentView, notifications } = useTraining();

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      
      {/* Title / Search */}
      <div className="flex items-center gap-4">
        <h2 className="text-base font-bold text-slate-900 hidden sm:block">
          Supervisor Safety Oversight Dashboard
        </h2>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Facility: Automotive Logistics Hub
        </span>
      </div>

      {/* Right User Bar */}
      <div className="flex items-center gap-4">
        
        {/* Quick switch to employee demo */}
        <button
          onClick={() => loginAs('employee')}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-700 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors"
        >
          <SwitchCamera className="w-3.5 h-3.5" />
          <span>Test as Learner</span>
        </button>

        {/* Notifications Icon */}
        <button
          onClick={() => setCurrentView('notifications')}
          className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 relative transition-colors"
          title="System Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-cyan-400 absolute top-2 right-2 animate-ping" />
        </button>

        {/* Supervisor Profile Avatar */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-bold text-slate-900">{currentUser?.name || 'Marcus Vance'}</div>
            <div className="text-[10px] text-cyan-700 font-mono">Lead Safety Auditor</div>
          </div>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-700 flex items-center justify-center text-slate-900 font-black text-xs shadow-md">
            MV
          </div>
        </div>

      </div>
    </header>
  );
}