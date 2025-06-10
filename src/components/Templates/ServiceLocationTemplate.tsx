import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, Phone, Mail, Clock, CheckCircle, Building } from 'lucide-react';
import { BaseCard } from '../Shared/BaseCard';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { SEOHead } from '../SEO/SEOHead';
import { ServiceLocationsFooter } from '../Shared/ServiceLocationsFooter';
import { getAnchorText } from '../Shared/AnchorTextUtils';
import { comprehensiveServices, allIndianLocations, comprehensiveIndustries } from '../../data/comprehensiveLocations';

interface ServiceLocationTemplateProps {
  service: {
    name: string;
    slug: string;
    description: string;
    keywords: string[];
    lsiKeywords?: string[];
    eeatSignals?: string[];
    subServices?: Array<{ name: string; slug: string }>;
  };
  location: {
    name?: string;
    city?: string;
    state?: string;
    slug?: string;
    citySlug?: string;
    stateSlug?: string;
    population?: number;
    isMetro?: boolean;
    industries?: string[];
    tier?: string | number;
    focus?: string;
    approach?: string;
  };
  uniqueContent?: {
    heroSection?: {
      title: string;
      subtitle: string;
      description: string;
      expandedSection1?: { title: string; content: string;   marketAnalysis?: { title: string; content: string;   expandedSection1?: { title: string; content: string; };
   expandedSection2?: { title: string; content: string; };
   expandedSection3?: { title: string; content: string; };
   expandedSection4?: { title: string; content: string; };
   expandedSection5?: { title: string; content: string; };
   expandedSection6?: { title: string; content: string; };
   expandedSection7?: { title: string; content: string; }; };
   expertiseShowcase?: { title: string; content: string; };
   industryInsights?: { title: string; content: string; };
   competitiveAdvantage?: { title: string; content: string; }; };

      expandedSection2?: { title: string; content: string; };

      expandedSection3?: { title: string; content: string; };

      expandedSection4?: { title: string; content: string; };
    };
    marketInsights?: {
      title: string;
      content: string;
    };
    processMethodology?: {
      title: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    whyChooseUs?: {
      title: string;
      reasons: string[];
    };
    caseStudies?: {
      title: string;
      examples: Array<{
        industry: string;
        challenge: string;
        solution: string;
        results: string;
      }>;
    };
    faqSection?: {
      title: string;
      questions: Array<{
        question: string;
        answer: string;
      }>;
    };
  };
  tier?: string;
  relatedServices?: Array<{
    name: string;
    slug: string;
    url: string;
  }>;
  nearbyLocations?: Array<{
    city: string;
    citySlug: string;
    stateSlug: string;
    url: string;
  }>;
}

export const ServiceLocationTemplate: React.FC<ServiceLocationTemplateProps> = ({
  service,
  location,
  uniqueContent,
  tier,
  relatedServices = [],
  nearbyLocations = []
}) => {
  // Handle both old and new location data formats
  const cityName = location.name || location.city || 'Unknown City';
  const stateName = location.state || 'Unknown State';
  const citySlug = location.slug || location.citySlug || 'unknown-city';
  const stateSlug = location.stateSlug || 'unknown-state';
  const locationTier = tier || location.tier || 3;

  const pageTitle = `${service.name} in ${cityName}, ${stateName}`;
  const roiImprovement = locationTier === 'tier1' || locationTier === 1 ? "400%" :
                        locationTier === 'tier2' || locationTier === 2 ? "350%" : "300%";
  const clientCount = locationTier === 'tier1' || locationTier === 1 ? "500+" :
                     locationTier === 'tier2' || locationTier === 2 ? "300+" : "200+";
  
  const benefits = uniqueContent?.whyChooseUs?.reasons || [
    `Proven ROI improvement of ${roiImprovement}+ for ${cityName} businesses`,
    `Local ${cityName} market expertise and insights`,
    "24/7 AI-powered automation systems",
    `Dedicated ${cityName}-based account management`,
    "Real-time performance tracking and analytics",
    `Industry-specific strategies for ${cityName} market`
  ];

  const stats = [
    { icon: <MapPin className="w-6 h-6" />, label: `${cityName} Presence`, value: "5+ Years" },
    { icon: <Users className="w-6 h-6" />, label: `${cityName} Clients`, value: clientCount },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Average ROI", value: roiImprovement },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "98%" }
  ];

  const processSteps = uniqueContent?.processMethodology?.steps?.map((step, index) => ({
    step: String(index + 1).padStart(2, '0'),
    title: step.title,
    description: step.description
  })) || [
    {
      step: "01",
      title: `${cityName} Market Analysis`,
      description: `Comprehensive analysis of ${cityName} market dynamics and competitor landscape`
    },
    {
      step: "02",
      title: "Strategy Development",
      description: `Custom ${service.name.toLowerCase()} strategies tailored for ${cityName} businesses`
    },
    {
      step: "03",
      title: "Implementation",
      description: `Expert execution of campaigns with ${cityName}-focused optimization`
    },
    {
      step: "04",
      title: "Performance Optimization",
      description: `Continuous monitoring and optimization for maximum ${cityName} market impact`
    }
  ];

  const seoData = {
    title: `${pageTitle} | God Digital Marketing`,
    description: uniqueContent?.heroSection?.description ||
      `Professional ${service.name.toLowerCase()} in ${cityName}, ${stateName}. Proven results with ${roiImprovement} ROI improvement. Expert ${service.slug.replace('-', ' ')} solutions for ${cityName} businesses.`,
    keywords: [
      ...(service.keywords || []),
      ...(service.lsiKeywords || []),
      `${service.slug} ${citySlug}`,
      `${service.slug} ${cityName}`,
      `${service.name.toLowerCase()} ${cityName}`,
      `${service.name.toLowerCase()} ${stateName}`,
      `digital marketing ${cityName}`,
      `marketing agency ${cityName}`,
      `${cityName} ${service.slug}`,
      `best ${service.slug} ${cityName}`
    ],
    canonicalUrl: `https://goddigitalmarketing.com/${citySlug}/${service.slug}/`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `God Digital Marketing - ${service.name} ${cityName}`,
      "description": uniqueContent?.heroSection?.description ||
        `Professional ${service.name.toLowerCase()} services in ${cityName}, ${stateName}`,
      "url": `https://goddigitalmarketing.com/${citySlug}/${service.slug}/`,
      "telephone": "+91-9999999999",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityName,
        "addressRegion": stateName,
        "addressCountry": "India"
      }
    }
  };

  const usedAnchors = new Set<string>();

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <AnimatedSection direction="up">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">{location.isMetro ? 'Metro City' : `Tier ${location.tier} City`} Service</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {uniqueContent?.heroSection?.title || `${service.name} in ${cityName}, ${stateName}`}
                </h1>

                {uniqueContent?.heroSection?.subtitle && (
                  <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 leading-tight">
                    {uniqueContent.heroSection.subtitle}
                  </h2>
                )}

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  {uniqueContent?.heroSection?.description ||
                   `Transform your ${cityName} business with our expert ${service.name.toLowerCase()} and
                    advanced digital solutions. Proven results for businesses across ${stateName}.`}
                </p>
              </div>
            </AnimatedSection>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <BaseCard
                  key={stat.label}
                  title={stat.value}
                  description={stat.label}
                  variant="glass"
                  className="text-center"
                >
                  <div className="flex justify-center mb-4 text-white">
                    {stat.icon}
                  </div>
                </BaseCard>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights Section */}
        {uniqueContent?.marketInsights && (
          <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4">
              <AnimatedSection direction="up">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {uniqueContent.marketInsights.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                    {uniqueContent.marketInsights.content}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Service Overview */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {uniqueContent?.whyChooseUs?.title || `Why Choose Our ${service.name} in ${cityName}?`}
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Our {cityName}-based team specializes in delivering exceptional {service.name.toLowerCase()}
                  that drives measurable results for businesses across {stateName}. We understand the unique
                  market dynamics of {cityName} and tailor our strategies accordingly.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <BaseCard
              title="Get Started Today"
              description=""
              variant="glass"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-gray-300">+91 9999999999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white" />
                  <span className="text-gray-300">contact@goddigitalmarketing.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-white" />
                  <span className="text-gray-300">24/7 Support Available</span>
                </div>
              </div>
              <motion.button
                className="w-full mt-6 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Consultation
              </motion.button>
            </BaseCard>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {uniqueContent?.processMethodology?.title || `Our ${service.name} Process in ${cityName}`}
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Proven methodology that delivers consistent results for {cityName} businesses
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} direction="up" delay={index * 0.1}>
                  <BaseCard
                    title={step.title}
                    description={step.description}
                    variant="glass"
                    className="text-center h-full"
                  >
                    <div className="text-4xl font-bold text-white/20 mb-4">{step.step}</div>
                  </BaseCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        {uniqueContent?.caseStudies && (
          <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4">
              <AnimatedSection direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {uniqueContent.caseStudies.title}
                  </h2>
                  <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Real results from real businesses in {cityName}
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8">
                {uniqueContent.caseStudies.examples.map((caseStudy, index) => (
                  <AnimatedSection key={index} direction="left" delay={index * 0.2}>
                    <BaseCard
                      title={caseStudy.industry}
                      description=""
                      variant="glass"
                      className="h-full"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-red-400 font-semibold mb-2">Challenge:</h4>
                          <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-blue-400 font-semibold mb-2">Solution:</h4>
                          <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-green-400 font-semibold mb-2">Results:</h4>
                          <p className="text-gray-300 text-sm font-bold">{caseStudy.results}</p>
                        </div>
                      </div>
                    </BaseCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {uniqueContent?.faqSection && (
          <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
            <div className="max-w-4xl mx-auto px-4">
              <AnimatedSection direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {uniqueContent.faqSection.title}
                  </h2>
                </div>
              </AnimatedSection>

              <div className="space-y-6">
                {uniqueContent.faqSection.questions.map((faq, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                    <BaseCard
                      title={faq.question}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </BaseCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Expanded Content Sections */}
        {(uniqueContent?.expandedSection1 || uniqueContent?.expandedSection2 || uniqueContent?.expandedSection3 || uniqueContent?.expandedSection4) && (
          <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                {uniqueContent?.expandedSection1 && (
                  <AnimatedSection direction="left">
                    <BaseCard
                      title={uniqueContent.expandedSection1.title}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{uniqueContent.expandedSection1.content}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}
                {uniqueContent?.expandedSection2 && (
                  <AnimatedSection direction="right">
                    <BaseCard
                      title={uniqueContent.expandedSection2.title}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{uniqueContent.expandedSection2.content}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}
                {uniqueContent?.expandedSection3 && (
                  <AnimatedSection direction="left" delay={0.2}>
                    <BaseCard
                      title={uniqueContent.expandedSection3.title}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{uniqueContent.expandedSection3.content}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}
                {uniqueContent?.expandedSection4 && (
                  <AnimatedSection direction="right" delay={0.2}>
                    <BaseCard
                      title={uniqueContent.expandedSection4.title}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{uniqueContent.expandedSection4.content}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}
              </div>
            </div>
          </section>
        )}


        {/* Market Analysis Section */}
        {uniqueContent?.marketAnalysis && (
          <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4">
              <AnimatedSection direction="up">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {uniqueContent.marketAnalysis.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                    {uniqueContent.marketAnalysis.content}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Expertise Showcase Section */}
        {uniqueContent?.expertiseShowcase && (
          <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4">
              <AnimatedSection direction="left">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {uniqueContent.expertiseShowcase.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                    {uniqueContent.expertiseShowcase.content}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Industry Insights Section */}
        {uniqueContent?.industryInsights && (
          <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4">
              <AnimatedSection direction="right">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {uniqueContent.industryInsights.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                    {uniqueContent.industryInsights.content}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Competitive Advantage Section */}
        {uniqueContent?.competitiveAdvantage && (
          <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4">
              <AnimatedSection direction="up">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {uniqueContent.competitiveAdvantage.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                    {uniqueContent.competitiveAdvantage.content}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}


        {/* Additional Expanded Content Sections */}
        {(uniqueContent?.expandedSection1 || uniqueContent?.expandedSection2 || uniqueContent?.expandedSection3 ||
          uniqueContent?.expandedSection4 || uniqueContent?.expandedSection5 || uniqueContent?.expandedSection6 ||
          uniqueContent?.expandedSection7) && (
          <section className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto px-4">
              <div className="space-y-16">
                {uniqueContent?.expandedSection1 && (
                  <AnimatedSection direction="up">
                    <BaseCard
                      title={uniqueContent.expandedSection1.title}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{uniqueContent.expandedSection1.content}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}
                {uniqueContent?.expandedSection2 && (
                  <AnimatedSection direction="left" delay={0.1}>
                    <BaseCard
                      title={uniqueContent.expandedSection2.title}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{uniqueContent.expandedSection2.content}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}
                {uniqueContent?.expandedSection3 && (
                  <AnimatedSection direction="right" delay={0.2}>
                    <BaseCard
                      title={uniqueContent.expandedSection3.title}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{uniqueContent.expandedSection3.content}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}
                {uniqueContent?.expandedSection4 && (
                  <AnimatedSection direction="up" delay={0.3}>
                    <BaseCard
                      title={uniqueContent.expandedSection4.title}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{uniqueContent.expandedSection4.content}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}
                {uniqueContent?.expandedSection5 && (
                  <AnimatedSection direction="left" delay={0.4}>
                    <BaseCard
                      title={uniqueContent.expandedSection5.title}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{uniqueContent.expandedSection5.content}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}
                {uniqueContent?.expandedSection6 && (
                  <AnimatedSection direction="right" delay={0.5}>
                    <BaseCard
                      title={uniqueContent.expandedSection6.title}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{uniqueContent.expandedSection6.content}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}
                {uniqueContent?.expandedSection7 && (
                  <AnimatedSection direction="up" delay={0.6}>
                    <BaseCard
                      title={uniqueContent.expandedSection7.title}
                      description=""
                      variant="glass"
                    >
                      <p className="text-gray-300 leading-relaxed">{uniqueContent.expandedSection7.content}</p>
                    </BaseCard>
                  </AnimatedSection>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your {cityName} Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join hundreds of successful businesses in {cityName} that trust God Digital Marketing
                for their {service.name.toLowerCase()} needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Strategy Session
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Studies
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Related Links Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Related Services</h3>
              <ul className="space-y-2">
                {comprehensiveServices.filter(s => s.slug !== service.slug).slice(0, 6).map(s => (
                  <li key={s.slug}>
                    <a href={`/${citySlug}/${s.slug}/`} className="text-blue-400 hover:text-white text-sm">
                      {getAnchorText('service', s, { city: cityName }, usedAnchors)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Related Locations */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Related Locations</h3>
              <ul className="space-y-2">
                {allIndianLocations.slice(0, 6).map(state => (
                  <li key={state.stateSlug}>
                    <a href={`/${state.stateSlug}/${service.slug}/`} className="text-blue-400 hover:text-white text-sm">
                      {getAnchorText('location', state, { service: service.name }, usedAnchors)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Related Industries */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Related Industries</h3>
              <ul className="space-y-2">
                {comprehensiveIndustries.slice(0, 6).map(i => (
                  <li key={i.slug}>
                    <a href={`/${citySlug}/industries/${i.slug}/${service.slug}/`} className="text-blue-400 hover:text-white text-sm">
                      {getAnchorText('industry', i, { service: service.name }, usedAnchors)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <ServiceLocationsFooter service={service} />
    </>
  );
};