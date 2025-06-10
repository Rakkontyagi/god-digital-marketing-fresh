import React from 'react';
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { BaseCard } from '../Shared/BaseCard';
import { ComprehensiveServiceData } from '../../data/comprehensiveLocations'; // Import the main service type
import { ServiceLocationsFooter } from '../Shared/ServiceLocationsFooter';

// Prop Interfaces
// ServiceInfoProps is replaced by ComprehensiveServiceData for the service prop
interface IndustrySizeInfoProps {
  name: string;
  slug: string;
  description?: string;
}

interface ServiceROIPageTemplateProps {
  service: ComprehensiveServiceData; // Use the imported type
  industrySize: IndustrySizeInfoProps;
}

const ServiceROIPageTemplate: React.FC<ServiceROIPageTemplateProps> = ({
  service,
  industrySize,
}) => {
  const roiInfo = service.roiInformation;
  const specificROIDetail = roiInfo?.industrySizeSpecificROI.find(
    detail => detail.industrySizeSlug === industrySize.slug
  );

  const pageTitle = `ROI of ${service.name} for ${industrySize.name}`;
  const metaDescription = `Discover the potential ROI of implementing ${service.name} for ${industrySize.name} companies. Learn about key drivers, figures, and how to maximize your return.`;
  const metaKeywords = [
    `${service.slug} ROI`,
    `${industrySize.slug} ${service.slug} ROI`,
    `${service.slug} ROI ${industrySize.name}`,
    `return on investment ${service.name} for ${industrySize.slug}`,
  ];

  // Icons for drivers - can be expanded or moved to data layer
  const driverIcons: { [key: string]: string } = {
    default: "🎯",
    efficiency: "⚙️",
    conversion: "📈",
    cost: "💰",
    data: "📊",
    segmentation: "👥",
    personalization: "✨",
    testing: "🧪",
    crm: "🔗",
    analytics: "🔍",
    multichannel: "📣",
    predictive: "🔮",
    abm: "🎯",
    lifecycle: "🔄",
    governance: "🛡️",
  };

  const getDriverIcon = (driverText: string) => {
    const lowerText = driverText.toLowerCase();
    if (lowerText.includes("efficiency") || lowerText.includes("email tasks")) return driverIcons.efficiency;
    if (lowerText.includes("conversion") || lowerText.includes("lead capture")) return driverIcons.conversion;
    if (lowerText.includes("cost")) return driverIcons.cost;
    if (lowerText.includes("data") || lowerText.includes("analytics")) return driverIcons.analytics;
    if (lowerText.includes("segmentation")) return driverIcons.segmentation;
    if (lowerText.includes("personalization")) return driverIcons.personalization;
    if (lowerText.includes("testing")) return driverIcons.testing;
    if (lowerText.includes("crm")) return driverIcons.crm;
    if (lowerText.includes("multi-channel")) return driverIcons.multichannel;
    if (lowerText.includes("predictive")) return driverIcons.predictive;
    if (lowerText.includes("abm")) return driverIcons.abm;
    if (lowerText.includes("lifecycle")) return driverIcons.lifecycle;
    if (lowerText.includes("governance") || lowerText.includes("compliance")) return driverIcons.governance;
    return driverIcons.default;
  };


  return (
    <>
      <SEOHead
        title={`${pageTitle} | God Digital Marketing`}
        description={metaDescription}
        keywords={metaKeywords as string[]}
        canonicalUrl={`https://goddigitalmarketing.com/roi/${service.slug}/${industrySize.slug}`}
      />
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 text-gray-100 font-sans">
        {/* Hero Section */}
        <AnimatedSection direction="down" duration={1}>
          <section className="py-16 sm:py-20 md:py-32 text-center bg-black/30 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-300 to-green-300 break-words">
                Return on Investment: <br className="md:hidden" /> {service.name} for {industrySize.name}
              </h1>
              <p className="text-md sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                Unlock significant business growth by understanding and maximizing the ROI of {service.name}, tailored for {industrySize.description || industrySize.name}.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Key ROI Drivers Section */}
        <AnimatedSection direction="up" duration={1} delay={0.2}>
          <section className="py-12 md:py-16 lg:py-24 container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16 text-teal-300 break-words">
              Key ROI Drivers for {industrySize.name}
            </h2>
            {specificROIDetail?.drivers && specificROIDetail.drivers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {specificROIDetail.drivers.map((driver, index) => (
                  <BaseCard key={index} variant="glass" className="p-4 sm:p-6 text-center hover:shadow-teal-400/30 transition-shadow duration-300 flex flex-col items-center" title={driver} description={driver}>
                    <div className="text-4xl sm:text-5xl mb-4">{getDriverIcon(driver)}</div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white break-words">{driver}</h3>
                  </BaseCard>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400 px-2">Key drivers for achieving ROI with {service.name} for {industrySize.name} include strategic implementation and process optimization. Contact us for a detailed discussion.</p>
            )}
          </section>
        </AnimatedSection>

        {/* Potential ROI Figures/Ranges Section */}
        <AnimatedSection direction="up" duration={1} delay={0.2}>
          <section className="py-12 md:py-16 lg:py-24 bg-slate-900/50 container mx-auto px-4 sm:px-6 rounded-xl shadow-2xl my-12 md:my-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16 text-green-300 break-words">
              Potential ROI: What {industrySize.name} Can Expect
            </h2>
            {specificROIDetail?.potentialFigures && specificROIDetail.potentialFigures.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
                  {specificROIDetail.potentialFigures.map((figure, index) => (
                    <BaseCard key={index} variant="glass" className="p-6 sm:p-8 hover:shadow-green-400/30 transition-shadow duration-300" title={figure} description={figure}>
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-3 break-words">{figure.split(" ")[0]} {figure.split(" ")[1]}</p>
                      <p className="text-gray-300 text-sm sm:text-base break-words">{figure.substring(figure.indexOf(" ") + 1 + (figure.split(" ")[1]?.length || 0) +1 )}</p>
                    </BaseCard>
                  ))}
                </div>
                <p className="text-center mt-10 md:mt-12 text-xs sm:text-sm text-gray-500 px-2">
                  Note: These figures are illustrative. Actual ROI depends on specific implementation, business context, and market conditions for your {industrySize.name}.
                </p>
              </>
            ) : (
              <p className="text-center text-gray-400 px-2">Potential ROI figures are currently being compiled for {industrySize.name}. We tailor projections based on specific business cases.</p>
            )}
          </section>
        </AnimatedSection>

        {/* Factors Influencing Actual ROI Section */}
        <AnimatedSection direction="up" duration={1} delay={0.2}>
          <section className="py-12 md:py-16 lg:py-24 container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16 text-blue-300 break-words">
              Maximizing Your {service.name} ROI
            </h2>
            {specificROIDetail?.factors && specificROIDetail.factors.length > 0 ? (
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-3 sm:space-y-4">
                  {specificROIDetail.factors.map((factor, index) => (
                    <li key={index} className="p-3 sm:p-4 bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg hover:border-blue-500 transition-colors">
                      <p className="text-md sm:text-lg text-gray-200 break-words">{factor}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-center text-gray-400 px-2">Understanding the key factors that influence ROI is crucial. These typically include quality of implementation, user adoption, and strategic alignment. Contact us for more details.</p>
            )}
          </section>
        </AnimatedSection>

        {!specificROIDetail && roiInfo && (
             <AnimatedSection direction="fade" duration={1}>
                <section className="py-12 md:py-16 lg:py-24 container mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-yellow-400 break-words">ROI Information Tailored For You</h2>
                    <p className="text-md sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
                        Detailed ROI information for {service.name} tailored to {industrySize.name} ({industrySize.description}) is currently being prepared.
                        Please contact us for a personalized discussion on potential returns and key performance indicators for your business.
                    </p>
                </section>
            </AnimatedSection>
        )}

        {/* Interactive Element Placeholder Section */}
        <AnimatedSection direction="fade" duration={1} delay={0.3}>
          <section className="py-12 md:py-16 lg:py-24 text-center container mx-auto px-4 sm:px-6 my-12 md:my-16 bg-black/20 backdrop-blur-sm rounded-xl shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-teal-300 break-words">
              Calculate Your Personalized ROI for {service.name}
            </h2>
            <p className="text-md sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto px-2">
              Want a more precise estimate? Our interactive ROI calculator for {industrySize.name} is coming soon!
            </p>
            <button className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-black font-bold py-3 px-6 sm:px-8 rounded-lg text-md sm:text-lg transition duration-300 transform hover:scale-105">
              Notify Me When Calculator is Live
            </button>
          </section>
        </AnimatedSection>

        {/* Case Study Snippets/Links Section (Placeholder) */}
        <AnimatedSection direction="up" duration={1} delay={0.2}>
          <section className="py-12 md:py-16 lg:py-24 container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-12 text-green-300 break-words">
              Success Stories for {industrySize.name}
            </h2>
            {specificROIDetail?.fictionalCaseSnippet ? (
              <BaseCard variant="glass" className="mt-6 max-w-2xl mx-auto p-4 sm:p-6 shadow-lg hover:shadow-green-400/20" title={specificROIDetail.fictionalCaseSnippet.fictionalCompanyName} description={specificROIDetail.fictionalCaseSnippet.challenge}>
                <h3 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 break-words">
                  Success Story Example: {specificROIDetail.fictionalCaseSnippet.fictionalCompanyName}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-2 break-words"><strong className="text-gray-100">Challenge:</strong> {specificROIDetail.fictionalCaseSnippet.challenge}</p>
                <p className="text-sm sm:text-base text-gray-300 mb-2 break-words"><strong className="text-gray-100">Solution Highlight:</strong> {specificROIDetail.fictionalCaseSnippet.solutionHighlight}</p>
                <p className="text-sm sm:text-base text-gray-300 break-words"><strong className="text-gray-100">Result:</strong> {specificROIDetail.fictionalCaseSnippet.result}</p>
              </BaseCard>
            ) : (
              <p className="text-md sm:text-lg text-center text-gray-400 max-w-2xl mx-auto px-2">
                Illustrative success stories and detailed case studies for {industrySize.name} leveraging {service.name} are coming soon.
              </p>
            )}
          </section>
        </AnimatedSection>

        {/* Call to Action Section */}
        <AnimatedSection direction="fade" duration={1.5} delay={0.5}>
          <section className="py-16 sm:py-20 md:py-32 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 container mx-auto rounded-t-xl mt-12 md:mt-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white break-words">
              Ready to Boost Your ROI with {service.name}?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
              Let's embark on a data-driven journey to transform your {industrySize.name} business. Our specialists are ready to help you project and achieve optimal returns.
            </p>
            <button className="w-full sm:w-auto bg-white hover:bg-gray-200 text-purple-700 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-lg sm:text-xl transition duration-300 transform hover:scale-105 shadow-2xl">
              Get Custom ROI Projection
            </button>
          </section>
        </AnimatedSection>
      </div>
      <ServiceLocationsFooter service={service} />
    </>
  );
};

export default ServiceROIPageTemplate;
