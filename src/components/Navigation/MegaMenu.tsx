import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Building, Target, Zap, ArrowRight } from 'lucide-react';
import { comprehensiveServices, allIndianLocations, comprehensiveIndustries } from '../../data/comprehensiveLocations';
import { getAnchorText } from '../Shared/AnchorTextUtils';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string | null;
  onMenuChange: (menu: string | null) => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, activeMenu, onMenuChange }) => {
  const majorStates = allIndianLocations.slice(0, 8);
  const mainServices = comprehensiveServices.slice(0, 6);
  const mainIndustries = comprehensiveIndustries.slice(0, 8);

  const handleMenuHover = (menu: string) => {
    onMenuChange(menu);
  };

  const handleMenuLeave = () => {
    onMenuChange(null);
  };

  const usedAnchors = new Set<string>();

  return (
    <div className="relative">
      {/* Main Navigation Items */}
      <div className="flex items-center space-x-8">
        <div
          className="relative"
          onMouseEnter={() => handleMenuHover('services')}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300">
            <Target className="w-4 h-4" />
            <span>Services</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div
          className="relative"
          onMouseEnter={() => handleMenuHover('locations')}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300">
            <MapPin className="w-4 h-4" />
            <span>Locations</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div
          className="relative"
          onMouseEnter={() => handleMenuHover('industries')}
          onMouseLeave={handleMenuLeave}
        >
          <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300">
            <Building className="w-4 h-4" />
            <span>Industries</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            className="absolute top-full left-1/2 -translate-x-1/2 max-w-6xl w-full bg-neutral-900/95 backdrop-blur-xl shadow-2xl z-50 px-10 py-8 rounded-2xl border border-neutral-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => handleMenuHover(activeMenu)}
            onMouseLeave={handleMenuLeave}
            style={{ left: '50%', transform: 'translateX(-50%)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
              {/* Services Mega Menu */}
              {activeMenu === 'services' && (
                <>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Core Services</h3>
                    <ul className="space-y-2">
                      {mainServices.slice(0, 5).map((service) => (
                        <li key={service.slug}>
                          <a
                            href={`/services/${service.slug}/`}
                            className="block font-semibold text-white hover:text-blue-400 transition-colors text-base"
                          >
                            {getAnchorText('service', service, undefined, usedAnchors)}
                            <span className="block text-gray-400 font-normal text-sm mt-0.5">{service.description}</span>
                          </a>
                        </li>
                      ))}
                      <li>
                        <a href="/services/" className="text-blue-400 hover:text-white transition-colors text-base font-semibold">See all services</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Popular Locations</h3>
                    <ul className="space-y-2">
                      {majorStates.slice(0, 6).map((state) => (
                        <li key={state.stateSlug}>
                          <a
                            href={`/${state.stateSlug}/digital-marketing/`}
                            className="block font-semibold text-white hover:text-blue-400 transition-colors text-base"
                          >
                            {getAnchorText('location', state, undefined, usedAnchors)}
                            <span className="block text-gray-400 font-normal text-sm mt-0.5">{state.cities.length} cities</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Featured & Case Studies</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/digital-marketing/healthcare/" className="block font-semibold text-white hover:text-blue-400 transition-colors text-base">
                          Healthcare Marketing
                          <span className="block text-gray-400 font-normal text-sm mt-0.5">HIPAA-compliant solutions</span>
                        </a>
                      </li>
                      <li>
                        <a href="/ai-automation/" className="block font-semibold text-white hover:text-blue-400 transition-colors text-base">
                          AI Automation
                          <span className="block text-gray-400 font-normal text-sm mt-0.5">Next-gen business automation</span>
                        </a>
                      </li>
                      <li>
                        <a href="/case-studies/healthcare/" className="block font-semibold text-white hover:text-blue-400 transition-colors text-base">
                          Healthcare Success
                          <span className="block text-gray-400 font-normal text-sm mt-0.5">300% patient acquisition increase</span>
                        </a>
                      </li>
                      <li>
                        <a href="/case-studies/ecommerce/" className="block font-semibold text-white hover:text-blue-400 transition-colors text-base">
                          E-commerce Growth
                          <span className="block text-gray-400 font-normal text-sm mt-0.5">500% revenue growth in 12 months</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {/* Locations Mega Menu */}
              {activeMenu === 'locations' && (
                <>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Major States</h3>
                    <ul className="space-y-2">
                      {majorStates.map((state) => (
                        <li key={state.stateSlug}>
                          <a
                            href={`/locations/${state.stateSlug}/`}
                            className="block font-semibold text-white hover:text-blue-400 transition-colors text-base"
                          >
                            {state.state}
                            <span className="block text-gray-400 font-normal text-sm mt-0.5">{state.cities.length} cities covered</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Metro Cities</h3>
                    <ul className="space-y-2">
                      {allIndianLocations.flatMap(state => 
                        state.cities.filter(city => city.isMetro).map(city => ({
                          ...city,
                          state: state.state,
                          stateSlug: state.stateSlug
                        }))
                      ).slice(0, 8).map((city) => (
                        <li key={`${city.stateSlug}-${city.slug}`}>
                          <a
                            href={`/digital-marketing/${city.stateSlug}/${city.slug}/`}
                            className="block font-semibold text-white hover:text-blue-400 transition-colors text-base"
                          >
                            {city.name}
                            <span className="block text-gray-400 font-normal text-sm mt-0.5">{city.state}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Quick Access</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/digital-marketing/delhi/new-delhi/" className="block font-semibold text-white hover:text-blue-400 transition-colors text-base">
                          Delhi NCR
                          <span className="block text-gray-400 font-normal text-sm mt-0.5">Capital region services</span>
                        </a>
                      </li>
                      <li>
                        <a href="/digital-marketing/maharashtra/mumbai/" className="block font-semibold text-white hover:text-blue-400 transition-colors text-base">
                          Mumbai
                          <span className="block text-gray-400 font-normal text-sm mt-0.5">Financial capital</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {/* Industries Mega Menu */}
              {activeMenu === 'industries' && (
                <>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Industries We Serve</h3>
                    <ul className="space-y-2">
                      {mainIndustries.slice(0, 5).map((industry) => (
                        <li key={industry.slug}>
                          <a
                            href={`/industries/${industry.slug}/digital-marketing/`}
                            className="block font-semibold text-white hover:text-blue-400 transition-colors text-base"
                          >
                            {getAnchorText('industry', industry, undefined, usedAnchors)}
                            <span className="block text-gray-400 font-normal text-sm mt-0.5">{industry.description}</span>
                          </a>
                        </li>
                      ))}
                      <li>
                        <a href="/industries/" className="text-blue-400 hover:text-white transition-colors text-base font-semibold">See all industries</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Specialized Services</h3>
                    <ul className="space-y-2">
                      {[{ name: 'Healthcare Marketing', slug: 'healthcare', desc: 'HIPAA-compliant solutions' },
                        { name: 'E-commerce Growth', slug: 'ecommerce', desc: 'Online store optimization' },
                        { name: 'Real Estate Marketing', slug: 'real-estate', desc: 'Property lead generation' },
                        { name: 'Tech Startup Growth', slug: 'technology', desc: 'Scalable marketing systems' },
                        { name: 'Financial Services', slug: 'financial-services', desc: 'Compliance-focused marketing' },
                        { name: 'Manufacturing', slug: 'manufacturing', desc: 'B2B lead generation' }
                      ].slice(0, 5).map((service) => (
                        <li key={service.slug}>
                          <a
                            href={`/digital-marketing/${service.slug}/`}
                            className="block font-semibold text-white hover:text-blue-400 transition-colors text-base"
                          >
                            {service.name}
                            <span className="block text-gray-400 font-normal text-sm mt-0.5">{service.desc}</span>
                          </a>
                        </li>
                      ))}
                      <li>
                        <a href="/digital-marketing/" className="text-blue-400 hover:text-white transition-colors text-base font-semibold">See all services</a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};