import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  TrendingUp, Globe, Zap, Target, Award, Users, BarChart3, Rocket,
  CheckCircle, ArrowRight, Play, Star, MapPin, Building, Briefcase,
  Shield, Search, Cpu, Monitor, Phone, Mail, MessageCircle,
  Smartphone, Database, Cloud, Lock, Eye, Heart, Lightbulb, Megaphone
} from 'lucide-react';
import { SEOHead } from './SEO/SEOHead';
import { AdvancedNavigation } from './Advanced/AdvancedNavigation';
import { getOrganizationSchema, getWebsiteSchema, getBreadcrumbSchema, getFAQSchema } from '../utils/seoStructuredData';

export const GodDigitalMarketing2025: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4);
    }, 4000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // AI-Powered Keyword Research Data
  const homepageKeywords = {
    primary: "digital marketing agency India",
    lsiKeywords: [
      "digital marketing services", "online marketing company", "internet marketing agency",
      "digital advertising solutions", "digital transformation services", "digital marketing consultancy",
      "digital growth strategy", "digital marketing experts", "digital marketing specialists",
      "comprehensive digital marketing", "full-service digital marketing", "integrated digital marketing",
      "performance marketing agency", "ROI-driven marketing", "data-driven marketing",
      "search engine optimization", "pay-per-click advertising", "social media marketing"
    ]
  };

  // SEO Data with AI-Optimized Keywords
  const seoData = {
    title: "God Digital Marketing - India's Leading Digital Growth Strategy Agency | Divine Digital Solutions for Godly Growth",
    description: "Transform your business with God Digital Marketing's comprehensive digital marketing services across 500+ Indian cities. Expert SEO, PPC, social media marketing, automation solutions, and web development delivering guaranteed ROI growth and market dominance.",
    keywords: homepageKeywords.lsiKeywords.slice(0, 20).join(', '),
    canonicalUrl: "https://goddigitalmarketing.com/",
    structuredData: [
      getOrganizationSchema({
        name: "God Digital Marketing",
        description: "India's leading digital marketing agency providing comprehensive online marketing solutions",
        url: "https://goddigitalmarketing.com/",
        logo: "https://goddigitalmarketing.com/logo.png",
        contactPoint: {
          telephone: "+91-9999999999",
          contactType: "customer service",
          areaServed: "IN"
        }
      })
    ]
  };

  // Hero Statistics
  const heroStats = [
    { icon: <Users className="w-8 h-8" />, value: "2000+", label: "Clients Transformed", color: "from-blue-500 to-cyan-500" },
    { icon: <MapPin className="w-8 h-8" />, value: "500+", label: "Cities Covered", color: "from-green-500 to-emerald-500" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "350%", label: "Average ROI Growth", color: "from-orange-500 to-red-500" },
    { icon: <Award className="w-8 h-8" />, value: "99.8%", label: "Success Rate", color: "from-purple-500 to-pink-500" }
  ];

  // Core Services
  const coreServices = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Strategic Digital Marketing Excellence",
      description: "Comprehensive digital marketing solutions combining advanced SEO mastery, performance PPC optimization, and social media dominance to accelerate your business growth across all digital channels.",
      features: ["Advanced SEO Strategies", "Performance PPC Campaigns", "Social Media Mastery", "Content Marketing Excellence"],
      gradient: "from-blue-600 to-purple-600",
      stats: { clients: "800+", growth: "285%", satisfaction: "99.5%" }
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "AI-Powered Marketing Automation",
      description: "Revolutionary marketing automation solutions leveraging artificial intelligence and machine learning to streamline customer journeys and maximize marketing ROI through intelligent automation workflows.",
      features: ["AI-Driven Automation", "Smart Lead Nurturing", "Behavioral Targeting", "Predictive Analytics"],
      gradient: "from-green-600 to-teal-600",
      stats: { clients: "600+", growth: "420%", satisfaction: "99.8%" }
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data-Driven Business Growth",
      description: "Transform raw data into actionable insights with our advanced analytics platform, driving strategic decisions that accelerate revenue growth and sustainable market expansion.",
      features: ["Advanced Analytics", "Performance Tracking", "ROI Optimization", "Growth Strategies"],
      gradient: "from-orange-600 to-red-600",
      stats: { clients: "700+", growth: "365%", satisfaction: "99.7%" }
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Enterprise Web Development",
      description: "Cutting-edge web development solutions featuring responsive design, e-commerce integration, and mobile-first architecture to establish your dominant digital presence.",
      features: ["Responsive Design", "E-commerce Solutions", "Mobile Optimization", "Performance Focus"],
      gradient: "from-indigo-600 to-blue-600",
      stats: { clients: "500+", growth: "310%", satisfaction: "99.9%" }
    }
  ];

  // Industries
  const industries = [
    { name: "Healthcare", icon: <Shield className="w-6 h-6" />, clients: "200+", growth: "340%" },
    { name: "Real Estate", icon: <Building className="w-6 h-6" />, clients: "180+", growth: "380%" },
    { name: "Education", icon: <Users className="w-6 h-6" />, clients: "150+", growth: "290%" },
    { name: "Finance", icon: <TrendingUp className="w-6 h-6" />, clients: "120+", growth: "410%" },
    { name: "E-commerce", icon: <Globe className="w-6 h-6" />, clients: "300+", growth: "450%" },
    { name: "Technology", icon: <Cpu className="w-6 h-6" />, clients: "250+", growth: "390%" }
  ];

  // Major Cities
  const majorCities = [
    { name: "Mumbai", state: "Maharashtra", clients: "300+", projects: "500+" },
    { name: "Delhi", state: "Delhi", clients: "280+", projects: "450+" },
    { name: "Bangalore", state: "Karnataka", clients: "250+", projects: "400+" },
    { name: "Chennai", state: "Tamil Nadu", clients: "200+", projects: "350+" },
    { name: "Hyderabad", state: "Telangana", clients: "180+", projects: "300+" },
    { name: "Pune", state: "Maharashtra", clients: "160+", projects: "280+" }
  ];

  return (
    <>
      <SEOHead {...seoData} />
      <AdvancedNavigation />
      
      {/* Advanced Hero Section with 4D Effects */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-80 h-80 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white opacity-20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.h1 
                className="text-display mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                God Digital Marketing
              </motion.h1>
              
              <div className="text-hero text-gray-300 mb-4">
                India's Leading <span className="text-white font-bold">Digital Growth Strategy Agency</span>
              </div>
              
              <div className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                <strong className="text-white">Divine Digital Solutions for Godly Growth</strong> - Transforming businesses across 500+ Indian cities with 
                comprehensive digital marketing services, AI-powered automation, and data-driven strategies that deliver guaranteed ROI growth.
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.button
                className="btn-primary text-lg px-10 py-5 group relative overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket className="w-6 h-6" />
                  Start Your Digital Transformation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button
                className="btn-secondary text-lg px-10 py-5 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  Watch Success Stories
                  <span className="text-sm bg-white/20 px-2 py-1 rounded-full">2000+ Cases</span>
                </span>
              </motion.button>
            </motion.div>

            {/* Hero Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass p-6 text-center group hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative z-10">
                    <div className="text-white mb-3 flex justify-center group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center relative">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="text-white text-xs mt-2 text-center">Scroll to explore</div>
        </motion.div>
      </section>

      {/* Why Choose India's Most Trusted Internet Marketing Services Provider */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-heading mb-6 text-white">
              Why Choose India's Most Trusted Internet Marketing Services Provider
            </h2>
            <p className="text-body text-gray-300 max-w-4xl mx-auto">
              Our comprehensive digital marketing solutions combine cutting-edge technology with proven strategies
              to deliver exceptional results across all digital channels, ensuring your business achieves
              unprecedented growth and sustainable market leadership.
            </p>
          </motion.div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="neumorphic p-8 h-full hover:scale-105 transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.stats.clients}</div>
                        <div className="text-xs text-gray-400">Happy Clients</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-lg font-bold text-white">{service.stats.growth}</div>
                        <div className="text-xs text-gray-400">Avg Growth</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-lg font-bold text-white">{service.stats.satisfaction}</div>
                        <div className="text-xs text-gray-400">Satisfaction</div>
                      </div>
                    </div>

                    <motion.button
                      className="text-white font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Online Marketing Solutions Portfolio */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-heading mb-6 text-white">
              Comprehensive Online Marketing Solutions Portfolio
            </h2>
            <p className="text-body text-gray-300 max-w-4xl mx-auto">
              From strategic SEO optimization to advanced marketing automation, our full-service digital marketing
              portfolio covers every aspect of online business growth, ensuring comprehensive coverage across all
              digital touchpoints and customer journey stages.
            </p>
          </motion.div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                category: "Digital Marketing Excellence",
                services: ["SEO Optimization", "PPC Advertising", "Social Media Marketing", "Content Strategy", "Email Campaigns"],
                icon: <Target className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                category: "Business Automation Solutions",
                services: ["Marketing Automation", "CRM Integration", "Sales Automation", "Customer Service", "AI Intelligence"],
                icon: <Cpu className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                category: "Growth & Development",
                services: ["Web Development", "E-commerce Solutions", "Mobile Apps", "Brand Development", "Digital Strategy"],
                icon: <Rocket className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                className="glass p-8 group hover:scale-105 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {category.category}
                </h3>

                <ul className="space-y-3">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation Success Stories Across Major Indian Cities */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-heading mb-6 text-white">
              Digital Transformation Success Stories Across Major Indian Cities
            </h2>
            <p className="text-body text-gray-300 max-w-4xl mx-auto">
              Our proven track record spans across 500+ Indian cities, delivering exceptional results for businesses
              of all sizes. From startups to enterprises, our digital marketing expertise has transformed countless
              organizations into market leaders.
            </p>
          </motion.div>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {majorCities.map((city, index) => (
              <motion.div
                key={city.name}
                className="glass p-6 text-center group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">{city.name}</h3>
                  <p className="text-gray-400 text-sm">{city.state}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-lg font-bold text-white">{city.clients}</div>
                    <div className="text-xs text-gray-400">Clients</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{city.projects}</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Industry Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Industry-Leading Digital Marketing Expertise & Recognition
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Recognized as India's premier digital marketing agency, we serve diverse industries with specialized
              expertise and industry-specific strategies.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-white mb-2 flex justify-center">
                    {industry.icon}
                  </div>
                  <div className="text-white font-medium text-sm mb-1">{industry.name}</div>
                  <div className="text-xs text-gray-400">{industry.clients} clients</div>
                  <div className="text-xs text-green-400">{industry.growth} growth</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-heading mb-6 text-white">
              Ready to Transform Your Business with Divine Digital Solutions?
            </h2>
            <p className="text-body text-gray-300 mb-8">
              Join 2000+ successful businesses across 500+ Indian cities who have achieved extraordinary growth
              with our comprehensive digital marketing services. Start your journey to digital dominance today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <motion.button
                className="btn-primary text-lg px-10 py-5 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className="btn-secondary text-lg px-10 py-5 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  Request Proposal
                </span>
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free Strategy Session</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Guaranteed ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-white to-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">G</span>
                </div>
                <div>
                  <div className="text-white font-bold text-xl">God Digital Marketing</div>
                  <div className="text-gray-400 text-xs">Divine Digital Solutions</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                India's leading digital marketing agency providing comprehensive online marketing solutions
                across 500+ cities with guaranteed ROI growth.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Phone className="w-5 h-5" />, href: "tel:+919999999999" },
                  { icon: <Mail className="w-5 h-5" />, href: "mailto:info@goddigitalmarketing.com" },
                  { icon: <MessageCircle className="w-5 h-5" />, href: "#" }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {contact.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Digital Marketing",
                  "SEO Services",
                  "PPC Advertising",
                  "Social Media Marketing",
                  "Content Marketing",
                  "Email Marketing",
                  "Marketing Automation",
                  "Web Development"
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Major Cities</h3>
              <ul className="space-y-3">
                {[
                  "Mumbai", "Delhi", "Bangalore", "Chennai",
                  "Hyderabad", "Pune", "Kolkata", "Ahmedabad"
                ].map((city, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Industries</h3>
              <ul className="space-y-3">
                {[
                  "Healthcare", "Real Estate", "Education", "Finance",
                  "E-commerce", "Technology", "Manufacturing", "Hospitality"
                ].map((industry, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {industry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 God Digital Marketing. All rights reserved. Divine Digital Solutions for Godly Growth.
              </div>
              <div className="flex space-x-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((link, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
