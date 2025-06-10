import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Brain, Settings, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';

const services = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Digital Marketing Excellence",
    description: "Comprehensive digital marketing strategies that drive measurable results across all channels",
    features: ["SEO Optimization", "PPC Management", "Social Media", "Content Strategy"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Automation Revolution",
    description: "Cutting-edge AI solutions that automate processes and enhance business efficiency",
    features: ["Marketing Automation", "Chatbot Development", "Process Optimization", "Predictive Analytics"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Business Automation",
    description: "Streamline operations with intelligent automation systems and workflow optimization",
    features: ["Workflow Automation", "CRM Integration", "Data Processing", "System Integration"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lead Generation Mastery",
    description: "Advanced lead generation strategies that fill your pipeline with qualified prospects",
    features: ["B2B Lead Gen", "Conversion Optimization", "Lead Scoring", "Nurture Campaigns"],
    color: "from-orange-500 to-red-500"
  }
];

const stats = [
  { icon: <Users className="w-6 h-6" />, label: "Happy Clients", value: "2000+" },
  { icon: <TrendingUp className="w-6 h-6" />, label: "ROI Increase", value: "340%" },
  { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "98%" },
  { icon: <Target className="w-6 h-6" />, label: "Projects Delivered", value: "5000+" }
];

export const QuantumServices: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-4 h-4 text-white" />
              <span className="text-white text-sm">Revolutionary Services</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum-Level
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Digital Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of digital marketing with our AI-powered automation, 
              advanced analytics, and revolutionary growth strategies
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
              <GlassmorphismCard className="p-8 h-full group cursor-pointer">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.div
                  className="flex items-center text-white group-hover:text-gray-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Section */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};