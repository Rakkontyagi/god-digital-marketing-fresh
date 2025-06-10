import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/2025-design-system.css';
import { initializePerformanceOptimizations } from './utils/performance';

// Initialize performance optimizations immediately
initializePerformanceOptimizations();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);