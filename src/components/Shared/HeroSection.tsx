import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HeroSectionProps {
  badge?: {
    icon: LucideIcon;
    text: string;
    color?: string;
  };
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryCTA?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  backgroundGradient?: string;
  children?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundGradient = "from-black via-gray-900 to-black",
  children
}) => {
  return (
    <section className={`relative py-20 bg-gradient-to-br ${backgroundGradient} overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {badge && (
            <motion.div
              className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <badge.icon className={`w-4 h-4 ${badge.color || 'text-white'}`} />
              <span className="text-white text-sm">{badge.text}</span>
            </motion.div>
          )}

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
            {subtitle && (
              <>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  {subtitle}
                </span>
              </>
            )}
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            {description}
          </p>

          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <motion.button
                  className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={primaryCTA.onClick}
                >
                  {primaryCTA.text}
                </motion.button>
              )}
              {secondaryCTA && (
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={secondaryCTA.onClick}
                >
                  {secondaryCTA.text}
                </motion.button>
              )}
            </div>
          )}
        </motion.div>

        {children}
      </div>
    </section>
  );
};