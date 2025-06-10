import React from 'react';
import { MapPin, Building2, Target, Users, Zap, Globe, Briefcase, ArrowRight, Star } from 'lucide-react';

interface ContextualSidebarProps {
  currentCity?: string;
  currentService?: string;
  currentIndustry?: string;
}

const majorCities = [
  { name: "Mumbai", slug: "mumbai" },
  { name: "Delhi", slug: "delhi" },
  { name: "Bangalore", slug: "bangalore" },
  { name: "Chennai", slug: "chennai" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Pune", slug: "pune" },
  { name: "Ahmedabad", slug: "ahmedabad" },
  { name: "Kolkata", slug: "kolkata" }
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
  { name: "Technology", slug: "technology" },
  { name: "Hospitality", slug: "hospitality" }
];

export function ContextualSidebar({ currentCity, currentService, currentIndustry }: ContextualSidebarProps) {
  // Filter out current items to avoid self-linking
  const otherCities = majorCities.filter(city => city.slug !== currentCity);
  const otherServices = services.filter(service => service.slug !== currentService);
  const relatedIndustries = industries.filter(industry => industry.slug !== currentIndustry);

  return (
    <div className="w-full max-w-sm bg-gray-900 rounded-xl p-6 h-fit sticky top-24">
      {/* Quick Contact */}
      <div className="mb-8 p-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg">
        <h3 className="text-white font-semibold mb-3">Get Free Consultation</h3>
        <p className="text-gray-300 text-sm mb-4">
          Discuss your {currentService || 'digital marketing'} needs with our experts.
        </p>
        <div className="space-y-2">
          <a
            href="/contact/"
            className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
          >
            Contact Us Now
          </a>
          <a
            href="tel:+919999999999"
            className="block w-full border border-gray-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 text-sm"
          >
            Call: +91 9999999999
          </a>
        </div>
      </div>

      {/* Related Services */}
      {currentService && otherServices.length > 0 && (
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4 flex items-center">
            <Target className="w-4 h-4 mr-2 text-purple-400" />
            Other Services
            {currentCity && ` in ${majorCities.find(c => c.slug === currentCity)?.name}`}
          </h3>
          <ul className="space-y-2">
            {otherServices.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <a
                  href={currentCity ? `/${currentCity}/${service.slug}/` : `/${service.slug}/`}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-sm py-1"
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
        </div>
      )}

      {/* Related Cities */}
      {currentService && otherCities.length > 0 && (
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4 flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-green-400" />
            {currentService.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} in Other Cities
          </h3>
          <ul className="space-y-2">
            {otherCities.slice(0, 6).map((city) => (
              <li key={city.slug}>
                <a
                  href={`/${city.slug}/${currentService}/`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block py-1"
                >
                  {city.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/locations/"
            className="inline-flex items-center text-green-400 hover:text-green-300 font-medium text-xs mt-2"
          >
            View All Cities
            <ArrowRight className="w-3 h-3 ml-1" />
          </a>
        </div>
      )}

      {/* Industry Solutions */}
      {(currentCity || currentService) && relatedIndustries.length > 0 && (
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4 flex items-center">
            <Building2 className="w-4 h-4 mr-2 text-blue-400" />
            Industry Solutions
          </h3>
          <ul className="space-y-2">
            {relatedIndustries.slice(0, 6).map((industry) => (
              <li key={industry.slug}>
                <a
                  href={currentCity 
                    ? `/${currentCity}/industries/${industry.slug}/${currentService || 'digital-marketing'}/`
                    : `/industries/${industry.slug}/`
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block py-1"
                >
                  {industry.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/industries/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-xs mt-2"
          >
            View All Industries
            <ArrowRight className="w-3 h-3 ml-1" />
          </a>
        </div>
      )}

      {/* Popular Combinations */}
      <div className="mb-8">
        <h3 className="text-white font-semibold mb-4">Popular Combinations</h3>
        <ul className="space-y-2 text-sm">
          {currentCity ? (
            <>
              <li><a href={`/${currentCity}/seo-services/`} className="text-gray-400 hover:text-white">SEO Services</a></li>
              <li><a href={`/${currentCity}/ppc-advertising/`} className="text-gray-400 hover:text-white">PPC Advertising</a></li>
              <li><a href={`/${currentCity}/social-media-marketing/`} className="text-gray-400 hover:text-white">Social Media</a></li>
              <li><a href={`/${currentCity}/industries/healthcare/digital-marketing/`} className="text-gray-400 hover:text-white">Healthcare Marketing</a></li>
              <li><a href={`/${currentCity}/industries/real-estate/digital-marketing/`} className="text-gray-400 hover:text-white">Real Estate Marketing</a></li>
            </>
          ) : (
            <>
              <li><a href="/mumbai/digital-marketing/" className="text-gray-400 hover:text-white">Mumbai Digital Marketing</a></li>
              <li><a href="/delhi/seo-services/" className="text-gray-400 hover:text-white">Delhi SEO Services</a></li>
              <li><a href="/bangalore/ai-automation/" className="text-gray-400 hover:text-white">Bangalore AI Automation</a></li>
              <li><a href="/chennai/ppc-advertising/" className="text-gray-400 hover:text-white">Chennai PPC Advertising</a></li>
              <li><a href="/hyderabad/social-media-marketing/" className="text-gray-400 hover:text-white">Hyderabad Social Media</a></li>
            </>
          )}
        </ul>
      </div>

      {/* Client Testimonial */}
      <div className="mb-8 p-4 bg-gray-800 rounded-lg">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-300 text-sm mb-3">
          "Outstanding results! Our website traffic increased by 300% within 3 months."
        </p>
        <div className="text-xs text-gray-400">
          - {currentCity ? `Business Owner, ${majorCities.find(c => c.slug === currentCity)?.name}` : 'Happy Client'}
        </div>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-white font-semibold mb-4">Free Resources</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/resources/digital-marketing-guide/" className="text-gray-400 hover:text-white">Digital Marketing Guide</a></li>
          <li><a href="/resources/seo-checklist/" className="text-gray-400 hover:text-white">SEO Checklist</a></li>
          <li><a href="/tools/roi-calculator/" className="text-gray-400 hover:text-white">ROI Calculator</a></li>
          <li><a href="/case-studies/" className="text-gray-400 hover:text-white">Case Studies</a></li>
        </ul>
      </div>
    </div>
  );
}