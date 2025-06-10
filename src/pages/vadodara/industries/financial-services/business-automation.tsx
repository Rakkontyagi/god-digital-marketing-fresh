import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Building2, Zap, Users, CheckCircle, Star, TrendingUp, Phone, Mail, Clock, Award, Target, Shield, BarChart } from 'lucide-react';

// Enhanced Internal Linking Components
import { InternalLinkingContent } from '../../components/Content/InternalLinkingContent';
import { ContextualSidebar } from '../../components/Sidebar/ContextualSidebar';
import { Target, MapPin, Building2 } from 'lucide-react';

export function VadodaraFinancialServicesBusinessAutomationPage() {
  const industryFeatures = [
  "Regulatory Compliance",
  "Trust Building",
  "Financial Planning Content",
  "Investment Marketing",
  "Insurance Leads",
  "Banking Services Promotion"
];
  const serviceFeatures = [
  "Process Automation",
  "Document Automation",
  "HR Automation",
  "Accounting Automation",
  "Inventory Management",
  "Workflow Optimization"
];

  const stats = [
    { number: "200+", label: "Financial Services Clients in Vadodara" },
    { number: "89%", label: "Average Lead Increase" },
    { number: "156%", label: "ROI Improvement" },
    { number: "24/7", label: "Industry Expert Support" }
  ];

  const industryInsights = [
    {
      title: "Financial Services Market Trends in Vadodara",
      description: "Understanding the financial services landscape in Vadodara to create targeted business automation strategies.",
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Compliance & Best Practices",
      description: "Ensuring all business automation activities comply with financial services regulations and industry standards.",
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: "Performance Analytics",
      description: "Advanced analytics and reporting specifically designed for financial services businesses in Vadodara.",
      icon: <BarChart className="w-8 h-8 text-blue-400" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Amit Sharma",
      company: "Financial Services Leader Vadodara",
      text: "Their business automation expertise in the financial services sector is unmatched. We've seen remarkable growth in our Vadodara operations.",
      rating: 5
    },
    {
      name: "Rajesh Patel", 
      company: "Vadodara Financial Services Group",
      text: "Professional team with deep understanding of financial services challenges. Highly recommend their business automation services!",
      rating: 5
    }
  ];

  const packages = [
    {
      name: "Industry Starter",
      price: "₹25,000",
      duration: "per month",
      features: [
        "Financial Services-Specific Business Automation",
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
        "Advanced Financial Services Business Automation",
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
        "Complete Financial Services Business Automation",
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
      question: "How does business automation work specifically for financial services businesses in Vadodara?",
      answer: "Our business automation for financial services businesses in Vadodara is tailored to address industry-specific challenges, regulations, and customer behavior patterns. We understand the unique needs of financial services companies and create customized strategies that deliver measurable results."
    },
    {
      question: "What makes your financial services business automation different in Vadodara?",
      answer: "Our deep expertise in both business automation and the financial services sector sets us apart. We have extensive experience working with financial services businesses in Vadodara, understanding local market dynamics, compliance requirements, and customer preferences."
    },
    {
      question: "Do you ensure compliance with financial services regulations?",
      answer: "Absolutely! We stay updated with all financial services regulations and ensure that our business automation strategies comply with industry standards. Our team includes specialists who understand the regulatory landscape in Vadodara."
    },
    {
      question: "How long does it take to see results for financial services business automation?",
      answer: "Results typically begin showing within 60-120 days for financial services businesses, as this sector often has longer decision-making cycles. However, we focus on both quick wins and long-term sustainable growth specific to the financial services market in Vadodara."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Financial Services Business Automation in Vadodara, Gujarat | Industry Expert Solutions</title>
        <meta name="description" content="Specialized business automation for financial services businesses in Vadodara, Gujarat. Industry-specific strategies, compliance-ready solutions, and proven results. Get expert consultation today!" />
        <meta name="keywords" content="financial services business automation vadodara, business automation for financial services vadodara, financial services digital marketing vadodara, best financial services business automation vadodara, professional financial services marketing vadodara" />
        <link rel="canonical" href={`https://yourdomain.com/${city.slug}/industries/${industry.slug}/${service.slug}/`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Financial Services Business Automation in Vadodara, Gujarat" />
        <meta property="og:description" content="Expert business automation solutions specifically designed for financial services businesses in Vadodara." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourdomain.com/${city.slug}/industries/${industry.slug}/${service.slug}/`} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Financial Services Business Automation in Vadodara" />
        <meta name="twitter:description" content="Specialized business automation for financial services businesses" />
        
        {/* Schema.org markup for Industry-Specific Service */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Your Company Name - Financial Services Business Automation Vadodara",
            "description": "Complete business process automation for operational efficiency",
            "url": "https://yourdomain.com/${city.slug}/industries/${industry.slug}/${service.slug}/",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vadodara",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": "Vadodara",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "serviceType": "Business Automation for Financial Services",
            "industry": "Financial Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Financial Services Business Automation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Automation for Financial Services",
                    "category": "Financial Services"
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
          }`}
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
                  <span className="text-purple-400 font-semibold">Vadodara, Gujarat</span>
                  <Target className="w-6 h-6 text-green-400 ml-4 mr-2" />
                  <span className="text-green-400 font-semibold">Financial Services</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Financial Services</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-green-500 to-purple-500 bg-clip-text text-transparent">Business Automation</span>
                  <br />
                  in Vadodara
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Specialized business automation solutions designed specifically for financial services businesses in Vadodara. 
                  Our industry-focused approach combines deep sector knowledge with proven business automation strategies to deliver 
                  exceptional results while ensuring full compliance with financial services regulations and best practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                    Get Industry-Specific Strategy
                  </button>
                  <button className="px-8 py-4 border border-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-all duration-300">
                    View Financial Services Case Studies
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Our Financial Services Expertise?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Deep Financial Services Industry Knowledge</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Local Vadodara Market Expertise</span>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Financial Services Industry Insights</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our specialized approach to business automation for financial services businesses in Vadodara.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Financial Services-Specific Business Automation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized features designed specifically for financial services businesses in Vadodara.
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
                    Specialized {feature.toLowerCase()} designed specifically for financial services businesses in Vadodara.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Financial Services Business Automation Packages</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-specific pricing designed for financial services businesses in Vadodara.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 relative ${pkg.isPopular ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}>
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
                  <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.isPopular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'border border-purple-500 hover:bg-purple-500'}`}>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Financial Services Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how financial services businesses in Vadodara have transformed with our business automation expertise.
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
                Common questions about financial services business automation in Vadodara.
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
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Financial Services Business in Vadodara?</h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Join leading financial services businesses in Vadodara who have accelerated their growth with our specialized business automation strategies.
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
                  <h3 className="text-2xl font-bold mb-6">Get Your Financial Services Strategy</h3>
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
                      <option value="">Select Your Financial Services Focus</option>
                      <option value="growth">Business Growth</option>
                      <option value="leads">Lead Generation</option>
                      <option value="branding">Brand Development</option>
                      <option value="digital">Digital Transformation</option>
                    </select>
                    <textarea
                      placeholder="Tell us about your financial services business goals"
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
    
        {/* Enhanced Internal Linking Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Enhanced Content Wrapper */}
            <div className="lg:col-span-3">
              <InternalLinkingContent 
                currentCity="vadodara"
                currentService="business-automation"
                currentIndustry="financial-services"
              />

              {/* Professional Cross-Linking Section */}
              <section className="mt-16 py-12 bg-gradient-to-r from-gray-900 to-black rounded-2xl">
                <div className="max-w-6xl mx-auto px-8">
                  <h2 className="text-3xl font-bold mb-8 text-center text-white">
                    Related Services & Locations
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Service Cross-Links */}
                    <div className="bg-gray-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4 text-purple-400 flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        Our Services
                      </h3>
                      <div className="space-y-2">
                        <a href="/vadodara/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Digital Marketing</a>
                        <a href="/vadodara/ai-automation/" className="block text-gray-300 hover:text-white text-sm py-1">AI Automation</a>
                        <a href="/vadodara/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Business Automation</a>
                        <a href="/vadodara/seo-services/" className="block text-gray-300 hover:text-white text-sm py-1">SEO Services</a>
                        <a href="/vadodara/ppc-advertising/" className="block text-gray-300 hover:text-white text-sm py-1">PPC Advertising</a>
                      </div>
                    </div>

                    {/* Geographic Cross-Links */}
                    <div className="bg-gray-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4 text-green-400 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Other Cities
                      </h3>
                      <div className="space-y-2">
                        <a href="/mumbai/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Mumbai</a>
                        <a href="/delhi/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Delhi</a>
                        <a href="/bangalore/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Bangalore</a>
                        <a href="/chennai/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Chennai</a>
                        <a href="/hyderabad/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Hyderabad</a>
                        <a href="/pune/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Pune</a>
                      </div>
                    </div>

                    {/* Industry Cross-Links */}
                    <div className="bg-gray-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
                        <Building2 className="w-5 h-5 mr-2" />
                        Industries
                      </h3>
                      <div className="space-y-2">
                        <a href="/vadodara/industries/healthcare/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Healthcare</a>
                        <a href="/vadodara/industries/real-estate/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Real Estate</a>
                        <a href="/vadodara/industries/ecommerce/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">E-commerce</a>
                        <a href="/vadodara/industries/education/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Education</a>
                        <a href="/vadodara/industries/technology/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Technology</a>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced CTA Section */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us?</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          <span className="text-gray-300">1000+ Successful Projects</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          <span className="text-gray-300">500+ Cities Across India</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          <span className="text-gray-300">300% Average ROI</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-white">Get Started Today</h3>
                      <p className="text-gray-300 mb-4">Free consultation & custom strategy</p>
                      <a
                        href="/contact/"
                        className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Contact Us Now
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <ContextualSidebar 
                currentCity="vadodara"
                currentService="business-automation"
                currentIndustry="financial-services"
              />
            </div>
          </div>
        </div>
</>
  );
}

export default VadodaraFinancialServicesBusinessAutomationPage;