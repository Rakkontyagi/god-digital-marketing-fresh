import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building, Workflow, Database, BarChart } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';
import { SEOHead } from '../SEO/SEOHead';

export const DelhiBusinessAutomation: React.FC = () => {
  const benefits = [
    "Increase productivity by 300% for Delhi businesses",
    "Reduce manual errors by 95% with automated systems",
    "24/7 automated operations with Delhi-based monitoring",
    "Custom automation solutions for Delhi market",
    "Seamless integration with existing business systems",
    "Real-time analytics and performance tracking"
  ];

  const stats = [
    { icon: <Settings className="w-6 h-6" />, label: "Automation Projects", value: "300+" },
    { icon: <Users className="w-6 h-6" />, label: "Delhi Businesses", value: "200+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Productivity Gain", value: "300%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "97%" }
  ];

  const services = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation Delhi",
      description: "Streamline business workflows with intelligent automation systems",
      link: "/workflow-automation-delhi/"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Automation Delhi",
      description: "Automate data collection, processing, and reporting for Delhi businesses",
      link: "/data-automation-delhi/"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics Automation Delhi",
      description: "Automated reporting and analytics for data-driven decisions",
      link: "/analytics-automation-delhi/"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "CRM Automation Delhi",
      description: "Customer relationship management automation for Delhi enterprises",
      link: "/crm-automation-delhi/"
    }
  ];

  const automationAreas = [
    {
      title: "Sales Process Automation",
      description: "Automate lead qualification, follow-ups, and sales pipeline management",
      features: ["Lead scoring automation", "Email sequences", "Pipeline tracking", "Sales reporting"]
    },
    {
      title: "HR Process Automation",
      description: "Streamline recruitment, onboarding, and employee management processes",
      features: ["Resume screening", "Interview scheduling", "Onboarding workflows", "Performance tracking"]
    },
    {
      title: "Finance Automation",
      description: "Automate invoicing, expense tracking, and financial reporting",
      features: ["Invoice generation", "Expense management", "Financial reporting", "Payment processing"]
    },
    {
      title: "Inventory Management",
      description: "Automated inventory tracking, ordering, and supply chain management",
      features: ["Stock monitoring", "Auto-reordering", "Supplier management", "Demand forecasting"]
    }
  ];

  const seoData = {
    title: "Business Automation Services in Delhi | God Digital Marketing",
    description: "Leading business automation company in Delhi offering workflow automation, data automation, and process optimization. Increase productivity by 300% with our automation solutions.",
    keywords: [
      "business automation services delhi",
      "business automation company delhi",
      "workflow automation delhi",
      "process automation delhi",
      "data automation delhi",
      "crm automation delhi",
      "analytics automation delhi",
      "business process optimization delhi",
      "automation consulting delhi",
      "digital transformation delhi",
      "enterprise automation delhi",
      "robotic process automation delhi"
    ],
    canonicalUrl: "https://goddigitalmarketing.com/business-automation-delhi/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "God Digital Marketing - Business Automation Delhi",
      "description": "Leading business automation services in Delhi for process optimization",
      "url": "https://goddigitalmarketing.com/business-automation-delhi/",
      "telephone": "+91-9999999999",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "India"
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
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10" />
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
                  <Settings className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm">Business Automation Delhi</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Business Automation Services in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                    Delhi NCR
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Transform your Delhi business operations with intelligent automation solutions. 
                  Increase productivity by 300%, reduce costs, and eliminate manual processes with 
                  our comprehensive business automation services.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <GlassmorphismCard key={stat.label} className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-green-400">
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

        {/* Services Overview */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Comprehensive Business Automation Services in Delhi
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  From workflow automation to data processing, we provide complete automation solutions for Delhi businesses
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    <motion.a
                      href={service.link}
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Learn More →
                    </motion.a>
                  </GlassmorphismCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Areas */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Business Process Automation for Delhi Companies
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Specialized automation solutions for different business departments and functions
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automationAreas.map((area, index) => (
                <ScrollReveal key={area.title} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full">
                    <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>
                    
                    <div className="space-y-2">
                      {area.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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

        {/* Why Choose Us */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why Choose Our Business Automation Services in Delhi?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our Delhi-based automation experts understand local business challenges and 
                    deliver customized solutions that drive real results and operational excellence.
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
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <GlassmorphismCard className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Automate Your Business</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">automation@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">24/7 Automation Support</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Automation Consultation
                  </motion.button>
                </GlassmorphismCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Delhi Business Operations?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Transform your business efficiency and reduce operational costs with our 
                intelligent automation solutions designed specifically for Delhi enterprises.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Business Automation
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Automation Case Studies
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};