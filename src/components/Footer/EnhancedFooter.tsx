import React from 'react';
import { MapPin, Phone, Mail, Clock, Award, Users, Building2, Target, Zap, Globe, Briefcase, Star, ArrowRight } from 'lucide-react';

const majorCities = [
  { name: "Mumbai", slug: "mumbai" },
  { name: "Delhi", slug: "delhi" },
  { name: "Bangalore", slug: "bangalore" },
  { name: "Chennai", slug: "chennai" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Pune", slug: "pune" },
  { name: "Ahmedabad", slug: "ahmedabad" },
  { name: "Kolkata", slug: "kolkata" },
  { name: "Surat", slug: "surat" },
  { name: "Jaipur", slug: "jaipur" },
  { name: "Lucknow", slug: "lucknow" },
  { name: "Kanpur", slug: "kanpur" }
];

const states = [
  { name: "Maharashtra", slug: "maharashtra" },
  { name: "Karnataka", slug: "karnataka" },
  { name: "Tamil Nadu", slug: "tamil-nadu" },
  { name: "Delhi", slug: "delhi" },
  { name: "Gujarat", slug: "gujarat" },
  { name: "Uttar Pradesh", slug: "uttar-pradesh" },
  { name: "West Bengal", slug: "west-bengal" },
  { name: "Rajasthan", slug: "rajasthan" }
];

const services = [
  { name: "Digital Marketing", slug: "digital-marketing", icon: <Target className="w-4 h-4" /> },
  { name: "AI Automation", slug: "ai-automation", icon: <Zap className="w-4 h-4" /> },
  { name: "Business Automation", slug: "business-automation", icon: <Briefcase className="w-4 h-4" /> },
  { name: "SEO Services", slug: "seo-services", icon: <Globe className="w-4 h-4" /> },
  { name: "PPC Advertising", slug: "ppc-advertising", icon: <Target className="w-4 h-4" /> },
  { name: "Social Media Marketing", slug: "social-media-marketing", icon: <Users className="w-4 h-4" /> }
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
  { name: "Automotive", slug: "automotive" }
];

const companyInfo = [
  { name: "About Us", href: "/about/" },
  { name: "Our Team", href: "/team/" },
  { name: "Careers", href: "/careers/" },
  { name: "Case Studies", href: "/case-studies/" },
  { name: "Testimonials", href: "/testimonials/" },
  { name: "Blog", href: "/blog/" },
  { name: "Contact", href: "/contact/" },
  { name: "Privacy Policy", href: "/privacy/" },
  { name: "Terms of Service", href: "/terms/" }
];

const resources = [
  { name: "Digital Marketing Guide", href: "/resources/digital-marketing-guide/" },
  { name: "AI Automation Playbook", href: "/resources/ai-automation-playbook/" },
  { name: "SEO Checklist", href: "/resources/seo-checklist/" },
  { name: "PPC Best Practices", href: "/resources/ppc-best-practices/" },
  { name: "Social Media Templates", href: "/resources/social-media-templates/" },
  { name: "ROI Calculator", href: "/tools/roi-calculator/" },
  { name: "SEO Audit Tool", href: "/tools/seo-audit/" },
  { name: "Keyword Research Tool", href: "/tools/keyword-research/" }
];

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info & Contact */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">YourCompany</div>
                  <div className="text-sm text-gray-400">Digital Marketing & Automation</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading digital marketing and automation agency serving 500+ cities across India. 
                Specializing in AI-powered marketing solutions, business automation, and data-driven growth strategies.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium">Call Us Now</div>
                  <a href="tel:+919999999999" className="text-gray-300 hover:text-white transition-colors">
                    +91 9999999999
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-medium">Email Us</div>
                  <a href="mailto:contact@yourcompany.com" className="text-gray-300 hover:text-white transition-colors">
                    contact@yourcompany.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="font-medium">Business Hours</div>
                  <div className="text-gray-300">Mon-Sat: 9AM-8PM IST</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <div>
                  <div className="font-medium">Headquarters</div>
                  <div className="text-gray-300">Mumbai, Maharashtra, India</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-900 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">500+</div>
                <div className="text-sm text-gray-400">Cities Served</div>
              </div>
              <div className="text-center p-4 bg-gray-900 rounded-lg">
                <div className="text-2xl font-bold text-green-400">1000+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Target className="w-5 h-5 mr-2 text-purple-400" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`/${service.slug}/`}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="text-purple-400 mr-2 group-hover:text-purple-300">
                      {service.icon}
                    </div>
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <a
                href="/services/"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Major Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-green-400" />
              Major Cities
            </h3>
            <ul className="space-y-2">
              {majorCities.map((city) => (
                <li key={city.slug}>
                  <a
                    href={`/${city.slug}/digital-marketing/`}
                    className="text-gray-300 hover:text-white transition-colors duration-200 block py-1"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-4">
              <a
                href="/locations/"
                className="inline-flex items-center text-green-400 hover:text-green-300 font-medium text-sm"
              >
                View All Cities
                <ArrowRight className="w-3 h-3 ml-1" />
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-white">By State</h4>
              <ul className="space-y-2">
                {states.slice(0, 6).map((state) => (
                  <li key={state.slug}>
                    <a
                      href={`/locations/${state.slug}/`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {state.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-blue-400" />
              Industries
            </h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <a
                    href={`/industries/${industry.slug}/`}
                    className="text-gray-300 hover:text-white transition-colors duration-200 block py-1"
                  >
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-4">
              <a
                href="/industries/"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm"
              >
                View All Industries
                <ArrowRight className="w-3 h-3 ml-1" />
              </a>
            </div>

            {/* Quick Industry + Service Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-white">Popular Combinations</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/healthcare/digital-marketing/" className="text-gray-400 hover:text-white">Healthcare Digital Marketing</a></li>
                <li><a href="/real-estate/digital-marketing/" className="text-gray-400 hover:text-white">Real Estate Marketing</a></li>
                <li><a href="/ecommerce/digital-marketing/" className="text-gray-400 hover:text-white">E-commerce Solutions</a></li>
                <li><a href="/education/digital-marketing/" className="text-gray-400 hover:text-white">Education Marketing</a></li>
              </ul>
            </div>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-400" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyInfo.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 block py-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-white">Resources</h4>
              <ul className="space-y-1">
                {resources.slice(0, 5).map((resource) => (
                  <li key={resource.href}>
                    <a
                      href={resource.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cross-Linking Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service-City Combinations */}
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Popular Service Locations</h4>
              <div className="grid grid-cols-1 gap-1 text-sm">
                <a href="/mumbai/digital-marketing/" className="text-gray-400 hover:text-white">Digital Marketing in Mumbai</a>
                <a href="/delhi/seo-services/" className="text-gray-400 hover:text-white">SEO Services in Delhi</a>
                <a href="/bangalore/ai-automation/" className="text-gray-400 hover:text-white">AI Automation in Bangalore</a>
                <a href="/chennai/ppc-advertising/" className="text-gray-400 hover:text-white">PPC Advertising in Chennai</a>
                <a href="/hyderabad/social-media-marketing/" className="text-gray-400 hover:text-white">Social Media Marketing in Hyderabad</a>
                <a href="/pune/business-automation/" className="text-gray-400 hover:text-white">Business Automation in Pune</a>
              </div>
            </div>

            {/* Industry-City Combinations */}
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Industry Expertise by City</h4>
              <div className="grid grid-cols-1 gap-1 text-sm">
                <a href="/mumbai/industries/healthcare/digital-marketing/" className="text-gray-400 hover:text-white">Healthcare Marketing Mumbai</a>
                <a href="/delhi/industries/real-estate/digital-marketing/" className="text-gray-400 hover:text-white">Real Estate Marketing Delhi</a>
                <a href="/bangalore/industries/technology/digital-marketing/" className="text-gray-400 hover:text-white">Tech Marketing Bangalore</a>
                <a href="/chennai/industries/manufacturing/digital-marketing/" className="text-gray-400 hover:text-white">Manufacturing Marketing Chennai</a>
                <a href="/hyderabad/industries/financial-services/digital-marketing/" className="text-gray-400 hover:text-white">FinTech Marketing Hyderabad</a>
                <a href="/pune/industries/automotive/digital-marketing/" className="text-gray-400 hover:text-white">Automotive Marketing Pune</a>
              </div>
            </div>

            {/* Specialized Solutions */}
            <div>
              <h4 className="font-semibold mb-4 text-green-400">Specialized Solutions</h4>
              <div className="grid grid-cols-1 gap-1 text-sm">
                <a href="/local-seo/" className="text-gray-400 hover:text-white">Local SEO Services</a>
                <a href="/e-commerce-marketing/" className="text-gray-400 hover:text-white">E-commerce Marketing</a>
                <a href="/lead-generation/" className="text-gray-400 hover:text-white">Lead Generation Services</a>
                <a href="/conversion-optimization/" className="text-gray-400 hover:text-white">Conversion Rate Optimization</a>
                <a href="/marketing-automation/" className="text-gray-400 hover:text-white">Marketing Automation</a>
                <a href="/reputation-management/" className="text-gray-400 hover:text-white">Online Reputation Management</a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 1000+ businesses that trust us for their digital marketing and automation needs. 
              Get a free consultation and custom strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/contact/"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="/case-studies/"
                className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} YourCompany. All rights reserved. | 
              <a href="/privacy/" className="hover:text-white ml-1">Privacy Policy</a> | 
              <a href="/terms/" className="hover:text-white ml-1">Terms of Service</a>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-sm text-gray-400">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="text-sm text-gray-400">
                ISO 27001 Certified
              </div>
              <div className="text-sm text-gray-400">
                Google Partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}