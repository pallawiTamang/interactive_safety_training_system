import React, { useState } from 'react';
import { useTraining } from '../../context/TrainingContext';

export default function LoginModal() {
  const { loginModalOpen, setLoginModalOpen, loginAs, usersList } = useTraining();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!loginModalOpen) return null;

  return (
    <div className="dialog-backdrop">
      <section role="dialog" aria-modal="true" aria-label="Prototype login" className="learning-dialog learning-page" style={{ margin: 0, width: '100%', gap: 16 }}>
        <button aria-label="Close login" onClick={() => setLoginModalOpen(false)}>Close ×</button>
        <span className="eyebrow">SafeLearn prototype</span>
        <h2>Welcome to your training.</h2>
        <p>Choose a demo role, or use the test credentials below. No real employee password is required.</p>
        
        <div className="choice-list">
          <button onClick={() => loginAs('employee')}>Employee Demo · Alex Morgan</button>
          <button onClick={() => loginAs('admin')}>Admin Demo · Marcus Vance</button>
        </div>

        <form onSubmit={e => {
          e.preventDefault();
          const u = username.trim().toLowerCase();
          const matchedUser = usersList.find(usr => usr.id.toLowerCase() === u);
          if (password === 'Demo123!' && (u === 'adm-101' || matchedUser)) {
            setError('');
            loginAs(u === 'adm-101' ? 'admin' : matchedUser.id);
          } else {
            setError('Use ADM-101 or any registered Employee ID (e.g. EMP-4091 to EMP-4095) with password Demo123!');
          }
        }}>
          <label>
            Employee ID
            <input
              required
              className="w-full p-3 border rounded-lg my-2"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="e.g. EMP-4091"
              autoComplete="off"
            />
          </label>
          <label>
            Demo password
            <input
              required
              type="password"
              className="w-full p-3 border rounded-lg my-2"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Demo123!"
              autoComplete="off"
            />
          </label>
          <p className="text-xs text-slate-500">Test accounts: EMP-4091 (Alex Morgan) / ADM-101 (Supervisor) · Password: Demo123!</p>
          {error && <p role="alert" className="text-xs text-rose-600 font-bold">{error}</p>}
          <button className="primary" type="submit">Log in</button>
        </form>
      </section>
    </div>
  );
}

