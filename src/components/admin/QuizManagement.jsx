import React, { useState } from 'react';
import { 
  HelpCircle, Plus, Trash2, Edit2, CheckCircle2, Sliders, ShieldCheck, X 
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function QuizManagement() {
  const { adminQuestions, setAdminQuestions, adminPassMark, setAdminPassMark, showToast, setCurrentView } = useTraining();
  const [showAddModal, setShowAddModal] = useState(false);
  const [newQ, setNewQ] = useState({
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: 0,
    explanation: ''
  });

  const handleDelete = (id) => {
    if (adminQuestions.length <= 1) {
      alert('The question bank must retain at least one examination question.');
      return;
    }
    setAdminQuestions(adminQuestions.filter(q => q.id !== id));
    showToast('Question removed from examination bank', 'info');
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQ.question || !newQ.optionA || !newQ.optionB) {
      alert('Please fill in the question and options.');
      return;
    }
    const created = {
      id: Date.now(),
      question: newQ.question,
      options: [newQ.optionA, newQ.optionB, newQ.optionC || 'None of the above', newQ.optionD || 'All of the above'],
      correctAnswer: parseInt(newQ.correctAnswer, 10),
      explanation: newQ.explanation || 'Refer to warehouse health & safety training manual.'
    };
    setAdminQuestions([...adminQuestions, created]);
    setShowAddModal(false);
    setNewQ({ question: '', optionA: '', optionB: '', optionC: '', optionD: '', correctAnswer: 0, explanation: '' });
    showToast('New assessment question added to bank', 'success');
  };

  return (
    <div className="p-6 sm:p-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-50 border border-cyan-200">
            Assessment Control
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Quiz & Examination Management
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Configure question banks, set passing score thresholds, and verify examination criteria.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentView('quiz')}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200 transition-colors"
          >
            Preview Learner Quiz
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold text-xs hover:from-cyan-400 hover:to-blue-500 shadow-md transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Question</span>
          </button>
        </div>
      </div>

      {/* Threshold Controller Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <Sliders className="w-4 h-4 text-cyan-700" />
            <span>Statutory Passing Score Threshold</span>
          </div>
          <p className="text-xs text-slate-600">
            Learners must score at or above this percentage to unlock their digital safety certificate.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="range"
            min="50"
            max="95"
            step="5"
            value={adminPassMark}
            onChange={(e) => {
              setAdminPassMark(Number(e.target.value));
              showToast(`Passing threshold set to ${e.target.value}%`, 'info');
            }}
            className="w-40 accent-cyan-400"
          />
          <span className="text-2xl font-black text-cyan-700 font-mono w-16">
            {adminPassMark}%
          </span>
        </div>
      </div>

      {/* Question Bank Roster */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Active Question Bank ({adminQuestions.length} Questions)</span>
          <span>HSE Statutory Bank</span>
        </div>

        <div className="space-y-3">
          {adminQuestions.map((q, idx) => (
            <div
              key={q.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-200 transition-colors space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-cyan-50 text-cyan-700 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{q.question}</h4>
                    <div className="text-xs text-slate-600 mt-1 italic">Explanation: {q.explanation}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDelete(q.id)}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-700 transition-colors"
                    title="Delete Question"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Options Grid preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                {q.options.map((opt, oIdx) => (
                  <div
                    key={oIdx}
                    className={`px-3 py-2 rounded-xl text-xs flex items-center justify-between ${
                      oIdx === q.correctAnswer
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold'
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                    {oIdx === q.correctAnswer && (
                      <span className="text-[10px] uppercase font-bold text-emerald-700 ml-2">Correct</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Question Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-sm space-y-4">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-5 right-5 text-slate-600 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">Add Assessment Question</h3>
            <p className="text-xs text-slate-600 mb-4">Add a new multiple-choice item to the question bank.</p>

            <form onSubmit={handleAddQuestion} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Question Prompt</label>
                <textarea
                  rows={2}
                  required
                  value={newQ.question}
                  onChange={(e) => setNewQ({ ...newQ, question: e.target.value })}
                  placeholder="e.g. What is the minimum clearance distance required in front of emergency exit doors?"
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] text-slate-600 uppercase">Option A</label>
                  <input
                    type="text"
                    required
                    value={newQ.optionA}
                    onChange={(e) => setNewQ({ ...newQ, optionA: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-600 uppercase">Option B</label>
                  <input
                    type="text"
                    required
                    value={newQ.optionB}
                    onChange={(e) => setNewQ({ ...newQ, optionB: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-600 uppercase">Option C</label>
                  <input
                    type="text"
                    value={newQ.optionC}
                    onChange={(e) => setNewQ({ ...newQ, optionC: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-600 uppercase">Option D</label>
                  <input
                    type="text"
                    value={newQ.optionD}
                    onChange={(e) => setNewQ({ ...newQ, optionD: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Correct Answer</label>
                <select
                  value={newQ.correctAnswer}
                  onChange={(e) => setNewQ({ ...newQ, correctAnswer: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                >
                  <option value={0}>Option A is Correct</option>
                  <option value={1}>Option B is Correct</option>
                  <option value={2}>Option C is Correct</option>
                  <option value={3}>Option D is Correct</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Explanation / Regulatory Note</label>
                <input
                  type="text"
                  value={newQ.explanation}
                  onChange={(e) => setNewQ({ ...newQ, explanation: e.target.value })}
                  placeholder="e.g. Under UK Fire Safety regulations, 1.5m clearance is mandatory."
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
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
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}