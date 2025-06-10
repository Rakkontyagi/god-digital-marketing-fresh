import React from 'react';
import { CaseStudyData, Metric, FictionalTestimonial } from '../../data/caseStudies';
import { comprehensiveServices, comprehensiveIndustries, allIndianLocations } from '../../data/comprehensiveLocations'; // To map service, industry, and location slugs
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { BaseCard } from '../Shared/BaseCard';
import { Target, Briefcase, TrendingUp, Star, MessageSquare, Link as LinkIcon, CalendarDays, Users, Zap } from 'lucide-react'; // Example icons
import { ServiceLocationsFooter } from '../Shared/ServiceLocationsFooter';
import { getCaseStudySchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

interface CaseStudyPageTemplateProps {
  caseStudy: CaseStudyData;
}

const MetricDisplay: React.FC<{ metricItem: Metric; highlightImprovement?: boolean }> = ({ metricItem, highlightImprovement }) => (
  <BaseCard variant="glass" className="p-4 text-center flex flex-col justify-between h-full" title={''} description={metricItem.value || ''}>
    <p className="text-sm sm:text-base text-gray-300 mb-1 break-words">{metricItem.metric || ''}</p>
    <p className="text-xl sm:text-2xl font-bold text-teal-300 mb-1 break-words">{metricItem.value || ''}</p>
    {highlightImprovement && metricItem.improvement && (
      <p className="text-sm font-semibold text-green-400 break-words">{metricItem.improvement || ''}</p>
    )}
  </BaseCard>
);

const CaseStudyPageTemplate: React.FC<CaseStudyPageTemplateProps> = ({ caseStudy }) => {
  const YourCompanyName = "God Digital Marketing"; // Placeholder
  const siteBaseUrl = "https://goddigitalmarketing.com"; // Placeholder
  const logoUrl = `${siteBaseUrl}/logo.png`; // Placeholder

  const getIndustryName = (slug: string): string => {
    const industry = comprehensiveIndustries.find(ind => ind.slug === slug);
    return industry ? industry.name : slug;
  };

  const getCityName = (citySlug: string, stateSlug: string): string => {
    const state = allIndianLocations.find(s => s.stateSlug === stateSlug);
    const city = state?.cities.find(c => c.slug === citySlug);
    return city ? city.name : citySlug;
  };

  // Function to get service names from slugs
  const getServiceNames = (slugs: string[]): string[] => {
    return slugs.map(slug => {
      const service = comprehensiveServices.find(s => s.slug === slug) ||
                      comprehensiveServices.flatMap(s => s.subServices || []).find(sub => sub.slug === slug);
      return service ? service.name : slug; // Fallback to slug if name not found
    }).filter(name => name); // Filter out any undefined if a slug didn't match
  };

  const utilizedServiceNames = getServiceNames(caseStudy.serviceSlugs);

  const canonicalUrl = `${siteBaseUrl}/case-studies/${caseStudy.id}/`;
  const breadcrumbs = [
    { title: 'Home', url: siteBaseUrl },
    { title: 'Case Studies', url: `${siteBaseUrl}/case-studies/` },
    { title: caseStudy.title, url: canonicalUrl }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article", // Could also be CaseStudy, but Article is widely supported
    "headline": caseStudy.title,
    "author": { "@type": "Organization", "name": YourCompanyName },
    "publisher": { "@type": "Organization", "name": YourCompanyName, "logo": { "@type": "ImageObject", "url": logoUrl } },
    "description": caseStudy.metaDescription,
    "keywords": caseStudy.keywords || [],
    // "datePublished": caseStudy.datePublished, // Example: "2023-10-26" - Add to CaseStudyData if needed
    // "image": caseStudy.heroImage ? `${siteBaseUrl}${caseStudy.heroImage}` : undefined, // Ensure full URL
  };

  return (
    <>
      <SEOHead
        title={`${caseStudy.title} | Case Study`}
        description={caseStudy.metaDescription}
        keywords={caseStudy.keywords || []}
        canonicalUrl={canonicalUrl}
        structuredData={[
          getCaseStudySchema(caseStudy),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-gray-200 font-sans">

        {/* Hero Section */}
        <AnimatedSection direction="down" duration={1000}>
          <section className="py-16 sm:py-20 md:py-28 text-center relative overflow-hidden bg-black/30 backdrop-blur-md">
            {caseStudy.heroImage ? (
              <div className="absolute inset-0 z-0 opacity-20">
                <img
                  src={caseStudy.heroImage}
                  alt={caseStudy.title || `Case study for ${caseStudy.fictionalClientName}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="absolute inset-0 z-0 opacity-10 bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center">
                <Briefcase className="w-24 h-24 text-slate-700" />
              </div>
            )}
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <p className="text-sm sm:text-md text-teal-300 uppercase tracking-wider mb-2 sm:mb-3">Case Study: {caseStudy.fictionalClientName}</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white break-words">
                {caseStudy.title}
              </h1>
              <p className="text-md sm:text-lg text-gray-300 max-w-3xl mx-auto">
                {`${getIndustryName(caseStudy.industrySlug)} Sector // ${getCityName(caseStudy.citySlug, caseStudy.stateSlug)}`}
              </p>
            </div>
          </section>
        </AnimatedSection>

        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          {/* The Challenge */}
          <AnimatedSection direction="up" duration={1000} delay={100}>
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-sky-300 flex items-center justify-center break-words">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 mr-3 flex-shrink-0" /> The Challenge Faced by {caseStudy.fictionalClientName}
              </h2>
              <BaseCard variant="glass" className="p-4 sm:p-6" title={''} description={caseStudy.beforeState.keyMetrics.map(m => m.metric).join(', ')}>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-100">Key Metrics Before Our Intervention:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {caseStudy.beforeState.keyMetrics.map((metric, i) => <MetricDisplay key={`before-metric-${i}`} metricItem={metric} />)}
                </div>
              </BaseCard>
            </section>
          </AnimatedSection>

          {/* Our Strategic Solution */}
          <AnimatedSection direction="up" duration={1000} delay={200}>
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-teal-300 flex items-center justify-center break-words">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 mr-3 flex-shrink-0" /> Our Strategic Approach & Implementation
              </h2>
              <BaseCard variant="glass" className="p-4 sm:p-6" title={''} description={caseStudy.transformationProcess.toolsUsed?.join(', ')}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {caseStudy.transformationProcess.toolsUsed && caseStudy.transformationProcess.toolsUsed.length > 0 && (
                    <BaseCard variant="default" className="p-3 sm:p-4 bg-slate-800/50" title={''} description={''} >
                      <h3 className="text-md sm:text-lg font-semibold mb-2 text-gray-100 flex items-center"><LinkIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />Tools & Technologies Leveraged:</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {caseStudy.transformationProcess.toolsUsed.map((tool, i) => (
                          <span key={`tool-${i}`} className="bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium px-2.5 py-1 rounded-md">{tool}</span>
                        ))}
                      </div>
                    </BaseCard>
                  )}
                  <BaseCard variant="default" className="p-3 sm:p-4 bg-slate-800/50" title={''} description={''} >
                    <h3 className="text-md sm:text-lg font-semibold mb-2 text-gray-100 flex items-center"><CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />Project Timeline:</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{caseStudy.transformationProcess.timeline || ''}</p>
                  </BaseCard>
                </div>
              </BaseCard>
            </section>
          </AnimatedSection>

          {/* Results & Impact */}
          <AnimatedSection direction="up" duration={1000} delay={300}>
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-green-400 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 mr-3" /> Tangible Results and Business Impact
              </h2>
              <BaseCard variant="glass" className="p-4 sm:p-6" title={''} description={caseStudy.afterState.keyResults.map(m => m.metric).join(', ')}>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-100">Key Results Achieved:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {caseStudy.afterState.keyResults.map((metric, i) => <MetricDisplay key={`after-metric-${i}`} metricItem={metric} highlightImprovement />)}
                </div>
              </BaseCard>
            </section>
          </AnimatedSection>

          {/* Client Testimonial */}
          {caseStudy.afterState.fictionalTestimonial && (
            <AnimatedSection direction="up" duration={1000} delay={400}>
              <section className="mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-yellow-400 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 mr-3" /> What Our Client Says (Fictional)
                </h2>
                <BaseCard variant="glass" className="max-w-3xl mx-auto p-4 sm:p-6">
                  <blockquote className="relative">
                    <p className="text-md sm:text-lg italic text-gray-200 mb-4 leading-relaxed">"{caseStudy.afterState.fictionalTestimonial.text || ''}"</p>
                    <footer className="text-sm text-gray-400 text-right">
                      - {caseStudy.afterState.fictionalTestimonial.authorName || ''} <cite>{caseStudy.afterState.fictionalTestimonial.authorRole || ''}</cite>
                    </footer>
                  </blockquote>
                </BaseCard>
              </section>
            </AnimatedSection>
          )}

          {/* Services Utilized */}
          {utilizedServiceNames.length > 0 && (
            <AnimatedSection direction="up" duration={1000} delay={500}>
              <section className="mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-indigo-300 flex items-center justify-center">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 mr-3" /> Key Services Deployed
                </h2>
                <BaseCard variant="glass" className="p-4 sm:p-6 text-center">
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {utilizedServiceNames.map((serviceName, i) => (
                      <span key={`service-${i}`} className="bg-indigo-500/30 text-indigo-200 text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full border border-indigo-500">
                        {serviceName}
                      </span>
                    ))}
                  </div>
                </BaseCard>
              </section>
            </AnimatedSection>
          )}

          {/* Call to Action Section */}
          <AnimatedSection direction="fade" duration={1000} delay={600}>
            <section className="py-12 md:py-16 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white break-words">
                Ready to Achieve Similar Success for Your Business in {getCityName(caseStudy.citySlug, caseStudy.stateSlug)}?
              </h2>
              <p className="text-md sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto px-2">
                Let's discuss how our expertise in {caseStudy.serviceSlugs.length > 1 ? "these services" : utilizedServiceNames[0] || 'our solutions'} can help your business thrive.
              </p>
              <button className="w-full sm:w-auto bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-md sm:text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                Schedule a Free Consultation
              </button>
            </section>
          </AnimatedSection>
        </div>
      </div>
      {utilizedServiceNames && utilizedServiceNames[0] && (
        <ServiceLocationsFooter service={{ name: utilizedServiceNames[0], slug: caseStudy.serviceSlugs[0] }} />
      )}
    </>
  );
};

export default CaseStudyPageTemplate;
