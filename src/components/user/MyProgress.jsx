import React from 'react';
import {useTraining} from '../../context/TrainingContext';
export default function MyProgress() {
  const { currentUser, modules, attempts, certificates, setViewingCertificate, openModule } = useTraining();

  const userAttempts = attempts.filter(a => (a.employeeId ? a.employeeId.toLowerCase() === currentUser?.id?.toLowerCase() : currentUser?.id === 'EMP-4091'));
  const userCertificates = certificates.filter(c => (c.employeeId ? c.employeeId.toLowerCase() === currentUser?.id?.toLowerCase() : currentUser?.id === 'EMP-4091'));

  return (
    <div className="learning-page">
      <span className="eyebrow">Your learning record</span>
      <h1>Progress you can see.</h1>
      <p>Your progress is saved on this browser. Prototype records are not a professional qualification.</p>
      
      <section className="learning-card">
        <h2>Module progress</h2>
        {modules.map(m => (
          <div className="progress-row" key={m.id}>
            <div>
              <strong>{m.title}</strong>
              <p>{m.progress === 100 ? 'Completed' : m.progress ? 'In progress' : 'Not started'}</p>
            </div>
            <progress value={m.progress} max="100" />
            <span>{m.progress}%</span>
            <button onClick={() => openModule(m.id)}>Review →</button>
          </div>
        ))}
      </section>

      <section className="learning-card">
        <h2>Assessment history</h2>
        {!userAttempts.length ? (
          <p>No submitted attempts yet. Complete guided practice to unlock your assessment.</p>
        ) : (
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Completed</th>
                  <th>Score</th>
                  <th>Pass mark</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {userAttempts.map(a => (
                  <tr key={a.id}>
                    <td>{new Date(a.completedAt).toLocaleString()}</td>
                    <td>{a.score}%</td>
                    <td>{a.passMark}%</td>
                    <td>{a.passed ? 'Passed' : 'Review and retry'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section>
        <h2>Training records</h2>
        {!userCertificates.length ? (
          <p>Pass the assessment to earn your first training record.</p>
        ) : (
          <div className="tutorial-grid">
            {userCertificates.map(c => (
              <article className="learning-card" key={c.id}>
                <span className="eyebrow">{c.certificateNumber}</span>
                <h2>{c.courseName}</h2>
                <p>{c.employeeName} · {c.issueDate} · {c.score}%</p>
                <button className="primary" onClick={() => setViewingCertificate(c)}>View / print record</button>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
