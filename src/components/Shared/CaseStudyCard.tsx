import React from 'react';
import { CaseStudyData } from '../../data/caseStudies';
import { comprehensiveIndustries, comprehensiveServices } from '../../data/comprehensiveLocations';
import { BaseCard } from './BaseCard';
import { ArrowRight, Briefcase } from 'lucide-react'; // Briefcase for placeholder

interface CaseStudyCardProps {
  caseStudy: CaseStudyData;
}

// Helper function to get industry name from slug
const getIndustryName = (slug: string): string => {
  const industry = comprehensiveIndustries.find(ind => ind.slug === slug);
  return industry ? industry.name : slug; // Fallback to slug
};

// Helper function to get service names from slugs
const getServiceNames = (slugs: string[]): string[] => {
  if (!slugs || slugs.length === 0) return [];
  return slugs.map(slug => {
    const service = comprehensiveServices.find(s => s.slug === slug) ||
                    comprehensiveServices.flatMap(s => s.subServices || []).find(sub => sub.slug === slug);
    return service ? service.name : slug;
  }).filter(name => name);
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const industryName = getIndustryName(caseStudy.industrySlug);
  const serviceNames = getServiceNames(caseStudy.serviceSlugs).slice(0, 2); // Take first 2 services for tags

  return (
    <BaseCard 
      variant="glass" 
      className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/50"
      title={caseStudy.title}
      description={caseStudy.metaDescription || ''}
    >
      {/* Hero Image or Placeholder */}
      {caseStudy.heroImage ? (
        <img
          src={caseStudy.heroImage}
          alt={caseStudy.title || `Case study for ${caseStudy.fictionalClientName}`}
          className="w-full h-48 object-cover" // Removed rounded-t-lg to let BaseCard handle it
        />
      ) : (
        <div className="w-full h-48 bg-slate-700/50 flex items-center justify-center text-slate-500">
          <Briefcase size={48} />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <p className="text-xs text-purple-400 uppercase tracking-wider font-semibold mb-1">
          {industryName}
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2 break-words leading-tight flex-grow">
          <a href={`/case-studies/${caseStudy.id}/`} className="hover:text-purple-300 transition-colors">
            {caseStudy.title}
          </a>
        </h3>
        <p className="text-sm text-gray-400 mb-3">
          Client: {caseStudy.fictionalClientName}
        </p>

        {/* Service Tags */}
        {serviceNames.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {serviceNames.map(name => (
              <span
                key={name}
                className="inline-block bg-slate-700 text-slate-300 text-xs px-2 py-0.5 rounded-full"
              >
                {name}
              </span>
            ))}
          </div>
        )}

        {/* Short Description (Using metaDescription) - Optional */}
        {/*
        <p className="text-xs text-gray-500 mb-4 line-clamp-2 break-words flex-grow">
          {caseStudy.metaDescription}
        </p>
        */}

        {/* Read More Link */}
        <div className="mt-auto pt-3">
          <a
            href={`/case-studies/${caseStudy.id}/`}
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors duration-200 group"
          >
            Read Full Case Study
            <ArrowRight size={16} className="ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </BaseCard>
  );
};

export default CaseStudyCard;
