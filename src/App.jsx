import React from 'react';
import Tutorials from './components/landing/Tutorials';
import ManualHandling from './components/user/ManualHandling';
import { useTraining } from './context/TrainingContext';

// Landing & Auth
import LandingNav from './components/landing/LandingNav';
import LandingHero from './components/landing/LandingHero';
import SafetyTopics from './components/landing/SafetyTopics';
import HowItWorks from './components/landing/HowItWorks';
import AboutSystem from './components/landing/AboutSystem';
import LandingFooter from './components/landing/LandingFooter';
import LoginModal from './components/auth/LoginModal';

// Employee Portal
import UserNav from './components/user/UserNav';
import UserHome from './components/user/UserHome';
import ModuleList from './components/user/ModuleList';
import LessonViewer from './components/user/LessonViewer';
import ActivityPPE from './components/user/ActivityPPE';
import ActivityHazardSpotting from './components/user/ActivityHazardSpotting';
import ActivityScenario from './components/user/ActivityScenario';
import QuizEngine from './components/user/QuizEngine';
import MyProgress from './components/user/MyProgress';
import UserProfile from './components/user/UserProfile';
import CertificateModal from './components/user/CertificateModal';

// Admin Portal
import AdminSidebar from './components/admin/AdminSidebar';
import AdminHeader from './components/admin/AdminHeader';
import AdminDashboard from './components/admin/AdminDashboard';
import UserManagement from './components/admin/UserManagement';
import TrainingManagement from './components/admin/TrainingManagement';
import QuizManagement from './components/admin/QuizManagement';
import UserProgressAudit from './components/admin/UserProgressAudit';
import ReportsAnalytics from './components/admin/ReportsAnalytics';
import NotificationsCenter from './components/admin/NotificationsCenter';

import { ShieldCheck, User, Sparkles, SwitchCamera, ExternalLink } from 'lucide-react';

export default function App() {
  const { 
    currentUser, 
    currentView, 
    loginAs, 
    logout, 
    toastMessage 
  } = useTraining();
  const companyUrl = import.meta.env.VITE_COMPANY_URL || 'http://localhost:5173';

  // 1. PUBLIC LANDING PAGE (Before Login)
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-white text-slate-600 flex flex-col selection:bg-emerald-500 selection:text-black">
        <LandingNav />
        <main className="flex-grow">
          {currentView === 'about' ? <div className="pt-24"><AboutSystem /></div> : currentView === 'tutorials' ? <Tutorials /> : <><LandingHero /><SafetyTopics /><HowItWorks /></>}
        </main>
        <LandingFooter />
        <LoginModal />
        <Toast toastMessage={toastMessage} />
      </div>
    );
  }

  // 2. EMPLOYEE / USER LEARNER EXPERIENCE
  if (currentUser.role === 'employee') {
    return (
      <div className="min-h-screen bg-white text-slate-600 flex flex-col selection:bg-emerald-500 selection:text-black">
        <UserNav />
        <main className="flex-grow">
          {currentView === 'home' && <UserHome />}
          {currentView === 'manual-handling' && <ManualHandling />}
          {currentView === 'tutorials' && <Tutorials />}
          {currentView === 'modules' && <ModuleList />}
          {currentView === 'lesson' && <LessonViewer />}
          {currentView === 'activity-ppe' && <ActivityPPE />}
          {currentView === 'activity-hazard' && <ActivityHazardSpotting />}
          {currentView === 'activity-scenario' && <ActivityScenario />}
          {currentView === 'quiz' && <QuizEngine />}
          {(currentView === 'progress' || currentView === 'certificates') && <MyProgress />}
          {currentView === 'profile' && <UserProfile />}
        </main>
        <CertificateModal />
        <DemoSwitcherBar loginAs={loginAs} logout={logout} currentRole="employee" companyUrl={companyUrl} />
        <Toast toastMessage={toastMessage} />
      </div>
    );
  }

  // 3. ADMIN / SUPERVISOR MANAGEMENT DASHBOARD
  return (
    <div className="min-h-screen bg-white text-slate-600 flex selection:bg-cyan-500 selection:text-black">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader />
        <main className="flex-grow">
          {currentView === 'dashboard' && <><p className="px-8 pt-4 text-sm text-slate-600">Prototype overview: summary charts contain sample data. Reports show actual locally saved assessment attempts.</p><AdminDashboard /></>}
          {currentView === 'lesson' && <LessonViewer />}
          {currentView === 'users' && <UserManagement />}
          {currentView === 'modules-mgmt' && <TrainingManagement />}
          {currentView === 'quiz-mgmt' && <QuizManagement />}
          {currentView === 'user-progress' && <UserProgressAudit />}
          {currentView === 'reports' && <ReportsAnalytics />}
          {currentView === 'notifications' && <NotificationsCenter />}
          {currentView === 'settings' && <QuizManagement />}
        </main>
      </div>
      <DemoSwitcherBar loginAs={loginAs} logout={logout} currentRole="admin" companyUrl={companyUrl} />
      <Toast toastMessage={toastMessage} />
    </div>
  );
}

// Floating Demo Control Bar for rapid evaluator demonstration
function DemoSwitcherBar({ loginAs, logout, currentRole, companyUrl }) {
  const { usersList } = useTraining();
  return (
    <aside aria-label="Demo Controls" className="fixed bottom-4 right-4 z-50 bg-white backdrop-blur-md border border-slate-200 rounded-2xl p-2.5 shadow-sm flex items-center gap-2 text-xs no-print">
      <span className="text-[10px] font-mono text-slate-600 font-bold px-1.5 uppercase hidden sm:inline">
        Evaluator Switcher:
      </span>
      {currentRole === 'employee' ? (
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => loginAs('admin')}
            className="px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-50 border border-blue-700/80 text-cyan-700 font-bold flex items-center gap-1.5 transition-colors"
            title="Switch directly to Supervisor Management Dashboard"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-700" />
            <span>Switch to Admin</span>
          </button>
          <select
            value=""
            onChange={(e) => { if (e.target.value) loginAs(e.target.value); }}
            className="px-2 py-1.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold focus:outline-none"
            title="Switch to a specific trainee portal"
          >
            <option value="" disabled>Switch to Trainee...</option>
            {usersList.map(u => (
              <option key={u.id} value={u.id}>{u.name} ({u.id})</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => loginAs('employee')}
            className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-50 border border-emerald-700/80 text-emerald-700 font-bold flex items-center gap-1.5 transition-colors"
            title="Switch directly to Employee Learner Portal (Alex Morgan)"
          >
            <User className="w-3.5 h-3.5 text-emerald-700" />
            <span>Switch to Learner</span>
          </button>
          <select
            value=""
            onChange={(e) => { if (e.target.value) loginAs(e.target.value); }}
            className="px-2 py-1.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold focus:outline-none"
            title="Switch to a specific trainee portal"
          >
            <option value="" disabled>Switch to Trainee...</option>
            {usersList.map(u => (
              <option key={u.id} value={u.id}>{u.name} ({u.id})</option>
            ))}
          </select>
        </div>
      )}

      <a
        href={companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-100 text-slate-600 text-xs font-semibold flex items-center gap-1 transition-colors"
        title="Open EduSpark Technologies company promotional site"
      >
        <span>EduSpark Site</span>
        <ExternalLink className="w-3 h-3 opacity-60" />
      </a>

      <button
        onClick={logout}
        className="px-2 py-1.5 rounded-lg hover:bg-rose-50 text-rose-700 font-bold text-xs"
        title="Sign Out to Public Landing"
      >
        Sign Out
      </button>
    </aside>
  );
}

// Toast Alert Notification
function Toast({ toastMessage }) {
  if (!toastMessage) return null;
  return (
    <div className="fixed top-20 right-6 z-50 animate-in slide-in-from-top duration-200">
      <div className={`px-4 py-3 rounded-xl border shadow-sm text-xs font-bold flex items-center gap-2 ${
        toastMessage.type === 'success'
          ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
          : toastMessage.type === 'warning'
          ? 'bg-amber-50 border-amber-500 text-amber-700'
          : 'bg-white border-cyan-500 text-cyan-700'
      }`}>
        <Sparkles className="w-4 h-4" />
        <span>{toastMessage.message}</span>
      </div>
    </div>
  );
}