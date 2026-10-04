import React from 'react';
import { Shield, Building, Layers, CheckCircle, ExternalLink } from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function AboutSystem() {
  const { setLoginModalOpen } = useTraining();
  const companyUrl = import.meta.env.VITE_COMPANY_URL || 'http://localhost:5173';

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200">
              System Background
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-6">
              Purpose-Built for Automotive Logistics & Warehousing
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              Traditional workplace safety training often suffers from low engagement and poor recall due to 
              lengthy static PDF manuals. The SafeLearn system was conceived by <strong className="text-slate-900">EduSpark Technologies (Team 9)</strong> to provide an interactive, simulation-driven training portal tailored specifically for the fast-paced demands of automotive warehousing.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
              Featuring two distinct role-based experiences—an intuitive learner journey for floor operatives and an analytics-driven dashboard for supervisors—the system supports learning about workplace safety while actively empowering shift employees.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setLoginModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold text-xs hover:from-emerald-400 hover:to-teal-500 transition-all"
              >
                Access Prototype Demo
              </button>

              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200 transition-all"
              >
                <span>Visit EduSpark Technologies</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-500/40 bg-black flex items-center justify-center">
                <img src="/assets/eduspark-logo.jpg" alt="EduSpark Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-xs text-slate-600 uppercase font-semibold">Developed By</div>
                <div className="text-base font-bold text-slate-900">EduSpark Technologies</div>
                <div className="text-xs text-cyan-700">Team 9 • CET257 Enterprise Project</div>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Client: Logistics and Warehousing Company (Automotive Sector)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Academic Institution: University of Sunderland</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Academic Tutor: Dr. Becky Allen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>HCI Standard: Nielsen Usability Heuristics & PACT Analysis</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}