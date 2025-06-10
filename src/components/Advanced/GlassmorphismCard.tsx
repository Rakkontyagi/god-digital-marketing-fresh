import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  className = '',
  onClick,
  href
}) => {
  const baseClasses = "bg-white/5 backdrop-blur-md border border-white/10 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20";
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  const Component = onClick ? motion.button : motion.div;
  const props = onClick ? { onClick } : {};

  return (
    <Component
      className={`${baseClasses} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
};