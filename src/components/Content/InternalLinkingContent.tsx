import React from 'react';
import { ArrowRight, TrendingUp, Users, Star, Target, MapPin, Building2 } from 'lucide-react';

interface InternalLinkingContentProps {
  currentCity?: string;
  currentService?: string;
  currentIndustry?: string;
}

const majorCities = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune", 
  "Ahmedabad", "Kolkata", "Surat", "Jaipur", "Lucknow", "Kanpur"
];

const services = [
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "AI Automation", slug: "ai-automation" },
  { name: "Business Automation", slug: "business-automation" },
  { name: "SEO Services", slug: "seo-services" },
  { name: "PPC Advertising", slug: "ppc-advertising" },
  { name: "Social Media Marketing", slug: "social-media-marketing" }
];

const industries = [
  "Healthcare", "Real Estate", "E-commerce", "Education", 
  "Manufacturing", "Financial Services", "Technology", "Hospitality"
];

export function InternalLinkingContent({ currentCity, currentService, currentIndustry }: InternalLinkingContentProps) {
  const otherCities = majorCities.filter(city => 
    city.toLowerCase().replace(' ', '-') !== currentCity
  );
  
  const otherServices = services.filter(service => 
    service.slug !== currentService
  );

  return (
    <div className="bg-black text-white">
      {/* Content Enhancement Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Area with Internal Links */}
            <div className="lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Comprehensive {currentService?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Digital Marketing'} Solutions
                  {currentCity && ` in ${currentCity.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}`}
                </h2>
                
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Our expert team delivers cutting-edge{' '}
                    <a href={`/${currentService || 'digital-marketing'}/`} className="text-purple-400 hover:text-purple-300 underline">
                      {currentService?.replace('-', ' ') || 'digital marketing'}
                    </a>{' '}
                    solutions designed to accelerate your business growth. With over 1000+ successful projects across India, 
                    we understand the unique challenges and opportunities in the{' '}
                    {currentCity && (
                      <a href={`/${currentCity}/digital-marketing/`} className="text-green-400 hover:text-green-300 underline">
                        {currentCity.replace('-', ' ')} market
                      </a>
                    )}
                    {!currentCity && 'Indian market'}.
                  </p>

                  <p>
                    Whether you're looking for{' '}
                    <a href="/seo-services/" className="text-blue-400 hover:text-blue-300 underline">SEO optimization</a>,{' '}
                    <a href="/ppc-advertising/" className="text-orange-400 hover:text-orange-300 underline">PPC management</a>,{' '}
                    <a href="/social-media-marketing/" className="text-pink-400 hover:text-pink-300 underline">social media marketing</a>, or{' '}
                    <a href="/ai-automation/" className="text-cyan-400 hover:text-cyan-300 underline">AI automation</a>,{' '}
                    our comprehensive approach ensures maximum ROI and sustainable growth.
                  </p>

                  {currentIndustry && (
                    <p>
                      As specialists in{' '}
                      <a href={`/industries/${currentIndustry}/`} className="text-yellow-400 hover:text-yellow-300 underline">
                        {currentIndustry} digital marketing
                      </a>, we bring deep industry knowledge and proven strategies that deliver results. 
                      Our team understands the unique compliance requirements, customer behavior patterns, 
                      and market dynamics specific to the {currentIndustry} sector.
                    </p>
                  )}
                </div>

                {/* Service Cross-Links */}
                <div className="mt-8 p-6 bg-gray-900 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-400" />
                    Complete Service Portfolio
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {otherServices.slice(0, 4).map((service) => (
                      <a
                        key={service.slug}
                        href={currentCity ? `/${currentCity}/${service.slug}/` : `/${service.slug}/`}
                        className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                      >
                        <span className="text-gray-300 group-hover:text-white">
                          {service.name}
                          {currentCity && ` in ${currentCity.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}`}
                        </span>
                        <ArrowRight className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Geographic Expansion */}
                {currentService && (
                  <div className="mt-8 p-6 bg-gray-900 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-green-400" />
                      {currentService.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Across India
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Expanding your digital presence nationwide? We provide{' '}
                      <a href={`/${currentService}/`} className="text-purple-400 hover:text-purple-300 underline">
                        {currentService.replace('-', ' ')}
                      </a>{' '}
                      services across all major Indian cities:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {otherCities.slice(0, 8).map((city) => (
                        <a
                          key={city}
                          href={`/${city.toLowerCase().replace(' ', '-')}/${currentService}/`}
                          className="text-sm text-green-400 hover:text-green-300 p-2 rounded border border-gray-700 hover:border-green-600 transition-colors text-center"
                        >
                          {city}
                        </a>
                      ))}
                    </div>
                    <div className="mt-4">
                      <a
                        href="/locations/"
                        className="inline-flex items-center text-green-400 hover:text-green-300 font-medium"
                      >
                        View All Locations
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Industry Expertise */}
                <div className="mt-8 p-6 bg-gray-900 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-blue-400" />
                    Industry Expertise
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Our specialized industry knowledge helps businesses across various sectors achieve their digital marketing goals:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {industries.map((industry) => (
                      <a
                        key={industry}
                        href={currentCity 
                          ? `/${currentCity}/industries/${industry.toLowerCase().replace(' ', '-')}/${currentService || 'digital-marketing'}/`
                          : `/industries/${industry.toLowerCase().replace(' ', '-')}/`
                        }
                        className="text-sm text-blue-400 hover:text-blue-300 p-2 rounded border border-gray-700 hover:border-blue-600 transition-colors text-center"
                      >
                        {industry}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Content with Additional Links */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Our Track Record</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Successful Projects</span>
                    <span className="text-2xl font-bold text-purple-400">1000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cities Served</span>
                    <span className="text-2xl font-bold text-green-400">500+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Industries</span>
                    <span className="text-2xl font-bold text-blue-400">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Average ROI</span>
                    <span className="text-2xl font-bold text-yellow-400">300%</span>
                  </div>
                </div>
              </div>

              {/* Featured Success Stories */}
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  Success Stories
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-300 text-sm mb-2">
                      "300% increase in leads within 3 months of implementing their{' '}
                      <a href={currentCity ? `/${currentCity}/digital-marketing/` : '/digital-marketing/'} 
                         className="text-purple-400 hover:text-purple-300 underline">
                        digital marketing strategy
                      </a>."
                    </p>
                    <p className="text-xs text-gray-500">
                      - Healthcare Client{currentCity && `, ${currentCity.replace('-', ' ')}`}
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-gray-300 text-sm mb-2">
                      "Revolutionary{' '}
                      <a href={currentCity ? `/${currentCity}/ai-automation/` : '/ai-automation/'} 
                         className="text-green-400 hover:text-green-300 underline">
                        AI automation
                      </a>{' '}
                      saved us 40 hours per week."
                    </p>
                    <p className="text-xs text-gray-500">
                      - E-commerce Business{currentCity && `, ${currentCity.replace('-', ' ')}`}
                    </p>
                  </div>
                </div>
                <a
                  href="/case-studies/"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium mt-4"
                >
                  View All Case Studies
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Resource Links */}
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Free Resources</h3>
                <div className="space-y-2">
                  <a href="/resources/digital-marketing-guide/" className="block text-gray-300 hover:text-white py-2 border-b border-gray-800">
                    Complete Digital Marketing Guide
                  </a>
                  <a href="/resources/seo-checklist/" className="block text-gray-300 hover:text-white py-2 border-b border-gray-800">
                    SEO Optimization Checklist
                  </a>
                  <a href="/resources/roi-calculator/" className="block text-gray-300 hover:text-white py-2 border-b border-gray-800">
                    Marketing ROI Calculator
                  </a>
                  <a href="/resources/automation-guide/" className="block text-gray-300 hover:text-white py-2">
                    Business Automation Playbook
                  </a>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-center">
                <h3 className="text-white font-bold mb-2">Ready to Get Started?</h3>
                <p className="text-gray-100 text-sm mb-4">
                  Get a free consultation and custom strategy for your business.
                </p>
                <a
                  href="/contact/"
                  className="block w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Free Consultation
                </a>
                <p className="text-xs text-gray-200 mt-2">
                  No commitment required • 30-minute strategy session
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Linking Footer Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service-Location Matrix */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">
                {currentService?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Our Services'} in Major Cities
              </h3>
              <div className="space-y-1 text-sm">
                {otherCities.slice(0, 6).map((city) => (
                  <a
                    key={city}
                    href={`/${city.toLowerCase().replace(' ', '-')}/${currentService || 'digital-marketing'}/`}
                    className="block text-gray-400 hover:text-white py-1"
                  >
                    {currentService?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Digital Marketing'} in {city}
                  </a>
                ))}
              </div>
            </div>

            {/* Industry Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Industry Solutions</h3>
              <div className="space-y-1 text-sm">
                {industries.slice(0, 6).map((industry) => (
                  <a
                    key={industry}
                    href={`/industries/${industry.toLowerCase().replace(' ', '-')}/digital-marketing/`}
                    className="block text-gray-400 hover:text-white py-1"
                  >
                    {industry} Digital Marketing
                  </a>
                ))}
              </div>
            </div>

            {/* Specialized Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Specialized Services</h3>
              <div className="space-y-1 text-sm">
                <a href="/local-seo/" className="block text-gray-400 hover:text-white py-1">Local SEO Optimization</a>
                <a href="/e-commerce-marketing/" className="block text-gray-400 hover:text-white py-1">E-commerce Marketing</a>
                <a href="/lead-generation/" className="block text-gray-400 hover:text-white py-1">Lead Generation Services</a>
                <a href="/conversion-optimization/" className="block text-gray-400 hover:text-white py-1">Conversion Rate Optimization</a>
                <a href="/marketing-automation/" className="block text-gray-400 hover:text-white py-1">Marketing Automation</a>
                <a href="/reputation-management/" className="block text-gray-400 hover:text-white py-1">Reputation Management</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}