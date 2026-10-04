import React from 'react';
import { 
  User, CheckCircle2, Clock, AlertTriangle, Award, ShieldCheck, Mail, Calendar 
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function UserProgressAudit() {
  const { usersList, selectedAuditUser, setSelectedAuditUser, modules } = useTraining();

  return (
    <div className="p-6 sm:p-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-50 border border-cyan-200">
            Supervisor Dossier
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Individual Employee Progress Audit
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Audit individual employee completion histories, exam scores, and areas requiring supervisor intervention.
          </p>
        </div>

        {/* Employee Selector Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-600 font-semibold">Select Employee:</label>
          <select
            value={selectedAuditUser.id}
            onChange={(e) => {
              const u = usersList.find(item => item.id === e.target.value);
              if (u) setSelectedAuditUser(u);
            }}
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-cyan-400"
          >
            {usersList.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name} ({u.department})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Employee Summary Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-slate-900 font-extrabold text-xl shadow-lg">
              {selectedAuditUser.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-slate-900">{selectedAuditUser.name}</h2>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-cyan-700">
                  {selectedAuditUser.id}
                </span>
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Department: <strong className="text-slate-600">{selectedAuditUser.department}</strong>
              </div>
              <div className="text-xs text-slate-500">
                Email: {selectedAuditUser.email} • Enrolled: {selectedAuditUser.joinedDate}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-slate-600">Overall Completion</div>
              <div className="text-2xl font-black text-cyan-700">{selectedAuditUser.progress}%</div>
            </div>
            <div className="text-right pl-4 border-l border-slate-200">
              <div className="text-xs text-slate-600">Assessment Average</div>
              <div className="text-2xl font-black text-emerald-700">{selectedAuditUser.avgScore}%</div>
            </div>
          </div>
        </div>

        {/* Audit Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          
          {/* Completed Training & In Progress */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Module Status Breakdown</span>
            </h3>

            <div className="space-y-2">
              {modules.map((m) => {
                const isCompleted = (selectedAuditUser?.completedModules || []).includes(m.id);
                return (
                  <div
                    key={m.id}
                    className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-900">{m.code}: {m.title}</span>
                      <div className="text-[10px] text-slate-500">{m.category}</div>
                    </div>
                    <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                      isCompleted
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {isCompleted ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Supervisor Action & Remediation Notes */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Areas Requiring Improvement & Supervisor Actions</span>
            </h3>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3 text-xs">
              <div className="text-slate-600 leading-relaxed">
                {selectedAuditUser.progress < 50 ? (
                  <span className="text-amber-700">
                    ⚠️ <strong>High Priority Remediation:</strong> Learner has completed less than half of mandatory units. Schedule in-person safety coaching before next scheduled Bay 4 heavy plant rotation.
                  </span>
                ) : (
                  <span className="text-emerald-700">
                    ✅ <strong>Satisfactory Progression:</strong> Learner meets benchmark compliance criteria. Ensure final certification quiz is scheduled prior to month-end.
                  </span>
                )}
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-1">
                <div className="text-[11px] text-slate-600 font-semibold uppercase">Supervisor Direct Actions:</div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    onClick={() => alert(`Issued training reminder notification to ${selectedAuditUser.email}`)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-100 text-cyan-700 font-semibold"
                  >
                    Send Refresher Reminder
                  </button>
                  <button
                    onClick={() => alert(`Logged safety audit note for ${selectedAuditUser.name}`)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-100 text-slate-600 font-semibold"
                  >
                    Add Audit Note
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}