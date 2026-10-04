import React, { useState } from 'react';
import { 
  HelpCircle, ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCw, 
  Award, AlertTriangle, ShieldCheck, Sparkles 
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';
import confetti from 'canvas-confetti';

export default function QuizEngine() {
  const { 
    practiceComplete,
    quizQuestions, 
    quizAnswers, 
    quizSubmitted, 
    quizScore, 
    quizPassed, 
    adminPassMark, 
    answerQuizQuestion, 
    submitQuiz, 
    resetQuiz, 
    setCurrentView, 
    setViewingCertificate, 
    certificates 
  } = useTraining();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [reviewMode, setReviewMode] = useState(false);

  const totalQ = quizQuestions.length;
  const currentQ = quizQuestions[currentIdx];
  const answeredCount = Object.keys(quizAnswers).length;
  const isAllAnswered = answeredCount === totalQ;

  const handleFinishAndSubmit = () => {
    submitQuiz();
    if (Math.round(quizQuestions.filter(q => quizAnswers[q.id] === q.correctAnswer).length / totalQ * 100) >= adminPassMark) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  };

  if (!practiceComplete && !quizSubmitted) return <div className="learning-page"><span className="eyebrow">Assessment preparation</span><h1>Practice before your assessment</h1><p>Complete the warehouse orientation and guided lifting sequence first. The pass mark is {adminPassMark}%.</p><button className="primary" onClick={() => setCurrentView('activity-hazard')}>Start warehouse orientation</button></div>;
  if (!currentQ) return <div className="learning-page"><h1>No assessment questions available</h1><p>Ask your supervisor to add questions.</p></div>;
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-wider px-2.5 py-1 rounded bg-purple-50 border border-purple-200">
              Formal Knowledge Examination
            </span>
            <span className="text-xs text-slate-600 font-mono">Passing Threshold: {adminPassMark}%</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Warehouse Safety & Manual Handling Assessment
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Apply the load assessment, lifting, carrying and lowering decisions you practised.
          </p>
        </div>

        {!quizSubmitted && (
          <div className="text-right">
            <div className="text-xs text-slate-600">Answered Questions</div>
            <div className="text-xl font-black text-slate-900">
              {answeredCount} <span className="text-slate-500 text-sm">/ {totalQ}</span>
            </div>
          </div>
        )}
      </div>

      {/* 1. QUIZ QUESTION PLAYER (When not submitted) */}
      {!quizSubmitted ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Progress Bar & Question Number */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-slate-600">
              <span>Question {currentIdx + 1} of {totalQ}</span>
              <span>{Math.round(((currentIdx + 1) / totalQ) * 100)}% Complete</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / totalQ) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Prompt */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-relaxed">
              {currentQ.question}
            </h2>
          </div>

          {/* Options Grid */}
          <div className="space-y-3">
            {currentQ.options.map((opt, optIndex) => {
              const isSelected = quizAnswers[currentQ.id] === optIndex;
              return (
                <div
                  key={optIndex}
                  role="radio" tabIndex={0} aria-checked={isSelected}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); answerQuizQuestion(currentQ.id, optIndex); } }}
                  onClick={() => answerQuizQuestion(currentQ.id, optIndex)}
                  className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-purple-50 border-purple-500 text-slate-900 shadow-md shadow-purple-950/40'
                      : 'bg-white border-slate-200 hover:border-slate-500 text-slate-600'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isSelected ? 'bg-purple-500 text-slate-900' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {String.fromCharCode(65 + optIndex)}
                  </div>
                  <div className="text-sm sm:text-base font-medium flex-grow">
                    {opt}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
              disabled={currentIdx === 0}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-100 text-slate-600 text-xs font-bold disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Question</span>
            </button>

            {/* Indicator dots */}
            <div className="flex items-center gap-1.5">
              {quizQuestions.map((q, idx) => (
                <span
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full ${
                    quizAnswers[q.id] !== undefined
                      ? 'bg-purple-400'
                      : 'bg-slate-100'
                  }`}
                />
              ))}
            </div>

            {currentIdx < totalQ - 1 ? (
              <button
                onClick={() => setCurrentIdx(currentIdx + 1)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-slate-900 text-xs font-bold transition-colors"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinishAndSubmit}
                disabled={!isAllAnswered}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black text-xs font-black hover:from-emerald-400 hover:to-teal-500 disabled:opacity-40 disabled:pointer-events-none shadow-lg shadow-emerald-500/25 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Submit Assessment</span>
              </button>
            )}
          </div>

        </div>
      ) : (
        /* 2. QUIZ RESULT SCORECARD (When submitted) */
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 animate-in fade-in">
          
          {/* Result Banner */}
          <div className={`p-8 rounded-3xl border-2 text-center space-y-4 ${
            quizPassed
              ? 'bg-gradient-to-b from-emerald-950/40 to-slate-50 border-emerald-500 text-emerald-700'
              : 'bg-gradient-to-b from-rose-950/40 to-slate-50 border-rose-500 text-rose-700'
          }`}>
            
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${
              quizPassed ? 'bg-emerald-500 text-black' : 'bg-rose-500 text-slate-900'
            }`}>
              {quizPassed ? <Award className="w-9 h-9" /> : <AlertTriangle className="w-9 h-9" />}
            </div>

            <div>
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                quizPassed ? 'bg-emerald-50 text-emerald-700 border border-emerald-700' : 'bg-rose-50 text-rose-700 border border-rose-700'
              }`}>
                {quizPassed ? "Assessment Passed" : "Assessment Unsuccessful"}
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-3">
                {quizScore}% Score
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                {quizPassed
                  ? `Congratulations! You scored ${quizScore}%, exceeding the required ${adminPassMark}% passing standard. Your prototype training record is unlocked.`
                  : `You scored ${quizScore}%. You need at least ${adminPassMark}% to qualify for certification. Please review the questions below and retry.`}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {quizPassed && certificates.length > 0 && (
                <button
                  onClick={() => setViewingCertificate(certificates[0])}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-extrabold text-xs hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>View Training Record</span>
                </button>
              )}

              <button
                onClick={() => { setCurrentIdx(0); resetQuiz(); }}
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-100 text-slate-600 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry Assessment</span>
              </button>

              <button
                onClick={() => setCurrentView('home')}
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-100 text-slate-600 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-2"
              >
                <span>Continue Training</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Detailed Question Review Breakdown */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-700" />
              <span>Answer Review & Learning Feedback</span>
            </h3>

            <div className="space-y-4">
              {quizQuestions.map((q, idx) => {
                const userAns = quizAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border-2 space-y-3 ${
                      isCorrect
                        ? 'bg-emerald-50 border-emerald-200'
                        : 'bg-rose-50 border-rose-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-xs font-bold text-slate-600 uppercase font-mono">
                        Question {idx + 1}
                      </div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                        isCorrect ? 'text-emerald-700 bg-emerald-50' : 'text-rose-700 bg-rose-50'
                      }`}>
                        {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {isCorrect ? 'Correct (+1)' : 'Incorrect (0)'}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {q.question}
                    </h4>

                    <div className="text-xs space-y-1 pt-1">
                      <div className="text-slate-600">
                        Your answer: <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                          {userAns !== undefined ? q.options[userAns] : 'Not Answered'}
                        </strong>
                      </div>
                      {!isCorrect && (
                        <div className="text-slate-600">
                          Correct answer: <strong className="text-emerald-700">{q.options[q.correctAnswer]}</strong>
                        </div>
                      )}
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600">
                      <strong>Feedback:</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      )}

    </div>
  );
}