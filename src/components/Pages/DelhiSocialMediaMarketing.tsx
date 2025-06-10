import React from 'react';
import { motion } from 'framer-motion';
import { Share2, TrendingUp, Award, Users, Heart, Phone, Mail, Clock, CheckCircle, Building, Instagram, Facebook } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';
import { SEOHead } from '../SEO/SEOHead';

export const DelhiSocialMediaMarketing: React.FC = () => {
  const benefits = [
    "Increase social media engagement by 500% for Delhi brands",
    "Build strong brand presence across all platforms",
    "Expert content creation for Delhi audience",
    "Influencer marketing and partnerships",
    "Real-time social media monitoring",
    "Detailed analytics and performance reports"
  ];

  const stats = [
    { icon: <Share2 className="w-6 h-6" />, label: "Campaigns Created", value: "1000+" },
    { icon: <Users className="w-6 h-6" />, label: "Delhi Clients", value: "400+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Engagement Growth", value: "500%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "92%" }
  ];

  const socialServices = [
    {
      icon: <Facebook className="w-8 h-8" />,
      title: "Facebook Marketing Delhi",
      description: "Strategic Facebook marketing to build brand awareness and drive engagement in Delhi",
      features: ["Page optimization", "Content strategy", "Facebook ads", "Community management"]
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram Marketing Delhi",
      description: "Visual storytelling and Instagram growth strategies for Delhi businesses",
      features: ["Visual content creation", "Story marketing", "Reels strategy", "Influencer partnerships"]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "LinkedIn Marketing Delhi",
      description: "Professional networking and B2B marketing on LinkedIn for Delhi companies",
      features: ["Company page optimization", "Content marketing", "Lead generation", "Thought leadership"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Social Media Strategy Delhi",
      description: "Comprehensive social media strategy and management for Delhi brands",
      features: ["Strategy development", "Content calendar", "Brand voice", "Crisis management"]
    }
  ];

  const seoData = {
    title: "Social Media Marketing Delhi | SMM Services Delhi | God Digital Marketing",
    description: "Expert social media marketing services in Delhi. Increase engagement by 500% with our Facebook, Instagram, and LinkedIn marketing strategies for Delhi businesses.",
    keywords: [
      "social media marketing delhi",
      "smm services delhi",
      "facebook marketing delhi",
      "instagram marketing delhi",
      "linkedin marketing delhi",
      "social media agency delhi",
      "social media management delhi",
      "digital marketing delhi",
      "content marketing delhi",
      "influencer marketing delhi",
      "social media strategy delhi",
      "brand marketing delhi"
    ],
    canonicalUrl: "https://goddigitalmarketing.com/social-media-marketing-delhi/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "God Digital Marketing - Social Media Marketing Delhi",
      "description": "Expert social media marketing and management services in Delhi",
      "url": "https://goddigitalmarketing.com/social-media-marketing-delhi/",
      "telephone": "+91-9999999999",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "India"
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
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
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
                  <Share2 className="w-4 h-4 text-pink-400" />
                  <span className="text-white text-sm">Social Media Marketing Delhi</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Social Media Marketing in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                    Delhi NCR
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Build a powerful social media presence for your Delhi business. Increase engagement 
                  by 500% and drive real results with our expert social media marketing strategies 
                  across Facebook, Instagram, LinkedIn, and more.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <GlassmorphismCard key={stat.label} className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-pink-400">
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

        {/* Social Media Services */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Comprehensive Social Media Services in Delhi
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete social media solutions designed to build brand awareness and engagement for Delhi businesses
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {socialServices.map((service, index) => (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mr-4">
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
                          <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0" />
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
                    Why Choose Our Social Media Marketing in Delhi?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our Delhi-based social media experts understand local trends, culture, and audience behavior 
                    to create engaging content that resonates with your target market.
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
                        <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <GlassmorphismCard className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Boost Your Social Presence</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-pink-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-pink-400" />
                      <span className="text-gray-300">social@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-pink-400" />
                      <span className="text-gray-300">24/7 Social Monitoring</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Social Media Audit
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
                Ready to Dominate Delhi Social Media?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Transform your social media presence and build a loyal community of Delhi customers 
                with our proven social media marketing strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Social Campaign
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Social Case Studies
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};