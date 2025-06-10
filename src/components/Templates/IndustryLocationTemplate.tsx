import React from 'react';
import { motion } from 'framer-motion';
import { Building, TrendingUp, Award, Users, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { BaseCard } from '../Shared/BaseCard';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { SEOHead } from '../SEO/SEOHead';
import { ServiceLocationsFooter } from '../Shared/ServiceLocationsFooter';
import { getAnchorText } from '../Shared/AnchorTextUtils';
import { comprehensiveServices, allIndianLocations, comprehensiveIndustries } from '../../data/comprehensiveLocations';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

interface IndustryLocationTemplateProps {
  industry: {
    name: string;
    slug: string;
    description: string;
  };
  service: {
    name: string;
    slug: string;
  };
  location?: {
    city: string;
    state: string;
    citySlug: string;
    stateSlug: string;
  };
}

export const IndustryLocationTemplate: React.FC<IndustryLocationTemplateProps> = ({
  industry,
  service,
  location
}) => {
  const pageTitle = location 
    ? `${service.name} for ${industry.name} in ${location.city}, ${location.state}`
    : `${service.name} for ${industry.name} Industry`;

  const benefits = [
    `Specialized ${service.name.toLowerCase()} strategies for ${industry.name.toLowerCase()} businesses`,
    `Industry-specific compliance and best practices`,
    `Proven results in ${industry.name.toLowerCase()} sector`,
    `Expert team with ${industry.name.toLowerCase()} experience`,
    `Customized solutions for ${industry.name.toLowerCase()} challenges`,
    `ROI-focused campaigns for ${industry.name.toLowerCase()} growth`
  ];

  const stats = [
    { icon: <Building className="w-6 h-6" />, label: `${industry.name} Clients`, value: "150+" },
    { icon: <Users className="w-6 h-6" />, label: "Industry Experience", value: "8+ Years" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Average Growth", value: "280%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "96%" }
  ];

  const canonicalUrl = location 
    ? `https://goddigitalmarketing.com/${service.slug}/${industry.slug}/${location.stateSlug}/${location.citySlug}/`
    : `https://goddigitalmarketing.com/${service.slug}/${industry.slug}/`;
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Industries', url: 'https://goddigitalmarketing.com/industries/' },
    { title: industry.name, url: `https://goddigitalmarketing.com/industries/${industry.slug}/` },
    { title: service.name, url: canonicalUrl }
  ];

  const seoData = {
    title: `${pageTitle} | God Digital Marketing`,
    description: `Specialized ${service.name.toLowerCase()} for ${industry.name.toLowerCase()} businesses${location ? ` in ${location.city}, ${location.state}` : ''}. Industry-specific strategies and proven results.`,
    keywords: [
      `${service.slug} ${industry.slug}`,
      `${industry.slug} ${service.slug}`,
      `${industry.name.toLowerCase()} ${service.name.toLowerCase()}`,
      ...(location ? [
        `${service.slug} ${industry.slug} ${location.citySlug}`,
        `${industry.slug} marketing ${location.city}`,
        `${location.city} ${industry.slug} ${service.slug}`
      ] : [])
    ],
    canonicalUrl,
    structuredData: [
      getServiceSchema({
        name: pageTitle,
        description: `Specialized ${service.name.toLowerCase()} services for ${industry.name.toLowerCase()} businesses`,
        provider: 'God Digital Marketing',
        areaServed: location ? `${location.city}, ${location.state}` : 'India',
        url: canonicalUrl
      }),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  const usedAnchors = new Set<string>();

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <AnimatedSection direction="up">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm">{industry.name} Industry Specialist</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {service.name} for
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {industry.name} {location ? `in ${location.city}` : 'Industry'}
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Specialized {service.name.toLowerCase()} solutions designed specifically for {industry.name.toLowerCase()} businesses. 
                  {location && ` Serving ${location.city}, ${location.state} with industry expertise.`}
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

        {/* Overview Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Our {service.name} for {industry.name}?
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Our team specializes in {industry.name.toLowerCase()} and delivers exceptional {service.name.toLowerCase()} 
                  that drives measurable results. We understand the unique challenges of the {industry.name.toLowerCase()} sector and tailor our strategies accordingly.
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

        {/* Related Links Section */}
        <section className="py-12 bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Related Services</h3>
              <ul className="space-y-2">
                {comprehensiveServices.filter(s => s.slug !== service.slug).slice(0, 6).map(s => (
                  <li key={s.slug}>
                    <a href={`/${s.slug}/${industry.slug}/`} className="text-blue-400 hover:text-white text-sm">
                      {getAnchorText('service', s, { industry: industry.name }, usedAnchors)}
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
                    <a href={`/${service.slug}/${industry.slug}/${state.stateSlug}/`} className="text-blue-400 hover:text-white text-sm">
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
                {comprehensiveIndustries.filter(i => i.slug !== industry.slug).slice(0, 6).map(i => (
                  <li key={i.slug}>
                    <a href={`/${service.slug}/${i.slug}/`} className="text-blue-400 hover:text-white text-sm">
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