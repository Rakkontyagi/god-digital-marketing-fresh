import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { GodDigitalMarketing2025 } from './components/GodDigitalMarketing2025';
import './styles/2025-design-system.css';
import './index.css';

function App2025() {
  return (
    <HelmetProvider>
      <div className="App">
        <GodDigitalMarketing2025 />
      </div>
    </HelmetProvider>
  );
}

export default App2025;
