import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, MapPin, Target, Building, ArrowRight, Zap } from 'lucide-react';
import { allIndianLocations, comprehensiveServices, comprehensiveIndustries } from '../../data/comprehensiveLocations';
import { getAnchorText } from '../Shared/AnchorTextUtils';

interface ContextualSidebarProps {
  currentService?: {
    name: string;
    slug: string;
  };
  currentLocation?: {
    city: string;
    state: string;
    citySlug: string;
    stateSlug: string;
  };
  currentIndustry?: {
    name: string;
    slug: string;
  };
}

export const ContextualSidebar: React.FC<ContextualSidebarProps> = ({
  currentService,
  currentLocation,
  currentIndustry
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<'services' | 'locations' | 'industries'>('services');

  // Get related content based on current context
  const getRelatedServices = () => {
    return comprehensiveServices
      .filter(service => service.slug !== currentService?.slug)
      .slice(0, 8);
  };

  const getRelatedLocations = () => {
    if (currentLocation) {
      // Get other cities in the same state
      const currentState = allIndianLocations.find(state => state.stateSlug === currentLocation.stateSlug);
      const otherCities = currentState?.cities.filter(city => city.slug !== currentLocation.citySlug).slice(0, 6) || [];
      
      // Get other states
      const otherStates = allIndianLocations
        .filter(state => state.stateSlug !== currentLocation.stateSlug)
        .slice(0, 4);

      return { otherCities, otherStates, currentState };
    }
    
    // Default to major locations
    return {
      otherCities: [],
      otherStates: allIndianLocations.slice(0, 6),
      currentState: null
    };
  };

  const getRelatedIndustries = () => {
    return comprehensiveIndustries
      .filter(industry => industry.slug !== currentIndustry?.slug)
      .slice(0, 6);
  };

  const relatedServices = getRelatedServices();
  const { otherCities, otherStates, currentState } = getRelatedLocations();
  const relatedIndustries = getRelatedIndustries();

  // Deduplication set for anchor text
  const usedAnchors = new Set<string>();

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
      <motion.div
        className={`bg-black/95 backdrop-blur-xl border-l border-gray-800 shadow-2xl transition-all duration-300 ${
          isExpanded ? 'w-80' : 'w-12'
        }`}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {/* Toggle Button */}
        <motion.button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-black/95 backdrop-blur-xl border border-gray-800 rounded-l-lg p-2 text-white hover:bg-white/10 transition-colors duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="p-6 h-screen overflow-y-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-white font-bold text-lg mb-2">Related Content</h3>
                <p className="text-gray-400 text-sm">Explore more services and locations</p>
              </div>

              {/* Section Tabs */}
              <div className="flex space-x-1 mb-6 bg-gray-800/50 rounded-lg p-1">
                {[
                  { key: 'services', label: 'Services', icon: <Target className="w-3 h-3" /> },
                  { key: 'locations', label: 'Locations', icon: <MapPin className="w-3 h-3" /> },
                  { key: 'industries', label: 'Industries', icon: <Building className="w-3 h-3" /> }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveSection(tab.key as any)}
                    className={`flex-1 flex items-center justify-center space-x-1 py-2 px-3 rounded text-xs font-medium transition-all duration-300 ${
                      activeSection === tab.key
                        ? 'bg-white text-black'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Content Sections */}
              <div className="space-y-6">
                {/* Services Section */}
                {activeSection === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-blue-400" />
                      Other Services
                    </h4>
                    <div className="space-y-2">
                      <ul className="space-y-2">
                        {relatedServices.map((service) => {
                          const anchor = getAnchorText('service', service, { currentLocation }, usedAnchors);
                          if (!anchor) return null;
                          return (
                            <li key={service.slug}>
                              <a
                                href={`/services/${service.slug}/`}
                                className="text-blue-400 hover:text-white transition-colors text-sm"
                              >
                                {anchor}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Locations Section */}
                {activeSection === 'locations' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Other Cities in Same State */}
                    {otherCities.length > 0 && currentState && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-4 flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-green-400" />
                          Other Cities in {currentState.state}
                        </h4>
                        <div className="space-y-2">
                          <ul className="space-y-2">
                            {otherCities.map((city) => {
                              const anchor = getAnchorText('location', city, { currentService }, usedAnchors);
                              if (!anchor) return null;
                              return (
                                <li key={city.slug}>
                                  <a
                                    href={`/${city.slug}/digital-marketing/`}
                                    className="text-blue-400 hover:text-white transition-colors text-sm"
                                  >
                                    {anchor}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Other States */}
                    <div>
                      <h4 className="text-white font-semibold mb-4 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-green-400" />
                        Other States
                      </h4>
                      <div className="space-y-2">
                        {otherStates.map((state, index) => (
                          <motion.a
                            key={state.stateSlug}
                            href={`/locations/${state.stateSlug}/`}
                            className="block p-3 border border-gray-800 bg-black/30 hover:bg-white/5 transition-all duration-300 rounded group"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-white font-medium text-sm group-hover:text-green-400 transition-colors">
                                  {state.state}
                                </div>
                                <div className="text-gray-400 text-xs">{state.cities.length} cities</div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Industries Section */}
                {activeSection === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Building className="w-4 h-4 mr-2 text-purple-400" />
                      Industry Solutions
                    </h4>
                    <div className="space-y-2">
                      <ul className="space-y-2">
                        {relatedIndustries.map((industry) => {
                          const anchor = getAnchorText('industry', industry, { currentService }, usedAnchors);
                          if (!anchor) return null;
                          return (
                            <li key={industry.slug}>
                              <a
                                href={`/industries/${industry.slug}/digital-marketing/`}
                                className="text-blue-400 hover:text-white transition-colors text-sm"
                              >
                                {anchor}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* CTA Section */}
              <motion.div
                className="mt-8 p-4 border border-gray-800 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <h4 className="text-white font-semibold mb-2">Need Custom Solutions?</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Get personalized recommendations for your business
                </p>
                <motion.a
                  href="/contact/"
                  className="block w-full px-4 py-2 bg-white text-black font-medium rounded text-center hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Consultation
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};