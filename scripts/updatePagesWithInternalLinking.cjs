const fs = require('fs');
const path = require('path');

// Template for updating pages with enhanced internal linking
const getEnhancedPageTemplate = (originalContent, citySlug, serviceSlug, industrySlug) => {
  const cityName = citySlug ? citySlug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';
  const serviceName = serviceSlug ? serviceSlug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';
  const industryName = industrySlug ? industrySlug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';

  // Extract the component name from original content
  const componentMatch = originalContent.match(/export function (\w+)/);
  const componentName = componentMatch ? componentMatch[1] : 'GeneratedPage';

  return `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Users, Building2, TrendingUp, Star, Award, CheckCircle, ArrowRight, Phone, Mail, Globe, Target, Zap, Briefcase } from 'lucide-react';
import { ContextualSidebar } from '../Sidebar/ContextualSidebar';
import { InternalLinkingContent } from '../Content/InternalLinkingContent';

// Enhanced internal linking data
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

const relatedServices = [
  { name: "Digital Marketing", slug: "digital-marketing", icon: <Target className="w-4 h-4" /> },
  { name: "AI Automation", slug: "ai-automation", icon: <Zap className="w-4 h-4" /> },
  { name: "Business Automation", slug: "business-automation", icon: <Briefcase className="w-4 h-4" /> },
  { name: "SEO Services", slug: "seo-services", icon: <Globe className="w-4 h-4" /> },
  { name: "PPC Advertising", slug: "ppc-advertising", icon: <Target className="w-4 h-4" /> },
  { name: "Social Media Marketing", slug: "social-media-marketing", icon: <Users className="w-4 h-4" /> }
];

const industries = [
  "Healthcare", "Real Estate", "E-commerce", "Education", 
  "Manufacturing", "Financial Services", "Technology", "Hospitality"
];

${originalContent}

// Enhanced component wrapper with professional internal linking
export function Enhanced${componentName}() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>${serviceName}${cityName ? ` in ${cityName}` : ''}${industryName ? ` | ${industryName}` : ''} | Professional Digital Marketing Services</title>
        <meta name="description" content="Professional ${serviceName.toLowerCase()}${cityName ? ` in ${cityName}` : ''}${industryName ? ` for ${industryName.toLowerCase()}` : ''} with proven ROI. Expert team, advanced strategies, and guaranteed results." />
        <link rel="canonical" href={\`\${window.location.origin}\${window.location.pathname}\`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="${serviceName}${cityName ? ` in ${cityName}` : ''}${industryName ? ` | ${industryName}` : ''}" />
        <meta property="og:description" content="Professional ${serviceName.toLowerCase()}${cityName ? ` in ${cityName}` : ''}${industryName ? ` for ${industryName.toLowerCase()}` : ''} services with guaranteed results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={\`\${window.location.origin}\${window.location.pathname}\`} />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {\`{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "${serviceName}${cityName ? ` in ${cityName}` : ''}",
            "description": "Professional ${serviceName.toLowerCase()} services${cityName ? ` in ${cityName}` : ''}${industryName ? ` for ${industryName.toLowerCase()}` : ''}",
            "serviceType": "${serviceName}",
            ${cityName ? `"areaServed": "${cityName}",` : ''}
            "provider": {
              "@type": "Organization",
              "name": "YourCompany",
              "url": "\${window.location.origin}"
            }
          }\`}
        </script>
      </Helmet>

      {/* Enhanced Navigation Breadcrumbs */}
      <nav className="pt-20 pb-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-gray-400 hover:text-white">Home</a>
            <span className="text-gray-600">/</span>
            ${serviceSlug ? `<a href="/${serviceSlug}/" className="text-gray-400 hover:text-white">${serviceName}</a>` : ''}
            ${citySlug && serviceSlug ? `<span className="text-gray-600">/</span>` : ''}
            ${citySlug ? `<a href="/${citySlug}/digital-marketing/" className="text-gray-400 hover:text-white">${cityName}</a>` : ''}
            ${industrySlug ? `<span className="text-gray-600">/</span>
            <a href="/industries/${industrySlug}/" className="text-gray-400 hover:text-white">${industryName}</a>` : ''}
            <span className="text-gray-600">/</span>
            <span className="text-white">${serviceName}${cityName ? ` in ${cityName}` : ''}</span>
          </div>
        </div>
      </nav>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <${componentName} />
            
            {/* Enhanced Internal Linking Content */}
            <InternalLinkingContent 
              currentCity="${citySlug || ''}"
              currentService="${serviceSlug || ''}"
              currentIndustry="${industrySlug || ''}"
            />

            {/* Professional Cross-Linking Section */}
            <section className="mt-16 py-12 bg-gradient-to-r from-gray-900 to-black rounded-2xl">
              <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">
                  Comprehensive ${serviceName} Solutions Across India
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Service Cross-Links */}
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4 text-purple-400 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Our Services${cityName ? ` in ${cityName}` : ''}
                    </h3>
                    <div className="space-y-2">
                      {relatedServices.filter(s => s.slug !== '${serviceSlug}').slice(0, 5).map((service, index) => (
                        <a
                          key={index}
                          href={${citySlug ? `\`/${citySlug}/\${service.slug}/\`` : `\`/\${service.slug}/\``}}
                          className="flex items-center text-gray-300 hover:text-white transition-colors py-1 text-sm"
                        >
                          <div className="text-purple-400 mr-2">{service.icon}</div>
                          {service.name}
                          <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Geographic Cross-Links */}
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4 text-green-400 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      ${serviceName} in Other Cities
                    </h3>
                    <div className="space-y-2">
                      {majorCities.filter(c => c.slug !== '${citySlug}').slice(0, 6).map((city, index) => (
                        <a
                          key={index}
                          href={\`/\${city.slug}/${serviceSlug || 'digital-marketing'}/\`}
                          className="block text-gray-300 hover:text-white transition-colors py-1 text-sm"
                        >
                          {city.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="/locations/"
                      className="inline-flex items-center text-green-400 hover:text-green-300 text-xs mt-3"
                    >
                      View All Cities
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>

                  {/* Industry Cross-Links */}
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
                      <Building2 className="w-5 h-5 mr-2" />
                      Industry Solutions
                    </h3>
                    <div className="space-y-2">
                      {industries.filter(i => i.toLowerCase().replace(' ', '-') !== '${industrySlug}').slice(0, 6).map((industry, index) => (
                        <a
                          key={index}
                          href={${citySlug ? `\`/${citySlug}/industries/\${industry.toLowerCase().replace(' ', '-')}/${serviceSlug || 'digital-marketing'}/\`` : `\`/industries/\${industry.toLowerCase().replace(' ', '-')}/\``}}
                          className="block text-gray-300 hover:text-white transition-colors py-1 text-sm"
                        >
                          {industry} ${serviceName}
                        </a>
                      ))}
                    </div>
                    <a
                      href="/industries/"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-xs mt-3"
                    >
                      View All Industries
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Trust Signals and CTA */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">1000+ Successful Projects</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">500+ Cities Across India</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">300% Average ROI</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">24/7 Professional Support</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Ready to Get Started?</h3>
                    <p className="text-gray-300 mb-4">
                      Get a free consultation and custom ${serviceName.toLowerCase()} strategy${cityName ? ` for your ${cityName} business` : ''}.
                    </p>
                    <div className="space-y-3">
                      <a
                        href="/contact/"
                        className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Get Free Consultation
                      </a>
                      <a
                        href="tel:+919999999999"
                        className="flex items-center justify-center w-full border border-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call: +91 9999999999
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            <ContextualSidebar 
              currentCity="${citySlug || ''}"
              currentService="${serviceSlug || ''}"
              currentIndustry="${industrySlug || ''}"
            />
          </div>
        </div>
      </div>
    </div>
  );
}`;
};

// Function to update a page file
const updatePageFile = (filePath, citySlug, serviceSlug, industrySlug) => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    const originalContent = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already updated
    if (originalContent.includes('Enhanced') && originalContent.includes('InternalLinkingContent')) {
      console.log(`Already updated: ${filePath}`);
      return;
    }

    const enhancedContent = getEnhancedPageTemplate(originalContent, citySlug, serviceSlug, industrySlug);
    
    fs.writeFileSync(filePath, enhancedContent);
    console.log(`✓ Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
};

// Main update function
const updateAllPagesWithInternalLinking = () => {
  console.log('🚀 Starting comprehensive internal linking update...\n');

  const cities = [
    'mumbai', 'delhi', 'bangalore', 'chennai', 'hyderabad', 'pune',
    'ahmedabad', 'kolkata', 'surat', 'jaipur', 'lucknow', 'kanpur',
    'nagpur', 'indore', 'thane', 'bhopal', 'visakhapatnam', 'pimpri-chinchwad',
    'patna', 'vadodara', 'agra', 'ludhiana', 'nashik', 'faridabad',
    'meerut', 'rajkot', 'kalyan-dombivli', 'vasai-virar', 'varanasi', 'srinagar'
  ];

  const services = [
    'digital-marketing',
    'ai-automation', 
    'business-automation',
    'seo-services',
    'ppc-advertising',
    'social-media-marketing'
  ];

  const industries = [
    'healthcare', 'real-estate', 'ecommerce', 'education', 'manufacturing',
    'financial-services', 'hospitality', 'technology', 'retail', 'automotive',
    'food-beverage', 'fashion', 'legal-services', 'fitness-wellness',
    'beauty-cosmetics', 'construction', 'consulting', 'non-profit',
    'agriculture', 'transportation'
  ];

  let updatedCount = 0;

  // Update city service pages
  console.log('📍 Updating city service pages...');
  cities.forEach(city => {
    services.forEach(service => {
      const fileName = \`