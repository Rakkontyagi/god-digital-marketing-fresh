import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Target, Zap, Users, TrendingUp, Building, Globe } from 'lucide-react';
import { GodDigitalNavLogo } from '../Brand/GodDigitalLogo';
import { allIndianLocations, comprehensiveServices, comprehensiveIndustries } from '../../data/comprehensiveLocations';
import { getAnchorText } from '../Shared/AnchorTextUtils';

export const EnhancedFooter: React.FC = () => {
  const majorStates = allIndianLocations.slice(0, 8);
  const mainServices = comprehensiveServices.slice(0, 8);
  const popularIndustries = comprehensiveIndustries.slice(0, 6);
  const metroCities = allIndianLocations.flatMap(state => 
    state.cities.filter(city => city.isMetro).map(city => ({
      ...city,
      state: state.state,
      stateSlug: state.stateSlug
    }))
  ).slice(0, 12);

  const usedAnchors = new Set<string>();

  // For context-aware anchor text, pick a top service and a top city
  const topService = mainServices[0];
  const topCity = metroCities[0];

  // Define the top 12 Indian metro cities in desired order
  const topMetroCityNames = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
    'Pune', 'Ahmedabad', 'Surat', 'Jaipur', 'Lucknow', 'Kanpur'
  ];
  const topMetroCities = topMetroCityNames.map(cityName => {
    for (const state of allIndianLocations) {
      const city = state.cities.find(c => c.name.toLowerCase() === cityName.toLowerCase());
      if (city) {
        return { ...city, state: state.state, stateSlug: state.stateSlug };
      }
    }
    return null;
  }).filter(Boolean);

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <GodDigitalNavLogo animated={false} />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's premier digital marketing agency delivering revolutionary AI-powered solutions, 
              lead generation, and business automation across all states and cities.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-gray-300">+91 9999999999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-gray-300">contact@goddigitalmarketing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: <MapPin className="w-4 h-4" />, label: "Cities", value: "500+" },
                { icon: <Users className="w-4 h-4" />, label: "Clients", value: "2000+" },
                { icon: <TrendingUp className="w-4 h-4" />, label: "ROI", value: "340%" },
                { icon: <Zap className="w-4 h-4" />, label: "Success", value: "98%" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="flex justify-center mb-2 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {mainServices.slice(0, 5).map((service, index) => (
                <motion.li
                  key={service.slug}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <a
                    href={`/services/${service.slug}/`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm"
                    title={service.description}
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{getAnchorText('service', service, { city: topCity.name, state: topCity.state }, usedAnchors)}</span>
                  </a>
                </motion.li>
              ))}
              <li>
                <a href="/services/" className="text-blue-400 hover:text-white transition-colors duration-300 flex items-center group text-sm font-semibold">
                  <ArrowRight className="w-3 h-3 mr-2" />See all services
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Major States */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Major States
            </h3>
            <ul className="space-y-3">
              {majorStates.slice(0, 5).map((state, index) => (
                <motion.li
                  key={state.stateSlug}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <a
                    href={`/locations/${state.stateSlug}/`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm"
                    title={`Digital marketing services in ${state.state}`}
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{getAnchorText('location', state, { service: topService.name }, usedAnchors)}</span>
                  </a>
                </motion.li>
              ))}
              <li>
                <a href="/locations/" className="text-blue-400 hover:text-white transition-colors duration-300 flex items-center group text-sm font-semibold">
                  <ArrowRight className="w-3 h-3 mr-2" />See all locations
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Metro Cities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <Building className="w-5 h-5 mr-2" />
              Metro Cities
            </h3>
            <ul className="space-y-3">
              {topMetroCities.map((city, index) => (
                <motion.li
                  key={`${city.stateSlug}-${city.slug}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <a
                    href={`/${city.slug}/digital-marketing/`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{getAnchorText('location', city, { service: topService.name }, usedAnchors)}</span>
                  </a>
                </motion.li>
              ))}
              <li>
                <a href="/locations/" className="text-blue-400 hover:text-white transition-colors duration-300 flex items-center group text-sm font-semibold">
                  <ArrowRight className="w-3 h-3 mr-2" />See all locations
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Industries
            </h3>
            <ul className="space-y-3">
              {popularIndustries.slice(0, 5).map((industry, index) => (
                <motion.li
                  key={industry.slug}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <a
                    href={`/industries/${industry.slug}/digital-marketing/`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm"
                    title={industry.description}
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{getAnchorText('industry', industry, { service: topService.name }, usedAnchors)}</span>
                  </a>
                </motion.li>
              ))}
              <li>
                <a href="/industries/" className="text-blue-400 hover:text-white transition-colors duration-300 flex items-center group text-sm font-semibold">
                  <ArrowRight className="w-3 h-3 mr-2" />See all industries
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Service + Location Matrix */}
        <motion.div
          className="mb-12 p-6 border border-gray-800 bg-black/30 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-white font-bold text-lg mb-6">Popular Service + Location Combinations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { service: 'Digital Marketing', location: 'Delhi', url: '/digital-marketing-delhi/' },
              { service: 'AI Automation', location: 'Mumbai', url: '/ai-automation/maharashtra/mumbai/' },
              { service: 'Lead Generation', location: 'Bangalore', url: '/lead-generation/karnataka/bangalore/' },
              { service: 'SEO Services', location: 'Chennai', url: '/seo-services/tamil-nadu/chennai/' },
              { service: 'PPC Management', location: 'Hyderabad', url: '/ppc-advertising/telangana/hyderabad/' },
              { service: 'Social Media', location: 'Pune', url: '/social-media-marketing/maharashtra/pune/' },
              { service: 'Healthcare Marketing', location: 'Delhi', url: '/healthcare-digital-marketing/' },
              { service: 'E-commerce Marketing', location: 'Mumbai', url: '/ecommerce-digital-marketing/' }
            ].map((item, index) => (
              <motion.a
                key={`${item.service}-${item.location}`}
                href={item.url}
                className="p-3 border border-gray-800 bg-black/20 hover:bg-white/5 transition-colors duration-300 rounded text-center group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">
                  {item.service}
                </div>
                <div className="text-gray-400 text-xs">in {item.location}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © 2024 God Digital Marketing. All rights reserved. | 
              <a href="/privacy-policy/" className="hover:text-white transition-colors duration-300 ml-1">Privacy Policy</a> | 
              <a href="/terms-of-service/" className="hover:text-white transition-colors duration-300 ml-1">Terms of Service</a> |
              <a href="/sitemap/" className="hover:text-white transition-colors duration-300 ml-1">Sitemap</a>
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-gray-400 text-sm">Serving all 28 Indian States & 8 UTs</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>
          </div>

          {/* Additional Links */}
          <motion.div
            className="mt-6 pt-6 border-t border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <a href="/about/" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a>
              <a href="/careers/" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a>
              <a href="/case-studies/" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</a>
              <a href="/blog/" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};