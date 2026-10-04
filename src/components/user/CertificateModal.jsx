import React from 'react';
import { X, Award, ShieldCheck, Printer, Download, CheckCircle } from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function CertificateModal() {
  const { viewingCertificate, setViewingCertificate } = useTraining();

  if (!viewingCertificate) return null;

  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in certificate-overlay">
      <div className="bg-white border-2 border-amber-500/60 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative shadow-sm space-y-6">
        
        {/* Close Button */}
        <button
          onClick={() => setViewingCertificate(null)}
          className="absolute top-5 right-5 text-slate-600 hover:text-slate-900 p-1 rounded-lg hover:bg-slate-100 no-print"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Printable Certificate Canvas */}
        <div id="printable-cert" className="border-4 border-amber-500/80 rounded-2xl p-8 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-50 text-center relative overflow-hidden">
          
          {/* Subtle watermark background */}
          <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
            <ShieldCheck className="w-80 h-80 text-amber-700" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center text-amber-700 mx-auto shadow-lg">
              <Award className="w-9 h-9" />
            </div>

            <div className="text-xs font-mono uppercase tracking-widest text-amber-700">
              SafeLearn Automotive Logistics Training System
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
              Training Completion Record
            </h2>

            <p className="text-xs text-slate-600 uppercase tracking-widest">
              This prototype records that
            </p>

            <div className="text-2xl sm:text-3xl font-black text-amber-800 py-1">
              {viewingCertificate.employeeName}
            </div>

            <div className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              has passed the prototype assessment for:
            </div>

            <div className="text-lg font-extrabold text-slate-900 bg-white border border-slate-200 py-2.5 px-4 rounded-xl inline-block">
              {viewingCertificate.courseName}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 text-left text-xs">
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">Certificate ID</span>
                <strong className="text-slate-600 font-mono">{viewingCertificate.certificateNumber}</strong>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">Assessment Score</span>
                <strong className="text-emerald-700 font-bold">{viewingCertificate.score}% (Passed)</strong>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">Issue Date</span>
                <strong className="text-slate-600">{viewingCertificate.issueDate}</strong>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-[11px] text-slate-600 border-t border-slate-200">
              <span>Demo supervisor: {viewingCertificate.instructor}</span>
              <span className="text-cyan-700">EduSpark Technologies (Team 9)</span>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 no-print">
          <div className="text-xs text-slate-600">
            Classroom prototype record; not an accredited qualification.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrintOrDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-extrabold text-xs hover:from-amber-400 hover:to-yellow-500 shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download / Print Certificate</span>
            </button>
            <button
              onClick={() => setViewingCertificate(null)}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}