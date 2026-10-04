import React from 'react';
import { CheckCircle2, Clock, AlertTriangle, Calendar, ArrowRight } from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function UserHome() {
  const {
    currentUser,
    modules,
    completedModules,
    openModule,
    setCurrentView,
    safetyPoints,
    practiceComplete,
    attempts,
    assignments,
    isModuleCompleted
  } = useTraining();

  const next = modules.find(m => m.id === 'hse-303');
  const todayStr = new Date().toISOString().slice(0, 10);

  // Check completion status for the current trainee
  const isCompleted = (modId) => {
    if (isModuleCompleted) return isModuleCompleted(modId, currentUser?.id);
    return completedModules.includes(modId) || (currentUser?.completedModules?.includes(modId));
  };

  // Trainee's assignments
  const userAssignments = assignments.filter(a => a.employeeId?.toLowerCase() === currentUser?.id?.toLowerCase());
  const pendingAssignments = userAssignments.filter(a => !isCompleted(a.moduleId));
  const userAttempts = attempts.filter(a => (a.employeeId ? a.employeeId.toLowerCase() === currentUser?.id?.toLowerCase() : currentUser?.id === 'EMP-4091'));

  const completedCount = modules.filter(m => isCompleted(m.id)).length;
  const percent = Math.round((completedCount / Math.max(1, modules.length)) * 100);

  return (
    <div className="learning-page">
      
      {/* Learner Hero */}
      <section className="learner-hero">
        <div>
          <span className="eyebrow">YOUR LEARNING SPACE</span>
          <h1>Small steps.<br />Safer working days.</h1>
          <p>
            Welcome, {currentUser?.name ? currentUser.name.split(' ')[0] : 'Learner'}. Build your confidence with practical warehouse safety training.
          </p>
          <button className="primary" onClick={() => openModule(next.id)}>
            Continue manual handling →
          </button>
          <button onClick={() => setCurrentView('tutorials')}>
            View tutorials
          </button>
        </div>

        <div className="hero-progress">
          <span>{percent}%</span>
          <strong>Overall learning progress</strong>
          <p>{completedCount} of {modules.length} modules completed</p>
          <progress max="100" value={percent} />
        </div>
      </section>

      {/* Prominent Assigned Training Section */}
      {userAssignments.length > 0 && (
        <section className="learning-card" style={{ borderLeft: '6px solid #087d70' }}>
          <div className="section-heading" style={{ marginBottom: 16 }}>
            <div>
              <span className="eyebrow" style={{ color: '#08756c' }}>SUPERVISOR DIRECTIVE</span>
              <h2 style={{ marginBottom: 4 }}>Assigned Training & Deadlines</h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Mandatory health and safety modules assigned to your profile with scheduled completion deadlines.
              </p>
            </div>
            <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              {pendingAssignments.length} Pending · {userAssignments.length} Total Assigned
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {userAssignments.map((a) => {
              const mod = modules.find(m => m.id === a.moduleId);
              const completed = isCompleted(a.moduleId);
              const isOverdue = !completed && a.due && a.due < todayStr;
              const statusLabel = completed
                ? 'Completed'
                : isOverdue
                ? 'Overdue Training'
                : 'Assigned Training';

              return (
                <div
                  key={a.moduleId}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    completed
                      ? 'bg-slate-50/80 border-slate-200'
                      : isOverdue
                      ? 'bg-rose-50/70 border-rose-300 shadow-sm'
                      : 'bg-emerald-50/40 border-emerald-200 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                        {mod?.code || a.moduleId.toUpperCase()}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 ${
                          completed
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : isOverdue
                            ? 'bg-rose-100 text-rose-800 border border-rose-300 font-extrabold'
                            : 'bg-blue-100 text-cyan-800 border border-cyan-300 font-bold'
                        }`}
                      >
                        {completed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                        ) : isOverdue ? (
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-cyan-700" />
                        )}
                        <span>{statusLabel}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                      {mod?.title || a.moduleId}
                    </h3>
                    {mod?.description && (
                      <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                        {mod.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span className="text-slate-600">Due date:</span>
                      <strong className={`font-mono ${isOverdue ? 'text-rose-700 font-bold' : 'text-slate-800'}`}>
                        {a.due || 'No deadline'}
                      </strong>
                    </div>

                    <button
                      onClick={() => openModule(a.moduleId)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        completed
                          ? 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
                          : isOverdue
                          ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-sm'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                      }`}
                    >
                      <span>Open Assigned Module</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Summary Grid */}
      <div className="summary-grid">
        <div className="learning-card">
          <span className="eyebrow">Safety points</span>
          <h2>{safetyPoints}</h2>
          <p>Earned through your activities</p>
        </div>
        <div className="learning-card">
          <span className="eyebrow">Guided practice</span>
          <h2>{practiceComplete ? 'Complete' : 'Ready to start'}</h2>
          <p>Five actions for a safer lift</p>
        </div>
        <div className="learning-card">
          <span className="eyebrow">Assessment attempts</span>
          <h2>{userAttempts.length}</h2>
          <p>{userAttempts.length ? `Latest score: ${userAttempts[0].score}%` : 'Complete practice to unlock'}</p>
        </div>
      </div>

      {/* Learn by Doing / Training Pathway */}
      <div className="section-heading">
        <div>
          <span className="eyebrow">LEARN BY DOING</span>
          <h2>Your training pathway</h2>
        </div>
        <button onClick={() => setCurrentView('modules')}>All modules →</button>
      </div>

      <div className="tutorial-grid">
        {[
          ['01', 'Explore the 360° warehouse', 'Inspect six hazards using drag, keyboard or list controls.', 'activity-hazard'],
          ['02', 'Practise a safer lift', 'Follow the demonstration and put the actions in practice.', 'manual-handling'],
          ['03', 'Choose your protection', 'Select equipment for the warehouse practice task.', 'activity-ppe'],
          ['04', 'Make a safe decision', 'Work through a workplace incident with immediate feedback.', 'activity-scenario'],
          ['05', 'Check your knowledge', 'Take the scored assessment and review your answers.', 'quiz'],
          ['06', 'See your progress', 'Review saved attempts and earned training records.', 'progress']
        ].map(([n, t, d, v]) => (
          <button className="learning-card text-left" key={n} onClick={() => setCurrentView(v)}>
            <span className="tutorial-number">{n}</span>
            <h2>{t}</h2>
            <p>{d}</p>
            <strong className="activity-link">Open activity →</strong>
          </button>
        ))}
      </div>

      {/* System Training Reminder */}
      <aside className="feedback">
        <strong>Training reminder</strong>
        <p>
          {completedCount < modules.length
            ? `${modules.length - completedCount} modules remain. Complete assigned training before carrying out the related tasks.`
            : 'Your lesson modules are complete. Review them whenever you need a refresher.'}
        </p>
      </aside>

    </div>
  );
}
