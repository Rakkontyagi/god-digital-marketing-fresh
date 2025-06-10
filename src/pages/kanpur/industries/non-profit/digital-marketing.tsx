import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Building2, Zap, Users, CheckCircle, Star, TrendingUp, Phone, Mail, Clock, Award, Target, Shield, BarChart } from 'lucide-react';

// Enhanced Internal Linking Components
import { InternalLinkingContent } from '../../components/Content/InternalLinkingContent';
import { ContextualSidebar } from '../../components/Sidebar/ContextualSidebar';
import { Target, MapPin, Building2 } from 'lucide-react';

export function KanpurNonProfitDigitalMarketingPage() {
  const industryFeatures = [
  "Industry-Specific Strategy",
  "Target Audience Analysis",
  "Compliance Management",
  "Competitor Research",
  "Specialized Content Creation",
  "Industry Best Practices"
];
  const serviceFeatures = [
  "SEO Services",
  "PPC Advertising",
  "Social Media Marketing",
  "Content Marketing",
  "Email Marketing",
  "Google Ads Management"
];

  const stats = [
    { number: "200+", label: "Non-Profit Clients in Kanpur" },
    { number: "89%", label: "Average Lead Increase" },
    { number: "156%", label: "ROI Improvement" },
    { number: "24/7", label: "Industry Expert Support" }
  ];

  const industryInsights = [
    {
      title: "Non-Profit Market Trends in Kanpur",
      description: "Understanding the non-profit landscape in Kanpur to create targeted digital marketing strategies.",
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Compliance & Best Practices",
      description: "Ensuring all digital marketing activities comply with non-profit regulations and industry standards.",
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: "Performance Analytics",
      description: "Advanced analytics and reporting specifically designed for non-profit businesses in Kanpur.",
      icon: <BarChart className="w-8 h-8 text-blue-400" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Amit Sharma",
      company: "Non-Profit Leader Kanpur",
      text: "Their digital marketing expertise in the non-profit sector is unmatched. We've seen remarkable growth in our Kanpur operations.",
      rating: 5
    },
    {
      name: "Rajesh Patel", 
      company: "Kanpur Non-Profit Group",
      text: "Professional team with deep understanding of non-profit challenges. Highly recommend their digital marketing services!",
      rating: 5
    }
  ];

  const packages = [
    {
      name: "Industry Starter",
      price: "₹25,000",
      duration: "per month",
      features: [
        "Non-Profit-Specific Digital Marketing",
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
        "Advanced Non-Profit Digital Marketing",
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
        "Complete Non-Profit Digital Marketing",
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
      question: "How does digital marketing work specifically for non-profit businesses in Kanpur?",
      answer: "Our digital marketing for non-profit businesses in Kanpur is tailored to address industry-specific challenges, regulations, and customer behavior patterns. We understand the unique needs of non-profit companies and create customized strategies that deliver measurable results."
    },
    {
      question: "What makes your non-profit digital marketing different in Kanpur?",
      answer: "Our deep expertise in both digital marketing and the non-profit sector sets us apart. We have extensive experience working with non-profit businesses in Kanpur, understanding local market dynamics, compliance requirements, and customer preferences."
    },
    {
      question: "Do you ensure compliance with non-profit regulations?",
      answer: "Absolutely! We stay updated with all non-profit regulations and ensure that our digital marketing strategies comply with industry standards. Our team includes specialists who understand the regulatory landscape in Kanpur."
    },
    {
      question: "How long does it take to see results for non-profit digital marketing?",
      answer: "Results typically begin showing within 60-120 days for non-profit businesses, as this sector often has longer decision-making cycles. However, we focus on both quick wins and long-term sustainable growth specific to the non-profit market in Kanpur."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Non-Profit Digital Marketing in Kanpur, Uttar Pradesh | Industry Expert Solutions</title>
        <meta name="description" content="Specialized digital marketing for non-profit businesses in Kanpur, Uttar Pradesh. Industry-specific strategies, compliance-ready solutions, and proven results. Get expert consultation today!" />
        <meta name="keywords" content="non-profit digital marketing kanpur, digital marketing for non-profit kanpur, non-profit digital marketing kanpur, best non-profit digital marketing kanpur, professional non-profit marketing kanpur" />
        <link rel="canonical" href={`https://yourdomain.com/${city.slug}/industries/${industry.slug}/${service.slug}/`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Non-Profit Digital Marketing in Kanpur, Uttar Pradesh" />
        <meta property="og:description" content="Expert digital marketing solutions specifically designed for non-profit businesses in Kanpur." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourdomain.com/${city.slug}/industries/${industry.slug}/${service.slug}/`} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Non-Profit Digital Marketing in Kanpur" />
        <meta name="twitter:description" content="Specialized digital marketing for non-profit businesses" />
        
        {/* Schema.org markup for Industry-Specific Service */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Your Company Name - Non-Profit Digital Marketing Kanpur",
            "description": "Comprehensive digital marketing solutions to grow your business online",
            "url": "https://yourdomain.com/${city.slug}/industries/${industry.slug}/${service.slug}/",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kanpur",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": "Kanpur",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "serviceType": "Digital Marketing for Non-Profit",
            "industry": "Non-Profit",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Non-Profit Digital Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing for Non-Profit",
                    "category": "Non-Profit"
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
                  <span className="text-purple-400 font-semibold">Kanpur, Uttar Pradesh</span>
                  <Target className="w-6 h-6 text-green-400 ml-4 mr-2" />
                  <span className="text-green-400 font-semibold">Non-Profit</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Non-Profit</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-green-500 to-purple-500 bg-clip-text text-transparent">Digital Marketing</span>
                  <br />
                  in Kanpur
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Specialized digital marketing solutions designed specifically for non-profit businesses in Kanpur. 
                  Our industry-focused approach combines deep sector knowledge with proven digital marketing strategies to deliver 
                  exceptional results while ensuring full compliance with non-profit regulations and best practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                    Get Industry-Specific Strategy
                  </button>
                  <button className="px-8 py-4 border border-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-all duration-300">
                    View Non-Profit Case Studies
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Our Non-Profit Expertise?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Deep Non-Profit Industry Knowledge</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span>Local Kanpur Market Expertise</span>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Non-Profit Industry Insights</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our specialized approach to digital marketing for non-profit businesses in Kanpur.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Non-Profit-Specific Digital Marketing Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized features designed specifically for non-profit businesses in Kanpur.
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
                    Specialized {feature.toLowerCase()} designed specifically for non-profit businesses in Kanpur.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Non-Profit Digital Marketing Packages</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-specific pricing designed for non-profit businesses in Kanpur.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Non-Profit Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how non-profit businesses in Kanpur have transformed with our digital marketing expertise.
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
                Common questions about non-profit digital marketing in Kanpur.
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
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Non-Profit Business in Kanpur?</h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Join leading non-profit businesses in Kanpur who have accelerated their growth with our specialized digital marketing strategies.
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
                  <h3 className="text-2xl font-bold mb-6">Get Your Non-Profit Strategy</h3>
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
                      <option value="">Select Your Non-Profit Focus</option>
                      <option value="growth">Business Growth</option>
                      <option value="leads">Lead Generation</option>
                      <option value="branding">Brand Development</option>
                      <option value="digital">Digital Transformation</option>
                    </select>
                    <textarea
                      placeholder="Tell us about your non-profit business goals"
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
                currentCity="kanpur"
                currentService="digital-marketing"
                currentIndustry="non-profit"
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
                        <a href="/kanpur/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Digital Marketing</a>
                        <a href="/kanpur/ai-automation/" className="block text-gray-300 hover:text-white text-sm py-1">AI Automation</a>
                        <a href="/kanpur/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Business Automation</a>
                        <a href="/kanpur/seo-services/" className="block text-gray-300 hover:text-white text-sm py-1">SEO Services</a>
                        <a href="/kanpur/ppc-advertising/" className="block text-gray-300 hover:text-white text-sm py-1">PPC Advertising</a>
                      </div>
                    </div>

                    {/* Geographic Cross-Links */}
                    <div className="bg-gray-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4 text-green-400 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Other Cities
                      </h3>
                      <div className="space-y-2">
                        <a href="/mumbai/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Mumbai</a>
                        <a href="/delhi/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Delhi</a>
                        <a href="/bangalore/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Bangalore</a>
                        <a href="/chennai/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Chennai</a>
                        <a href="/hyderabad/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Hyderabad</a>
                        <a href="/pune/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Pune</a>
                      </div>
                    </div>

                    {/* Industry Cross-Links */}
                    <div className="bg-gray-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
                        <Building2 className="w-5 h-5 mr-2" />
                        Industries
                      </h3>
                      <div className="space-y-2">
                        <a href="/kanpur/industries/healthcare/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Healthcare</a>
                        <a href="/kanpur/industries/real-estate/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Real Estate</a>
                        <a href="/kanpur/industries/ecommerce/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">E-commerce</a>
                        <a href="/kanpur/industries/education/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Education</a>
                        <a href="/kanpur/industries/technology/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Technology</a>
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
                currentCity="kanpur"
                currentService="digital-marketing"
                currentIndustry="non-profit"
              />
            </div>
          </div>
        </div>
</>
  );
}

export default KanpurNonProfitDigitalMarketingPage;