import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TrainingProvider } from './context/TrainingContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrainingProvider>
      <App />
    </TrainingProvider>
  </React.StrictMode>,
);