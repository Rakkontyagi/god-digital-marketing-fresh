const fs = require('fs');
const path = require('path');

// Complete data for all Indian states and cities
const allIndianStatesAndCities = {
  "andhra-pradesh": {
    name: "Andhra Pradesh",
    capital: "Amaravati",
    cities: [
      { name: "Visakhapatnam", slug: "visakhapatnam", tier: 1 },
      { name: "Vijayawada", slug: "vijayawada", tier: 2 },
      { name: "Guntur", slug: "guntur", tier: 2 },
      { name: "Nellore", slug: "nellore", tier: 3 },
      { name: "Kurnool", slug: "kurnool", tier: 3 },
      { name: "Kakinada", slug: "kakinada", tier: 3 },
      { name: "Rajahmundry", slug: "rajahmundry", tier: 3 },
      { name: "Tirupati", slug: "tirupati", tier: 2 },
      { name: "Kadapa", slug: "kadapa", tier: 3 },
      { name: "Anantapur", slug: "anantapur", tier: 3 },
      { name: "Eluru", slug: "eluru", tier: 3 },
      { name: "Chittoor", slug: "chittoor", tier: 3 },
      { name: "Machilipatnam", slug: "machilipatnam", tier: 3 },
      { name: "Adoni", slug: "adoni", tier: 3 },
      { name: "Srikakulam", slug: "srikakulam", tier: 3 },
      { name: "Vizianagaram", slug: "vizianagaram", tier: 3 }
    ]
  },
  "maharashtra": {
    name: "Maharashtra",
    capital: "Mumbai",
    cities: [
      { name: "Mumbai", slug: "mumbai", tier: 1 },
      { name: "Pune", slug: "pune", tier: 1 },
      { name: "Nagpur", slug: "nagpur", tier: 1 },
      { name: "Nashik", slug: "nashik", tier: 2 },
      { name: "Aurangabad", slug: "aurangabad", tier: 2 },
      { name: "Solapur", slug: "solapur", tier: 2 },
      { name: "Thane", slug: "thane", tier: 2 },
      { name: "Kolhapur", slug: "kolhapur", tier: 2 },
      { name: "Sangli", slug: "sangli", tier: 3 },
      { name: "Malegaon", slug: "malegaon", tier: 3 },
      { name: "Jalgaon", slug: "jalgaon", tier: 3 },
      { name: "Akola", slug: "akola", tier: 3 },
      { name: "Latur", slug: "latur", tier: 3 },
      { name: "Dhule", slug: "dhule", tier: 3 },
      { name: "Ahmednagar", slug: "ahmednagar", tier: 3 },
      { name: "Chandrapur", slug: "chandrapur", tier: 3 },
      { name: "Parbhani", slug: "parbhani", tier: 3 },
      { name: "Ichalkaranji", slug: "ichalkaranji", tier: 3 },
      { name: "Jalna", slug: "jalna", tier: 3 },
      { name: "Ambarnath", slug: "ambarnath", tier: 3 },
      { name: "Bhiwandi", slug: "bhiwandi", tier: 2 },
      { name: "Panvel", slug: "panvel", tier: 2 },
      { name: "Navi Mumbai", slug: "navi-mumbai", tier: 2 },
      { name: "Ulhasnagar", slug: "ulhasnagar", tier: 3 },
      { name: "Vasai-Virar", slug: "vasai-virar", tier: 2 },
      { name: "Kalyan-Dombivli", slug: "kalyan-dombivli", tier: 2 },
      { name: "Mira-Bhayandar", slug: "mira-bhayandar", tier: 3 },
      { name: "Pimpri-Chinchwad", slug: "pimpri-chinchwad", tier: 2 },
      { name: "Satara", slug: "satara", tier: 3 },
      { name: "Wardha", slug: "wardha", tier: 3 },
      { name: "Yavatmal", slug: "yavatmal", tier: 3 },
      { name: "Nanded", slug: "nanded", tier: 3 },
      { name: "Osmanabad", slug: "osmanabad", tier: 3 },
      { name: "Bid", slug: "bid", tier: 3 },
      { name: "Amravati", slug: "amravati", tier: 3 },
      { name: "Gondia", slug: "gondia", tier: 3 },
      { name: "Bhandara", slug: "bhandara", tier: 3 },
      { name: "Washim", slug: "washim", tier: 3 },
      { name: "Hingoli", slug: "hingoli", tier: 3 }
    ]
  }
  // Add all other states here following the same pattern
};

const services = [
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    subServices: ["SEO Services", "PPC Advertising", "Social Media Marketing", "Content Marketing"]
  },
  {
    name: "AI Automation",
    slug: "ai-automation", 
    subServices: ["Marketing Automation", "Chatbot Development", "CRM Automation", "Email Automation"]
  },
  {
    name: "Business Automation",
    slug: "business-automation",
    subServices: ["Process Automation", "Document Automation", "HR Automation", "Accounting Automation"]
  },
  {
    name: "SEO Services",
    slug: "seo-services",
    subServices: []
  },
  {
    name: "PPC Advertising", 
    slug: "ppc-advertising",
    subServices: []
  },
  {
    name: "Social Media Marketing",
    slug: "social-media-marketing", 
    subServices: []
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
  { name: "Beauty & Cosmetics", slug: "beauty-cosmetics" }
];

// Helper function to generate LSI keywords and entities
function generateLSIKeywords(service, location, industry = null) {
  const baseKeywords = [
    `${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
    `${service.name.toLowerCase()} services ${location.name.toLowerCase()}`,
    `${service.name.toLowerCase()} company ${location.name.toLowerCase()}`,
    `${service.name.toLowerCase()} agency ${location.name.toLowerCase()}`,
    `best ${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
    `professional ${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
    `affordable ${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
    `top ${service.name.toLowerCase()} ${location.name.toLowerCase()}`
  ];

  const entities = [
    location.name,
    service.name,
    "Google",
    "Facebook",
    "Instagram",
    "LinkedIn",
    "YouTube",
    "Digital Marketing",
    "ROI",
    "Lead Generation",
    "Conversion Rate",
    "Online Presence",
    "Brand Awareness",
    "Customer Acquisition"
  ];

  if (industry) {
    baseKeywords.push(`${industry.name.toLowerCase()} ${service.name.toLowerCase()} ${location.name.toLowerCase()}`);
    entities.push(industry.name);
  }

  return { keywords: baseKeywords, entities };
}

// Function to check if page already exists
function pageExists(filePath) {
  return fs.existsSync(filePath);
}

// Function to generate state landing page
function generateStateLandingPage(stateSlug, stateData) {
  const filePath = path.join(__dirname, '../src/pages', stateSlug, 'index.tsx');
  
  if (pageExists(filePath)) {
    console.log(`State page already exists: ${stateSlug}`);
    return;
  }

  const majorCities = stateData.cities.filter(city => city.tier <= 2).slice(0, 8);
  const allCities = stateData.cities;

  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Building2, Zap, Users, CheckCircle, Star, TrendingUp } from 'lucide-react';

export function ${stateData.name.replace(/\s+/g, '')}StatePage() {
  const majorCities = ${JSON.stringify(majorCities, null, 2)};
  const allCities = ${JSON.stringify(allCities, null, 2)};

  const services = [
    {
      title: "Digital Marketing Services",
      slug: "digital-marketing",
      description: "Comprehensive digital marketing solutions to grow your ${stateData.name} business online",
      features: ["SEO Services", "PPC Advertising", "Social Media Marketing", "Content Marketing"],
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />
    },
    {
      title: "AI Automation Services", 
      slug: "ai-automation",
      description: "Advanced AI-powered automation solutions for ${stateData.name} businesses",
      features: ["Marketing Automation", "Chatbot Development", "CRM Automation", "Email Automation"],
      icon: <Zap className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Business Automation Services",
      slug: "business-automation", 
      description: "Complete business process automation for ${stateData.name} enterprises",
      features: ["Process Automation", "Document Automation", "HR Automation", "Accounting Automation"],
      icon: <Building2 className="w-8 h-8 text-green-400" />
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Served in ${stateData.name}" },
    { number: "95%", label: "Client Satisfaction Rate" },
    { number: "3x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  const industries = [
    "Healthcare", "Real Estate", "E-commerce", "Education", "Manufacturing",
    "Financial Services", "Hospitality", "Technology", "Retail", "Automotive"
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing & Automation Services in ${stateData.name} | Expert Solutions</title>
        <meta name="description" content="Leading digital marketing, AI automation, and business automation services in ${stateData.name}. Serving ${majorCities.map(c => c.name).join(', ')} and all major cities. Get expert solutions for your business growth." />
        <meta name="keywords" content="digital marketing ${stateData.name.toLowerCase()}, AI automation ${stateData.name.toLowerCase()}, business automation ${stateData.name.toLowerCase()}, ${majorCities.map(c => c.name.toLowerCase()).join(', ')}" />
        <link rel="canonical" href="https://yourdomain.com/${stateSlug}/" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Digital Marketing & Automation Services in ${stateData.name}" />
        <meta property="og:description" content="Expert digital marketing and automation solutions for businesses across ${stateData.name}. Proven results in ${majorCities.map(c => c.name).join(', ')} and beyond." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/${stateSlug}/" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing & Automation Services in ${stateData.name}" />
        <meta name="twitter:description" content="Expert solutions for businesses across ${stateData.name}" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {\`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Your Company Name",
            "url": "https://yourdomain.com/${stateSlug}/",
            "areaServed": {
              "@type": "State",
              "name": "${stateData.name}",
              "addressCountry": "IN"
            },
            "serviceArea": {
              "@type": "State", 
              "name": "${stateData.name}"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "AI Automation Services"
                  }
                }
              ]
            }
          }\`}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Digital Marketing & Automation Services in ${stateData.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your ${stateData.name} business with our comprehensive digital marketing, AI automation, and business automation solutions. 
                We serve businesses across ${majorCities.map(c => c.name).join(', ')}, delivering measurable results and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Get Free Consultation
                </button>
                <button className="px-8 py-4 border border-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-all duration-300">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services Across ${stateData.name}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive digital solutions tailored for businesses in ${stateData.name}, from startups to enterprises.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities We Serve */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Cities We Serve in ${stateData.name}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expert team provides digital marketing and automation services across all major cities in ${stateData.name}.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {majorCities.map((city, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">Tier {city.tier} City</p>
                  <a href={\`/\${city.slug}/digital-marketing/\`} className="text-purple-400 hover:text-purple-300 text-sm flex items-center justify-center">
                    View Services <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-4">We also serve all other cities across ${stateData.name}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {allCities.slice(8).map((city, index) => (
                  <a key={index} href={\`/\${city.slug}/digital-marketing/\`} className="text-purple-400 hover:text-purple-300 text-sm">
                    {city.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized digital marketing and automation solutions for diverse industries across ${stateData.name}.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <Building2 className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <span className="text-sm font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-pink-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your ${stateData.name} Business?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses across ${stateData.name} who have accelerated their growth with our proven digital marketing and automation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Your Project Today
              </button>
              <button className="px-8 py-4 border border-white rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ${stateData.name.replace(/\s+/g, '')}StatePage;`;

  // Create directory if it doesn't exist
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, content);
  console.log(`Generated state page: ${stateSlug}`);
}

// Generate all state pages
function generateAllStatePages() {
  console.log('Starting state page generation...');
  
  Object.entries(allIndianStatesAndCities).forEach(([stateSlug, stateData]) => {
    generateStateLandingPage(stateSlug, stateData);
  });
  
  console.log('State page generation completed!');
}

// Main execution
if (require.main === module) {
  generateAllStatePages();
}

module.exports = {
  generateStateLandingPage,
  generateAllStatePages,
  allIndianStatesAndCities,
  services,
  industries
};