import React from 'react';
import { 
  HardHat, ShieldCheck, CheckCircle2, XCircle, RefreshCw, Award, Info, AlertTriangle, ArrowRight 
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function ActivityPPE() {
  const { 
    ppeSelections, 
    togglePpeItem, 
    ppeSubmitted, 
    ppeFeedback, 
    submitPpeActivity, 
    resetPpeActivity, 
    setCurrentView 
  } = useTraining();

  const ppeOptions = [
    {
      id: "helmet",
      name: "Safety Helmet (EN 397)",
      desc: "Protects against dropped objects from high-bay pallet racking.",
      isMandatory: true,
      category: "Head Protection"
    },
    {
      id: "vest",
      name: "High-Visibility Vest (EN ISO 20471)",
      desc: "Ensures 360-degree visibility for forklift drivers in busy aisles.",
      isMandatory: true,
      category: "Visibility"
    },
    {
      id: "boots",
      name: "Composite/Steel Toe Boots (EN ISO 20345)",
      desc: "Shields toes from crushing by rolling heavy wheels or dropped components.",
      isMandatory: true,
      category: "Foot Protection"
    },
    {
      id: "gloves",
      name: "Puncture & Cut Gloves (EN 388)",
      desc: "Prevents lacerations when handling stamped metal automotive parts.",
      isMandatory: true,
      category: "Hand Protection"
    },
    {
      id: "sunglasses",
      name: "Fashion Tinted Sunglasses",
      desc: "Reduces ambient visibility in indoor warehouse aisles.",
      isMandatory: false,
      category: "Distractor"
    },
    {
      id: "flipflops",
      name: "Casual Open-Toe Footwear",
      desc: "Provides zero impact or puncture protection; severe safety hazard.",
      isMandatory: false,
      category: "Distractor"
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Activity Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-50 border border-cyan-200">
            Interactive Activity 1
          </span>
          <span className="text-xs text-slate-600 font-mono">+100 Points</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Personal Protective Equipment (PPE) Selection
        </h1>
        <p className="text-slate-600 text-sm mt-2">
          <strong>Question:</strong> Which PPE should be used in an automotive logistics and warehousing environment?
        </p>
      </div>

      {/* Interactive Selection Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>Click to select all mandatory PPE gear required for warehouse floor entry:</span>
          <span>Selected: {ppeSelections.length} items</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ppeOptions.map((item) => {
            const isSelected = ppeSelections.includes(item.id);
            let cardStyle = "bg-white border-slate-200 hover:border-slate-600";

            if (ppeSubmitted) {
              if (item.isMandatory && isSelected) {
                cardStyle = "bg-emerald-50 border-emerald-500 shadow-md shadow-emerald-950/30";
              } else if (!item.isMandatory && isSelected) {
                cardStyle = "bg-rose-50 border-rose-500 shadow-md shadow-rose-950/30";
              } else if (item.isMandatory && !isSelected) {
                cardStyle = "bg-amber-50 border-amber-500/80";
              }
            } else if (isSelected) {
              cardStyle = "bg-cyan-50 border-cyan-400 shadow-md shadow-cyan-950/40";
            }

            return (
              <div
                key={item.id}
                onClick={() => togglePpeItem(item.id)}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${cardStyle}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-cyan-500 border-cyan-400 text-black'
                        : 'border-slate-600 bg-slate-100'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-4 h-4 fill-black text-cyan-700" />}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>

                {ppeSubmitted && (
                  <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold">
                    {item.isMandatory ? (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Mandatory Warehouse PPE
                      </span>
                    ) : (
                      <span className="text-rose-700 flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> Non-Compliant / Distractor
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={resetPpeActivity}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Selection</span>
        </button>

        {!ppeSubmitted ? (
          <button
            onClick={submitPpeActivity}
            disabled={ppeSelections.length === 0}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black text-xs font-bold hover:from-emerald-400 hover:to-teal-500 disabled:opacity-40 disabled:pointer-events-none shadow-md shadow-emerald-500/20 transition-all"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Submit Verification</span>
          </button>
        ) : (
          <button
            onClick={() => setCurrentView('activity-hazard')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-colors"
          >
            <span>Next: Hazard Sim</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Feedback & Why PPE is Important Section */}
      {ppeSubmitted && ppeFeedback && (
        <div className={`p-6 rounded-2xl border-2 space-y-4 animate-in fade-in ${
          ppeFeedback.isPass
            ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
            : 'bg-amber-50 border-amber-500 text-amber-700'
        }`}>
          <div className="flex items-center gap-2 font-bold text-base">
            {ppeFeedback.isPass ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-700" />
            )}
            <span>{ppeFeedback.isPass ? "100% Accurate Selection!" : "Selection Needs Adjustment"}</span>
          </div>
          
          <p className="text-sm leading-relaxed text-slate-600">
            {ppeFeedback.message}
          </p>

          <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Info className="w-4 h-4 text-cyan-700" />
              <span>Why PPE is Vital in Automotive Logistics</span>
            </div>
            <p className="leading-relaxed">
              In automotive distribution hubs, operatives work directly adjacent to high-speed counterbalance forklifts and multi-ton racking systems. High-visibility clothing reduces vehicle-pedestrian collision risks by over 80%. Safety footwear rated to EN ISO 20345 prevents crushed bones from heavy cast-iron engine components or pallet edges.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}