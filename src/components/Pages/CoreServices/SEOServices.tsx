import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Globe, BarChart, TrendingUp, Award, Users, Phone, Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { BaseCard } from '../../Shared/BaseCard';
import { AnimatedSection } from '../../Shared/AnimatedSection';
import { SEOHead } from '../../SEO/SEOHead';
import { allIndianLocations } from '../../../data/comprehensiveLocations';
import { getServiceSchema, getBreadcrumbSchema } from '../../../utils/seoStructuredData';

export const SEOServices: React.FC = () => {
  const majorStates = allIndianLocations.slice(0, 8);
  
  const seoServices = [
    {
      icon: Target,
      title: "Local SEO",
      description: "Dominate local search results and Google My Business optimization",
      features: ["Google My Business optimization", "Local citations", "Review management", "Local keyword targeting"]
    },
    {
      icon: Globe,
      title: "Technical SEO",
      description: "Complete technical optimization including speed and mobile optimization",
      features: ["Site speed optimization", "Mobile optimization", "Schema markup", "Core Web Vitals"]
    },
    {
      icon: BarChart,
      title: "Content SEO",
      description: "Strategic content creation and optimization for target audiences",
      features: ["Keyword research", "Content strategy", "Blog optimization", "Meta optimization"]
    },
    {
      icon: TrendingUp,
      title: "E-commerce SEO",
      description: "Specialized SEO for e-commerce businesses and online stores",
      features: ["Product optimization", "Category pages", "Shopping campaigns", "Conversion optimization"]
    }
  ];

  const stats = [
    { icon: Search, label: "Keywords Ranked", value: "10K+" },
    { icon: Users, label: "Websites Optimized", value: "800+" },
    { icon: TrendingUp, label: "Traffic Increase", value: "400%" },
    { icon: Award, label: "Success Rate", value: "96%" }
  ];

  const benefits = [
    "Rank #1 on Google for your target keywords",
    "Increase organic traffic by 400% on average",
    "Local SEO optimization for Indian markets",
    "Technical SEO audits and optimization",
    "Content strategy for target audiences",
    "Monthly SEO reports and analytics"
  ];

  const canonicalUrl = "https://goddigitalmarketing.com/seo-services/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'SEO Services', url: canonicalUrl }
  ];

  const seoData = {
    title: "SEO Services India | Best SEO Company | Professional SEO Agency | God Digital Marketing",
    description: "Leading SEO company in India offering professional SEO services. Rank #1 on Google with our proven SEO strategies. Increase organic traffic by 400% for Indian businesses.",
    keywords: [
      "seo services india",
      "seo company india",
      "best seo company india",
      "seo agency india",
      "search engine optimization india",
      "local seo india",
      "seo expert india",
      "seo consultant india",
      "organic seo india",
      "google seo india",
      "website seo india",
      "seo packages india"
    ],
    canonicalUrl,
    structuredData: [
      getServiceSchema({
        name: "SEO Services",
        description: "Professional search engine optimization services across India",
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
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <AnimatedSection direction="up">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Search className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm">SEO Services India</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Professional SEO Services
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                    Across India
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Dominate Google search results with our proven SEO strategies. 
                  Increase organic traffic by 400% and rank #1 for your target keywords with our 
                  expert SEO services across 500+ cities in India.
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
                    <div className="flex justify-center mb-4 text-green-400">
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </BaseCard>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* SEO Services */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Comprehensive SEO Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete SEO solutions designed to boost your visibility and organic rankings
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoServices.map((service, index) => (
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
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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
                  SEO Services Across India
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Professional SEO services in all major Indian cities
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {majorStates.map((state, index) => (
                <AnimatedSection key={state.stateSlug} direction="up" delay={index * 0.1}>
                  <motion.a
                    href={`/seo-services/${state.stateSlug}/`}
                    className="p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded-lg group text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-white font-semibold group-hover:text-green-400 transition-colors">
                      {state.state}
                    </div>
                    <div className="text-gray-400 text-sm">SEO Services</div>
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
                    Why Choose Our SEO Services?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our SEO experts understand Indian market dynamics and search behavior 
                    to deliver exceptional results for businesses across the country.
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
              </AnimatedSection>

              <AnimatedSection direction="right">
                <BaseCard
                  title="Get SEO Audit"
                  description=""
                  variant="glass"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">seo@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">24/7 SEO Support</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free SEO Audit
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
                Ready to Dominate Search Results?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Start ranking #1 on Google for your target keywords with our proven SEO strategies 
                designed specifically for Indian businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start SEO Campaign
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View SEO Case Studies
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};