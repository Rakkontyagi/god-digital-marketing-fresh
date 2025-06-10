const fs = require('fs');
const path = require('path');

// Complete data for all Indian states and cities (first batch)
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
      { name: "Chandrapur", slug: "chandrapur", tier: 3 }
    ]
  },
  "karnataka": {
    name: "Karnataka",
    capital: "Bengaluru",
    cities: [
      { name: "Bangalore", slug: "bangalore", tier: 1 },
      { name: "Mysore", slug: "mysore", tier: 2 },
      { name: "Hubli-Dharwad", slug: "hubli-dharwad", tier: 2 },
      { name: "Mangalore", slug: "mangalore", tier: 2 },
      { name: "Belgaum", slug: "belgaum", tier: 2 },
      { name: "Gulbarga", slug: "gulbarga", tier: 2 },
      { name: "Davangere", slug: "davangere", tier: 3 },
      { name: "Bellary", slug: "bellary", tier: 3 }
    ]
  },
  "tamil-nadu": {
    name: "Tamil Nadu",
    capital: "Chennai", 
    cities: [
      { name: "Chennai", slug: "chennai", tier: 1 },
      { name: "Coimbatore", slug: "coimbatore", tier: 1 },
      { name: "Madurai", slug: "madurai", tier: 2 },
      { name: "Trichy", slug: "trichy", tier: 2 },
      { name: "Salem", slug: "salem", tier: 2 },
      { name: "Tirunelveli", slug: "tirunelveli", tier: 3 },
      { name: "Erode", slug: "erode", tier: 3 },
      { name: "Vellore", slug: "vellore", tier: 3 }
    ]
  }
};

// Services configuration
const services = [
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing solutions to grow your business online",
    subServices: ["SEO Services", "PPC Advertising", "Social Media Marketing", "Content Marketing"]
  },
  {
    name: "AI Automation",
    slug: "ai-automation",
    description: "Advanced AI-powered automation solutions for modern businesses", 
    subServices: ["Marketing Automation", "Chatbot Development", "CRM Automation", "Email Automation"]
  },
  {
    name: "Business Automation",
    slug: "business-automation",
    description: "Complete business process automation for operational efficiency",
    subServices: ["Process Automation", "Document Automation", "HR Automation", "Accounting Automation"]
  },
  {
    name: "SEO Services",
    slug: "seo-services",
    description: "Search engine optimization to improve online visibility",
    subServices: []
  },
  {
    name: "PPC Advertising", 
    slug: "ppc-advertising",
    description: "Pay-per-click advertising campaigns for immediate results",
    subServices: []
  },
  {
    name: "Social Media Marketing",
    slug: "social-media-marketing",
    description: "Strategic social media marketing to engage your audience",
    subServices: []
  }
];

// Industry configuration
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

// Helper function to check if page already exists
function pageExists(filePath) {
  return fs.existsSync(filePath);
}

// Function to generate city service page
function generateCityServicePage(citySlug, cityName, stateSlug, stateName, service) {
  const cityDir = path.join(__dirname, '../src/pages', citySlug);
  const filePath = path.join(cityDir, `${service.slug}.tsx`);
  
  if (pageExists(filePath)) {
    console.log(`Page already exists: ${citySlug}/${service.slug}`);
    return;
  }

  const componentName = `${cityName.replace(/\s+/g, '').replace(/[-]/g, '')}${service.name.replace(/\s+/g, '')}Page`;

  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Building2, Zap, Users, CheckCircle, Star, TrendingUp, Phone, Mail, Clock, Award } from 'lucide-react';

export function ${componentName}() {
  const serviceFeatures = ${JSON.stringify(service.subServices || [], null, 2)};

  const stats = [
    { number: "150+", label: "Projects Completed in ${cityName}" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "4.2x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions ${cityName}",
      text: "Outstanding ${service.name.toLowerCase()} results! Our online presence has improved dramatically.",
      rating: 5
    },
    {
      name: "Priya Sharma", 
      company: "${cityName} Retail Group",
      text: "Professional team with deep expertise in ${service.name.toLowerCase()}. Highly recommended!",
      rating: 5
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "₹15,000",
      duration: "per month",
      features: [
        "Basic ${service.name} Setup",
        "Monthly Performance Reports",
        "Email Support",
        "Initial Strategy Consultation"
      ],
      isPopular: false
    },
    {
      name: "Growth Package", 
      price: "₹35,000",
      duration: "per month",
      features: [
        "Advanced ${service.name} Solutions",
        "Bi-weekly Performance Reports",
        "Phone & Email Support",
        "Quarterly Strategy Reviews",
        "Competitor Analysis"
      ],
      isPopular: true
    },
    {
      name: "Enterprise Package",
      price: "₹65,000",
      duration: "per month", 
      features: [
        "Complete ${service.name} Solutions",
        "Weekly Performance Reports",
        "24/7 Dedicated Support",
        "Monthly Strategy Sessions",
        "Advanced Analytics Dashboard",
        "Custom Integrations"
      ],
      isPopular: false
    }
  ];

  const faqs = [
    {
      question: "How long does it take to see results from ${service.name.toLowerCase()} in ${cityName}?",
      answer: "Results typically begin showing within 30-90 days, depending on your current online presence and competition in ${cityName}. Our proven strategies are designed to deliver both quick wins and long-term sustainable growth."
    },
    {
      question: "Do you work with businesses of all sizes in ${cityName}?",
      answer: "Yes, we provide ${service.name.toLowerCase()} services for startups, SMEs, and large enterprises across ${cityName}. Our solutions are scalable and customized to meet your specific business needs and budget."
    },
    {
      question: "What makes your ${service.name.toLowerCase()} services different in ${cityName}?",
      answer: "Our deep understanding of the ${cityName} market, combined with data-driven strategies and proven methodologies, sets us apart. We focus on delivering measurable ROI and building long-term partnerships with our clients."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! Our ${service.name.toLowerCase()} solutions are designed to seamlessly integrate with your existing CRM, analytics tools, and business systems to ensure smooth operations and data consistency."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best ${service.name} Services in ${cityName}, ${stateName} | Expert Solutions</title>
        <meta name="description" content="Leading ${service.name.toLowerCase()} services in ${cityName}, ${stateName}. Expert team delivering proven results for businesses. Get free consultation and grow your online presence today!" />
        <meta name="keywords" content="${service.name.toLowerCase()} ${cityName.toLowerCase()}, ${service.name.toLowerCase()} services ${cityName.toLowerCase()}, ${service.name.toLowerCase()} company ${cityName.toLowerCase()}, best ${service.name.toLowerCase()} ${cityName.toLowerCase()}, ${service.name.toLowerCase()} agency ${cityName.toLowerCase()}" />
        <link rel="canonical" href={\`https://yourdomain.com/\${citySlug}/\${service.slug}/\`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Best ${service.name} Services in ${cityName}, ${stateName}" />
        <meta property="og:description" content="Expert ${service.name.toLowerCase()} solutions for businesses in ${cityName}. Proven results, dedicated support, and customized strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={\`https://yourdomain.com/\${citySlug}/\${service.slug}/\`} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best ${service.name} Services in ${cityName}" />
        <meta name="twitter:description" content="Expert ${service.name.toLowerCase()} solutions for ${cityName} businesses" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {\`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Your Company Name - ${service.name} ${cityName}",
            "description": "${service.description}",
            "url": "https://yourdomain.com/\${citySlug}/\${service.slug}/",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "${cityName}",
              "addressRegion": "${stateName}",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates"
            },
            "areaServed": {
              "@type": "City",
              "name": "${cityName}",
              "addressRegion": "${stateName}",
              "addressCountry": "IN"
            },
            "serviceArea": {
              "@type": "City",
              "name": "${cityName}"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "${service.name} Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "${service.name}"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5"
            }
          }\`}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-400 mr-2" />
                  <span className="text-purple-400 font-semibold">${cityName}, ${stateName}</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Expert <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">${service.name}</span> Services in ${cityName}
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your ${cityName} business with our proven ${service.name.toLowerCase()} solutions. 
                  We help businesses across ${cityName} achieve measurable growth through strategic digital marketing, 
                  advanced automation, and data-driven approaches that deliver real results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                    Get Free Consultation
                  </button>
                  <button className="px-8 py-4 border border-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-all duration-300">
                    View Case Studies
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us for ${service.name}?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Local ${cityName} Market Expertise</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Proven Track Record</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Transparent Reporting</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>24/7 Support Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
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

        {/* Service Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our ${service.name} Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive ${service.name.toLowerCase()} services designed specifically for businesses in ${cityName}.
              </p>
            </div>
            
            {serviceFeatures.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Zap className="w-8 h-8 text-purple-400" />
                      <h3 className="text-xl font-bold ml-4">{feature}</h3>
                    </div>
                    <p className="text-gray-300">
                      Professional {feature.toLowerCase()} services tailored for ${cityName} businesses to maximize your online presence and drive growth.
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">${service.name} Packages for ${cityName}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to meet the needs of businesses of all sizes in ${cityName}.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={\`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 relative \${pkg.isPopular ? 'ring-2 ring-purple-500 transform scale-105' : ''}\`}>
                  {pkg.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">{pkg.price}</div>
                    <div className="text-gray-400">{pkg.duration}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={\`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 \${pkg.isPopular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'border border-purple-500 hover:bg-purple-500'}\`}>
                    Choose This Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our ${cityName} Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. See what businesses in ${cityName} say about our ${service.name.toLowerCase()} services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-purple-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Common questions about our ${service.name.toLowerCase()} services in ${cityName}.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your ${cityName} Business?</h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Join successful businesses in ${cityName} who have accelerated their growth with our proven ${service.name.toLowerCase()} strategies.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-purple-300 mr-4" />
                      <span className="text-lg">+91-9876543210</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-purple-300 mr-4" />
                      <span className="text-lg">hello@yourcompany.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 text-purple-300 mr-4" />
                      <span className="text-lg">Mon-Sat 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Consultation</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300"
                    />
                    <textarea
                      placeholder="Tell us about your business goals"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                    >
                      Get Free Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ${componentName};`;

  // Create directory if it doesn't exist
  if (!fs.existsSync(cityDir)) {
    fs.mkdirSync(cityDir, { recursive: true });
  }

  fs.writeFileSync(filePath, content);
  console.log(`Generated city service page: ${citySlug}/${service.slug}`);
}

// Function to generate all city service pages
function generateAllCityServicePages() {
  console.log('Starting city service page generation...');
  
  Object.entries(allIndianStatesAndCities).forEach(([stateSlug, stateData]) => {
    stateData.cities.forEach(city => {
      services.forEach(service => {
        generateCityServicePage(city.slug, city.name, stateSlug, stateData.name, service);
      });
    });
  });
  
  console.log('City service page generation completed!');
}

// Main execution
if (require.main === module) {
  generateAllCityServicePages();
}

module.exports = {
  generateCityServicePage,
  generateAllCityServicePages,
  allIndianStatesAndCities,
  services,
  industries
};