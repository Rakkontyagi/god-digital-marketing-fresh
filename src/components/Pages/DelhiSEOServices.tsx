import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building, Globe, BarChart } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';
import { SEOHead } from '../SEO/SEOHead';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

export const DelhiSEOServices: React.FC = () => {
  const benefits = [
    "Rank #1 on Google for Delhi-specific keywords",
    "Increase organic traffic by 400% for Delhi businesses",
    "Local SEO optimization for Delhi market",
    "Technical SEO audits and optimization",
    "Content strategy for Delhi audience",
    "Monthly SEO reports and analytics"
  ];

  const stats = [
    { icon: <Search className="w-6 h-6" />, label: "Keywords Ranked", value: "2000+" },
    { icon: <Users className="w-6 h-6" />, label: "Delhi Clients", value: "300+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Traffic Increase", value: "400%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "96%" }
  ];

  const seoServices = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Local SEO Delhi",
      description: "Dominate local search results for Delhi-based queries and Google My Business optimization",
      features: ["Google My Business optimization", "Local citations", "Review management", "Local keyword targeting"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Technical SEO Delhi",
      description: "Complete technical optimization for Delhi websites including speed and mobile optimization",
      features: ["Site speed optimization", "Mobile optimization", "Schema markup", "Core Web Vitals"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Content SEO Delhi",
      description: "Strategic content creation and optimization targeting Delhi audience and market",
      features: ["Keyword research", "Content strategy", "Blog optimization", "Meta optimization"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "E-commerce SEO Delhi",
      description: "Specialized SEO for Delhi e-commerce businesses and online stores",
      features: ["Product optimization", "Category pages", "Shopping campaigns", "Conversion optimization"]
    }
  ];

  const canonicalUrl = "https://goddigitalmarketing.com/seo-services-delhi/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'SEO Services Delhi', url: canonicalUrl }
  ];

  const seoData = {
    title: "SEO Services Delhi | Best SEO Company in Delhi NCR | God Digital Marketing",
    description: "Best SEO company in Delhi NCR offering professional SEO services. Rank #1 on Google with our proven SEO strategies for Delhi businesses.",
    keywords: [
      "seo services delhi",
      "seo company delhi",
      "best seo company delhi",
      "seo agency delhi",
      "search engine optimization delhi",
      "local seo delhi",
      "seo expert delhi",
      "seo consultant delhi",
      "organic seo delhi",
      "google seo delhi",
      "website seo delhi",
      "seo packages delhi"
    ],
    canonicalUrl,
    structuredData: [
      getServiceSchema({
        name: "SEO Services Delhi",
        description: "Professional search engine optimization services in Delhi NCR",
        provider: "God Digital Marketing",
        areaServed: "Delhi NCR",
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10" />
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
                  <Search className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm">SEO Services Delhi</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Best SEO Services in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                    Delhi NCR
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Dominate Google search results with our proven SEO strategies for Delhi businesses. 
                  Increase organic traffic by 400% and rank #1 for your target keywords with our 
                  expert SEO services in Delhi.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <GlassmorphismCard key={stat.label} className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-blue-400">
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

        {/* SEO Services */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Comprehensive SEO Services in Delhi
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete SEO solutions designed to boost your Delhi business visibility and organic rankings
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoServices.map((service, index) => (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
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
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
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
                    Why Choose Our SEO Services in Delhi?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our Delhi-based SEO experts understand the local market dynamics and search behavior 
                    to deliver exceptional results for businesses across the capital region.
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
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <GlassmorphismCard className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get SEO Audit</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">seo@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">24/7 SEO Support</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free SEO Audit
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
                Ready to Dominate Delhi Search Results?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Start ranking #1 on Google for your target keywords with our proven SEO strategies 
                designed specifically for Delhi businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300"
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
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};