import React from 'react';
import { 
  Users, BookOpen, CheckCircle2, Clock, Award, TrendingUp, AlertTriangle, 
  BarChart2, ArrowUpRight, ArrowDownRight, ShieldCheck 
} from 'lucide-react';
import { adminKPIs } from '../../data/demoData';
import { useTraining } from '../../context/TrainingContext';

export default function AdminDashboard() {
  const { setCurrentView } = useTraining();

  const completionByDept = [
    { dept: "Bay 4 Inbound Logistics", completion: 92, count: 42 },
    { dept: "Automotive Parts Assembly", completion: 96, count: 38 },
    { dept: "Forklift Fleet Operations", completion: 88, count: 26 },
    { dept: "Dispatch & Outbound", completion: 82, count: 24 },
    { dept: "High-Bay Bulk Storage", completion: 74, count: 18 }
  ];

  const modulePopularity = [
    { name: "HSE-101 Workplace Safety", learners: 148, rate: "100%" },
    { name: "HSE-202 Warehouse Safety", learners: 136, rate: "92%" },
    { name: "HSE-303 Manual Handling", learners: 142, rate: "96%" },
    { name: "HSE-404 Forklift Safety", learners: 112, rate: "76%" },
    { name: "HSE-505 Emergency Egress", learners: 98, rate: "66%" },
    { name: "HSE-606 PPE Standards", learners: 130, rate: "88%" }
  ];

  return (
    <div className="p-6 sm:p-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-50 border border-cyan-200">
            Supervisor Executive View
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Safety Compliance & Training Overview
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Real-time audit metrics for the automotive logistics warehouse workforce.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentView('reports')}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200 transition-colors"
          >
            Export Compliance Report
          </button>
          <button
            onClick={() => setCurrentView('users')}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-extrabold transition-colors"
          >
            Manage User Roster
          </button>
        </div>
      </div>

      {/* 6 Core KPI Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-600 mb-1">
            <span className="text-xs font-semibold">Total Users</span>
            <Users className="w-4 h-4 text-cyan-700" />
          </div>
          <div className="text-2xl font-black text-slate-900">{adminKPIs.totalUsers}</div>
          <div className="text-[11px] text-emerald-700 flex items-center gap-0.5 mt-1 font-semibold">
            <ArrowUpRight className="w-3 h-3" /> +12 this month
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-600 mb-1">
            <span className="text-xs font-semibold">Active Learners</span>
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="text-2xl font-black text-slate-900">{adminKPIs.activeLearners}</div>
          <div className="text-[11px] text-slate-600 mt-1">84% workforce active</div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-600 mb-1">
            <span className="text-xs font-semibold">Curriculum Units</span>
            <BookOpen className="w-4 h-4 text-blue-700" />
          </div>
          <div className="text-2xl font-black text-slate-900">{adminKPIs.trainingModules}</div>
          <div className="text-[11px] text-slate-600 mt-1">HSE-101 to HSE-706</div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-600 mb-1">
            <span className="text-xs font-semibold">Completed Training</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="text-2xl font-black text-emerald-700">{adminKPIs.completedTrainings}%</div>
          <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-0.5 mt-1">
            <ArrowUpRight className="w-3 h-3" /> Statutory target met
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-600 mb-1">
            <span className="text-xs font-semibold">Pending Modules</span>
            <Clock className="w-4 h-4 text-amber-700" />
          </div>
          <div className="text-2xl font-black text-amber-700">{adminKPIs.pendingTrainings}</div>
          <div className="text-[11px] text-amber-700 mt-1">Due within 14 days</div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-600 mb-1">
            <span className="text-xs font-semibold">Average Exam Mark</span>
            <Award className="w-4 h-4 text-purple-700" />
          </div>
          <div className="text-2xl font-black text-purple-700">{adminKPIs.averageQuizScore}%</div>
          <div className="text-[11px] text-slate-600 mt-1">Passing mark: 70%</div>
        </div>
      </div>

      {/* Visual Charts Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Chart 1: Training Completion by Department */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Departmental Compliance Rates</h3>
              <p className="text-xs text-slate-600 mt-0.5">Statutory completion benchmark (85% target)</p>
            </div>
            <span className="text-xs font-mono text-cyan-700">Total: 148 staff</span>
          </div>

          <div className="space-y-4 pt-2">
            {completionByDept.map((item, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 font-medium">{item.dept} ({item.count} operatives)</span>
                  <span className="font-bold text-slate-900">{item.completion}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.completion >= 90
                        ? 'bg-emerald-500'
                        : item.completion >= 80
                        ? 'bg-cyan-500'
                        : 'bg-amber-500'
                    }`}
                    style={{ width: `${item.completion}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 2: Module Popularity & Completion Ratios */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Curriculum Adoption</h3>
              <p className="text-xs text-slate-600 mt-0.5">Learners enrolled per module</p>
            </div>
            <BarChart2 className="w-4 h-4 text-slate-500" />
          </div>

          <div className="space-y-3 pt-2">
            {modulePopularity.map((mod, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-bold text-slate-900">{mod.name}</div>
                  <div className="text-[10px] text-slate-600">{mod.learners} Active Learners</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-slate-100 text-cyan-700 font-bold font-mono">
                  {mod.rate}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}