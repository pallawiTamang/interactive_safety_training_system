import React, { useState } from 'react';
import { Calendar, User, BookOpen, Trash2, ExternalLink, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function AssignmentPanel() {
  const {
    modules,
    usersList,
    assignments,
    setAssignments,
    showToast,
    loginAs,
    isModuleCompleted,
    completedModules
  } = useTraining();

  const [moduleId, setModuleId] = useState('hse-701');
  const [target, setTarget] = useState('EMP-4091');
  const [due, setDue] = useState('');

  const todayStr = new Date().toISOString().slice(0, 10);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!due) {
      showToast('Please select a valid deadline date.', 'warning');
      return;
    }
    const ids = target.startsWith('dept:')
      ? usersList.filter(u => u.department === target.slice(5)).map(u => u.id)
      : [target];

    const fresh = ids.map(employeeId => ({ employeeId, moduleId, due, assignedAt: new Date().toISOString() }));
    setAssignments(prev => [...prev.filter(a => !ids.includes(a.employeeId) || a.moduleId !== moduleId), ...fresh]);

    const targetLabel = target.startsWith('dept:')
      ? `Department ${target.slice(5)}`
      : (usersList.find(u => u.id === target)?.name || target);
    showToast(`Training assigned to ${targetLabel} (Deadline: ${due}).`, 'success');
  };

  const handleRemove = (employeeId, modId) => {
    setAssignments(prev => prev.filter(a => !(a.employeeId === employeeId && a.moduleId === modId)));
    showToast('Assignment removed.', 'info');
  };

  return (
    <section className="learning-card space-y-6">
      <div>
        <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-50 border border-cyan-200">
          Workforce Assignment Console
        </span>
        <h2 className="text-xl font-bold text-slate-900 mt-2 mb-1">Assign Training Module</h2>
        <p className="text-xs text-slate-600">
          Mandate specific health and safety training modules to an individual trainee or entire department with a strict completion deadline.
        </p>
      </div>

      <form className="flex flex-wrap gap-4 items-end bg-slate-50 p-4 rounded-2xl border border-slate-200" onSubmit={handleSubmit}>
        <label className="text-xs font-semibold text-slate-700 flex-1 min-w-[240px]">
          Training Module
          <select
            className="block w-full mt-1 p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-cyan-500"
            value={moduleId}
            onChange={e => setModuleId(e.target.value)}
          >
            {modules.filter(m => m.status !== 'Archived').map(m => (
              <option value={m.id} key={m.id}>
                {m.code}: {m.title}
              </option>
            ))}
          </select>
        </label>

        <label className="text-xs font-semibold text-slate-700 flex-1 min-w-[240px]">
          Learner / Department
          <select
            className="block w-full mt-1 p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-cyan-500"
            value={target}
            onChange={e => setTarget(e.target.value)}
          >
            <optgroup label="Individual Employees">
              {usersList.map(u => (
                <option value={u.id} key={u.id}>
                  {u.name} ({u.id} - {u.department})
                </option>
              ))}
            </optgroup>
            <optgroup label="Department Roster">
              {[...new Set(usersList.map(u => u.department))].map(d => (
                <option value={'dept:' + d} key={d}>
                  All staff in {d}
                </option>
              ))}
            </optgroup>
          </select>
        </label>

        <label className="text-xs font-semibold text-slate-700 w-full sm:w-auto min-w-[160px]">
          Completion Due Date
          <input
            required
            type="date"
            className="block w-full mt-1 p-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-cyan-500"
            value={due}
            onChange={e => setDue(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Save Assignment</span>
        </button>
      </form>

      {/* Saved Assignments Table */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-800">
            Active Supervisor Assignments ({assignments.length})
          </span>
          <span className="text-slate-500 text-[11px]">
            Later assignments replace previous deadlines for that learner and module.
          </span>
        </div>

        {assignments.length === 0 ? (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
            No active training assignments recorded yet. Use the form above to assign a module.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 uppercase font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="px-4 py-2.5">Learner</th>
                  <th className="px-4 py-2.5">Module Assigned</th>
                  <th className="px-4 py-2.5">Due Date</th>
                  <th className="px-4 py-2.5">Status</th>
                  <th className="px-4 py-2.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {assignments.map((a) => {
                  const learner = usersList.find(u => u.id === a.employeeId);
                  const mod = modules.find(m => m.id === a.moduleId);
                  const completed = isModuleCompleted
                    ? isModuleCompleted(a.moduleId, a.employeeId)
                    : (learner?.completedModules?.includes(a.moduleId) || (a.employeeId === 'EMP-4091' && completedModules.includes(a.moduleId)));
                  const isOverdue = !completed && a.due && a.due < todayStr;

                  return (
                    <tr key={`${a.employeeId}-${a.moduleId}`} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-2.5 font-medium text-slate-900">
                        <div>{learner?.name || a.employeeId}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{a.employeeId}</div>
                      </td>

                      <td className="px-4 py-2.5">
                        <div className="font-semibold text-slate-800">{mod?.title || a.moduleId}</div>
                        <div className="text-[10px] text-cyan-700 font-mono">{mod?.code || ''}</div>
                      </td>

                      <td className="px-4 py-2.5 font-mono">
                        <span className={isOverdue ? 'text-rose-700 font-bold' : 'text-slate-700'}>
                          {a.due}
                        </span>
                      </td>

                      <td className="px-4 py-2.5">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            completed
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : isOverdue
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : 'bg-blue-50 text-cyan-700 border border-cyan-200'
                          }`}
                        >
                          {completed ? (
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          ) : isOverdue ? (
                            <AlertTriangle className="w-3 h-3 text-rose-600" />
                          ) : (
                            <Clock className="w-3 h-3 text-cyan-600" />
                          )}
                          <span>{completed ? 'Completed' : isOverdue ? 'Overdue' : 'Assigned / Upcoming'}</span>
                        </span>
                      </td>

                      <td className="px-4 py-2.5 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => loginAs(a.employeeId)}
                            className="px-2 py-1 rounded bg-slate-100 hover:bg-emerald-50 text-emerald-800 text-[11px] font-semibold flex items-center gap-1 border border-slate-200"
                            title={`Switch to ${learner?.name || a.employeeId}'s Learner Portal`}
                          >
                            <span>Switch to Learner</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemove(a.employeeId, a.moduleId)}
                            className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                            title="Remove assignment"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

