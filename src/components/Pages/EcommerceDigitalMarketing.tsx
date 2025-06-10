import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building, CreditCard, Package, BarChart } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';
import { SEOHead } from '../SEO/SEOHead';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

export const EcommerceDigitalMarketing: React.FC = () => {
  const benefits = [
    "Increase online sales by 400% with proven strategies",
    "E-commerce SEO and product optimization",
    "Shopping ads and marketplace management",
    "Conversion rate optimization for online stores",
    "Multi-channel e-commerce marketing",
    "Advanced analytics and sales tracking"
  ];

  const stats = [
    { icon: <ShoppingCart className="w-6 h-6" />, label: "E-commerce Clients", value: "200+" },
    { icon: <Users className="w-6 h-6" />, label: "Online Sales", value: "₹50Cr+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Sales Growth", value: "400%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "96%" }
  ];

  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "E-commerce SEO",
      description: "Optimize your online store for search engines and product discovery",
      features: ["Product page optimization", "Category page SEO", "Technical e-commerce SEO", "Schema markup for products"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Shopping Ads Management",
      description: "Maximize ROI with Google Shopping and marketplace advertising",
      features: ["Google Shopping campaigns", "Amazon advertising", "Facebook Shop ads", "Product feed optimization"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Conversion Optimization",
      description: "Increase conversion rates and average order value for your store",
      features: ["A/B testing", "Checkout optimization", "Cart abandonment recovery", "User experience optimization"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Multi-Channel Marketing",
      description: "Reach customers across all digital channels and marketplaces",
      features: ["Omnichannel strategy", "Social commerce", "Email marketing", "Influencer partnerships"]
    }
  ];

  const canonicalUrl = "https://goddigitalmarketing.com/ecommerce-digital-marketing/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Ecommerce Digital Marketing', url: canonicalUrl }
  ];

  const seoData = {
    title: "Ecommerce Digital Marketing | Best Ecommerce Marketing Company India | God Digital Marketing",
    description: "Top ecommerce digital marketing company in India. Grow your ecommerce business with our expert team and proven strategies for the ecommerce industry.",
    keywords: [
      "ecommerce digital marketing",
      "ecommerce marketing company india",
      "best ecommerce marketing company india",
      "ecommerce marketing agency india",
      "ecommerce marketing india",
      "digital marketing ecommerce india",
      "ecommerce seo india",
      "ecommerce ppc india",
      "ecommerce content marketing india",
      "ecommerce branding india",
      "ecommerce marketing experts india"
    ],
    canonicalUrl,
    structuredData: [
      getServiceSchema({
        name: "Ecommerce Digital Marketing",
        description: "Comprehensive digital marketing solutions for ecommerce businesses",
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10" />
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
                  <ShoppingCart className="w-4 h-4 text-orange-400" />
                  <span className="text-white text-sm">E-commerce Digital Marketing</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  E-commerce Digital Marketing
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                    Solutions
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Skyrocket your online sales with our specialized e-commerce marketing strategies. 
                  Increase revenue by 400% with our proven SEO, shopping ads, and conversion 
                  optimization services for online stores.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <GlassmorphismCard key={stat.label} className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-orange-400">
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
                  Comprehensive E-commerce Marketing Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Complete digital marketing solutions designed specifically for online stores and e-commerce businesses
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                  <GlassmorphismCard className="p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
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
                          <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
                    Why Choose Our E-commerce Marketing Services?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our e-commerce marketing experts understand online consumer behavior and marketplace dynamics 
                    to deliver strategies that drive sales and maximize your online store's potential.
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
                        <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <GlassmorphismCard className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Boost Your Sales</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">+91 9999999999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">ecommerce@goddigitalmarketing.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">24/7 E-commerce Support</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get E-commerce Audit
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
                Ready to Skyrocket Your Online Sales?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Transform your e-commerce business with our proven digital marketing strategies 
                designed specifically for online stores and marketplaces.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start E-commerce Marketing
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View E-commerce Case Studies
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};