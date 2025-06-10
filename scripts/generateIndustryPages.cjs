const fs = require('fs');
const path = require('path');

// Complete industry list
const industries = [
  { name: "Healthcare", slug: "healthcare", description: "Digital marketing solutions for healthcare providers, hospitals, and medical practices" },
  { name: "Real Estate", slug: "real-estate", description: "Marketing strategies for real estate agents, brokers, and property developers" },
  { name: "E-commerce", slug: "ecommerce", description: "Specialized marketing for online stores and e-commerce businesses" },
  { name: "Education", slug: "education", description: "Digital marketing for educational institutions, schools, and training centers" },
  { name: "Manufacturing", slug: "manufacturing", description: "Industrial marketing solutions for manufacturing companies" },
  { name: "Financial Services", slug: "financial-services", description: "Marketing for banks, insurance companies, and financial advisors" },
  { name: "Hospitality", slug: "hospitality", description: "Tourism and hospitality marketing for hotels, restaurants, and travel companies" },
  { name: "Technology", slug: "technology", description: "Tech industry marketing solutions for software companies and startups" },
  { name: "Retail", slug: "retail", description: "Retail business marketing strategies for brick-and-mortar stores" },
  { name: "Automotive", slug: "automotive", description: "Automotive industry marketing for dealerships and auto services" },
  { name: "Food & Beverage", slug: "food-beverage", description: "F&B industry marketing for restaurants and food brands" },
  { name: "Fashion", slug: "fashion", description: "Fashion industry marketing for clothing brands and designers" },
  { name: "Legal Services", slug: "legal-services", description: "Marketing for law firms and legal professionals" },
  { name: "Fitness & Wellness", slug: "fitness-wellness", description: "Health and fitness marketing for gyms and wellness centers" },
  { name: "Beauty & Cosmetics", slug: "beauty-cosmetics", description: "Beauty industry marketing for salons and cosmetic brands" },
  { name: "Construction", slug: "construction", description: "Marketing for construction companies and contractors" },
  { name: "Consulting", slug: "consulting", description: "Professional marketing for consulting firms and advisors" },
  { name: "Non-Profit", slug: "non-profit", description: "Marketing solutions for non-profit organizations and NGOs" },
  { name: "Agriculture", slug: "agriculture", description: "Agricultural marketing for farms and agribusiness" },
  { name: "Transportation", slug: "transportation", description: "Marketing for logistics and transportation companies" }
];

// Complete services list
const services = [
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing solutions to grow your business online",
    subServices: ["SEO Services", "PPC Advertising", "Social Media Marketing", "Content Marketing", "Email Marketing", "Google Ads Management"]
  },
  {
    name: "AI Automation",
    slug: "ai-automation",
    description: "Advanced AI-powered automation solutions for modern businesses", 
    subServices: ["Marketing Automation", "Chatbot Development", "CRM Automation", "Email Automation", "Lead Scoring", "Customer Service Automation"]
  },
  {
    name: "Business Automation",
    slug: "business-automation",
    description: "Complete business process automation for operational efficiency",
    subServices: ["Process Automation", "Document Automation", "HR Automation", "Accounting Automation", "Inventory Management", "Workflow Optimization"]
  },
  {
    name: "SEO Services",
    slug: "seo-services",
    description: "Search engine optimization to improve online visibility and rankings",
    subServices: ["Local SEO", "Technical SEO", "Content SEO", "E-commerce SEO", "Mobile SEO", "SEO Audits"]
  },
  {
    name: "PPC Advertising", 
    slug: "ppc-advertising",
    description: "Pay-per-click advertising campaigns for immediate results and ROI",
    subServices: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Display Advertising", "Shopping Ads", "Video Ads"]
  },
  {
    name: "Social Media Marketing",
    slug: "social-media-marketing",
    description: "Strategic social media marketing to engage your audience and build brand awareness",
    subServices: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "Twitter Marketing", "YouTube Marketing", "Social Media Management"]
  }
];

// Major Indian cities for focused coverage
const majorCities = [
  { name: "Mumbai", slug: "mumbai", state: "Maharashtra", stateSlug: "maharashtra", tier: 1 },
  { name: "Delhi", slug: "delhi", state: "Delhi", stateSlug: "delhi", tier: 1 },
  { name: "Bangalore", slug: "bangalore", state: "Karnataka", stateSlug: "karnataka", tier: 1 },
  { name: "Hyderabad", slug: "hyderabad", state: "Telangana", stateSlug: "telangana", tier: 1 },
  { name: "Ahmedabad", slug: "ahmedabad", state: "Gujarat", stateSlug: "gujarat", tier: 1 },
  { name: "Chennai", slug: "chennai", state: "Tamil Nadu", stateSlug: "tamil-nadu", tier: 1 },
  { name: "Kolkata", slug: "kolkata", state: "West Bengal", stateSlug: "west-bengal", tier: 1 },
  { name: "Surat", slug: "surat", state: "Gujarat", stateSlug: "gujarat", tier: 1 },
  { name: "Pune", slug: "pune", state: "Maharashtra", stateSlug: "maharashtra", tier: 1 },
  { name: "Jaipur", slug: "jaipur", state: "Rajasthan", stateSlug: "rajasthan", tier: 1 },
  { name: "Lucknow", slug: "lucknow", state: "Uttar Pradesh", stateSlug: "uttar-pradesh", tier: 1 },
  { name: "Kanpur", slug: "kanpur", state: "Uttar Pradesh", stateSlug: "uttar-pradesh", tier: 1 },
  { name: "Nagpur", slug: "nagpur", state: "Maharashtra", stateSlug: "maharashtra", tier: 1 },
  { name: "Indore", slug: "indore", state: "Madhya Pradesh", stateSlug: "madhya-pradesh", tier: 2 },
  { name: "Thane", slug: "thane", state: "Maharashtra", stateSlug: "maharashtra", tier: 2 },
  { name: "Bhopal", slug: "bhopal", state: "Madhya Pradesh", stateSlug: "madhya-pradesh", tier: 2 },
  { name: "Visakhapatnam", slug: "visakhapatnam", state: "Andhra Pradesh", stateSlug: "andhra-pradesh", tier: 2 },
  { name: "Pimpri-Chinchwad", slug: "pimpri-chinchwad", state: "Maharashtra", stateSlug: "maharashtra", tier: 2 },
  { name: "Patna", slug: "patna", state: "Bihar", stateSlug: "bihar", tier: 2 },
  { name: "Vadodara", slug: "vadodara", state: "Gujarat", stateSlug: "gujarat", tier: 2 }
];

// Helper function to check if page already exists
function pageExists(filePath) {
  return fs.existsSync(filePath);
}

// Generate industry-specific service page for a city
function generateIndustryServiceCityPage(city, service, industry) {
  const dir = path.join(__dirname, '../src/pages', city.slug, 'industries', industry.slug);
  const filePath = path.join(dir, `${service.slug}.tsx`);
  
  if (pageExists(filePath)) {
    console.log(`Industry page already exists: ${city.slug}/industries/${industry.slug}/${service.slug}`);
    return;
  }

  const componentName = `${city.name.replace(/\s+/g, '').replace(/[-]/g, '')}${industry.name.replace(/\s+/g, '').replace(/[-&]/g, '')}${service.name.replace(/\s+/g, '')}Page`;

  // Generate industry-specific keywords and content
  const industryKeywords = [
    `${industry.name.toLowerCase()} ${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
    `${service.name.toLowerCase()} for ${industry.name.toLowerCase()} ${city.name.toLowerCase()}`,
    `${industry.name.toLowerCase()} digital marketing ${city.name.toLowerCase()}`,
    `best ${industry.name.toLowerCase()} ${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
    `professional ${industry.name.toLowerCase()} marketing ${city.name.toLowerCase()}`
  ];

  const industrySpecificFeatures = {
    healthcare: ["HIPAA Compliance", "Medical SEO", "Patient Acquisition", "Healthcare Analytics", "Telehealth Marketing", "Medical Practice Growth"],
    "real-estate": ["Property Listings Optimization", "Lead Generation", "Virtual Tours", "Local Market Analysis", "Realtor Branding", "Property Marketing"],
    ecommerce: ["Product Catalog Optimization", "Shopping Ads", "Conversion Rate Optimization", "Cart Abandonment Recovery", "Product Reviews Management", "Marketplace Integration"],
    education: ["Student Enrollment", "Academic Reputation Management", "Educational Content Marketing", "Alumni Engagement", "Campus Event Promotion", "Online Course Marketing"],
    manufacturing: ["B2B Lead Generation", "Industrial SEO", "Trade Show Marketing", "Supply Chain Optimization", "Manufacturing Process Showcase", "Industry Compliance"],
    "financial-services": ["Regulatory Compliance", "Trust Building", "Financial Planning Content", "Investment Marketing", "Insurance Leads", "Banking Services Promotion"],
    hospitality: ["Booking Optimization", "Guest Reviews Management", "Tourism Marketing", "Event Promotion", "Seasonal Campaigns", "Travel Package Marketing"],
    technology: ["Software Demo Marketing", "SaaS Customer Acquisition", "Technical Content Creation", "Developer Community Building", "Product Launch Campaigns", "Tech Conference Marketing"],
    retail: ["Inventory Management", "Local Store Promotion", "Customer Loyalty Programs", "Seasonal Marketing", "Product Merchandising", "In-store Experience Enhancement"],
    automotive: ["Vehicle Inventory Promotion", "Service Department Marketing", "Parts & Accessories Sales", "Customer Service Excellence", "Auto Financing Promotion", "Brand Dealership Support"]
  };

  const industryFeatures = industrySpecificFeatures[industry.slug] || [
    "Industry-Specific Strategy",
    "Target Audience Analysis", 
    "Compliance Management",
    "Competitor Research",
    "Specialized Content Creation",
    "Industry Best Practices"
  ];

  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Building2, Zap, Users, CheckCircle, Star, TrendingUp, Phone, Mail, Clock, Award, Target, Shield, BarChart } from 'lucide-react';

export function ${componentName}() {
  const industryFeatures = ${JSON.stringify(industryFeatures, null, 2)};
  const serviceFeatures = ${JSON.stringify(service.subServices || [], null, 2)};

  const stats = [
    { number: "200+", label: "${industry.name} Clients in ${city.name}" },
    { number: "89%", label: "Average Lead Increase" },
    { number: "156%", label: "ROI Improvement" },
    { number: "24/7", label: "Industry Expert Support" }
  ];

  const industryInsights = [
    {
      title: "${industry.name} Market Trends in ${city.name}",
      description: "Understanding the ${industry.name.toLowerCase()} landscape in ${city.name} to create targeted ${service.name.toLowerCase()} strategies.",
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Compliance & Best Practices",
      description: "Ensuring all ${service.name.toLowerCase()} activities comply with ${industry.name.toLowerCase()} regulations and industry standards.",
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: "Performance Analytics",
      description: "Advanced analytics and reporting specifically designed for ${industry.name.toLowerCase()} businesses in ${city.name}.",
      icon: <BarChart className="w-8 h-8 text-blue-400" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Amit Sharma",
      company: "${industry.name} Leader ${city.name}",
      text: "Their ${service.name.toLowerCase()} expertise in the ${industry.name.toLowerCase()} sector is unmatched. We've seen remarkable growth in our ${city.name} operations.",
      rating: 5
    },
    {
      name: "Rajesh Patel", 
      company: "${city.name} ${industry.name} Group",
      text: "Professional team with deep understanding of ${industry.name.toLowerCase()} challenges. Highly recommend their ${service.name.toLowerCase()} services!",
      rating: 5
    }
  ];

  const packages = [
    {
      name: "Industry Starter",
      price: "₹25,000",
      duration: "per month",
      features: [
        "${industry.name}-Specific ${service.name}",
        "Industry Compliance Review",
        "Monthly Performance Reports",
        "Email & Phone Support",
        "Basic Analytics Dashboard"
      ],
      isPopular: false
    },
    {
      name: "Professional Growth", 
      price: "₹45,000",
      duration: "per month",
      features: [
        "Advanced ${industry.name} ${service.name}",
        "Competitive Analysis",
        "Bi-weekly Strategy Sessions",
        "Custom Industry Reports",
        "Priority Support",
        "Advanced Analytics"
      ],
      isPopular: true
    },
    {
      name: "Enterprise Solution",
      price: "₹85,000",
      duration: "per month", 
      features: [
        "Complete ${industry.name} ${service.name}",
        "Dedicated Account Manager",
        "Weekly Performance Reviews",
        "Custom Integration Support",
        "24/7 Priority Support",
        "Enterprise Analytics Suite",
        "Industry Expert Consultation"
      ],
      isPopular: false
    }
  ];

  const faqs = [
    {
      question: "How does ${service.name.toLowerCase()} work specifically for ${industry.name.toLowerCase()} businesses in ${city.name}?",
      answer: "Our ${service.name.toLowerCase()} for ${industry.name.toLowerCase()} businesses in ${city.name} is tailored to address industry-specific challenges, regulations, and customer behavior patterns. We understand the unique needs of ${industry.name.toLowerCase()} companies and create customized strategies that deliver measurable results."
    },
    {
      question: "What makes your ${industry.name.toLowerCase()} ${service.name.toLowerCase()} different in ${city.name}?",
      answer: "Our deep expertise in both ${service.name.toLowerCase()} and the ${industry.name.toLowerCase()} sector sets us apart. We have extensive experience working with ${industry.name.toLowerCase()} businesses in ${city.name}, understanding local market dynamics, compliance requirements, and customer preferences."
    },
    {
      question: "Do you ensure compliance with ${industry.name.toLowerCase()} regulations?",
      answer: "Absolutely! We stay updated with all ${industry.name.toLowerCase()} regulations and ensure that our ${service.name.toLowerCase()} strategies comply with industry standards. Our team includes specialists who understand the regulatory landscape in ${city.name}."
    },
    {
      question: "How long does it take to see results for ${industry.name.toLowerCase()} ${service.name.toLowerCase()}?",
      answer: "Results typically begin showing within 60-120 days for ${industry.name.toLowerCase()} businesses, as this sector often has longer decision-making cycles. However, we focus on both quick wins and long-term sustainable growth specific to the ${industry.name.toLowerCase()} market in ${city.name}."
    }
  ];

  return (
    <>
      <Helmet>
        <title>${industry.name} ${service.name} in ${city.name}, ${city.state} | Industry Expert Solutions</title>
        <meta name="description" content="Specialized ${service.name.toLowerCase()} for ${industry.name.toLowerCase()} businesses in ${city.name}, ${city.state}. Industry-specific strategies, compliance-ready solutions, and proven results. Get expert consultation today!" />
        <meta name="keywords" content="${industryKeywords.join(', ')}" />
        <link rel="canonical" href={\`https://yourdomain.com/\${city.slug}/industries/\${industry.slug}/\${service.slug}/\`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="${industry.name} ${service.name} in ${city.name}, ${city.state}" />
        <meta property="og:description" content="Expert ${service.name.toLowerCase()} solutions specifically designed for ${industry.name.toLowerCase()} businesses in ${city.name}." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={\`https://yourdomain.com/\${city.slug}/industries/\${industry.slug}/\${service.slug}/\`} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${industry.name} ${service.name} in ${city.name}" />
        <meta name="twitter:description" content="Specialized ${service.name.toLowerCase()} for ${industry.name.toLowerCase()} businesses" />
        
        {/* Schema.org markup for Industry-Specific Service */}
        <script type="application/ld+json">
          {\`{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Your Company Name - ${industry.name} ${service.name} ${city.name}",
            "description": "${service.description}",
            "url": "https://yourdomain.com/\${city.slug}/industries/\${industry.slug}/\${service.slug}/",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "${city.name}",
              "addressRegion": "${city.state}",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": "${city.name}",
              "addressRegion": "${city.state}",
              "addressCountry": "IN"
            },
            "serviceType": "${service.name} for ${industry.name}",
            "industry": "${industry.name}",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "${industry.name} ${service.name} Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "${service.name} for ${industry.name}",
                    "category": "${industry.name}"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "89",
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
                  <span className="text-purple-400 font-semibold">${city.name}, ${city.state}</span>
                  <Target className="w-6 h-6 text-green-400 ml-4 mr-2" />
                  <span className="text-green-400 font-semibold">${industry.name}</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">${industry.name}</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-green-500 to-purple-500 bg-clip-text text-transparent">${service.name}</span>
                  <br />
                  in ${city.name}
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Specialized ${service.name.toLowerCase()} solutions designed specifically for ${industry.name.toLowerCase()} businesses in ${city.name}. 
                  Our industry-focused approach combines deep sector knowledge with proven ${service.name.toLowerCase()} strategies to deliver 
                  exceptional results while ensuring full compliance with ${industry.name.toLowerCase()} regulations and best practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                    Get Industry-Specific Strategy
                  </button>
                  <button className="px-8 py-4 border border-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-all duration-300">
                    View ${industry.name} Case Studies
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Our ${industry.name} Expertise?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Deep ${industry.name} Industry Knowledge</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Local ${city.name} Market Expertise</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Compliance-Ready Solutions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Proven Industry Results</span>
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

        {/* Industry Insights */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">${industry.name} Industry Insights</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our specialized approach to ${service.name.toLowerCase()} for ${industry.name.toLowerCase()} businesses in ${city.name}.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {industryInsights.map((insight, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    {insight.icon}
                    <h3 className="text-2xl font-bold ml-4">{insight.title}</h3>
                  </div>
                  <p className="text-gray-300">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry-Specific Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">${industry.name}-Specific ${service.name} Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized features designed specifically for ${industry.name.toLowerCase()} businesses in ${city.name}.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-purple-400" />
                    <h3 className="text-xl font-bold ml-4">{feature}</h3>
                  </div>
                  <p className="text-gray-300">
                    Specialized {feature.toLowerCase()} designed specifically for ${industry.name.toLowerCase()} businesses in ${city.name}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">${industry.name} ${service.name} Packages</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-specific pricing designed for ${industry.name.toLowerCase()} businesses in ${city.name}.
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">${industry.name} Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how ${industry.name.toLowerCase()} businesses in ${city.name} have transformed with our ${service.name.toLowerCase()} expertise.
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Common questions about ${industry.name.toLowerCase()} ${service.name.toLowerCase()} in ${city.name}.
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your ${industry.name} Business in ${city.name}?</h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Join leading ${industry.name.toLowerCase()} businesses in ${city.name} who have accelerated their growth with our specialized ${service.name.toLowerCase()} strategies.
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
                  <h3 className="text-2xl font-bold mb-6">Get Your ${industry.name} Strategy</h3>
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
                    <select
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white"
                    >
                      <option value="">Select Your ${industry.name} Focus</option>
                      <option value="growth">Business Growth</option>
                      <option value="leads">Lead Generation</option>
                      <option value="branding">Brand Development</option>
                      <option value="digital">Digital Transformation</option>
                    </select>
                    <textarea
                      placeholder="Tell us about your ${industry.name.toLowerCase()} business goals"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                    >
                      Get Industry-Specific Strategy
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
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, content);
  console.log(`Generated industry service page: ${city.slug}/industries/${industry.slug}/${service.slug}`);
}

// Function to generate all industry service pages
function generateAllIndustryServicePages() {
  console.log('Starting industry service page generation...');
  
  majorCities.forEach(city => {
    industries.forEach(industry => {
      services.forEach(service => {
        generateIndustryServiceCityPage(city, service, industry);
      });
    });
  });
  
  console.log('Industry service page generation completed!');
}

// Main execution
if (require.main === module) {
  generateAllIndustryServicePages();
}

module.exports = {
  generateIndustryServiceCityPage,
  generateAllIndustryServicePages,
  majorCities,
  services,
  industries
};