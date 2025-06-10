import React from 'react';
import { motion } from 'framer-motion';
import { Target, DollarSign, BarChart, Zap, TrendingUp, Award, Users, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { BaseCard } from '../../Shared/BaseCard';
import { AnimatedSection } from '../../Shared/AnimatedSection';
import { SEOHead } from '../../SEO/SEOHead';
import { allIndianLocations } from '../../../data/comprehensiveLocations';

export const PPCAdvertising: React.FC = () => {
  const majorStates = allIndianLocations.slice(0, 8);
  
  const ppcServices = [
    {
      icon: Target,
      title: "Google Ads",
      description: "Expert Google Ads management with proven ROI optimization",
      features: ["Search campaigns", "Display advertising", "Shopping ads", "YouTube advertising"]
    },
    {
      icon: DollarSign,
      title: "Facebook Ads",
      description: "Strategic Facebook and Instagram advertising campaigns",
      features: ["Lead generation ads", "Brand awareness", "Conversion campaigns", "Retargeting"]
    },
    {
      icon: BarChart,
      title: "LinkedIn Ads",
      description: "B2B advertising on LinkedIn for professional services",
      features: ["Sponsored content", "Lead gen forms", "Message ads", "Dynamic ads"]
    },
    {
      icon: Zap,
      title: "PPC Optimization",
      description: "Continuous optimization and management of all PPC campaigns",
      features: ["Bid optimization", "Ad copy testing", "Landing page optimization", "Conversion tracking"]
    }
  ];

  const stats = [
    { icon: Target, label: "Campaigns Managed", value: "1000+" },
    { icon: Users, label: "Businesses Served", value: "600+" },
    { icon: TrendingUp, label: "ROI Improvement", value: "350%" },
    { icon: Award, label: "Success Rate", value: "94%" }
  ];

  const benefits = [
    "Reduce cost-per-click by 40% with expert optimization",
    "Increase conversion rates by 250% with targeted ads",
    "Expert Google Ads and Facebook Ads management",
    "Real-time campaign monitoring and optimization",
    "Detailed ROI tracking and reporting",
    "A/B testing for maximum performance"
  ];

  const seoData = {
    title: "PPC Advertising Services India | Google Ads Management | Facebook Ads | God Digital Marketing",
    description: "Expert PPC advertising services in India. Reduce cost-per-click by 40% and increase ROI by 350% with our Google Ads and Facebook Ads management for Indian businesses.",
    keywords: [
      "ppc advertising india",
      "google ads management india",
      "ppc services india",
      "facebook ads india",
      "ppc agency india",
      "paid advertising india",
      "linkedin ads india",
      "ppc expert india",
      "google ads expert india",
      "ppc consultant india",
      "adwords management india",
      "paid search marketing india"
    ],
    canonicalUrl: "https://goddigitalmarketing.com/ppc-advertising/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "PPC Advertising Services",
      "description": "Professional PPC advertising and Google Ads management services",
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
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <AnimatedSection direction="up">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-4 h-4 text-orange-400" />
                  <span className="text-white text-sm">PPC Advertising India</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  PPC Advertising Services
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                    Across India
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Maximize your advertising ROI with our expert PPC management services. 
                  Reduce cost-per-click by 40% and increase conversions by 250% with our proven 
                  Google Ads and Facebook Ads strategies across India.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats Grid */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <BaseCard
                    key={stat.label}
                    title={stat.value}
                    description={stat.label}
                    variant="glass"
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4 text-orange-400">
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </BaseCard>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PPC Services */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Comprehensive PPC Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete paid advertising solutions designed to maximize ROI
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ppcServices.map((service, index) => (
                <AnimatedSection key={service.title} direction="up" delay={index * 0.1}>
                  <BaseCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    variant="glass"
                    className="h-full"
                  >
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </BaseCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Coverage */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  PPC Services Across India
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Expert PPC management in all major Indian cities
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {majorStates.map((state, index) => (
                <AnimatedSection key={state.stateSlug} direction="up" delay={index * 0.1}>
                  <motion.a
                    href={`/ppc-advertising/${state.stateSlug}/`}
                    className="p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded-lg group text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                      {state.state}
                    </div>
                    <div className="text-gray-400 text-sm">PPC Services</div>
                  </motion.a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why Choose Our PPC Services?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our PPC experts understand Indian market competition and consumer behavior 
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
              </AnimatedSection>

              <AnimatedSection direction="right">
                <BaseCard
                  title="Start PPC Campaign"
                  description=""
                  variant="glass"
                >
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
                </BaseCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Maximize Your PPC ROI?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Start generating immediate results with our expert PPC management services 
                designed specifically for Indian market dynamics and competition.
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
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};