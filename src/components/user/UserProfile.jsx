import React from 'react';
import { User, Shield, Award, Mail, Building, Calendar, Zap, CheckCircle2 } from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function UserProfile() {
  const { currentUser, safetyPoints, certificates, completedModules } = useTraining();

  const userInitials = (currentUser?.name || 'Alex Morgan')
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const userCertificates = certificates.filter(c => (c.employeeId ? c.employeeId.toLowerCase() === currentUser?.id?.toLowerCase() : currentUser?.id === 'EMP-4091'));

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200">
          Learner Record
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
          Employee Safety Profile
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Review your personal records, active department assignment, and training certifications.
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 border-b border-slate-200">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-slate-900 font-extrabold text-2xl shadow-lg">
            {userInitials}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-slate-900">{currentUser?.name || 'Alex Morgan'}</h2>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-cyan-700 border border-slate-200">
                {currentUser?.id || 'EMP-4091'}
              </span>
            </div>
            <div className="text-xs text-slate-600">
              Department: <strong className="text-slate-600">{currentUser?.department || 'Bay 4 Inbound Logistics & Component Staging'}</strong>
            </div>
            <div className="text-xs text-slate-600">
              Role: <strong className="text-slate-600">{currentUser?.title || 'Warehouse Shift Specialist (Automotive Parts)'}</strong>
            </div>
          </div>
        </div>

        {/* Profile Attributes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
            <Mail className="w-4 h-4 text-slate-500" />
            <div>
              <span className="text-slate-600 block">Corporate Email</span>
              <strong className="text-slate-600">{currentUser?.email || 'alex.morgan@logistics.demo'}</strong>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
            <Building className="w-4 h-4 text-slate-500" />
            <div>
              <span className="text-slate-600 block">Assigned Sector</span>
              <strong className="text-slate-600">Automotive Logistics Facility</strong>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
            <Zap className="w-4 h-4 text-amber-700" />
            <div>
              <span className="text-slate-600 block">Accumulated Safety Points</span>
              <strong className="text-amber-700 font-bold">{safetyPoints} XP</strong>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
            <Award className="w-4 h-4 text-cyan-700" />
            <div>
              <span className="text-slate-600 block">Accredited Certificates</span>
              <strong className="text-cyan-700 font-bold">{userCertificates.length} Issued</strong>
            </div>
          </div>
        </div>

        {/* Certified Competencies */}
        <div className="pt-4 border-t border-slate-200 space-y-3">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Active Verified Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> HASAWA 1974 Induction
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> PPE Compliance (EN ISO)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> Bay 4 Hazard Spotting
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> Walkway Spill First-Response
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}