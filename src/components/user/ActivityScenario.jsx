import React from 'react';
import { 
  AlertTriangle, CheckCircle2, XCircle, RefreshCw, HelpCircle, ArrowRight, ShieldCheck, Info 
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function ActivityScenario() {
  const { 
    selectedScenarioOption, 
    scenarioSubmitted, 
    submitScenario, 
    resetScenario, 
    setCurrentView 
  } = useTraining();

  const options = [
    {
      id: "A",
      text: "Ignore it and continue walking to your assigned station.",
      isCorrect: false,
      feedback: "Incorrect. Ignoring a liquid spill creates an acute slip and fall hazard for following workers and forklift plant operators."
    },
    {
      id: "B",
      text: "Walk around it carefully and assume maintenance will clear it soon.",
      isCorrect: false,
      feedback: "Incorrect. While you personally avoided the puddle, other colleagues, particularly those carrying loads, remain exposed to severe injury."
    },
    {
      id: "C",
      text: "Report it immediately and prevent others from entering the area until it is safely cordoned and cleaned.",
      isCorrect: true,
      feedback: "Correct! Active containment and immediate reporting are mandatory under HASAWA 1974. Guarding the area eliminates secondary slip incidents."
    },
    {
      id: "D",
      text: "Continue working and mention it casually at the end-of-shift handover meeting.",
      isCorrect: false,
      feedback: "Incorrect. Immediate notification is required. High-traffic warehouse aisles can incur multiple slip incidents within minutes if left unguarded."
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Scenario Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200">
            Interactive Activity 3
          </span>
          <span className="text-xs text-slate-600 font-mono">+100 Points</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Workplace Decision Dilemma Scenario
        </h1>
        <p className="text-slate-600 text-sm mt-2">
          Put your safety judgement to the test. How would you react in a high-pressure warehouse situation?
        </p>
      </div>

      {/* Scenario Context Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        
        {/* Situation Prompt */}
        <div className="p-5 rounded-2xl bg-white border border-amber-500/40">
          <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Incident Situation</span>
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            "You notice a liquid spill in a busy warehouse walkway. What should you do?"
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {options.map((opt) => {
            const isSelected = selectedScenarioOption === opt.id;
            let optStyle = "bg-white border-slate-200 hover:border-slate-500 text-slate-600";

            if (scenarioSubmitted) {
              if (opt.isCorrect) {
                optStyle = "bg-emerald-50 border-emerald-500 text-emerald-100 shadow-md shadow-emerald-950/40";
              } else if (isSelected && !opt.isCorrect) {
                optStyle = "bg-rose-50 border-rose-500 text-rose-100 shadow-md shadow-rose-950/40";
              } else {
                optStyle = "bg-white border-slate-200 text-slate-500 opacity-60";
              }
            } else if (isSelected) {
              optStyle = "bg-emerald-50 border-emerald-400 text-slate-900 shadow-md shadow-emerald-950/30";
            }

            return (
              <div
                key={opt.id}
                onClick={() => !scenarioSubmitted && submitScenario(opt.id)}
                className={`p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-3.5 cursor-pointer ${optStyle}`}
              >
                <div className={`w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  isSelected ? 'bg-emerald-500 text-black' : 'bg-slate-100 text-slate-600'
                }`}>
                  {opt.id}
                </div>

                <div className="flex-grow">
                  <div className="text-sm sm:text-base font-semibold">{opt.text}</div>
                  {scenarioSubmitted && isSelected && (
                    <div className="mt-2 text-xs font-normal leading-relaxed pt-2 border-t border-slate-200">
                      {opt.feedback}
                    </div>
                  )}
                </div>

                {scenarioSubmitted && (
                  <div>
                    {opt.isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-rose-700" />
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={resetScenario}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>

          {scenarioSubmitted && (
            <button
              onClick={() => setCurrentView('quiz')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black text-xs font-bold hover:from-emerald-400 hover:to-teal-500 shadow-md transition-all"
            >
              <span>Proceed to Assessment Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

      {/* Regulatory Context Box */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
        <div className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Health & Safety at Work Act (HASAWA 1974) Statutory Standard</span>
        </div>
        <p className="leading-relaxed">
          Slips and trips account for over a third of all major industrial accidents. Under Section 7 of HASAWA 1974, every employee has a positive duty to take reasonable precautions for the safety of colleagues. Leaving a known spill unguarded can result in personal and employer statutory prosecution.
        </p>
      </div>

    </div>
  );
}