import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './LoadingScreen';

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      try {
        // Preload fonts
        if ('fonts' in document) {
          await document.fonts.ready;
        }

        // Preload critical images (if any)
        const criticalImages = [
          // Add any critical image URLs here
        ];

        if (criticalImages.length > 0) {
          await Promise.all(
            criticalImages.map(src => {
              return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = reject;
                img.src = src;
              });
            })
          );
        }

        // Simulate minimal loading time for smooth UX
        await new Promise(resolve => setTimeout(resolve, 100));
        
        setIsInitialized(true);
      } catch (error) {
        console.warn('Some resources failed to preload:', error);
        setIsInitialized(true);
      }
    };

    preloadResources();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (!isInitialized || isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return <>{children}</>;
};