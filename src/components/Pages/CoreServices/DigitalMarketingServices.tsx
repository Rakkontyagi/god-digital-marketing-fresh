import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Share2, BarChart, Globe, Zap, TrendingUp, Award, Users, Phone, Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { BaseCard } from '../../Shared/BaseCard';
import { AnimatedSection } from '../../Shared/AnimatedSection';
import { SEOHead } from '../../SEO/SEOHead';
import { allIndianLocations } from '../../../data/comprehensiveLocations';
import { getServiceSchema, getBreadcrumbSchema } from '../../../utils/seoStructuredData';

export const DigitalMarketingServices: React.FC = () => {
  const majorStates = allIndianLocations.slice(0, 8);
  
  const services = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Dominate search results with our proven SEO strategies",
      href: "/seo-services/",
      features: ["Keyword research", "On-page optimization", "Link building", "Technical SEO"]
    },
    {
      icon: Target,
      title: "PPC Advertising",
      description: "Maximize ROI with expert Google Ads management",
      href: "/ppc-advertising/",
      features: ["Google Ads", "Facebook Ads", "Campaign optimization", "Conversion tracking"]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build brand presence across all social platforms",
      href: "/social-media-marketing/",
      features: ["Content creation", "Community management", "Paid social", "Analytics"]
    },
    {
      icon: BarChart,
      title: "Content Marketing",
      description: "Engage audiences with compelling content strategies",
      href: "/content-marketing/",
      features: ["Blog writing", "Video content", "Infographics", "Content strategy"]
    },
    {
      icon: Globe,
      title: "Google Ads Management",
      description: "Professional Google Ads campaign management",
      href: "/google-ads-management/",
      features: ["Search campaigns", "Display ads", "Shopping ads", "YouTube ads"]
    },
    {
      icon: Zap,
      title: "Facebook Advertising",
      description: "Strategic Facebook and Instagram advertising",
      href: "/facebook-advertising/",
      features: ["Lead generation", "Brand awareness", "Conversion campaigns", "Retargeting"]
    }
  ];

  const stats = [
    { icon: Target, label: "Campaigns Delivered", value: "2000+" },
    { icon: Users, label: "Happy Clients", value: "1500+" },
    { icon: TrendingUp, label: "Average ROI", value: "340%" },
    { icon: Award, label: "Success Rate", value: "98%" }
  ];

  const benefits = [
    "Comprehensive digital marketing strategies across all channels",
    "Data-driven approach with measurable ROI improvements",
    "Expert team with 8+ years of industry experience",
    "Custom solutions for every business size and industry",
    "24/7 support and real-time campaign monitoring",
    "Proven track record with 2000+ successful campaigns"
  ];

  const canonicalUrl = "https://goddigitalmarketing.com/digital-marketing/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Digital Marketing', url: canonicalUrl }
  ];

  const seoData = {
    title: "Digital Marketing Services India | Best Digital Marketing Company | God Digital Marketing",
    description: "Top digital marketing company in India offering 360° digital marketing solutions. Grow your business with our expert team and proven strategies.",
    keywords: [
      "digital marketing services india",
      "digital marketing company india",
      "best digital marketing company india",
      "digital marketing agency india",
      "online marketing india",
      "internet marketing india",
      "digital advertising india",
      "performance marketing india",
      "growth marketing india",
      "brand marketing india",
      "digital marketing experts india"
    ],
    canonicalUrl,
    structuredData: [
      getServiceSchema({
        name: "Digital Marketing Services",
        description: "Comprehensive digital marketing solutions for business growth",
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
                    <div className="flex justify-center mb-4 text-blue-400">
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </BaseCard>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Digital Marketing Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete digital marketing solutions designed to drive growth and maximize ROI
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} direction="up" delay={index * 0.1}>
                  <BaseCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    href={service.href}
                    variant="glass"
                    className="h-full"
                  >
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle className="w-3 h-3 mr-2 text-blue-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
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
                  Digital Marketing Services Across India
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Serving businesses in all major cities with localized strategies
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {majorStates.map((state, index) => (
                <AnimatedSection key={state.stateSlug} direction="up" delay={index * 0.1}>
                  <motion.a
                    href={`/digital-marketing/${state.stateSlug}/`}
                    className="p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded-lg group text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                      {state.state}
                    </div>
                    <div className="text-gray-400 text-sm">{state.cities.length} cities</div>
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
              </AnimatedSection>

              <AnimatedSection direction="right">
                <BaseCard
                  title="Get Started Today"
                  description=""
                  variant="glass"
                >
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
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};