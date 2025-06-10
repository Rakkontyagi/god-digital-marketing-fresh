import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Award, Users, Zap, Phone, Mail, Clock, CheckCircle, ArrowRight, Globe, Search, Share2, BarChart } from 'lucide-react';
import { GlassmorphismCard } from '../../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../../Advanced/ParallaxSection';
import { SEOHead } from '../../SEO/SEOHead';
import { allIndianLocations, comprehensiveServices } from '../../../data/comprehensiveLocations';

export const DigitalMarketingHub: React.FC = () => {
  const digitalMarketingService = comprehensiveServices.find(s => s.slug === 'digital-marketing');
  const subServices = digitalMarketingService?.subServices || [];
  const majorStates = allIndianLocations.slice(0, 8);
  const metroCities = allIndianLocations.flatMap(state => 
    state.cities.filter(city => city.isMetro).map(city => ({
      ...city,
      state: state.state,
      stateSlug: state.stateSlug
    }))
  ).slice(0, 12);

  const benefits = [
    "Comprehensive digital marketing strategies across all channels",
    "Data-driven approach with measurable ROI improvements",
    "Expert team with 8+ years of industry experience",
    "Custom solutions for every business size and industry",
    "24/7 support and real-time campaign monitoring",
    "Proven track record with 2000+ successful campaigns"
  ];

  const stats = [
    { icon: <Target className="w-6 h-6" />, label: "Campaigns Delivered", value: "2000+" },
    { icon: <Users className="w-6 h-6" />, label: "Happy Clients", value: "1500+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Average ROI", value: "340%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "98%" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy Development",
      description: "Comprehensive analysis and custom strategy creation for your business goals"
    },
    {
      step: "02", 
      title: "Multi-Channel Implementation",
      description: "Execute campaigns across SEO, PPC, social media, and content marketing"
    },
    {
      step: "03",
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization for maximum ROI"
    },
    {
      step: "04",
      title: "Scaling & Growth",
      description: "Scale successful campaigns and expand to new markets"
    }
  ];

  const seoData = {
    title: "Digital Marketing Services India | God Digital Marketing",
    description: "Leading digital marketing agency in India offering comprehensive SEO, PPC, social media, and content marketing services. Proven results with 340% average ROI across 500+ cities.",
    keywords: [
      "digital marketing services india",
      "digital marketing agency india",
      "digital marketing company india",
      "best digital marketing india",
      "online marketing services india",
      "internet marketing india",
      "digital advertising india",
      "marketing agency india",
      "seo services india",
      "ppc management india",
      "social media marketing india",
      "content marketing india"
    ],
    canonicalUrl: "https://goddigitalmarketing.com/digital-marketing/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing Services",
      "description": "Comprehensive digital marketing services across India",
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
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
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm">Digital Marketing Hub</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Digital Marketing Services
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Across India
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Transform your business with our comprehensive digital marketing solutions. 
                  Expert SEO, PPC, social media, and content marketing services delivering 
                  proven results across 500+ cities in India.
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

        {/* Sub-Services */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Digital Marketing Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete digital marketing solutions designed to drive growth and maximize ROI
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subServices.map((service, index) => (
                <ScrollReveal key={service.slug} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                        {service.slug.includes('seo') && <Search className="w-8 h-8" />}
                        {service.slug.includes('ppc') && <Target className="w-8 h-8" />}
                        {service.slug.includes('social') && <Share2 className="w-8 h-8" />}
                        {service.slug.includes('content') && <BarChart className="w-8 h-8" />}
                        {service.slug.includes('google') && <Globe className="w-8 h-8" />}
                        {!service.slug.includes('seo') && !service.slug.includes('ppc') && !service.slug.includes('social') && !service.slug.includes('content') && !service.slug.includes('google') && <Zap className="w-8 h-8" />}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Professional {service.name.toLowerCase()} services to boost your online presence and drive results.
                    </p>
                    <motion.a
                      href={`/${service.slug}/`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
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

        {/* Locations Coverage */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Digital Marketing Services Across India
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Serving businesses in all major cities and states with localized strategies
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Major States */}
              <ScrollReveal direction="left">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Major States</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {majorStates.map((state, index) => (
                      <motion.a
                        key={state.stateSlug}
                        href={`/digital-marketing/${state.stateSlug}/`}
                        className="p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded-lg group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                              {state.state}
                            </div>
                            <div className="text-gray-400 text-sm">{state.cities.length} cities</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Metro Cities */}
              <ScrollReveal direction="right">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Metro Cities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {metroCities.slice(0, 8).map((city, index) => (
                      <motion.a
                        key={`${city.stateSlug}-${city.slug}`}
                        href={`/digital-marketing/${city.stateSlug}/${city.slug}/`}
                        className="p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded-lg group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                              {city.name}
                            </div>
                            <div className="text-gray-400 text-sm">{city.state}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Digital Marketing Process
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Proven methodology that delivers consistent results for businesses across India
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.step} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-6 text-center h-full">
                    <div className="text-4xl font-bold text-white/20 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
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
                    Why Choose Our Digital Marketing Services?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our comprehensive digital marketing approach combines cutting-edge technology with 
                    deep market insights to deliver exceptional results for businesses across India.
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
                  <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">contact@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">24/7 Support Available</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free Consultation
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
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join thousands of successful businesses that trust God Digital Marketing 
                for their digital growth needs across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Digital Journey
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Studies
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};