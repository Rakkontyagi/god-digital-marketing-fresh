import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface OptimizedCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient';
  children?: React.ReactNode;
}

export const OptimizedCard: React.FC<OptimizedCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
  className = '',
  variant = 'default',
  children
}) => {
  const baseClasses = "p-6 rounded-lg transition-all duration-300 hover:scale-105";
  
  const variantClasses = {
    default: "bg-gray-900 border border-gray-800 hover:border-gray-700",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10",
    gradient: "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
  };

  const cardContent = (
    <>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      {children}
    </>
  );

  const Component = href ? motion.a : motion.div;
  const props = href ? { href } : {};

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {cardContent}
    </Component>
  );
};