import React from 'react';
import { motion } from 'framer-motion';
import { Home, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building, MapPin, Key, Camera } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';
import { SEOHead } from '../SEO/SEOHead';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

export const RealEstateDigitalMarketing: React.FC = () => {
  const benefits = [
    "Generate 300% more qualified property leads",
    "Local real estate SEO and map optimization",
    "Virtual tour and property showcase marketing",
    "Lead nurturing for property buyers and sellers",
    "Real estate social media and content marketing",
    "CRM integration and automated follow-ups"
  ];

  const stats = [
    { icon: <Home className="w-6 h-6" />, label: "Real Estate Clients", value: "120+" },
    { icon: <Users className="w-6 h-6" />, label: "Property Leads", value: "5K+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Lead Growth", value: "300%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "94%" }
  ];

  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Real Estate SEO",
      description: "Dominate local property searches and Google Maps for real estate",
      features: ["Local keyword optimization", "Google My Business for realtors", "Property listing optimization", "Neighborhood-specific SEO"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Property Marketing",
      description: "Showcase properties with virtual tours and professional marketing",
      features: ["Virtual tour marketing", "Property photography", "Video walkthroughs", "3D property showcases"]
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Lead Generation",
      description: "Generate qualified leads for property buyers, sellers, and renters",
      features: ["Buyer lead generation", "Seller lead campaigns", "Rental property marketing", "Investment property leads"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Real Estate PPC",
      description: "Targeted advertising for property listings and real estate services",
      features: ["Property listing ads", "Real estate Google Ads", "Facebook property ads", "Retargeting campaigns"]
    }
  ];

  const canonicalUrl = "https://goddigitalmarketing.com/real-estate-digital-marketing/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Real Estate Digital Marketing', url: canonicalUrl }
  ];

  const seoData = {
    title: "Real Estate Digital Marketing | Best Real Estate Marketing Company India | God Digital Marketing",
    description: "Top real estate digital marketing company in India. Grow your real estate business with our expert team and proven strategies for the real estate industry.",
    keywords: [
      "real estate digital marketing",
      "real estate marketing company india",
      "best real estate marketing company india",
      "real estate marketing agency india",
      "real estate marketing india",
      "digital marketing real estate india",
      "real estate seo india",
      "real estate ppc india",
      "real estate content marketing india",
      "real estate branding india",
      "real estate marketing experts india"
    ],
    canonicalUrl,
    structuredData: [
      getServiceSchema({
        name: "Real Estate Digital Marketing",
        description: "Comprehensive digital marketing solutions for real estate businesses",
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
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />
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
                  <Home className="w-4 h-4 text-emerald-400" />
                  <span className="text-white text-sm">Real Estate Digital Marketing</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Real Estate Digital Marketing
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Solutions
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Grow your real estate business with specialized digital marketing strategies. 
                  Generate 300% more qualified property leads with our proven SEO, PPC, 
                  and property marketing services for real estate professionals.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <GlassmorphismCard key={stat.label} className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-emerald-400">
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
                  Comprehensive Real Estate Marketing Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete digital marketing solutions designed specifically for real estate professionals and property businesses
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4">
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
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
                    Why Choose Our Real Estate Marketing Services?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our real estate marketing experts understand property market dynamics and buyer behavior 
                    to deliver strategies that generate qualified leads and close more deals.
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
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <GlassmorphismCard className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Grow Your Real Estate Business</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">realestate@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">24/7 Real Estate Support</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Real Estate Marketing Audit
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
                Ready to Generate More Property Leads?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Transform your real estate business with our specialized digital marketing strategies 
                designed specifically for property professionals and real estate agencies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Real Estate Marketing
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Real Estate Case Studies
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};