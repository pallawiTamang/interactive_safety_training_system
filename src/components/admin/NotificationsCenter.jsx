import React, { useState } from 'react';
import { 
  Bell, Plus, Send, CheckCircle2, Clock, AlertTriangle, UserPlus, X 
} from 'lucide-react';
import { useTraining } from '../../context/TrainingContext';

export default function NotificationsCenter() {
  const { notifications, setNotifications, showToast } = useTraining();
  const [showSendModal, setShowSendModal] = useState(false);
  const [newNotice, setNewNotice] = useState({
    title: '',
    type: 'reminder',
    content: ''
  });

  const handleSendNotification = (e) => {
    e.preventDefault();
    if (!newNotice.title || !newNotice.content) return;
    const item = {
      id: Date.now(),
      title: newNotice.title,
      type: newNotice.type,
      timestamp: 'Just now',
      content: newNotice.content
    };
    setNotifications([item, ...notifications]);
    setShowSendModal(false);
    setNewNotice({ title: '', type: 'reminder', content: '' });
    showToast(`Broadcasted notification: "${item.title}"`, 'success');
  };

  const getIcon = (type) => {
    switch (type) {
      case 'reminder':
        return <Clock className="w-4 h-4 text-cyan-700" />;
      case 'alert':
        return <AlertTriangle className="w-4 h-4 text-amber-700" />;
      case 'user':
        return <UserPlus className="w-4 h-4 text-emerald-700" />;
      case 'assessment':
      default:
        return <CheckCircle2 className="w-4 h-4 text-purple-700" />;
    }
  };

  return (
    <div className="p-6 sm:p-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-50 border border-cyan-200">
            Internal Communications
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Safety Notifications & Broadcast Center
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Dispatch urgent safety bulletins, training deadlines, and compliance reminders to operators.
          </p>
        </div>

        <button
          onClick={() => setShowSendModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold text-xs hover:from-cyan-400 hover:to-blue-500 shadow-md transition-all"
        >
          <Send className="w-4 h-4" />
          <span>Send Notification</span>
        </button>
      </div>

      {/* Notifications Roster */}
      <div className="space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 hover:border-slate-200 transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              {getIcon(notif.type)}
            </div>

            <div className="flex-grow space-y-1">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-slate-900">{notif.title}</h4>
                <span className="text-[11px] font-mono text-slate-500">{notif.timestamp}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {notif.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Send Notification Modal */}
      {showSendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-sm">
            <button
              onClick={() => setShowSendModal(false)}
              className="absolute top-5 right-5 text-slate-600 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">Broadcast Safety Notice</h3>
            <p className="text-xs text-slate-600 mb-6">Send an immediate message to warehouse learner dashboards.</p>

            <form onSubmit={handleSendNotification} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Notice Title</label>
                <input
                  type="text"
                  required
                  value={newNotice.title}
                  onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                  placeholder="e.g. Mandatory HSE-404 Refresher Deadline"
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Notice Type</label>
                <select
                  value={newNotice.type}
                  onChange={(e) => setNewNotice({ ...newNotice, type: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="reminder">Training Reminder</option>
                  <option value="alert">Critical Safety Alert</option>
                  <option value="user">New User Welcome</option>
                  <option value="assessment">Assessment Result</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Message Content</label>
                <textarea
                  rows={3}
                  required
                  value={newNotice.content}
                  onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                  placeholder="Details of the requirement or safety update..."
                  className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs resize-none focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowSendModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-xs font-extrabold"
                >
                  Broadcast Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}