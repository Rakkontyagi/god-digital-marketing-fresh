import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Award, Users, Zap, Phone, Mail, Clock, CheckCircle, Building, DollarSign, BarChart } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';
import { SEOHead } from '../SEO/SEOHead';

export const DelhiPPCManagement: React.FC = () => {
  const benefits = [
    "Reduce cost-per-click by 40% for Delhi campaigns",
    "Increase conversion rates by 250% with optimized ads",
    "Expert Google Ads management for Delhi market",
    "Real-time campaign monitoring and optimization",
    "Detailed ROI tracking and reporting",
    "A/B testing for maximum performance"
  ];

  const stats = [
    { icon: <Target className="w-6 h-6" />, label: "Campaigns Managed", value: "500+" },
    { icon: <Users className="w-6 h-6" />, label: "Delhi Clients", value: "200+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "ROI Improvement", value: "350%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "94%" }
  ];

  const ppcServices = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Google Ads Delhi",
      description: "Expert Google Ads management for Delhi businesses with proven ROI optimization",
      features: ["Search campaigns", "Display advertising", "Shopping ads", "YouTube advertising"]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Facebook Ads Delhi",
      description: "Strategic Facebook and Instagram advertising targeting Delhi audience",
      features: ["Lead generation ads", "Brand awareness", "Conversion campaigns", "Retargeting"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "LinkedIn Ads Delhi",
      description: "B2B advertising on LinkedIn for Delhi professional services and enterprises",
      features: ["Sponsored content", "Lead gen forms", "Message ads", "Dynamic ads"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "PPC Optimization Delhi",
      description: "Continuous optimization and management of all PPC campaigns for maximum ROI",
      features: ["Bid optimization", "Ad copy testing", "Landing page optimization", "Conversion tracking"]
    }
  ];

  const seoData = {
    title: "PPC Management Services Delhi | Google Ads Expert Delhi | God Digital Marketing",
    description: "Expert PPC management services in Delhi. Reduce cost-per-click by 40% and increase ROI by 350% with our Google Ads and Facebook Ads management for Delhi businesses.",
    keywords: [
      "ppc management delhi",
      "google ads delhi",
      "ppc services delhi",
      "google ads management delhi",
      "ppc agency delhi",
      "paid advertising delhi",
      "facebook ads delhi",
      "linkedin ads delhi",
      "ppc expert delhi",
      "google ads expert delhi",
      "ppc consultant delhi",
      "adwords management delhi"
    ],
    canonicalUrl: "https://goddigitalmarketing.com/ppc-management-delhi/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "God Digital Marketing - PPC Management Delhi",
      "description": "Expert PPC management and Google Ads services in Delhi",
      "url": "https://goddigitalmarketing.com/ppc-management-delhi/",
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
                  <Target className="w-4 h-4 text-orange-400" />
                  <span className="text-white text-sm">PPC Management Delhi</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Expert PPC Management in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                    Delhi NCR
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Maximize your advertising ROI with our expert PPC management services in Delhi. 
                  Reduce cost-per-click by 40% and increase conversions by 250% with our proven 
                  Google Ads and Facebook Ads strategies.
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

        {/* PPC Services */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Comprehensive PPC Services in Delhi
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete paid advertising solutions designed to maximize ROI for Delhi businesses
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ppcServices.map((service, index) => (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
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

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why Choose Our PPC Management in Delhi?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our Delhi-based PPC experts understand the local market competition and consumer behavior 
                    to create high-converting campaigns that deliver exceptional ROI.
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
                  <h3 className="text-2xl font-bold text-white mb-6">Start PPC Campaign</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">ppc@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">24/7 Campaign Monitoring</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free PPC Audit
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
                Ready to Maximize Your Delhi PPC ROI?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Start generating immediate results with our expert PPC management services 
                designed specifically for Delhi market dynamics and competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Launch PPC Campaign
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View PPC Case Studies
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};