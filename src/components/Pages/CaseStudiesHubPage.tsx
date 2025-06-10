import React, { useState, useEffect } from 'react';
import { CaseStudyData } from '../../data/caseStudies';
// Assuming IndustryData and ServiceData might be more complex, using simplified versions for now as per spec
// For actual data, these would likely come from comprehensiveLocations.ts or dedicated type files
interface SimplifiedIndustryData {
  slug: string;
  name: string;
  [key: string]: any;
}
interface SimplifiedServiceData {
  slug: string;
  name: string;
  [key: string]: any;
}

import { SEOHead } from '../SEO/SEOHead';
import { AnimatedSection } from '../Shared/AnimatedSection';
import CaseStudyCard from '../Shared/CaseStudyCard';
import { Filter, ListChecks } from 'lucide-react'; // Icons for filter section
import { getBreadcrumbSchema, getOrganizationSchema } from '../../utils/seoStructuredData';

interface CaseStudiesHubPageProps {
  allCaseStudies: CaseStudyData[];
  allIndustries: SimplifiedIndustryData[];
  allServices: SimplifiedServiceData[];
}

const CaseStudiesHubPage: React.FC<CaseStudiesHubPageProps> = ({
  allCaseStudies,
  allIndustries,
  allServices,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [filteredStudies, setFilteredStudies] = useState<CaseStudyData[]>([]);

  const YourCompanyName = "God Digital Marketing"; // Placeholder

  useEffect(() => {
    let currentStudies = Array.isArray(allCaseStudies) ? [...allCaseStudies] : [];

    if (selectedIndustry) {
      currentStudies = currentStudies.filter(study => study.industrySlug === selectedIndustry);
    }

    if (selectedService) {
      currentStudies = currentStudies.filter(study =>
        Array.isArray(study.serviceSlugs) && study.serviceSlugs.includes(selectedService)
      );
    }

    setFilteredStudies(currentStudies);
  }, [allCaseStudies, selectedIndustry, selectedService]);

  const handleClearFilters = () => {
    setSelectedIndustry('');
    setSelectedService('');
  };

  const canonicalUrl = "https://goddigitalmarketing.com/case-studies/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Case Studies', url: canonicalUrl }
  ];

  const seoData = {
    title: "Case Studies | Digital Marketing Success Stories | God Digital Marketing",
    description: "Explore our digital marketing case studies and success stories. See how we've helped businesses across India achieve outstanding results.",
    keywords: [
      "digital marketing case studies",
      "success stories",
      "marketing results",
      "client testimonials",
      "business growth",
      "seo case studies",
      "ppc case studies",
      "social media case studies"
    ],
    canonicalUrl,
    structuredData: [
      getOrganizationSchema(),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-purple-900 text-gray-200 font-sans">
        {/* Hero Section */}
        <AnimatedSection direction="down" duration={1000}>
          <section className="py-16 sm:py-20 md:py-28 text-center bg-black/30 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 break-words">
                Our Client Success Stories
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                Discover real-world examples of how we partner with businesses to drive growth, innovate with technology, and achieve remarkable results.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          {/* Filter Section */}
          <AnimatedSection direction="fade" duration={1000} delay={200}>
            <section className="mb-10 md:mb-12 p-4 sm:p-6 bg-slate-800/50 rounded-xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-pink-400 flex items-center justify-center">
                <Filter className="w-6 h-6 sm:w-8 sm:h-8 mr-3" /> Filter Case Studies
              </h2>
              <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6 md:gap-8">
                {/* Industry Filter */}
                <div className="flex flex-col">
                  <label htmlFor="industry-filter" className="mb-1 text-sm font-medium text-gray-400">Industry:</label>
                  <select
                    id="industry-filter"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="p-2.5 border border-slate-700 rounded-md bg-slate-900 text-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm sm:text-base"
                  >
                    <option value="">All Industries</option>
                    {allIndustries.map(industry => (
                      <option key={industry.slug} value={industry.slug}>{industry.name}</option>
                    ))}
                  </select>
                </div>

                {/* Service Filter */}
                <div className="flex flex-col">
                  <label htmlFor="service-filter" className="mb-1 text-sm font-medium text-gray-400">Service:</label>
                  <select
                    id="service-filter"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="p-2.5 border border-slate-700 rounded-md bg-slate-900 text-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm sm:text-base"
                  >
                    <option value="">All Services</option>
                    {allServices.map(service => (
                      <option key={service.slug} value={service.slug}>{service.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Case Study List/Grid Section */}
          <AnimatedSection direction="up" duration={1000} delay={400}>
            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 md:mb-8 text-gray-300 flex items-center justify-center">
                <ListChecks className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-purple-400" />
                Showing {filteredStudies.length} Case {filteredStudies.length === 1 ? "Study" : "Studies"}
              </h3>
              {filteredStudies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filteredStudies.map(study => (
                    <CaseStudyCard key={study.id} caseStudy={study} />
                  ))}
                </div>
              ) : (
                <div className="text-center col-span-full py-10 md:py-16">
                  <img src="/placeholders/no-results.svg" alt="No Results Found" className="mx-auto w-1/2 md:w-1/3 lg:w-1/4 mb-4 opacity-70" /> {/* Placeholder image */}
                  <p className="text-gray-400 text-lg">No case studies match your current filters.</p>
                  <p className="text-gray-500 text-sm mb-6">Please try a different selection or clear the filters to see all studies.</p>
                  <button
                    onClick={handleClearFilters}
                    className="mt-2 px-6 py-2.5 border border-pink-500 text-pink-400 rounded-lg hover:bg-pink-500 hover:text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 text-sm sm:text-base"
                  >
                    Show All Case Studies
                  </button>
                </div>
              )}
            </section>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesHubPage;
