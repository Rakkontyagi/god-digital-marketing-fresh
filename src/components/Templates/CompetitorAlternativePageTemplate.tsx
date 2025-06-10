import React from 'react';
import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
import { BaseCard } from '../Shared/BaseCard';
import { CheckCircle, Lightbulb, ShieldCheck, Sparkles, Target as TargetIcon, Zap } from 'lucide-react'; // Example icons
import { ServiceLocationsFooter } from '../Shared/ServiceLocationsFooter';

// Prop Interfaces
interface CompetitorInfoProps {
  name: string;
  slug: string;
  fictionalUnderview?: string;
  fictionalStrengths: string[];
  fictionalWeaknesses: string[]; // Though not directly used in this template, good to have for completeness
}

interface LocationInfoProps {
  city: string;
  state: string;
  citySlug: string;
  stateSlug: string;
}

interface OurServiceDetailsProps {
  name: string;
  slug: string;
  advantages: string[];
  differentiators: string[];
  comparisonTitle?: string;
}

interface CompetitorAlternativePageTemplateProps {
  competitor: CompetitorInfoProps;
  location: LocationInfoProps;
  ourServiceInfo: OurServiceDetailsProps;
}

const CompetitorAlternativePageTemplate: React.FC<CompetitorAlternativePageTemplateProps> = ({
  competitor,
  location,
  ourServiceInfo,
}) => {
  const pageTitle = ourServiceInfo.comparisonTitle
    ? `${ourServiceInfo.comparisonTitle} | ${location.city}`
    : `${competitor.name} Alternative in ${location.city} | ${ourServiceInfo.name}`;

  const metaDescription = `Explore why our ${ourServiceInfo.name} is a strong alternative to ${competitor.name} for businesses in ${location.city}, ${location.state}. Discover key advantages and differentiators.`;

  const metaKeywords = [
    `${competitor.slug} alternative ${location.citySlug}`,
    `${ourServiceInfo.slug} vs ${competitor.slug} ${location.citySlug}`,
    `best ${ourServiceInfo.slug} agency ${location.citySlug}`,
    `${ourServiceInfo.name} ${location.city}`,
    `${competitor.name} comparison ${location.city}`,
  ].join(', ');

  const YourCompanyName = "God Digital Marketing"; // Placeholder for your company name

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        keywords={metaKeywords.split(', ')}
        canonicalUrl={`https://goddigitalmarketing.com/alternatives/${competitor.slug}/${ourServiceInfo.slug}/${location.stateSlug}/${location.citySlug}`}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-blue-900 text-gray-200 font-sans">
        {/* Hero Section */}
        <AnimatedSection direction="down" duration={1000}>
          <section className="py-16 sm:py-20 md:py-28 text-center bg-black/40 backdrop-blur-lg">
            <div className="container mx-auto px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400 break-words">
                {ourServiceInfo.comparisonTitle || `Considering an Alternative to ${competitor.name} in ${location.city}?`}
              </h1>
              <p className="text-md sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                Discover how our {ourServiceInfo.name} offers a compelling, modern solution tailored for businesses in {location.city}, {location.state}.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Section: Understanding [Competitor Name] */}
        {competitor.fictionalUnderview && (
          <AnimatedSection direction="up" duration={1000} delay={100}>
            <section className="py-12 md:py-16 container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 text-sky-300 break-words">
                About {competitor.name}
              </h2>
              <BaseCard variant="glass" className="max-w-3xl mx-auto p-4 sm:p-6" title={competitor.name} description={competitor.fictionalUnderview}>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{competitor.fictionalUnderview}</p>
                {competitor.fictionalStrengths && competitor.fictionalStrengths.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-100 mt-3 mb-1 text-sm sm:text-base">Known For:</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-xs sm:text-sm">
                      {competitor.fictionalStrengths.map((strength, i) => <li key={`comp-strength-${i}`}>{strength}</li>)}
                    </ul>
                  </>
                )}
              </BaseCard>
            </section>
          </AnimatedSection>
        )}

        {/* Section: Why Explore Alternatives? */}
        <AnimatedSection direction="up" duration={1000} delay={150}>
            <section className="py-12 md:py-16 bg-slate-800/30">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 text-cyan-300 break-words">
                        Why Look Beyond {competitor.name}?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base max-w-5xl mx-auto">
                        {[
                            { title: "Evolving Needs", text: "Your business has unique, growing needs that demand more than a one-size-fits-all approach.", icon: <Lightbulb className="w-5 h-5 mr-2 text-cyan-400" /> },
                            { title: "Specialized Expertise", text: `Seeking cutting-edge solutions in ${ourServiceInfo.name} that require dedicated focus.`, icon: <Sparkles className="w-5 h-5 mr-2 text-cyan-400" /> },
                            { title: "Greater ROI Focus", text: "Looking for a partnership geared towards maximizing your return on investment through tailored strategies.", icon: <TargetIcon className="w-5 h-5 mr-2 text-cyan-400" /> },
                        ].map(item => (
                             <BaseCard key={item.title} variant="glass" className="p-4 hover:shadow-cyan-500/20" title={item.title} description={item.text}>
                                <div className="flex items-center mb-2">
                                   {item.icon} <h3 className="font-semibold text-gray-100">{item.title}</h3>
                                </div>
                                <p className="text-gray-400">{item.text}</p>
                            </BaseCard>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>

        {/* Section: Introducing Our [Service Name] */}
        <AnimatedSection direction="up" duration={1000} delay={200}>
          <section className="py-12 md:py-16 container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 md:mb-8 text-teal-300 break-words">
              Our Solution: {ourServiceInfo.name}
            </h2>
            <p className="text-center text-gray-300 max-w-3xl mx-auto text-sm sm:text-base mb-8 md:mb-12">
              At {YourCompanyName}, our {ourServiceInfo.name} is engineered to overcome common limitations by providing [mention 1-2 key benefits of your service, e.g., 'hyper-personalized experiences and predictive insights' or 'agile, custom-fit automation']. We focus on delivering measurable results that align with your specific goals in {location.city}.
            </p>
          </section>
        </AnimatedSection>

        {/* Section: Key Advantages Over [Competitor Name] */}
        <AnimatedSection direction="up" duration={1000} delay={250}>
          <section className="py-12 md:py-16 bg-black/20">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 text-green-300 break-words">
                Our Advantages as Your {competitor.name} Alternative
              </h2>
              {ourServiceInfo.advantages && ourServiceInfo.advantages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {ourServiceInfo.advantages.map((advantage, index) => (
                    <BaseCard key={`adv-${index}`} variant="glass" className="p-4 sm:p-6 hover:shadow-green-500/20" title={advantage} description={advantage}>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 text-sm sm:text-base break-words">{advantage}</p>
                      </div>
                    </BaseCard>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 mt-4 text-center text-sm sm:text-base">Specific advantages tailored to your business needs and how we compare will be detailed during your consultation.</p>
              )}
            </div>
          </section>
        </AnimatedSection>

        {/* Section: Our Differentiators */}
        <AnimatedSection direction="up" duration={1000} delay={300}>
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-12 text-sky-300 break-words">
                What Makes Our {ourServiceInfo.name} Different?
              </h2>
              {ourServiceInfo.differentiators && ourServiceInfo.differentiators.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {ourServiceInfo.differentiators.map((differentiator, index) => (
                    <BaseCard key={`diff-${index}`} variant="glass" className="p-4 sm:p-6 hover:shadow-sky-500/20" title={differentiator} description={differentiator}>
                       <div className="flex items-start">
                        <Zap className="w-5 h-5 text-sky-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 text-sm sm:text-base break-words">{differentiator}</p>
                      </div>
                    </BaseCard>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 mt-4 text-center text-sm sm:text-base">Our unique differentiators and how they benefit you will be clearly outlined when we discuss your specific requirements.</p>
              )}
            </div>
          </section>
        </AnimatedSection>

        {/* Section: Your Best Choice in [City] */}
        <AnimatedSection direction="up" duration={1000} delay={350}>
          <section className="py-12 md:py-16 bg-slate-800/30">
            <div className="container mx-auto px-4 sm:px-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 md:mb-8 text-teal-300 break-words">
                The {location.city} Advantage with {YourCompanyName}
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                Choosing {YourCompanyName} means partnering with a team that understands the unique dynamics of the {location.city}, {location.state} market. We're committed to providing accessible, expert support and crafting {ourServiceInfo.name} strategies that resonate with local audiences and drive growth for businesses right here in our community. We're not just a service provider; we're your local partner in success.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Call to Action Section */}
        <AnimatedSection direction="fade" duration={1500} delay={500}>
          <section className="py-16 sm:py-20 md:py-28 text-center bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 mt-12 md:mt-16">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white break-words">
                Ready for a Smarter {ourServiceInfo.name} Solution in {location.city}?
              </h2>
              <p className="text-md sm:text-lg text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                Discover how {YourCompanyName} can provide a superior alternative to {competitor.name}. Let's discuss your specific needs.
              </p>
              <button className="w-full sm:w-auto bg-white hover:bg-gray-200 text-blue-700 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-md sm:text-lg transition duration-300 transform hover:scale-105 shadow-2xl">
                Get a Free Consultation
              </button>
            </div>
          </section>
        </AnimatedSection>
      </div>
      <ServiceLocationsFooter service={ourServiceInfo} />
    </>
  );
};

export default CompetitorAlternativePageTemplate;
