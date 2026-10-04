import AssignmentPanel from './AssignmentPanel';
import React, { useState } from 'react';
import { 
  BookOpen, Plus, Eye, Edit2, Archive, CheckCircle2, ShieldCheck, X 
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function TrainingManagement() {
  const { modules, setModules, openModule, showToast } = useTraining();
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMod, setNewMod] = useState({
    code: 'HSE-707',
    title: '',
    description: '',
    duration: '15 mins',
    difficulty: 'Essential'
  });

  const handleTogglePublish = (moduleId) => {
    setModules(modules.map(m => {
      if (m.id === moduleId) {
        const nextStatus = m.status === 'Archived' ? 'Published' : 'Archived';
        showToast(`Module ${m.code} marked as ${nextStatus}`, 'info');
        return { ...m, status: nextStatus };
      }
      return m;
    }));
  };

  const handleAddModule = (e) => {
    e.preventDefault();
    if (!newMod.title) return;
    const created = {
      id: `hse-${Math.floor(700 + Math.random() * 100)}`,
      code: newMod.code,
      title: newMod.title,
      category: "Specialist Training",
      description: newMod.description,
      difficulty: newMod.difficulty,
      duration: newMod.duration,
      progress: 0,
      status: "Published",
      icon: "ShieldAlert",
      gradient: "from-cyan-600 to-blue-600",
      lessons: [
        {
          id: 1,
          title: "1. Core Introduction",
          objectives: ["Understand baseline protocols"],
          content: newMod.description,
          warnings: ["Always comply with supervisor guidelines"],
          rules: ["Wear mandatory PPE at all times"]
        }
      ]
    };
    setModules([...modules, created]);
    setShowAddModal(false);
    showToast(`Published module ${created.code}: ${created.title}`, 'success');
  };

  return (
    <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-50 border border-cyan-200">
            Curriculum Administration
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Training Modules Management
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Author, publish, preview, and retire warehouse safety training courses.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold text-xs hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Module</span>
        </button>
      </div>

      <AssignmentPanel />
      {/* Modules Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-white text-slate-600 uppercase font-mono border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Module Code & Title</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Active Learners</th>
                <th className="px-6 py-4">Completion Rate</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {modules.map((mod) => (
                <tr key={mod.id} className="hover:bg-slate-100 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-cyan-700 font-bold">{mod.code}</span>
                      <span className="font-bold text-slate-900 text-sm">{mod.title}</span>
                    </div>
                    <div className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">{mod.description}</div>
                  </td>

                  <td className="px-6 py-4 font-medium text-slate-600">
                    {mod.duration}
                  </td>

                  <td className="px-6 py-4 font-mono font-bold text-slate-900">
                    Demo roster
                  </td>

                  <td className="px-6 py-4">
                    <span className="font-mono font-bold text-emerald-700">
                      {mod.progress > 0 ? `${mod.progress}%` : 'Sample'}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                      mod.status === 'Archived'
                        ? 'bg-slate-100 text-slate-600'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {mod.status || 'Published'}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openModule(mod.id)}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-100 text-cyan-700 hover:text-slate-900"
                        title="Preview Module"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => alert(`Editing content for ${mod.code}`)}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                        title="Edit Module"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleTogglePublish(mod.id)}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-amber-50 text-amber-700"
                        title="Toggle Publish/Archive"
                      >
                        <Archive className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Module Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-sm">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-5 right-5 text-slate-600 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">Create Training Unit</h3>
            <p className="text-xs text-slate-600 mb-6">Draft a new module for the logistics curriculum.</p>

            <form onSubmit={handleAddModule} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Module Code</label>
                <input
                  type="text"
                  required
                  value={newMod.code}
                  onChange={(e) => setNewMod({ ...newMod, code: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Module Title</label>
                <input
                  type="text"
                  required
                  value={newMod.title}
                  onChange={(e) => setNewMod({ ...newMod, title: e.target.value })}
                  placeholder="e.g. Electrical Safety in Battery Charging Bays"
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Description</label>
                <textarea
                  rows={3}
                  required
                  value={newMod.description}
                  onChange={(e) => setNewMod({ ...newMod, description: e.target.value })}
                  placeholder="Overview of safety principles covered..."
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs resize-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-xs font-extrabold"
                >
                  Publish Module
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}