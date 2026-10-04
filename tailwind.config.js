/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        safety: {
          green: '#10B981',
          amber: '#F59E0B',
          red: '#EF4444',
          blue: '#2563EB',
          dark: '#0B132B',
          surface: '#1C2541',
          card: '#1E293B',
          border: '#334155'
        }
      }
    },
  },
  plugins: [],
};
