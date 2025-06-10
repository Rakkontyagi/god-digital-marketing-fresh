import React from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building, Shield, Stethoscope, Activity } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';
import { SEOHead } from '../SEO/SEOHead';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

export const HealthcareDigitalMarketing: React.FC = () => {
  const benefits = [
    "HIPAA-compliant digital marketing strategies",
    "Increase patient acquisition by 250%",
    "Medical SEO and local search optimization",
    "Reputation management for healthcare providers",
    "Patient-focused content marketing",
    "Telemedicine and digital health promotion"
  ];

  const stats = [
    { icon: <Heart className="w-6 h-6" />, label: "Healthcare Clients", value: "150+" },
    { icon: <Users className="w-6 h-6" />, label: "Patient Leads", value: "10K+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Patient Growth", value: "250%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "98%" }
  ];

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Medical SEO",
      description: "Specialized SEO for healthcare providers to rank for medical keywords",
      features: ["Medical keyword optimization", "Local medical SEO", "Google My Business for doctors", "Medical content optimization"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HIPAA-Compliant Marketing",
      description: "Secure digital marketing that maintains patient privacy and compliance",
      features: ["HIPAA-compliant campaigns", "Secure patient data handling", "Privacy-focused analytics", "Compliant social media"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Patient Acquisition",
      description: "Targeted campaigns to attract and convert potential patients",
      features: ["Patient journey mapping", "Healthcare PPC campaigns", "Medical lead generation", "Appointment booking optimization"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Reputation Management",
      description: "Build and maintain positive online reputation for healthcare practices",
      features: ["Review management", "Patient testimonials", "Crisis communication", "Brand reputation monitoring"]
    }
  ];

  const canonicalUrl = "https://goddigitalmarketing.com/healthcare-digital-marketing/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Healthcare Digital Marketing', url: canonicalUrl }
  ];

  const seoData = {
    title: "Healthcare Digital Marketing | Best Healthcare Marketing Company India | God Digital Marketing",
    description: "Top healthcare digital marketing company in India. Grow your healthcare business with our expert team and proven strategies for the healthcare industry.",
    keywords: [
      "healthcare digital marketing",
      "healthcare marketing company india",
      "best healthcare marketing company india",
      "healthcare marketing agency india",
      "healthcare marketing india",
      "digital marketing healthcare india",
      "healthcare seo india",
      "healthcare ppc india",
      "healthcare content marketing india",
      "healthcare branding india",
      "healthcare marketing experts india"
    ],
    canonicalUrl,
    structuredData: [
      getServiceSchema({
        name: "Healthcare Digital Marketing",
        description: "Comprehensive digital marketing solutions for healthcare businesses",
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
                  <Heart className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm">Healthcare Digital Marketing</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Healthcare Digital Marketing
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                    Solutions
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Grow your healthcare practice with HIPAA-compliant digital marketing strategies. 
                  Increase patient acquisition by 250% with our specialized medical SEO, PPC, 
                  and reputation management services.
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

        {/* Services Overview */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Specialized Healthcare Marketing Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  HIPAA-compliant digital marketing solutions designed specifically for healthcare providers
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
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
                    Why Choose Our Healthcare Marketing Services?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our healthcare marketing experts understand medical industry regulations and patient behavior 
                    to deliver compliant, effective digital strategies that grow your practice.
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
                  <h3 className="text-2xl font-bold text-white mb-6">Grow Your Practice</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">healthcare@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">24/7 Healthcare Support</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Healthcare Marketing Audit
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
                Ready to Grow Your Healthcare Practice?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Transform your patient acquisition with our HIPAA-compliant digital marketing 
                strategies designed specifically for healthcare providers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Healthcare Marketing
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Healthcare Case Studies
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};