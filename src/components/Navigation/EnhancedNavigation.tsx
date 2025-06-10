import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown, MapPin, Building2, Zap, Users, Globe, Briefcase, Target } from 'lucide-react';
import { GodDigitalNavLogo } from '../Brand/GodDigitalLogo';
import { MegaMenu } from './MegaMenu';
import { getAnchorText } from '../Shared/AnchorTextUtils';
import { comprehensiveServices, allIndianLocations } from '../../data/comprehensiveLocations';

const majorCities = [
  { name: "Mumbai", slug: "mumbai", state: "Maharashtra" },
  { name: "Delhi", slug: "delhi", state: "Delhi" },
  { name: "Bangalore", slug: "bangalore", state: "Karnataka" },
  { name: "Chennai", slug: "chennai", state: "Tamil Nadu" },
  { name: "Hyderabad", slug: "hyderabad", state: "Telangana" },
  { name: "Pune", slug: "pune", state: "Maharashtra" },
  { name: "Ahmedabad", slug: "ahmedabad", state: "Gujarat" },
  { name: "Kolkata", slug: "kolkata", state: "West Bengal" },
  { name: "Surat", slug: "surat", state: "Gujarat" },
  { name: "Jaipur", slug: "jaipur", state: "Rajasthan" },
  { name: "Lucknow", slug: "lucknow", state: "Uttar Pradesh" },
  { name: "Kanpur", slug: "kanpur", state: "Uttar Pradesh" },
  { name: "Nagpur", slug: "nagpur", state: "Maharashtra" },
  { name: "Indore", slug: "indore", state: "Madhya Pradesh" },
  { name: "Thane", slug: "thane", state: "Maharashtra" },
  { name: "Bhopal", slug: "bhopal", state: "Madhya Pradesh" },
  { name: "Visakhapatnam", slug: "visakhapatnam", state: "Andhra Pradesh" },
  { name: "Pimpri-Chinchwad", slug: "pimpri-chinchwad", state: "Maharashtra" },
  { name: "Patna", slug: "patna", state: "Bihar" },
  { name: "Vadodara", slug: "vadodara", state: "Gujarat" }
];

const services = [
  { 
    name: "Digital Marketing", 
    slug: "digital-marketing", 
    icon: <Target className="w-4 h-4" />,
    subServices: ["SEO Services", "PPC Advertising", "Social Media Marketing", "Content Marketing", "Email Marketing", "Google Ads Management"]
  },
  { 
    name: "AI Automation", 
    slug: "ai-automation", 
    icon: <Zap className="w-4 h-4" />,
    subServices: ["Marketing Automation", "Chatbot Development", "CRM Automation", "Email Automation", "Lead Scoring", "Customer Service Automation"]
  },
  { 
    name: "Business Automation", 
    slug: "business-automation", 
    icon: <Briefcase className="w-4 h-4" />,
    subServices: ["Process Automation", "Document Automation", "HR Automation", "Accounting Automation", "Inventory Management", "Workflow Optimization"]
  },
  { 
    name: "SEO Services", 
    slug: "seo-services", 
    icon: <Globe className="w-4 h-4" />,
    subServices: ["Local SEO", "Technical SEO", "Content SEO", "E-commerce SEO", "Mobile SEO", "SEO Audits"]
  },
  { 
    name: "PPC Advertising", 
    slug: "ppc-advertising", 
    icon: <Target className="w-4 h-4" />,
    subServices: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Display Advertising", "Shopping Ads", "Video Ads"]
  },
  { 
    name: "Social Media Marketing", 
    slug: "social-media-marketing", 
    icon: <Users className="w-4 h-4" />,
    subServices: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "Twitter Marketing", "YouTube Marketing", "Social Media Management"]
  }
];

const industries = [
  { name: "Healthcare", slug: "healthcare" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "E-commerce", slug: "ecommerce" },
  { name: "Education", slug: "education" },
  { name: "Manufacturing", slug: "manufacturing" },
  { name: "Financial Services", slug: "financial-services" },
  { name: "Hospitality", slug: "hospitality" },
  { name: "Technology", slug: "technology" },
  { name: "Retail", slug: "retail" },
  { name: "Automotive", slug: "automotive" },
  { name: "Food & Beverage", slug: "food-beverage" },
  { name: "Fashion", slug: "fashion" },
  { name: "Legal Services", slug: "legal-services" },
  { name: "Fitness & Wellness", slug: "fitness-wellness" },
  { name: "Beauty & Cosmetics", slug: "beauty-cosmetics" },
  { name: "Construction", slug: "construction" },
  { name: "Consulting", slug: "consulting" },
  { name: "Non-Profit", slug: "non-profit" },
  { name: "Agriculture", slug: "agriculture" },
  { name: "Transportation", slug: "transportation" }
];

const states = [
  { name: "Maharashtra", slug: "maharashtra" },
  { name: "Karnataka", slug: "karnataka" },
  { name: "Tamil Nadu", slug: "tamil-nadu" },
  { name: "Delhi", slug: "delhi" },
  { name: "Gujarat", slug: "gujarat" },
  { name: "Uttar Pradesh", slug: "uttar-pradesh" },
  { name: "West Bengal", slug: "west-bengal" },
  { name: "Rajasthan", slug: "rajasthan" },
  { name: "Madhya Pradesh", slug: "madhya-pradesh" },
  { name: "Andhra Pradesh", slug: "andhra-pradesh" },
  { name: "Telangana", slug: "telangana" },
  { name: "Bihar", slug: "bihar" },
  { name: "Punjab", slug: "punjab" },
  { name: "Haryana", slug: "haryana" },
  { name: "Kerala", slug: "kerala" },
  { name: "Odisha", slug: "odisha" },
  { name: "Jharkhand", slug: "jharkhand" },
  { name: "Assam", slug: "assam" },
  { name: "Chhattisgarh", slug: "chhattisgarh" },
  { name: "Himachal Pradesh", slug: "himachal-pradesh" }
];

export const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Deduplication set for anchor text
  const usedAnchors = new Set<string>();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Bar */}
      <div className="border-b border-gray-800/50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-green-400" />
                <span className="text-gray-300">+91 9999999999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-blue-400" />
                <span className="text-gray-300">contact@goddigitalmarketing.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-gray-400">
              <span>Serving 500+ Cities Across India</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <GodDigitalNavLogo animated={true} />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                onMouseEnter={() => setActiveDropdown('services')}
              >
                <span className="font-medium">Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-96 bg-black/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-800 transition-all duration-300 ${
                  activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-6">
                  <h3 className="text-white font-semibold mb-4 text-lg">Our Services</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <a
                        key={service.slug}
                        href={`/${service.slug}/`}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-600/20 transition-colors duration-200 group"
                        onClick={closeAllDropdowns}
                      >
                        <div className="text-purple-400 group-hover:text-purple-300">
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-gray-400 text-sm">{service.subServices.slice(0, 2).join(', ')}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <a
                      href="/services/"
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                      onClick={closeAllDropdowns}
                    >
                      View All Services →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                onMouseEnter={() => setActiveDropdown('locations')}
              >
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Locations</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-80 bg-black/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-800 transition-all duration-300 ${
                  activeDropdown === 'locations' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-6">
                  <h3 className="text-white font-semibold mb-4 text-lg">Major Cities</h3>
                  <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                    {majorCities.slice(0, 16).map((city) => (
                      <a
                        key={city.slug}
                        href={`/${city.slug}/digital-marketing/`}
                        className="p-2 rounded-lg hover:bg-purple-600/20 transition-colors duration-200"
                        onClick={closeAllDropdowns}
                      >
                        <div className="text-white text-sm font-medium">{city.name}</div>
                        <div className="text-gray-400 text-xs">{city.state}</div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between">
                    <a
                      href="/locations/"
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                      onClick={closeAllDropdowns}
                    >
                      All Cities →
                    </a>
                    <a
                      href="/locations/states/"
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                      onClick={closeAllDropdowns}
                    >
                      By State →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                onMouseEnter={() => setActiveDropdown('industries')}
              >
                <Building2 className="w-4 h-4" />
                <span className="font-medium">Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-72 bg-black/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-800 transition-all duration-300 ${
                  activeDropdown === 'industries' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-6">
                  <h3 className="text-white font-semibold mb-4 text-lg">Industry Solutions</h3>
                  <div className="grid grid-cols-1 gap-2 max-h-80 overflow-y-auto">
                    {industries.slice(0, 12).map((industry) => (
                      <a
                        key={industry.slug}
                        href={`/industries/${industry.slug}/`}
                        className="p-2 rounded-lg hover:bg-purple-600/20 transition-colors duration-200 text-gray-300 hover:text-white text-sm"
                        onClick={closeAllDropdowns}
                      >
                        {industry.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <a
                      href="/industries/"
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                      onClick={closeAllDropdowns}
                    >
                      View All Industries →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Links */}
            <a
              href="/about/"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              onClick={closeAllDropdowns}
            >
              About
            </a>
            
            <a
              href="/case-studies/"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              onClick={closeAllDropdowns}
            >
              Case Studies
            </a>

            {/* CTA Button */}
            <a
              href="/contact/"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              onClick={closeAllDropdowns}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 w-full h-full z-[9999] bg-black/95 backdrop-blur-xl border-b border-gray-800 overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100%' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-6">
                {/* Mobile Services */}
                <div>
                  <button
                    onClick={() => handleDropdownToggle('mobile-services')}
                    className="flex items-center justify-between w-full text-left text-white font-medium py-2"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${
                    activeDropdown === 'mobile-services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-2 mt-2">
                      {services.map((service) => (
                        <a
                          key={service.slug}
                          href={`/${service.slug}/`}
                          className="block text-gray-300 hover:text-white py-1"
                          onClick={closeAllDropdowns}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Locations */}
                <div>
                  <button
                    onClick={() => handleDropdownToggle('mobile-locations')}
                    className="flex items-center justify-between w-full text-left text-white font-medium py-2"
                  >
                    Locations
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-locations' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${
                    activeDropdown === 'mobile-locations' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-2 mt-2 max-h-64 overflow-y-auto">
                      {majorCities.slice(0, 12).map((city) => (
                        <a
                          key={city.slug}
                          href={`/${city.slug}/digital-marketing/`}
                          className="block text-gray-300 hover:text-white py-1"
                          onClick={closeAllDropdowns}
                        >
                          {city.name}, {city.state}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Industries */}
                <div>
                  <button
                    onClick={() => handleDropdownToggle('mobile-industries')}
                    className="flex items-center justify-between w-full text-left text-white font-medium py-2"
                  >
                    Industries
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-industries' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${
                    activeDropdown === 'mobile-industries' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-2 mt-2 max-h-64 overflow-y-auto">
                      {industries.slice(0, 10).map((industry) => (
                        <a
                          key={industry.slug}
                          href={`/industries/${industry.slug}/`}
                          className="block text-gray-300 hover:text-white py-1"
                          onClick={closeAllDropdowns}
                        >
                          {industry.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Direct Links */}
                <a
                  href="/about/"
                  className="block text-white font-medium py-2"
                  onClick={closeAllDropdowns}
                >
                  About
                </a>
                
                <a
                  href="/case-studies/"
                  className="block text-white font-medium py-2"
                  onClick={closeAllDropdowns}
                >
                  Case Studies
                </a>

                {/* Mobile CTA */}
                <a
                  href="/contact/"
                  className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
                  onClick={closeAllDropdowns}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};