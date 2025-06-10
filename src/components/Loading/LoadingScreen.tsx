import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GodDigitalLoadingLogo } from '../Brand/GodDigitalLogo';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState<'initializing' | 'loading' | 'optimizing' | 'complete'>('initializing');

  useEffect(() => {
    // Ultra-sophisticated loading sequence
    const phases = [
      { phase: 'initializing', duration: 200, progressEnd: 25 },
      { phase: 'loading', duration: 300, progressEnd: 70 },
      { phase: 'optimizing', duration: 200, progressEnd: 95 },
      { phase: 'complete', duration: 100, progressEnd: 100 }
    ];

    let currentPhaseIndex = 0;
    let currentProgress = 0;

    const updateProgress = () => {
      const currentPhase = phases[currentPhaseIndex];
      if (!currentPhase) return;

      setLoadingPhase(currentPhase.phase as any);
      
      const increment = (currentPhase.progressEnd - currentProgress) / (currentPhase.duration / 20);
      
      const interval = setInterval(() => {
        currentProgress += increment;
        setProgress(Math.min(currentProgress, currentPhase.progressEnd));
        
        if (currentProgress >= currentPhase.progressEnd) {
          clearInterval(interval);
          currentPhaseIndex++;
          
          if (currentPhaseIndex < phases.length) {
            setTimeout(updateProgress, 50);
          } else {
            setIsComplete(true);
            setTimeout(onLoadingComplete, 300);
          }
        }
      }, 20);
    };

    updateProgress();
  }, [onLoadingComplete]);

  const getLoadingMessage = () => {
    switch (loadingPhase) {
      case 'initializing': return 'Initializing Digital Excellence...';
      case 'loading': return 'Loading Revolutionary Experience...';
      case 'optimizing': return 'Optimizing Performance...';
      case 'complete': return 'Welcome to the Future';
      default: return 'Loading...';
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
        >
          {/* Advanced background effects */}
          <div className="absolute inset-0">
            {/* Gradient mesh */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.3) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            {/* Animated grid */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '60px 60px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Floating orbs */}
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-32 h-32 rounded-full bg-gradient-radial from-white/10 to-transparent blur-xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 1
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center max-w-md mx-auto px-4">
            {/* Revolutionary logo */}
            <motion.div
              className="mb-12"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1,
                ease: "easeOut",
                type: "spring",
                stiffness: 200
              }}
            >
              <GodDigitalLoadingLogo />
            </motion.div>

            {/* Advanced progress visualization */}
            <motion.div
              className="mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Progress track */}
              <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Progress fill */}
                <motion.div
                  className="relative h-full bg-gradient-to-r from-white via-gray-200 to-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ 
                    duration: 0.1,
                    ease: "easeOut"
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full blur-sm"
                    animate={{
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Progress percentage */}
              <motion.div
                className="flex justify-between items-center mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <span className="text-gray-400 text-sm font-medium">
                  {Math.round(progress)}%
                </span>
                <motion.span
                  className="text-white text-sm font-medium"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {loadingPhase.toUpperCase()}
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Loading message with typewriter effect */}
            <motion.div
              className="text-white text-lg font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.span
                key={loadingPhase}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {getLoadingMessage()}
              </motion.span>
            </motion.div>

            {/* Tech specs */}
            <motion.div
              className="text-gray-500 text-xs space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <div className="flex justify-between">
                <span>AI Engine</span>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ACTIVE
                </motion.span>
              </div>
              <div className="flex justify-between">
                <span>Performance</span>
                <span>OPTIMIZED</span>
              </div>
              <div className="flex justify-between">
                <span>Security</span>
                <span>SECURED</span>
              </div>
            </motion.div>

            {/* Completion animation */}
            <AnimatePresence>
              {progress >= 100 && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-3xl font-bold text-white mb-3"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      Experience Ready
                    </motion.div>
                    <motion.div
                      className="text-gray-300 text-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      God Digital Marketing
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Premium corner accents */}
          <motion.div
            className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-white/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-white/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          {/* Diagonal accents */}
          <motion.div
            className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-white/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-white/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Floating particles for premium atmosphere */}
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};