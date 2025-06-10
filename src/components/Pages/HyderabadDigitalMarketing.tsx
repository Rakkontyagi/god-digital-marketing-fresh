import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building, Globe, Search, Share2 } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';
import { SEOHead } from '../SEO/SEOHead';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

export const HyderabadDigitalMarketing: React.FC = () => {
  const benefits = [
    "Proven ROI improvement of 370%+ for Hyderabad businesses",
    "Local Hyderabad pharma and IT market expertise",
    "24/7 AI-powered automation systems",
    "Dedicated Hyderabad-based account management",
    "Real-time performance tracking and analytics",
    "Industry-specific strategies for Cyberabad"
  ];

  const stats = [
    { icon: <MapPin className="w-6 h-6" />, label: "Hyderabad Presence", value: "4+ Years" },
    { icon: <Users className="w-6 h-6" />, label: "Hyderabad Clients", value: "250+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Average ROI", value: "370%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "95%" }
  ];

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Services Hyderabad",
      description: "Dominate Hyderabad search results with our proven SEO strategies",
      link: "/seo-services-hyderabad/"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "PPC Management Hyderabad",
      description: "Maximize ROI with expert Google Ads management in Hyderabad",
      link: "/ppc-management-hyderabad/"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing Hyderabad",
      description: "Build brand presence across all social platforms in Hyderabad",
      link: "/social-media-marketing-hyderabad/"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development Hyderabad",
      description: "Professional website design and development for Hyderabad businesses",
      link: "/website-development-hyderabad/"
    }
  ];

  const canonicalUrl = "https://goddigitalmarketing.com/digital-marketing-hyderabad/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Digital Marketing Hyderabad', url: canonicalUrl }
  ];

  const seoData = {
    title: "Digital Marketing Hyderabad | Best Digital Marketing Company Hyderabad | God Digital Marketing",
    description: "Top digital marketing company in Hyderabad offering 360° digital marketing solutions. Grow your business with our expert team and proven strategies for Hyderabad market.",
    keywords: [
      "digital marketing hyderabad",
      "digital marketing company hyderabad",
      "best digital marketing company hyderabad",
      "digital marketing agency hyderabad",
      "online marketing hyderabad",
      "internet marketing hyderabad",
      "digital advertising hyderabad",
      "performance marketing hyderabad",
      "growth marketing hyderabad",
      "brand marketing hyderabad",
      "digital marketing experts hyderabad"
    ],
    canonicalUrl,
    structuredData: [
      getServiceSchema({
        name: "Digital Marketing Hyderabad",
        description: "Comprehensive digital marketing solutions for Hyderabad businesses",
        provider: "God Digital Marketing",
        areaServed: "Hyderabad",
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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10" />
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
                  <Building className="w-4 h-4 text-cyan-400" />
                  <span className="text-white text-sm">Hyderabad Digital Marketing Agency</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Digital Marketing Services in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                    Hyderabad
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Transform your Hyderabad business with our comprehensive digital marketing solutions. 
                  Expert SEO, PPC, social media marketing, and web development services delivering 
                  proven results for businesses across Cyberabad and Telangana.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <GlassmorphismCard key={stat.label} className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-cyan-400">
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
                  Comprehensive Digital Marketing Services in Hyderabad
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  From SEO to social media marketing, we provide complete digital solutions for Hyderabad businesses
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    <motion.a
                      href={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
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

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why Choose Our Digital Marketing Agency in Hyderabad?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our Hyderabad-based team understands the unique pharma, biotech, and IT industry landscape 
                    to deliver specialized digital strategies for Cyberabad's business ecosystem.
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
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">hyderabad@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">24/7 Support Available</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300"
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
                Ready to Transform Your Hyderabad Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join hundreds of successful Hyderabad businesses that trust God Digital Marketing 
                for their digital growth needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Strategy Session
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Hyderabad Case Studies
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};