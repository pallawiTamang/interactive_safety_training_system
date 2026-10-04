import React from 'react';
import { 
  Boxes, HardHat, Activity, Truck, BellRing, AlertTriangle, ArrowRight 
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function SafetyTopics() {
  const { loginAs } = useTraining();

  const topics = [
    {
      title: "Warehouse Safety",
      icon: Boxes,
      color: "from-amber-500 to-orange-600",
      code: "HSE-202",
      desc: "Floor markings, high-density aisle navigation, racking collision inspections, and blind-spot mirrors."
    },
    {
      title: "PPE (Personal Protective Equipment)",
      icon: HardHat,
      color: "from-cyan-500 to-blue-600",
      code: "HSE-606",
      desc: "Mandatory EN ISO standards: high-vis vests, steel toe boots, puncture-resistant gloves, and eye guards."
    },
    {
      title: "Manual Handling",
      icon: Activity,
      color: "from-emerald-500 to-teal-600",
      code: "HSE-303",
      desc: "TILE assessment, kinetic lifting posture, load assessment, and spinal injury prevention."
    },
    {
      title: "Forklift Safety",
      icon: Truck,
      color: "from-rose-500 to-red-600",
      code: "HSE-404",
      desc: "Stability triangle dynamics, 5 mph internal speed limit, pedestrian eye contact, and battery charging."
    },
    {
      title: "Emergency Procedures",
      icon: BellRing,
      color: "from-purple-500 to-indigo-600",
      code: "HSE-505",
      desc: "Fire alarm protocols, 100% clear push-bar fire exit routes, and roll-call at Assembly Point C."
    },
    {
      title: "Hazard Awareness",
      icon: AlertTriangle,
      color: "from-yellow-500 to-amber-600",
      code: "HSE-101",
      desc: "Spotting chemical fluid leaks, obstructed walkways, trailing electrical cables, and unstable pallet tiers."
    }
  ];

  return (
    <section id="topics" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            Core Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Automotive Logistics Safety Topics
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Essential training units designed around real-world warehouse risks and statutory health and safety compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <div
                key={i}
                className="bg-white border border-slate-200 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} p-0.5`}>
                    <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-slate-900">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600 px-2 py-0.5 rounded bg-slate-100">
                    {topic.code}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {topic.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {topic.desc}
                </p>

                <button
                  onClick={() => loginAs('employee')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-700"
                >
                  <span>Explore in Learner Mode</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}