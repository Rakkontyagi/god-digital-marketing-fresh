import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Award, Users, Zap, Phone, Mail, Clock, CheckCircle, ArrowRight, UserPlus, Filter, MessageSquare, BarChart3 } from 'lucide-react';
import { GlassmorphismCard } from '../../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../../Advanced/ParallaxSection';
import { SEOHead } from '../../SEO/SEOHead';
import { allIndianLocations, comprehensiveServices } from '../../../data/comprehensiveLocations';
import { getServiceSchema, getBreadcrumbSchema } from '../../../utils/seoStructuredData';

export const LeadGenerationHub: React.FC = () => {
  const leadGenerationService = comprehensiveServices.find(s => s.slug === 'lead-generation');
  const subServices = leadGenerationService?.subServices || [];
  const majorStates = allIndianLocations.slice(0, 8);

  const benefits = [
    "Generate 300% more qualified leads with proven strategies",
    "Advanced lead scoring and qualification systems",
    "Multi-channel lead generation across all platforms",
    "Real-time lead tracking and analytics",
    "Industry-specific lead generation campaigns",
    "24/7 lead nurturing and follow-up automation"
  ];

  const stats = [
    { icon: <Target className="w-6 h-6" />, label: "Leads Generated", value: "50K+" },
    { icon: <Users className="w-6 h-6" />, label: "Businesses Served", value: "1200+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Conversion Rate", value: "35%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "96%" }
  ];

  const leadTypes = [
    {
      title: "B2B Lead Generation",
      description: "High-quality business leads for B2B companies across industries",
      features: ["LinkedIn prospecting", "Email campaigns", "Cold outreach", "Account-based marketing"]
    },
    {
      title: "B2C Lead Generation",
      description: "Consumer leads for retail, e-commerce, and service businesses",
      features: ["Social media leads", "Content marketing", "PPC campaigns", "Referral programs"]
    },
    {
      title: "Qualified Lead Generation",
      description: "Pre-qualified leads ready for sales conversion",
      features: ["Lead scoring", "BANT qualification", "Sales-ready leads", "Quality assurance"]
    },
    {
      title: "Industry-Specific Leads",
      description: "Specialized lead generation for specific industries",
      features: ["Healthcare leads", "Real estate prospects", "Technology leads", "Financial services"]
    }
  ];

  const canonicalUrl = "https://goddigitalmarketing.com/lead-generation/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Lead Generation', url: canonicalUrl }
  ];

  const seoData = {
    title: "Lead Generation Services India | B2B Lead Generation | God Digital Marketing",
    description: "Leading lead generation company in India offering B2B and B2C lead generation services. Generate 300% more qualified leads with our proven strategies across 500+ cities.",
    keywords: [
      "lead generation services india",
      "lead generation company india",
      "b2b lead generation india",
      "b2c lead generation india",
      "qualified lead generation india",
      "prospect generation india",
      "customer acquisition india",
      "sales leads india",
      "lead generation agency india",
      "digital lead generation india",
      "online lead generation india",
      "lead generation experts india"
    ],
    canonicalUrl,
    structuredData: [
      getServiceSchema({
        name: "Lead Generation Services",
        description: "Comprehensive lead generation and customer acquisition services",
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
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
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
                  <Target className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm">Lead Generation Hub</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Lead Generation Services
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    Across India
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Generate high-quality leads and accelerate your business growth with our proven 
                  lead generation strategies. Expert B2B and B2C lead generation services delivering 
                  qualified prospects across 500+ cities in India.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <GlassmorphismCard key={stat.label} className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-green-400">
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
                  Our Lead Generation Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete lead generation solutions designed to fill your sales pipeline with qualified prospects
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subServices.map((service, index) => (
                <ScrollReveal key={service.slug} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                        {service.slug.includes('b2b') && <UserPlus className="w-8 h-8" />}
                        {service.slug.includes('qualified') && <Filter className="w-8 h-8" />}
                        {service.slug.includes('email') && <MessageSquare className="w-8 h-8" />}
                        {service.slug.includes('linkedin') && <Users className="w-8 h-8" />}
                        {!service.slug.includes('b2b') && !service.slug.includes('qualified') && !service.slug.includes('email') && !service.slug.includes('linkedin') && <Target className="w-8 h-8" />}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Professional {service.name.toLowerCase()} services to generate high-quality prospects for your business.
                    </p>
                    <motion.a
                      href={`/${service.slug}/`}
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
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

        {/* Lead Types */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Types of Lead Generation for Indian Businesses
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Specialized lead generation solutions for different business models and industries
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadTypes.map((type, index) => (
                <ScrollReveal key={type.title} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full">
                    <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                    
                    <div className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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

        {/* Locations Coverage */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Lead Generation Services Across India
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Serving businesses in all major cities with targeted lead generation strategies
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {majorStates.map((state, index) => (
                <ScrollReveal key={state.stateSlug} direction="up" delay={index * 0.1}>
                  <motion.a
                    href={`/lead-generation/${state.stateSlug}/`}
                    className="p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded-lg group text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-white font-semibold group-hover:text-green-400 transition-colors">
                      {state.state}
                    </div>
                    <div className="text-gray-400 text-sm">{state.cities.length} cities</div>
                  </motion.a>
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
                    Why Choose Our Lead Generation Services?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our lead generation experts use advanced targeting and qualification techniques 
                    to deliver high-quality prospects that convert into paying customers.
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
              </ScrollReveal>

              <ScrollReveal direction="right">
                <GlassmorphismCard className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Start Generating Leads</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">leads@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">24/7 Lead Support</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Lead Generation Quote
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
                Ready to Fill Your Sales Pipeline?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Start generating high-quality leads today with our proven strategies 
                designed to accelerate your business growth across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Lead Generation
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Lead Case Studies
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};