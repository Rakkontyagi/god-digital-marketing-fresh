import React from 'react';
import { motion } from 'framer-motion';

interface GodDigitalLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  variant?: 'full' | 'icon' | 'text' | 'minimal';
  animated?: boolean;
  className?: string;
  theme?: 'light' | 'dark' | 'gradient';
}

export const GodDigitalLogo: React.FC<GodDigitalLogoProps> = ({
  size = 'md',
  variant = 'full',
  animated = true,
  className = '',
  theme = 'gradient'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24',
    xxl: 'h-32'
  };

  const LogoIcon = () => (
    <motion.div
      className="relative flex items-center justify-center"
      initial={animated ? { scale: 0.8, opacity: 0 } : {}}
      animate={animated ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Revolutionary geometric logo */}
      <svg
        viewBox="0 0 80 80"
        className={`${sizeClasses[size]} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer rotating ring */}
        <motion.circle
          cx="40"
          cy="40"
          r="38"
          stroke="url(#outerGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="8 4"
          initial={animated ? { pathLength: 0, rotate: -90 } : {}}
          animate={animated ? { pathLength: 1, rotate: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Middle hexagonal structure */}
        <motion.g
          initial={animated ? { scale: 0, rotate: 180 } : {}}
          animate={animated ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <path
            d="M40 12 L58 26 L58 54 L40 68 L22 54 L22 26 Z"
            fill="url(#hexGradient)"
            stroke="url(#hexStroke)"
            strokeWidth="1.5"
            fillOpacity="0.1"
          />
        </motion.g>

        {/* Central diamond core */}
        <motion.g
          initial={animated ? { scale: 0, rotate: -180 } : {}}
          animate={animated ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <path
            d="M40 20 L55 35 L40 50 L25 35 Z"
            fill="url(#coreGradient)"
            stroke="url(#coreStroke)"
            strokeWidth="2"
          />
        </motion.g>

        {/* Inner sacred geometry */}
        <motion.g
          initial={animated ? { opacity: 0, scale: 0.5 } : {}}
          animate={animated ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {/* Central point */}
          <circle cx="40" cy="40" r="3" fill="url(#centerPoint)" />
          
          {/* Four directional nodes */}
          <circle cx="40" cy="25" r="2" fill="url(#nodeGradient)" />
          <circle cx="55" cy="40" r="2" fill="url(#nodeGradient)" />
          <circle cx="40" cy="55" r="2" fill="url(#nodeGradient)" />
          <circle cx="25" cy="40" r="2" fill="url(#nodeGradient)" />
          
          {/* Connecting energy lines */}
          <motion.line
            x1="40" y1="27" x2="40" y2="37"
            stroke="url(#energyGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={animated ? { pathLength: 0 } : {}}
            animate={animated ? { pathLength: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.2 }}
          />
          <motion.line
            x1="53" y1="40" x2="43" y2="40"
            stroke="url(#energyGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={animated ? { pathLength: 0 } : {}}
            animate={animated ? { pathLength: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.3 }}
          />
          <motion.line
            x1="40" y1="53" x2="40" y2="43"
            stroke="url(#energyGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={animated ? { pathLength: 0 } : {}}
            animate={animated ? { pathLength: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.4 }}
          />
          <motion.line
            x1="27" y1="40" x2="37" y2="40"
            stroke="url(#energyGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={animated ? { pathLength: 0 } : {}}
            animate={animated ? { pathLength: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.5 }}
          />
        </motion.g>

        {/* Orbital elements */}
        <motion.g
          animate={animated ? { rotate: 360 } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '40px 40px' }}
        >
          <circle cx="40" cy="15" r="1.5" fill="url(#orbitalGradient)" opacity="0.8" />
          <circle cx="65" cy="40" r="1.5" fill="url(#orbitalGradient)" opacity="0.8" />
          <circle cx="40" cy="65" r="1.5" fill="url(#orbitalGradient)" opacity="0.8" />
          <circle cx="15" cy="40" r="1.5" fill="url(#orbitalGradient)" opacity="0.8" />
        </motion.g>

        {/* Counter-rotating outer elements */}
        <motion.g
          animate={animated ? { rotate: -360 } : {}}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '40px 40px' }}
        >
          <circle cx="40" cy="8" r="1" fill="url(#outerOrbital)" opacity="0.6" />
          <circle cx="72" cy="40" r="1" fill="url(#outerOrbital)" opacity="0.6" />
          <circle cx="40" cy="72" r="1" fill="url(#outerOrbital)" opacity="0.6" />
          <circle cx="8" cy="40" r="1" fill="url(#outerOrbital)" opacity="0.6" />
        </motion.g>

        {/* Advanced gradient definitions */}
        <defs>
          <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#f8fafc" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.7" />
            <stop offset="75%" stopColor="#cbd5e1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.9" />
          </linearGradient>
          
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#f1f5f9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.1" />
          </linearGradient>
          
          <linearGradient id="hexStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4" />
          </linearGradient>
          
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#f8fafc" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#e2e8f0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.3" />
          </radialGradient>
          
          <linearGradient id="coreStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          
          <radialGradient id="centerPoint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </radialGradient>
          
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.7" />
          </radialGradient>
          
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f1f5f9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.6" />
          </linearGradient>
          
          <radialGradient id="orbitalGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </radialGradient>
          
          <radialGradient id="outerOrbital" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#64748b" />
          </radialGradient>
        </defs>
      </svg>

      {/* Premium glow effects */}
      {animated && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full bg-white/5 blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-white/10 blur-lg"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </>
      )}
    </motion.div>
  );

  const LogoText = () => (
    <motion.div
      className="flex items-center"
      initial={animated ? { opacity: 0, x: -30 } : {}}
      animate={animated ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col">
        <motion.div
          className="flex items-baseline space-x-1"
          initial={animated ? { opacity: 0 } : {}}
          animate={animated ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.span
            className={`font-bold text-white ${
              size === 'sm' ? 'text-lg' :
              size === 'md' ? 'text-2xl' :
              size === 'lg' ? 'text-3xl' :
              size === 'xl' ? 'text-4xl' :
              'text-5xl'
            }`}
            initial={animated ? { opacity: 0, y: 20 } : {}}
            animate={animated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            God
          </motion.span>
          <motion.span
            className={`font-light text-gray-200 ${
              size === 'sm' ? 'text-lg' :
              size === 'md' ? 'text-2xl' :
              size === 'lg' ? 'text-3xl' :
              size === 'xl' ? 'text-4xl' :
              'text-5xl'
            }`}
            initial={animated ? { opacity: 0, y: 20 } : {}}
            animate={animated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Digital
          </motion.span>
        </motion.div>
        <motion.span
          className={`font-medium text-gray-400 tracking-wider ${
            size === 'sm' ? 'text-xs' :
            size === 'md' ? 'text-sm' :
            size === 'lg' ? 'text-base' :
            size === 'xl' ? 'text-lg' :
            'text-xl'
          }`}
          initial={animated ? { opacity: 0, y: 10 } : {}}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          MARKETING
        </motion.span>
      </div>
    </motion.div>
  );

  const MinimalLogo = () => (
    <motion.div
      className="flex items-center space-x-3"
      initial={animated ? { opacity: 0, scale: 0.9 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Simplified geometric mark */}
      <div className="relative">
        <svg
          viewBox="0 0 32 32"
          className={`${sizeClasses[size]} w-auto`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="16"
            cy="16"
            r="14"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            initial={animated ? { pathLength: 0 } : {}}
            animate={animated ? { pathLength: 1 } : {}}
            transition={{ duration: 1.2 }}
          />
          <motion.path
            d="M16 6 L24 14 L16 22 L8 14 Z"
            fill="white"
            fillOpacity="0.9"
            initial={animated ? { scale: 0 } : {}}
            animate={animated ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <circle cx="16" cy="3" r="1.5" fill="white" />
          <circle cx="29" cy="16" r="1.5" fill="white" />
          <circle cx="16" cy="29" r="1.5" fill="white" />
          <circle cx="3" cy="16" r="1.5" fill="white" />
        </svg>
        
        {animated && (
          <motion.div
            className="absolute inset-0 border border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>

      <motion.div
        className="flex items-center"
        initial={animated ? { opacity: 0, x: -10 } : {}}
        animate={animated ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span className="text-white font-bold text-xl">God</span>
        <span className="text-gray-400 font-light text-xl ml-1">Digital</span>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      className={`flex items-center ${variant === 'full' ? 'space-x-6' : variant === 'minimal' ? '' : ''} ${className}`}
      whileHover={animated ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {variant === 'full' && (
        <>
          <LogoIcon />
          <LogoText />
        </>
      )}
      {variant === 'icon' && <LogoIcon />}
      {variant === 'text' && <LogoText />}
      {variant === 'minimal' && <MinimalLogo />}
    </motion.div>
  );
};

// Navigation optimized version
export const GodDigitalNavLogo: React.FC<{ animated?: boolean }> = ({ animated = false }) => (
  <GodDigitalLogo size="md" variant="minimal" animated={animated} />
);

// Favicon version
export const GodDigitalFavicon: React.FC = () => (
  <svg
    viewBox="0 0 32 32"
    className="w-8 h-8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="6" fill="#000000" />
    <circle
      cx="16"
      cy="16"
      r="12"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M16 8 L20 12 L16 16 L12 12 Z"
      fill="white"
    />
    <circle cx="16" cy="5" r="1" fill="white" />
    <circle cx="27" cy="16" r="1" fill="white" />
    <circle cx="16" cy="27" r="1" fill="white" />
    <circle cx="5" cy="16" r="1" fill="white" />
  </svg>
);

// Loading screen version with enhanced animations
export const GodDigitalLoadingLogo: React.FC = () => (
  <motion.div
    className="relative"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <GodDigitalLogo size="xxl" variant="full" animated={true} />
    
    {/* Enhanced loading ring */}
    <motion.div
      className="absolute inset-0 border-2 border-transparent border-t-white rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      style={{ borderRadius: '50%' }}
    />
    
    {/* Pulsing energy field */}
    <motion.div
      className="absolute inset-0 bg-white/5 rounded-full blur-2xl"
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.div>
);