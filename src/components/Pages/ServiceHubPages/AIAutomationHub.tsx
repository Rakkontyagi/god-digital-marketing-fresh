import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Cog, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, ArrowRight, Bot, Cpu, Settings, Database } from 'lucide-react';
import { GlassmorphismCard } from '../../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../../Advanced/ParallaxSection';
import { SEOHead } from '../../SEO/SEOHead';
import { allIndianLocations, comprehensiveServices } from '../../../data/comprehensiveLocations';

export const AIAutomationHub: React.FC = () => {
  const aiAutomationService = comprehensiveServices.find(s => s.slug === 'ai-automation');
  const subServices = aiAutomationService?.subServices || [];
  const majorStates = allIndianLocations.slice(0, 8);

  const benefits = [
    "Reduce operational costs by 40-60% with intelligent automation",
    "24/7 automated systems with minimal human intervention",
    "Custom AI solutions tailored to your business needs",
    "Seamless integration with existing business processes",
    "Real-time analytics and performance monitoring",
    "Scalable automation that grows with your business"
  ];

  const stats = [
    { icon: <Brain className="w-6 h-6" />, label: "AI Projects", value: "500+" },
    { icon: <Users className="w-6 h-6" />, label: "Businesses Automated", value: "800+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Cost Reduction", value: "60%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "95%" }
  ];

  const automationTypes = [
    {
      title: "Marketing Automation",
      description: "Automate email campaigns, lead nurturing, and customer segmentation",
      features: ["Email automation", "Lead scoring", "Campaign optimization", "Customer journey mapping"]
    },
    {
      title: "Sales Automation",
      description: "Streamline sales processes with CRM automation and lead management",
      features: ["CRM integration", "Lead qualification", "Sales pipeline automation", "Follow-up automation"]
    },
    {
      title: "Customer Service Automation",
      description: "24/7 customer support with AI chatbots and automated ticket management",
      features: ["AI chatbots", "Ticket routing", "Response automation", "Customer analytics"]
    },
    {
      title: "Operations Automation",
      description: "Optimize business operations with intelligent process automation",
      features: ["Inventory management", "Order processing", "Report generation", "Data synchronization"]
    }
  ];

  const seoData = {
    title: "AI Automation Services India | Business Automation | God Digital Marketing",
    description: "Leading AI automation company in India offering intelligent business automation, chatbot development, and process optimization. Reduce costs by 60% with our AI solutions.",
    keywords: [
      "ai automation services india",
      "ai automation company india",
      "artificial intelligence india",
      "business automation india",
      "chatbot development india",
      "process automation india",
      "ai integration india",
      "workflow automation india",
      "machine learning india",
      "intelligent automation india",
      "robotic process automation india",
      "ai consulting india"
    ],
    canonicalUrl: "https://goddigitalmarketing.com/ai-automation/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Automation Services",
      "description": "Comprehensive AI automation and business process optimization services",
      "provider": {
        "@type": "Organization",
        "name": "God Digital Marketing"
      }
    }
  };

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-white text-sm">AI Automation Hub</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  AI Automation Services
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Across India
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Transform your business with cutting-edge AI automation solutions. 
                  Reduce costs by 60%, increase efficiency, and stay ahead of competition with 
                  our intelligent automation systems across 500+ cities in India.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <GlassmorphismCard key={stat.label} className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-purple-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </GlassmorphismCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Sub-Services */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our AI Automation Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete AI automation solutions designed to streamline operations and boost productivity
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subServices.map((service, index) => (
                <ScrollReveal key={service.slug} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
                        {service.slug.includes('chatbot') && <Bot className="w-8 h-8" />}
                        {service.slug.includes('crm') && <Database className="w-8 h-8" />}
                        {service.slug.includes('workflow') && <Settings className="w-8 h-8" />}
                        {service.slug.includes('analytics') && <Brain className="w-8 h-8" />}
                        {!service.slug.includes('chatbot') && !service.slug.includes('crm') && !service.slug.includes('workflow') && !service.slug.includes('analytics') && <Cpu className="w-8 h-8" />}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Advanced {service.name.toLowerCase()} solutions to automate and optimize your business processes.
                    </p>
                    <motion.a
                      href={`/${service.slug}/`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </GlassmorphismCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Types */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Types of AI Automation for Indian Businesses
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Specialized automation solutions tailored for different business functions
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automationTypes.map((type, index) => (
                <ScrollReveal key={type.title} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full">
                    <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                    
                    <div className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </GlassmorphismCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Coverage */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  AI Automation Services Across India
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Serving businesses in all major cities with cutting-edge automation solutions
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {majorStates.map((state, index) => (
                <ScrollReveal key={state.stateSlug} direction="up" delay={index * 0.1}>
                  <motion.a
                    href={`/ai-automation/${state.stateSlug}/`}
                    className="p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded-lg group text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                      {state.state}
                    </div>
                    <div className="text-gray-400 text-sm">{state.cities.length} cities</div>
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why Choose Our AI Automation Services?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our AI automation experts combine cutting-edge technology with deep understanding 
                    of Indian business needs to deliver transformative automation solutions.
                  </p>
                  
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <GlassmorphismCard className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Start Your AI Journey</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">ai@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">24/7 AI Support</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get AI Consultation
                  </motion.button>
                </GlassmorphismCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join the AI revolution and transform your business operations with our 
                intelligent automation solutions designed for Indian enterprises.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start AI Automation
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View AI Case Studies
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};