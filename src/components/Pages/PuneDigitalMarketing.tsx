import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building, Globe, Search, Share2 } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';
import { SEOHead } from '../SEO/SEOHead';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

export const PuneDigitalMarketing: React.FC = () => {
  const benefits = [
    "Proven ROI improvement of 320%+ for Pune businesses",
    "Local Pune automotive and IT market expertise",
    "24/7 AI-powered automation systems",
    "Dedicated Pune-based account management",
    "Real-time performance tracking and analytics",
    "Industry-specific strategies for Pune market"
  ];

  const stats = [
    { icon: <MapPin className="w-6 h-6" />, label: "Pune Presence", value: "3+ Years" },
    { icon: <Users className="w-6 h-6" />, label: "Pune Clients", value: "180+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Average ROI", value: "320%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "94%" }
  ];

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Services Pune",
      description: "Dominate Pune search results with our proven SEO strategies",
      link: "/seo-services-pune/"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "PPC Management Pune",
      description: "Maximize ROI with expert Google Ads management in Pune",
      link: "/ppc-management-pune/"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing Pune",
      description: "Build brand presence across all social platforms in Pune",
      link: "/social-media-marketing-pune/"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development Pune",
      description: "Professional website design and development for Pune businesses",
      link: "/website-development-pune/"
    }
  ];

  const canonicalUrl = "https://goddigitalmarketing.com/digital-marketing-pune/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Digital Marketing Pune', url: canonicalUrl }
  ];

  const seoData = {
    title: "Digital Marketing Pune | Best Digital Marketing Company Pune | God Digital Marketing",
    description: "Top digital marketing company in Pune offering 360° digital marketing solutions. Grow your business with our expert team and proven strategies for Pune market.",
    keywords: [
      "digital marketing pune",
      "digital marketing company pune",
      "best digital marketing company pune",
      "digital marketing agency pune",
      "online marketing pune",
      "internet marketing pune",
      "digital advertising pune",
      "performance marketing pune",
      "growth marketing pune",
      "brand marketing pune",
      "digital marketing experts pune"
    ],
    canonicalUrl,
    structuredData: [
      getServiceSchema({
        name: "Digital Marketing Pune",
        description: "Comprehensive digital marketing solutions for Pune businesses",
        provider: "God Digital Marketing",
        areaServed: "Pune",
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
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
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
                  <Building className="w-4 h-4 text-indigo-400" />
                  <span className="text-white text-sm">Pune Digital Marketing Agency</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Digital Marketing Services in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Pune
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Transform your Pune business with our comprehensive digital marketing solutions. 
                  Expert SEO, PPC, social media marketing, and web development services delivering 
                  proven results for businesses across the Oxford of the East.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <GlassmorphismCard key={stat.label} className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-indigo-400">
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
                  Comprehensive Digital Marketing Services in Pune
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  From SEO to social media marketing, we provide complete digital solutions for Pune businesses
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    <motion.a
                      href={service.link}
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
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
                    Why Choose Our Digital Marketing Agency in Pune?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our Pune-based team understands the local automotive, IT, and education industry dynamics 
                    to deliver targeted digital strategies for Maharashtra's cultural capital.
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
                        <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
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
                      <Phone className="w-5 h-5 text-indigo-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-indigo-400" />
                      <span className="text-gray-300">pune@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-indigo-400" />
                      <span className="text-gray-300">24/7 Support Available</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
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
                Ready to Transform Your Pune Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join hundreds of successful Pune businesses that trust God Digital Marketing 
                for their digital growth needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
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
                  View Pune Case Studies
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};