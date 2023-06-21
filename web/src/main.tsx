import React from 'react';
import { createRoot } from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import App from './components/App';
import './index.css';

const root = document.getElementById('root');
if (root) {
  const app = (
    <React.StrictMode>
      <VisibilityProvider>
        <App />
      </VisibilityProvider>
    </React.StrictMode>
  );
  createRoot(root).render(app);
}