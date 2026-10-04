import React from 'react';
import { 
  CheckCircle2, BookOpen, Sparkles, HelpCircle, TrendingUp, Award 
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Select Training",
      icon: BookOpen,
      desc: "Choose from twelve standardized modules covering warehouse fundamentals, plant operations, or emergency protocols."
    },
    {
      step: "02",
      title: "Learn",
      icon: CheckCircle2,
      desc: "Progress through structured, bite-sized lessons with clear learning objectives, visual examples, and critical warnings."
    },
    {
      step: "03",
      title: "Complete Interactive Activities",
      icon: Sparkles,
      desc: "Apply your safety instincts in gamified exercises: PPE gear selection, Bay 4 hazard spotting, and spill scenarios."
    },
    {
      step: "04",
      title: "Take Quiz",
      icon: HelpCircle,
      desc: "Complete the knowledge assessment. Score the configured pass mark or higher to complete the prototype assessment."
    },
    {
      step: "05",
      title: "Track Progress",
      icon: TrendingUp,
      desc: "Monitor your completion metrics, earned safety badges, and review areas needing further review."
    },
    {
      step: "06",
      title: "Earn Certificate",
      icon: Award,
      desc: "Receive an prototype training record with a unique ID and assessment date."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            Guided Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            How SafeLearn Training Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A structured six-step learning journey designed for maximum engagement and practical knowledge retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-4xl font-black text-slate-800 group-hover:text-emerald-900/50 absolute top-4 right-5 transition-colors">
                  {step.step}
                </div>

                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.step}. {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}