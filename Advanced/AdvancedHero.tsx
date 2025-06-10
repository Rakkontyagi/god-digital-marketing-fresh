import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { GodDigitalLogo } from '../Brand/GodDigitalLogo';
import { HeroSection } from '../Shared/HeroSection';
import { StatsGrid } from '../Shared/StatsGrid';
import { MapPin, TrendingUp, Award, Users } from 'lucide-react';

const stats = [
  { icon: MapPin, label: 'Cities Served', value: '500+', color: 'text-green-400' },
  { icon: TrendingUp, label: 'Average ROI', value: '340%', color: 'text-blue-400' },
  { icon: Award, label: 'Success Rate', value: '98%', color: 'text-purple-400' },
  { icon: Users, label: 'AI Automation', value: '24/7', color: 'text-orange-400' }
];

export const AdvancedHero: React.FC = () => {
  return (
    <HeroSection
      badge={{
        icon: Zap,
        text: "AI-Powered Digital Excellence • Live",
        color: "text-green-400"
      }}
      title="Revolutionary Digital Excellence [DEPLOY TEST v3]"
      description="Transforming businesses across India with AI-powered automation, advanced lead generation, and exponential ROI growth"
      primaryCTA={{
        text: "Start Your Transformation"
      }}
      secondaryCTA={{
        text: "Explore Our Portfolio"
      }}
    >
      {/* Logo */}
      <motion.div
        className="mb-8 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <GodDigitalLogo size="xl" variant="full" animated={true} />
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <StatsGrid stats={stats} />
      </motion.div>
    </HeroSection>
  );
};