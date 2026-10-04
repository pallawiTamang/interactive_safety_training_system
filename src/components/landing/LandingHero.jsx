import React from 'react';
import { ShieldCheck, Play, ArrowRight, CheckCircle, AlertTriangle, Users, Award } from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function LandingHero() {
  const { setLoginModalOpen, loginAs } = useTraining();

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Interactive Health & Safety Training System</span>
            <span className="text-slate-500">•</span>
            <span>Automotive Warehousing</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Interactive Health & Safety Training
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-3xl sm:text-5xl">
              Learn. Practise. Identify Hazards. Stay Safe.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            Designed specifically for warehouse operations and automotive parts distribution. 
            Engage with interactive hazard spotting, real-time safety scenarios, PPE practice, 
            and earn digital prototype training records.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => loginAs('employee')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-extrabold text-sm hover:from-emerald-400 hover:to-teal-500 shadow-sm shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Start Training (Learner Demo)</span>
            </button>

            <button
              onClick={() => setLoginModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 font-semibold text-sm transition-all"
            >
              <span>Login / Select Role</span>
              <ArrowRight className="w-4 h-4 text-emerald-700" />
            </button>
          </div>

        </div>

        {/* Hero Interactive Preview Banner */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-slate-50 via-slate-50 to-slate-50 border border-slate-200 p-6 sm:p-8 shadow-sm relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Modules</span>
              </div>
              <div className="text-2xl font-black text-slate-900">12 Units</div>
              <div className="text-xs text-slate-600">HSE & ISO 45001</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span>Bay 4 Hazard Sim</span>
              </div>
              <div className="text-2xl font-black text-slate-900">6 Hotspots</div>
              <div className="text-xs text-slate-600">Interactive Discovery</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <div className="flex items-center gap-2 text-cyan-700 text-xs font-bold uppercase mb-1">
                <Award className="w-4 h-4" />
                <span>Pass Mark</span>
              </div>
              <div className="text-2xl font-black text-slate-900">70% Pass</div>
              <div className="text-xs text-slate-600">Verifiable Certificates</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <div className="flex items-center gap-2 text-purple-700 text-xs font-bold uppercase mb-1">
                <Users className="w-4 h-4" />
                <span>Supervision</span>
              </div>
              <div className="text-2xl font-black text-slate-900">Admin Console</div>
              <div className="text-xs text-slate-600">Rosters & Audits</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}