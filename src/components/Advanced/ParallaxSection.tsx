import React from 'react';

// Dummy ScrollReveal component to unblock build
export const ScrollReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
}; 