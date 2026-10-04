import React from 'react';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, ShieldAlert, 
  BookOpen, Sparkles, Award 
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function LessonViewer() {
  const { 
    currentUser,
    modules, 
    activeModuleId, 
    activeLessonIndex, 
    setActiveLessonIndex, 
    completeActiveLesson, 
    setCurrentView 
  } = useTraining();

  const currentMod = modules.find(m => m.id === activeModuleId) || modules[0];
  const currentLesson = currentMod.lessons[activeLessonIndex] || currentMod.lessons[0];
  const totalLessons = currentMod.lessons.length;
  const isLastLesson = activeLessonIndex === totalLessons - 1;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-300">
      
      {/* Top back link & Breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView(currentUser?.role === 'admin' ? 'modules-mgmt' : 'modules')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Modules</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
          <span>{currentMod.code}</span>
          <span>•</span>
          <span>Lesson {activeLessonIndex + 1} of {totalLessons}</span>
        </div>
      </div>

      {/* Main Lesson Content Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
        
        {/* Lesson Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            {currentMod.title}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {currentLesson.title}
          </h2>
        </div>

        {/* Learning Objectives Box */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Learning Objectives</span>
          </h3>
          <ul className="space-y-2">
            {currentLesson.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-slate-600">Illustrative training content. Follow your employer’s current risk assessments, equipment instructions and site rules for actual work.</p>
        {/* Safety Information Narrative */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-emerald-700" />
            <span>Core Safety Knowledge</span>
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {currentLesson.content}
          </p>
        </div>

        {/* Important Warnings Callout (Red Alert) */}
        {currentLesson.warnings && currentLesson.warnings.length > 0 && (
          <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-r-2xl space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>Critical Warning & Regulatory Liability</span>
            </div>
            {currentLesson.warnings.map((w, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-rose-700 leading-relaxed">
                {w}
              </p>
            ))}
          </div>
        )}

        {/* Key Safety Rules (Green checklist) */}
        {currentLesson.rules && currentLesson.rules.length > 0 && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Mandatory Floor Rules to Remember</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentLesson.rules.map((rule, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation & Lesson Step Indicator */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <button
            onClick={() => setActiveLessonIndex(Math.max(0, activeLessonIndex - 1))}
            disabled={activeLessonIndex === 0}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-100 text-slate-600 text-xs font-bold disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Lesson</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {currentMod.lessons.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === activeLessonIndex
                    ? 'w-6 bg-emerald-400'
                    : i < activeLessonIndex
                    ? 'w-2 bg-emerald-700'
                    : 'w-2 bg-slate-100'
                }`}
              />
            ))}
          </div>

          <button
            onClick={completeActiveLesson}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black text-xs font-bold hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/20 transition-all"
          >
            <span>{isLastLesson ? 'Finish Lessons' : 'Next Lesson'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
}