import React from 'react';
import { 
  Play, CheckCircle2, Clock, BarChart, ArrowRight, ShieldCheck, 
  Boxes, Activity, Truck, BellRing, HardHat, Sparkles,
  Layers, Flame, FlaskConical, Zap, Footprints
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function ModuleList() {
  const { modules, openModule, completedModules } = useTraining();

  const iconMap = {
    ShieldAlert: ShieldCheck,
    Boxes: Boxes,
    Activity: Activity,
    Truck: Truck,
    BellRing: BellRing,
    HardHat: HardHat,
    Layers: Layers,
    Flame: Flame,
    FlaskConical: FlaskConical,
    Zap: Zap,
    Footprints: Footprints
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200">
            Course Curriculum
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Health & Safety Training Modules
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Explore available workplace safety units. Complete the manual handling practice and assessment to earn a prototype training record.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-slate-600">Curriculum Completion</div>
            <div className="text-lg font-bold text-emerald-700">
              {completedModules.length} of {modules.length} Completed
            </div>
          </div>
        </div>
      </div>

      {/* 6 Module Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.filter(m => m.status !== 'Archived').map((mod) => {
          const isDone = completedModules.includes(mod.id);
          const IconComp = iconMap[mod.icon] || ShieldCheck;

          return (
            <div
              key={mod.id}
              className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between p-6 shadow-sm ${
                isDone
                  ? 'bg-white border-slate-200 hover:border-emerald-500/40'
                  : 'bg-white border-slate-200 hover:border-slate-200'
              }`}
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                    {mod.code}
                  </span>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      isDone
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1'
                        : mod.progress > 0
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {isDone && <CheckCircle2 className="w-3 h-3" />}
                    {isDone ? 'Completed' : mod.progress > 0 ? 'In Progress' : 'Not Started'}
                  </span>
                </div>

                {/* Visual Icon Box */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${mod.gradient} p-0.5 mb-4 shadow-md`}>
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-slate-900">
                    <IconComp className="w-7 h-7" />
                  </div>
                </div>

                {/* Title & Category */}
                <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                  {mod.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                  {mod.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {mod.description}
                </p>

                {/* Metadata Row */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 py-3 border-y border-slate-200 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Duration: {mod.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart className="w-3.5 h-3.5 text-slate-500" />
                    <span>Level: {mod.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Progress bar and Action button */}
              <div>
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">Progress</span>
                    <span className="font-bold text-slate-900">
                      {isDone ? '100%' : `${mod.progress}%`}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        isDone ? 'bg-emerald-500' : 'bg-gradient-to-r from-emerald-500 to-teal-400'
                      }`}
                      style={{ width: isDone ? '100%' : `${mod.progress}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => openModule(mod.id)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    isDone
                      ? 'bg-slate-100 hover:bg-slate-100 text-slate-600 border border-slate-200'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/20'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isDone ? 'Review Module Lessons' : mod.progress > 0 ? 'Continue Training' : 'Start Module'}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}