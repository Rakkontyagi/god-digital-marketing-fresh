import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Building, 
  Briefcase, 
  Phone, 
  Mail,
  MapPin,
  Target,
  Zap,
  BarChart3,
  Users
} from 'lucide-react';

export const AdvancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'Services',
      href: '/services',
      icon: <Target className="w-4 h-4" />,
      dropdown: [
        {
          category: 'Digital Marketing',
          items: [
            { title: 'SEO Services', href: '/services/seo', description: 'Search Engine Optimization' },
            { title: 'PPC Advertising', href: '/services/ppc', description: 'Pay-Per-Click Management' },
            { title: 'Social Media Marketing', href: '/services/social-media', description: 'Social Platform Management' },
            { title: 'Content Marketing', href: '/services/content', description: 'Strategic Content Creation' }
          ]
        },
        {
          category: 'Automation',
          items: [
            { title: 'Marketing Automation', href: '/services/marketing-automation', description: 'Automated Marketing Workflows' },
            { title: 'Business Automation', href: '/services/business-automation', description: 'Process Optimization' },
            { title: 'AI Solutions', href: '/services/ai', description: 'Artificial Intelligence Integration' },
            { title: 'CRM Integration', href: '/services/crm', description: 'Customer Relationship Management' }
          ]
        },
        {
          category: 'Development',
          items: [
            { title: 'Web Development', href: '/services/web-development', description: 'Custom Website Solutions' },
            { title: 'E-commerce', href: '/services/ecommerce', description: 'Online Store Development' },
            { title: 'Mobile Apps', href: '/services/mobile-apps', description: 'iOS & Android Applications' },
            { title: 'Brand Development', href: '/services/branding', description: 'Brand Strategy & Design' }
          ]
        }
      ]
    },
    {
      title: 'Locations',
      href: '/locations',
      icon: <MapPin className="w-4 h-4" />,
      dropdown: [
        {
          category: 'Major Cities',
          items: [
            { title: 'Mumbai', href: '/locations/mumbai', description: 'Financial Capital Services' },
            { title: 'Delhi', href: '/locations/delhi', description: 'National Capital Region' },
            { title: 'Bangalore', href: '/locations/bangalore', description: 'Silicon Valley of India' },
            { title: 'Chennai', href: '/locations/chennai', description: 'South India Hub' },
            { title: 'Hyderabad', href: '/locations/hyderabad', description: 'Cyberabad Services' },
            { title: 'Pune', href: '/locations/pune', description: 'IT Capital of Maharashtra' }
          ]
        },
        {
          category: 'All States',
          items: [
            { title: 'Maharashtra', href: '/locations/maharashtra', description: '50+ Cities Covered' },
            { title: 'Karnataka', href: '/locations/karnataka', description: '35+ Cities Covered' },
            { title: 'Tamil Nadu', href: '/locations/tamil-nadu', description: '40+ Cities Covered' },
            { title: 'Andhra Pradesh', href: '/locations/andhra-pradesh', description: '30+ Cities Covered' },
            { title: 'View All States', href: '/locations/all-states', description: '500+ Cities Nationwide' }
          ]
        }
      ]
    },
    {
      title: 'Industries',
      href: '/industries',
      icon: <Building className="w-4 h-4" />,
      dropdown: [
        {
          category: 'Business Sectors',
          items: [
            { title: 'Healthcare', href: '/industries/healthcare', description: 'Medical & Wellness' },
            { title: 'Real Estate', href: '/industries/real-estate', description: 'Property & Construction' },
            { title: 'Education', href: '/industries/education', description: 'EdTech & Institutions' },
            { title: 'Finance', href: '/industries/finance', description: 'Banking & FinTech' },
            { title: 'E-commerce', href: '/industries/ecommerce', description: 'Online Retail' },
            { title: 'Technology', href: '/industries/technology', description: 'IT & Software' }
          ]
        },
        {
          category: 'Specialized',
          items: [
            { title: 'Manufacturing', href: '/industries/manufacturing', description: 'Industrial Solutions' },
            { title: 'Hospitality', href: '/industries/hospitality', description: 'Hotels & Tourism' },
            { title: 'Automotive', href: '/industries/automotive', description: 'Auto Industry' },
            { title: 'Retail', href: '/industries/retail', description: 'Physical Stores' }
          ]
        }
      ]
    },
    {
      title: 'Company',
      href: '/about',
      icon: <Users className="w-4 h-4" />,
      dropdown: [
        {
          category: 'About Us',
          items: [
            { title: 'Our Story', href: '/about', description: 'Company History & Vision' },
            { title: 'Team', href: '/about/team', description: 'Meet Our Experts' },
            { title: 'Careers', href: '/about/careers', description: 'Join Our Team' },
            { title: 'Awards', href: '/about/awards', description: 'Recognition & Achievements' }
          ]
        },
        {
          category: 'Resources',
          items: [
            { title: 'Portfolio', href: '/portfolio', description: 'Our Work Showcase' },
            { title: 'Case Studies', href: '/case-studies', description: 'Success Stories' },
            { title: 'Blog', href: '/blog', description: 'Industry Insights' },
            { title: 'Contact', href: '/contact', description: 'Get In Touch' }
          ]
        }
      ]
    }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-white to-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">G</span>
            </div>
            <div>
              <div className="text-white font-bold text-xl">God Digital Marketing</div>
              <div className="text-gray-400 text-xs">Divine Digital Solutions</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={item.href}
                  className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors py-2"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                  <span>{item.title}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </motion.a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.title && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-96 glass rounded-xl shadow-2xl border border-white/20 overflow-hidden"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 gap-6">
                          {item.dropdown.map((category) => (
                            <div key={category.category}>
                              <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                                {category.category}
                              </h4>
                              <div className="space-y-2">
                                {category.items.map((subItem) => (
                                  <motion.a
                                    key={subItem.title}
                                    href={subItem.href}
                                    className="block p-3 rounded-lg hover:bg-white/10 transition-colors group"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <div className="text-white font-medium group-hover:text-gray-100">
                                      {subItem.title}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                      {subItem.description}
                                    </div>
                                  </motion.a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="/contact"
              className="btn-secondary px-6 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.a>
            <motion.a
              href="/contact"
              className="btn-primary px-6 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Project
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 glass border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-6">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <a
                      href={item.href}
                      className="flex items-center space-x-3 text-white hover:text-gray-300 transition-colors py-2"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </div>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <div className="space-y-3">
                    <a href="/contact" className="btn-secondary w-full justify-center py-3">
                      Get Quote
                    </a>
                    <a href="/contact" className="btn-primary w-full justify-center py-3">
                      Start Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
