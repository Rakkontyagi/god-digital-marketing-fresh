import React from 'react';
import { ProblemData, SolutionSet, SolutionDetail } from '../../data/problemSolutions';
import { comprehensiveServices } from '../../data/comprehensiveLocations';
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { BaseCard } from '../Shared/BaseCard';
import { Lightbulb, AlertTriangle, CheckSquare, MapPin, ChevronRight, Zap, Settings, Users } from 'lucide-react'; // Example icons
import { ServiceLocationsFooter } from '../Shared/ServiceLocationsFooter';
import { getArticleSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

// Simplified Location Info Props for this template
interface LocationInfoProps {
  city: string;
  state: string;
  citySlug: string;
  stateSlug: string;
}

interface ProblemSolutionPageTemplateProps {
  problem: ProblemData;
  solutionSet: SolutionSet;
  location: LocationInfoProps;
}

// Helper function to get service name from slug
const getServiceName = (slug: string): string => {
  const service = comprehensiveServices.find(s => s.slug === slug) ||
                  comprehensiveServices.flatMap(s => s.subServices || []).find(sub => sub.slug === slug);
  return service ? service.name : slug; // Fallback to slug
};

const ProblemSolutionPageTemplate: React.FC<ProblemSolutionPageTemplateProps> = ({
  problem,
  solutionSet,
  location,
}) => {
  const YourCompanyName = "God Digital Marketing"; // Placeholder

  const pageTitle = solutionSet.solutionSetTitleTemplate
    .replace('{problemTitle}', problem.problemTitle)
    .replace('{cityName}', location.city);

  const metaDescription = `Suffering from ${problem.problemTitle.toLowerCase()} in ${location.city}? Learn how our expert solutions, including ${solutionSet.solutions.slice(0,2).map(s => getServiceName(s.serviceSlug)).join(', ')}, can help your business thrive.`;

  const metaKeywords = [
    ...(problem.relatedKeywords || []),
    `${problem.problemSlug} ${location.citySlug}`,
    `${problem.problemTitle} solutions ${location.citySlug}`,
    `fix ${problem.problemSlug} ${location.citySlug}`,
  ];

  // Simple icon picker for symptoms, can be expanded
  const symptomIcons = [AlertTriangle, Lightbulb, Zap, Users, Settings];

  const canonicalUrl = `/problems/${problem.problemSlug}/${location.stateSlug}/${location.citySlug}/`;
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Problems', url: 'https://goddigitalmarketing.com/problems/' },
    { title: problem.problemTitle, url: canonicalUrl }
  ];

  return (
    <>
      <SEOHead
        title={`${pageTitle} | ${YourCompanyName}`}
        description={metaDescription}
        keywords={metaKeywords}
        canonicalUrl={canonicalUrl}
        structuredData={[
          getArticleSchema({
            headline: pageTitle,
            description: metaDescription,
            keywords: metaKeywords,
            author: YourCompanyName,
            url: canonicalUrl
          }),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-200 font-sans">
        {/* Hero Section */}
        <AnimatedSection direction="down" duration={1000}>
          <section className="py-16 sm:py-20 md:py-28 text-center bg-black/30 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6">
              <p className="text-sm sm:text-md text-indigo-300 uppercase tracking-wider mb-2 sm:mb-3">
                Solving Business Challenges in {location.city}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white break-words">
                {pageTitle}
              </h1>
              <p className="text-md sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                Targeted strategies to overcome {problem.problemTitle.toLowerCase()} for businesses in {location.city}, {location.state}.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          {/* Section: Understanding [Problem Title] */}
          <AnimatedSection direction="up" duration={1000} delay={100}>
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 md:mb-8 text-center text-indigo-300 break-words">
                Understanding {problem.problemTitle}
              </h2>
              <BaseCard variant="glass" className="p-4 sm:p-6" title={problem.problemTitle} description={problem.problemDescription}>
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed break-words">{problem.problemDescription}</p>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-100">Common Symptoms Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {problem.symptoms.map((symptom, index) => {
                    const Icon = symptomIcons[index % symptomIcons.length];
                    return (
                      <BaseCard key={index} variant="default" className="p-3 sm:p-4 bg-slate-800/50 flex items-start" title={symptom} description={symptom}>
                        <Icon className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 text-xs sm:text-sm break-words">{symptom}</p>
                      </BaseCard>
                    );
                  })}
                </div>
              </BaseCard>
            </section>
          </AnimatedSection>

          {/* Section: Our Approach to Solving [Problem Title] */}
          <AnimatedSection direction="up" duration={1000} delay={200}>
            <section className="mb-12 md:mb-16 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 md:mb-8 text-purple-300 break-words">
                Our Approach to Tackling {problem.problemTitle}
              </h2>
              <p className="text-md sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed break-words">
                {solutionSet.introductionToSolutions}
              </p>
            </section>
          </AnimatedSection>

          {/* Section: Effective Solutions We Offer */}
          <AnimatedSection direction="up" duration={1000} delay={300}>
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-8 md:mb-12 text-center text-teal-300 break-words">
                Effective Solutions We Offer
              </h2>
              {solutionSet.solutions && solutionSet.solutions.length > 0 ? (
                <div className="space-y-8">
                  {solutionSet.solutions.map((solution, index) => (
                    <BaseCard key={index} variant="glass" className="p-4 sm:p-6 md:p-8 hover:shadow-teal-500/20 transition-shadow" title={getServiceName(solution.serviceSlug)} description={solution.relevanceToProblem}>
                        <h4 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-3 flex items-center">
                          <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5 flex-shrink-0" />
                          <a href={`/${solution.serviceSlug}/`} className="text-teal-400 hover:text-teal-200 hover:underline transition-colors">
                            {getServiceName(solution.serviceSlug)}
                          </a>
                        </h4>
                      <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed break-words">{solution.relevanceToProblem}</p>
                      {solution.specificActions && solution.specificActions.length > 0 && (
                        <>
                          <h5 className="text-sm sm:text-md font-semibold text-gray-100 mb-2 flex items-center">
                            <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400 flex-shrink-0" /> Key Actions Typically Include:
                          </h5>
                          <ul className="list-none space-y-1.5 pl-0 sm:pl-1">
                            {solution.specificActions.map((action, i) => (
                              <li key={i} className="flex items-start text-xs sm:text-sm text-gray-400">
                                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 mt-0.5 sm:mt-1 text-teal-500 flex-shrink-0" />
                                <span className="break-words">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </BaseCard>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 mt-4 text-center text-md sm:text-lg">
                  Tailored solutions for this problem are best discussed during a consultation. Please contact us to explore your specific needs.
                </p>
              )}
            </section>
          </AnimatedSection>

          {/* Section: Why Choose Us in [City]? */}
          <AnimatedSection direction="up" duration={1000} delay={400}>
            <section className="mb-12 md:mb-16 py-8 md:py-12 bg-slate-800/40 rounded-xl">
              <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-300 break-words flex items-center justify-center">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mr-3 flex-shrink-0" /> Your Trusted Partner in {location.city} for Overcoming {problem.problemTitle}
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-3">
                  At {YourCompanyName}, we don't just offer generic solutions. We delve deep into the local market dynamics of {location.city}, {location.state}, ensuring our strategies for tackling {problem.problemTitle.toLowerCase()} are not only effective but also contextually relevant.
                </p>
                <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                  Our commitment is to deliver measurable results and build lasting partnerships with businesses in our community, helping you navigate challenges and seize growth opportunities.
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Call to Action Section */}
          <AnimatedSection direction="fade" duration={1000} delay={500}>
            <section className="py-12 md:py-16 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white break-words">
                Ready to Solve Your {problem.problemTitle.toLowerCase()}?
              </h2>
              <p className="text-md sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto px-2">
                Stop letting {problem.problemTitle.toLowerCase()} hold your business back. Our team in {location.city} is ready to help you implement effective solutions.
              </p>
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-md sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                Discuss Your Needs
              </button>
            </section>
          </AnimatedSection>
        </div>
      </div>
      {solutionSet.solutions && solutionSet.solutions[0] && (
        <ServiceLocationsFooter service={solutionSet.solutions[0]} />
      )}
    </>
  );
};

export default ProblemSolutionPageTemplate;
