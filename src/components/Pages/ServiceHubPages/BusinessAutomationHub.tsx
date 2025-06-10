import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, ArrowRight, Workflow, Database, BarChart, Cog } from 'lucide-react';
import { GlassmorphismCard } from '../../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../../Advanced/ParallaxSection';
import { SEOHead } from '../../SEO/SEOHead';
import { allIndianLocations, comprehensiveServices } from '../../../data/comprehensiveLocations';
import { getServiceSchema, getBreadcrumbSchema } from '../../../utils/seoStructuredData';

export const BusinessAutomationHub: React.FC = () => {
  const businessAutomationService = comprehensiveServices.find(s => s.slug === 'business-automation');
  const subServices = businessAutomationService?.subServices || [];
  const majorStates = allIndianLocations.slice(0, 8);

  const benefits = [
    "Increase productivity by 300% with intelligent automation",
    "Reduce manual errors by 95% with automated systems",
    "24/7 automated operations with minimal supervision",
    "Custom automation solutions for your business needs",
    "Seamless integration with existing business systems",
    "Real-time analytics and performance tracking"
  ];

  const stats = [
    { icon: <Settings className="w-6 h-6" />, label: "Automation Projects", value: "800+" },
    { icon: <Users className="w-6 h-6" />, label: "Businesses Automated", value: "600+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Productivity Gain", value: "300%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "97%" }
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

  const canonicalUrl = "https://goddigitalmarketing.com/business-automation/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Business Automation', url: canonicalUrl }
  ];

  const seoData = {
    title: "Business Automation Services India | Process Automation | God Digital Marketing",
    description: "Leading business automation company in India offering workflow automation, process optimization, and operational efficiency solutions. Increase productivity by 300% with our automation services.",
    keywords: [
      "business automation services india",
      "business automation company india",
      "workflow automation india",
      "process automation india",
      "operational automation india",
      "business process optimization india",
      "automation consulting india",
      "digital transformation india",
      "enterprise automation india",
      "robotic process automation india",
      "workflow optimization india",
      "business efficiency automation india"
    ],
    canonicalUrl,
    structuredData: [
      getServiceSchema({
        name: "Business Automation Services",
        description: "Comprehensive business process automation and workflow optimization services",
        provider: "God Digital Marketing",
        areaServed: "India",
        url: canonicalUrl
      }),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />
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
                  <Settings className="w-4 h-4 text-orange-400" />
                  <span className="text-white text-sm">Business Automation Hub</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Business Automation Services
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                    Across India
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Transform your business operations with intelligent automation solutions. 
                  Increase productivity by 300%, reduce costs, and eliminate manual processes with 
                  our comprehensive business automation services across 500+ cities in India.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <GlassmorphismCard key={stat.label} className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-orange-400">
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
                  Our Business Automation Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete automation solutions designed to streamline operations and boost efficiency
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subServices.map((service, index) => (
                <ScrollReveal key={service.slug} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                        {service.slug.includes('process') && <Workflow className="w-8 h-8" />}
                        {service.slug.includes('document') && <Database className="w-8 h-8" />}
                        {service.slug.includes('reporting') && <BarChart className="w-8 h-8" />}
                        {service.slug.includes('hr') && <Users className="w-8 h-8" />}
                        {!service.slug.includes('process') && !service.slug.includes('document') && !service.slug.includes('reporting') && !service.slug.includes('hr') && <Cog className="w-8 h-8" />}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Professional {service.name.toLowerCase()} solutions to automate and optimize your business operations.
                    </p>
                    <motion.a
                      href={`/${service.slug}/`}
                      className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-300"
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

        {/* Automation Areas */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Business Process Automation for Indian Companies
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
                          <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
                  Business Automation Services Across India
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Serving businesses in all major cities with customized automation solutions
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {majorStates.map((state, index) => (
                <ScrollReveal key={state.stateSlug} direction="up" delay={index * 0.1}>
                  <motion.a
                    href={`/business-automation/${state.stateSlug}/`}
                    className="p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded-lg group text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-white font-semibold group-hover:text-orange-400 transition-colors">
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
                    Why Choose Our Business Automation Services?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our automation experts understand Indian business challenges and 
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
                        <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
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
                      <Phone className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">automation@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">24/7 Automation Support</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
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
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business Operations?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Transform your business efficiency and reduce operational costs with our 
                intelligent automation solutions designed specifically for Indian enterprises.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
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