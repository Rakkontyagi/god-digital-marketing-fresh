import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingProvider } from './components/Loading/LoadingProvider';
import { EnhancedNavigation } from './components/Navigation/EnhancedNavigation';
import { AdvancedHero } from './components/Advanced/AdvancedHero';
import { CursorFollower } from './components/Shared/AnimatedSection';
import { EnhancedFooter } from './components/Footer/EnhancedFooter';
import { ContextualSidebar } from './components/Layout/ContextualSidebar';
import { BreadcrumbNavigation } from './components/Layout/BreadcrumbNavigation';
import { ServiceLocationTemplate } from './components/Templates/ServiceLocationTemplate';
import { IndustryLocationTemplate } from './components/Templates/IndustryLocationTemplate';
import { ServiceCostPageTemplate as ServiceCostPageTemplateType } from './components/Templates/ServiceCostPageTemplate'; // For type only
// ServiceROIPageTemplate is not used for type-only import
// CompetitorAlternativePageTemplate is not used for type-only import
// CaseStudyPageTemplate is not used for type-only import
// CaseStudiesHubPage is not used for type-only import
// ProblemSolutionPageTemplate is not used for type-only import
import { allIndianLocations, comprehensiveServices, comprehensiveIndustries } from './data/comprehensiveLocations';
import { comprehensiveBusinessTypes } from './data/businessTypes';
import { comprehensiveIndustrySizes } from './data/industrySizes';
import { fictionalCompetitors, ourServiceComparisons } from './data/competitors';
import { allCaseStudies } from './data/caseStudies';
import { allProblems, allSolutionSets } from './data/problemSolutions'; // New imports
import ReloadPrompt from './components/Shared/ReloadPrompt';
import { TrustSignals } from './components/TrustSignals';

// Lazy load components
const ServiceCostPageTemplate = lazy(() => import('./components/Templates/ServiceCostPageTemplate'));
const ServiceROIPageTemplate = lazy(() => import('./components/Templates/ServiceROIPageTemplate'));
const CompetitorAlternativePageTemplate = lazy(() => import('./components/Templates/CompetitorAlternativePageTemplate'));
const CaseStudyPageTemplate = lazy(() => import('./components/Templates/CaseStudyPageTemplate'));
const CaseStudiesHubPage = lazy(() => import('./components/Pages/CaseStudiesHubPage'));
const ProblemSolutionPageTemplate = lazy(() => import('./components/Templates/ProblemSolutionPageTemplate'));
const IndiaKeywordOptimization = lazy(() => import('./components/SEO/IndiaKeywordOptimization').then(module => ({ default: module.IndiaKeywordOptimization })));

// Core Service Pages
const DigitalMarketingServices = lazy(() => import('./components/Pages/CoreServices/DigitalMarketingServices').then(module => ({ default: module.DigitalMarketingServices })));
const SEOServices = lazy(() => import('./components/Pages/CoreServices/SEOServices').then(module => ({ default: module.SEOServices })));
const PPCAdvertising = lazy(() => import('./components/Pages/CoreServices/PPCAdvertising').then(module => ({ default: module.PPCAdvertising })));

// Service Hub Pages
const DigitalMarketingHub = lazy(() => import('./components/Pages/ServiceHubPages/DigitalMarketingHub').then(module => ({ default: module.DigitalMarketingHub })));
const AIAutomationHub = lazy(() => import('./components/Pages/ServiceHubPages/AIAutomationHub').then(module => ({ default: module.AIAutomationHub })));
const LeadGenerationHub = lazy(() => import('./components/Pages/ServiceHubPages/LeadGenerationHub').then(module => ({ default: module.LeadGenerationHub })));
const BusinessAutomationHub = lazy(() => import('./components/Pages/ServiceHubPages/BusinessAutomationHub').then(module => ({ default: module.BusinessAutomationHub })));

// Specific city-service page components
const MumbaiDigitalMarketing = lazy(() => import('./pages/mumbai/digital-marketing'));
const MumbaiSEOServices = lazy(() => import('./pages/mumbai/seo-services'));
const MumbaiPPCAdvertising = lazy(() => import('./pages/mumbai/ppc-advertising'));
const MumbaiSocialMediaMarketing = lazy(() => import('./pages/mumbai/social-media-marketing'));
const MumbaiAIAutomation = lazy(() => import('./pages/mumbai/ai-automation'));
const MumbaiBusinessAutomation = lazy(() => import('./pages/mumbai/business-automation'));

const BangaloreDigitalMarketing = lazy(() => import('./pages/bangalore/digital-marketing'));
const BangaloreSEOServices = lazy(() => import('./pages/bangalore/seo-services'));
const BangalorePPCAdvertising = lazy(() => import('./pages/bangalore/ppc-advertising'));
const BangaloreSocialMediaMarketing = lazy(() => import('./pages/bangalore/social-media-marketing'));
const BangaloreAIAutomation = lazy(() => import('./pages/bangalore/ai-automation'));
const BangaloreBusinessAutomation = lazy(() => import('./pages/bangalore/business-automation'));

const ChennaiDigitalMarketing = lazy(() => import('./pages/chennai/digital-marketing'));
const ChennaiSEOServices = lazy(() => import('./pages/chennai/seo-services'));
const ChennaiPPCAdvertising = lazy(() => import('./pages/chennai/ppc-advertising'));
const ChennaiSocialMediaMarketing = lazy(() => import('./pages/chennai/social-media-marketing'));
const ChennaiAIAutomation = lazy(() => import('./pages/chennai/ai-automation'));
const ChennaiBusinessAutomation = lazy(() => import('./pages/chennai/business-automation'));

const DelhiDigitalMarketing = lazy(() => import('./components/Pages/DelhiDigitalMarketing').then(module => ({ default: module.DelhiDigitalMarketing })));
const DelhiAIAutomation = lazy(() => import('./components/Pages/DelhiAIAutomation').then(module => ({ default: module.DelhiAIAutomation })));
const DelhiBusinessAutomation = lazy(() => import('./components/Pages/DelhiBusinessAutomation').then(module => ({ default: module.DelhiBusinessAutomation })));
const DelhiSEOServices = lazy(() => import('./components/Pages/DelhiSEOServices').then(module => ({ default: module.DelhiSEOServices })));
const DelhiPPCManagement = lazy(() => import('./components/Pages/DelhiPPCManagement').then(module => ({ default: module.DelhiPPCManagement })));
const DelhiSocialMediaMarketing = lazy(() => import('./components/Pages/DelhiSocialMediaMarketing').then(module => ({ default: module.DelhiSocialMediaMarketing })));

const HyderabadDigitalMarketing = lazy(() => import('./components/Pages/HyderabadDigitalMarketing').then(module => ({ default: module.HyderabadDigitalMarketing })));
const PuneDigitalMarketing = lazy(() => import('./components/Pages/PuneDigitalMarketing').then(module => ({ default: module.PuneDigitalMarketing })));
const HealthcareDigitalMarketing = lazy(() => import('./components/Pages/HealthcareDigitalMarketing').then(module => ({ default: module.HealthcareDigitalMarketing })));
const EcommerceDigitalMarketing = lazy(() => import('./components/Pages/EcommerceDigitalMarketing').then(module => ({ default: module.EcommerceDigitalMarketing })));
const RealEstateDigitalMarketing = lazy(() => import('./components/Pages/RealEstateDigitalMarketing').then(module => ({ default: module.RealEstateDigitalMarketing })));
// ServiceCostPageTemplate is lazy loaded above with other page components

function AppContent() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';

  // Debug: Change page title to show React is running
  document.title = `REACT ACTIVE: ${pathname} | God Digital Marketing`;

  console.log('🚀 APP CONTENT LOADED - React routing is active!');
  console.log('🔍 Current pathname:', pathname);

  // AGGRESSIVE DEBUG: Add visible debug info to page - FORCE DEPLOYMENT v2
  const debugInfo = `DEBUG v2: pathname=${pathname}, length=${pathname.length}, timestamp=${Date.now()}`;
  const debugElement = document.getElementById('debug-info');
  if (!debugElement) {
    const div = document.createElement('div');
    div.id = 'debug-info';
    div.style.cssText = 'position:fixed;top:0;left:0;background:red;color:white;padding:10px;z-index:9999;font-size:14px;';
    div.textContent = debugInfo;
    document.body.appendChild(div);
  }

  const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  );

  const PageWrapper = ({ children, breadcrumbs, sidebarProps }: { 
    children: React.ReactNode;
    breadcrumbs?: Array<{ name: string; url: string; isActive?: boolean }>;
    sidebarProps?: any;
  }) => (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <header>
        <CursorFollower />
        <EnhancedNavigation />
      </header>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="pt-20">
          <BreadcrumbNavigation items={breadcrumbs} />
        </nav>
      )}
      <main className={breadcrumbs ? '' : 'pt-20'}>
        {children}
      </main>
      {sidebarProps && (
        <aside>
          <ContextualSidebar {...sidebarProps} />
        </aside>
      )}
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
  );

  // Helper function to find service by slug
  const findService = (slug: string) => {
    return comprehensiveServices.find(s => s.slug === slug) ||
           comprehensiveServices.flatMap(s => s.subServices || []).find(s => s.slug === slug);
  };

  // Helper function to find location
  const findLocation = (stateSlug: string, citySlug: string) => {
    const state = allIndianLocations.find(s => s.stateSlug === stateSlug);
    if (!state) return null;
    
    const city = state.cities.find(c => c.slug === citySlug);
    if (!city) return null;

    return {
      city: city.name,
      state: state.state,
      citySlug: city.slug,
      stateSlug: state.stateSlug,
      population: city.population,
      isMetro: city.isMetro,
      industries: city.industries,
      tier: city.tier
    };
  };

  // Helper function to find industry
  const findIndustry = (slug: string) => {
    return comprehensiveIndustries.find(i => i.slug === slug);
  };

  const findBusinessType = (slug: string) => {
    return comprehensiveBusinessTypes.find(bt => bt.slug === slug);
  };

  const findIndustrySize = (slug: string) => {
    return comprehensiveIndustrySizes.find(is => is.slug === slug);
  };

  const findCompetitor = (slug: string) => {
    return fictionalCompetitors.find(c => c.slug === slug);
  };

  const findServiceComparison = (ourServiceSlug: string, competitorSlug: string) => {
    return ourServiceComparisons.find(sc => sc.ourServiceSlug === ourServiceSlug && sc.competitorSlug === competitorSlug);
  };

  const findCaseStudy = (slug: string) => {
    return allCaseStudies.find(cs => cs.id === slug);
  };

  const findProblem = (slug: string) => {
    return allProblems.find(p => p.problemSlug === slug);
  };

  const findSolutionSet = (problemSlug: string) => {
    return allSolutionSets.find(ss => ss.problemSlug === problemSlug);
  };

  // Generate breadcrumbs
  const generateBreadcrumbs = (service?: any, location?: any, industry?: any) => {
    const breadcrumbs = [];

    if (service && location) {
      breadcrumbs.push(
        { name: "Services", url: "/services/" },
        { name: service.name, url: `/${service.slug}/` },
        { name: location.state, url: `/locations/${location.stateSlug}/` },
        { name: location.city, url: `/${service.slug}/${location.stateSlug}/${location.citySlug}/`, isActive: true }
      );
    } else if (industry && service) {
      breadcrumbs.push(
        { name: "Industries", url: "/industries/" },
        { name: industry.name, url: `/digital-marketing/${industry.slug}/` },
        { name: service.name, url: `/${service.slug}/${industry.slug}/`, isActive: true }
      );
    } else if (service) {
      breadcrumbs.push(
        { name: "Services", url: "/services/" },
        { name: service.name, url: `/${service.slug}/`, isActive: true }
      );
    }

    return breadcrumbs;
  };

  // Dynamic route matching
  const pathParts = pathname.split('/').filter(Boolean);

  // Debug logging
  console.log('🔍 ROUTING DEBUG:', {
    pathname,
    pathParts,
    pathPartsLength: pathParts.length
  });

  // Enhanced debugging for Mumbai route
  if (pathname === '/mumbai/digital-marketing/') {
    console.log('🎯 MUMBAI ROUTE DETECTED!', { pathname, pathParts });
    console.log('🔍 Service found:', findService('digital-marketing'));
    console.log('🔍 Location search for mumbai...');
  }

  // Core Service Pages (New)
  const coreServicePages: Record<string, React.ComponentType> = {
    'digital-marketing-services': DigitalMarketingServices,
    'seo-services': SEOServices,
    'ppc-advertising': PPCAdvertising,
  };

  // Check for core service pages first
  if (pathParts.length === 1 && coreServicePages[pathParts[0]]) {
    const ServiceComponent = coreServicePages[pathParts[0]];
    return (
      <PageWrapper>
        <Suspense fallback={<LoadingFallback />}>
          <ServiceComponent />
        </Suspense>
      </PageWrapper>
    );
  }

  // Route: /[service]/ (Service Hub Pages)
  if (pathParts.length === 1) {
    console.log('🎯 Checking 1-part route (Service Hub):', pathParts[0]);
    const [serviceSlug] = pathParts;
    const service = findService(serviceSlug);

    if (service) {
      const breadcrumbs = generateBreadcrumbs(service);
      const sidebarProps = {
        currentService: service
      };

      // Service Hub Pages
      const serviceHubPages: Record<string, React.ComponentType> = {
        'digital-marketing': DigitalMarketingHub,
        'ai-automation': AIAutomationHub,
        'lead-generation': LeadGenerationHub,
        'business-automation': BusinessAutomationHub,
      };

      const ServiceHubComponent = serviceHubPages[serviceSlug];

      if (ServiceHubComponent) {
        return (
          <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
            <Suspense fallback={<LoadingFallback />}>
              <ServiceHubComponent />
            </Suspense>
          </PageWrapper>
        );
      }
    }
  }

  // Route: /case-studies/ (Hub Page)
  // Placed BEFORE the individual case study route /case-studies/:slug
  if (pathname === '/case-studies') {
    const breadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Case Studies", url: "/case-studies/", isActive: true }
    ];
    const sidebarProps = null;

    return (
      <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
        <Suspense fallback={<LoadingFallback />}>
          <CaseStudiesHubPage
            allCaseStudies={allCaseStudies}
            allIndustries={comprehensiveIndustries}
            allServices={comprehensiveServices}
          />
        </Suspense>
      </PageWrapper>
    );
  }

  // Route: /case-studies/:caseStudySlug/
  if (pathParts.length === 2 && pathParts[0] === 'case-studies') {
    const caseStudySlug = pathParts[1];
    const caseStudy = findCaseStudy(caseStudySlug);

    if (caseStudy) {
      const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies/" }, // Link to a potential case studies hub
        { name: caseStudy.title, url: `/case-studies/${caseStudy.id}/`, isActive: true }
      ];
      const sidebarProps = null; // Or specific sidebar if designed for case studies

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <CaseStudyPageTemplate caseStudy={caseStudy} />
          </Suspense>
        </PageWrapper>
      );
    }
    // Optional: Fallback to a 404 or case studies list if not found
  }

  // Route: /:serviceSlug/:industrySizeSlug/roi/
  if (pathParts.length === 3 && pathParts[2] === 'roi') {
    const [serviceSlug, industrySizeSlug] = pathParts;
    const service = findService(serviceSlug);
    const industrySize = findIndustrySize(industrySizeSlug);

    if (service && industrySize) {
      const breadcrumbs = [
        { name: "Services", url: "/services/" },
        { name: service.name, url: `/${service.slug}/` },
        { name: `ROI for ${industrySize.name}`, url: `/${service.slug}/${industrySize.slug}/roi/`, isActive: true }
      ];
      const sidebarProps = {
          currentService: service,
          // currentIndustrySize: industrySize, // If sidebar needs this
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <ServiceROIPageTemplate
              service={service}
              industrySize={industrySize}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /:serviceSlug/:businessTypeSlug/:stateSlug/:citySlug/cost/
  if (pathParts.length === 5 && pathParts[4] === 'cost') {
    const [serviceSlug, businessTypeSlug, stateSlug, citySlug] = pathParts;
    const service = findService(serviceSlug);
    const businessType = findBusinessType(businessTypeSlug);
    const location = findLocation(stateSlug, citySlug);

    if (service && businessType && location) {
      const breadcrumbs = [
        { name: "Services", url: "/services/" }, // Assuming a general services listing page
        { name: service.name, url: `/${service.slug}/` }, // Link to service hub page
        { name: businessType.name, url: `/${service.slug}/${businessType.slug}/` }, // Placeholder - this page might not exist, but good for structure
        { name: location.state, url: `/locations/${location.stateSlug}/` }, // Assuming a general state listing page
        { name: location.city, url: `/${service.slug}/${businessType.slug}/${location.stateSlug}/${location.citySlug}/` }, // Link to a potential Service+BT+Location page
        { name: "Cost Analysis", url: `/${service.slug}/${businessType.slug}/${location.stateSlug}/${location.citySlug}/cost/`, isActive: true }
      ];
      const sidebarProps = {
        currentService: service,
        currentLocation: location,
        // currentBusinessType: businessType, // Pass if ContextualSidebar uses it
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <ServiceCostPageTemplate
              service={service}
              businessType={businessType}
              location={location}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /alternatives/:competitorSlug/:serviceSlug/:stateSlug/:citySlug/
  if (pathParts.length === 5 && pathParts[0] === 'alternatives') {
    const [, competitorSlug, serviceSlug, stateSlug, citySlug] = pathParts;

    const competitor = findCompetitor(competitorSlug);
    const serviceData = findService(serviceSlug);
    const location = findLocation(stateSlug, citySlug);
    const serviceComparison = findServiceComparison(serviceSlug, competitorSlug);

    if (competitor && serviceData && location && serviceComparison) {
      const ourServiceInfo = {
        name: serviceData.name,
        slug: serviceData.slug,
        advantages: serviceComparison.ourAdvantages,
        differentiators: serviceComparison.ourDifferentiators,
        comparisonTitle: serviceComparison.comparisonTitle
                          || `Why Our ${serviceData.name} is a Strong ${competitor.name} Alternative`
      };

      const breadcrumbs = [
        { name: "Home", url: "/" },
        // { name: "Alternatives", url: "/alternatives/" }, // Consider if a hub page for /alternatives/ will exist
        { name: `${competitor.name} Alternatives`, url: `/alternatives/${competitor.slug}/` }, // Placeholder for competitor specific alternatives page
        { name: `vs ${serviceData.name} in ${location.city}`, url: pathname, isActive: true }
      ];
      const sidebarProps = {
          // currentService: serviceData, // Optional, if sidebar needs it
          // currentLocation: location
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <CompetitorAlternativePageTemplate
              competitor={competitor}
              location={location}
              ourServiceInfo={ourServiceInfo}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /solutions/:problemSlug/:stateSlug/:citySlug/
  if (pathParts.length === 4 && pathParts[0] === 'solutions') {
    const [, problemSlug, stateSlug, citySlug] = pathParts;

    const problem = findProblem(problemSlug);
    const solutionSet = findSolutionSet(problemSlug);
    const location = findLocation(stateSlug, citySlug);

    if (problem && solutionSet && location) {
      const dynamicPageTitle = solutionSet.solutionSetTitleTemplate
        .replace('{problemTitle}', problem.problemTitle)
        .replace('{cityName}', location.city);

      const breadcrumbs = [
        { name: "Home", url: "/" },
        // { name: "Solutions", url: "/solutions/" }, // Optional hub page
        { name: problem.problemTitle, url: `/solutions/${problem.problemSlug}/` }, // Placeholder for problem-specific hub
        { name: `In ${location.city}`, url: pathname, isActive: true }
      ];
      const sidebarProps = null;

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <ProblemSolutionPageTemplate
              problem={problem}
              solutionSet={solutionSet}
              location={location}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /[city]/[service]/ - NEW PATTERN
  if (pathParts.length === 2) {
    console.log('🎯 Checking 2-part route (City/Service):', pathParts);
    const [citySlug, serviceSlug] = pathParts;
    const service = findService(serviceSlug);
    console.log('🔍 Service found:', service ? service.name : 'NOT FOUND');

    // Find city across all states
    let location = null;
    for (const state of allIndianLocations) {
      const city = state.cities.find(c => c.slug === citySlug);
      if (city) {
        location = {
          city: city.name,
          state: state.state,
          citySlug: city.slug,
          stateSlug: state.stateSlug,
          population: city.population,
          isMetro: city.isMetro,
          industries: city.industries,
          tier: city.tier
        };
        break;
      }
    }
    console.log('🔍 Location found:', location ? location.city : 'NOT FOUND');

    if (service && location) {
      // Mapping of specific page components
      const specificPageComponents: Record<string, React.ComponentType> = {
        'mumbai-digital-marketing': MumbaiDigitalMarketing,
        'mumbai-seo-services': MumbaiSEOServices,
        'mumbai-ppc-advertising': MumbaiPPCAdvertising,
        'mumbai-social-media-marketing': MumbaiSocialMediaMarketing,
        'mumbai-ai-automation': MumbaiAIAutomation,
        'mumbai-business-automation': MumbaiBusinessAutomation,

        'bangalore-digital-marketing': BangaloreDigitalMarketing,
        'bangalore-seo-services': BangaloreSEOServices,
        'bangalore-ppc-advertising': BangalorePPCAdvertising,
        'bangalore-social-media-marketing': BangaloreSocialMediaMarketing,
        'bangalore-ai-automation': BangaloreAIAutomation,
        'bangalore-business-automation': BangaloreBusinessAutomation,

        'chennai-digital-marketing': ChennaiDigitalMarketing,
        'chennai-seo-services': ChennaiSEOServices,
        'chennai-ppc-advertising': ChennaiPPCAdvertising,
        'chennai-social-media-marketing': ChennaiSocialMediaMarketing,
        'chennai-ai-automation': ChennaiAIAutomation,
        'chennai-business-automation': ChennaiBusinessAutomation,
      };

      const componentKey = `${citySlug}-${serviceSlug}`;
      const SpecificPageComponent = specificPageComponents[componentKey];

      // Debug logging
      console.log('Route Debug:', { citySlug, serviceSlug, componentKey, hasComponent: !!SpecificPageComponent });

      // Generate related services and nearby locations
      const relatedServices = comprehensiveServices
        .filter(s => s.slug !== service.slug)
        .slice(0, 6)
        .map(s => ({
          name: s.name,
          slug: s.slug,
          url: `/${citySlug}/${s.slug}/`
        }));

      const state = allIndianLocations.find(s => s.stateSlug === location.stateSlug);
      const nearbyLocations = state ? state.cities
        .filter(c => c.slug !== citySlug)
        .slice(0, 8)
        .map(c => ({
          city: c.name,
          citySlug: c.slug,
          stateSlug: state.stateSlug,
          url: `/${c.slug}/${serviceSlug}/`
        })) : [];

      const breadcrumbs = generateBreadcrumbs(service, location);
      const sidebarProps = {
        currentService: service,
        currentLocation: location
      };

      if (SpecificPageComponent) {
        // Use specific page component with unique content
        return (
          <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
            <Suspense fallback={<LoadingFallback />}>
              <SpecificPageComponent />
            </Suspense>
          </PageWrapper>
        );
      } else {
        // Fallback to generic template for cities without specific components
        return (
          <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
            <Suspense fallback={<LoadingFallback />}>
              <ServiceLocationTemplate
                service={service}
                location={location}
                relatedServices={relatedServices}
                nearbyLocations={nearbyLocations}
              />
            </Suspense>
          </PageWrapper>
        );
      }
    }
  }

  // Route: /[service]/[industry]/[state]/[city]/
  if (pathParts.length === 4) {
    const [serviceSlug, industrySlug, stateSlug, citySlug] = pathParts;
    const service = findService(serviceSlug);
    const industry = findIndustry(industrySlug);
    const location = findLocation(stateSlug, citySlug);

    if (service && industry && location) {
      const breadcrumbs = generateBreadcrumbs(service, location, industry);
      const sidebarProps = {
        currentService: service,
        currentLocation: location,
        currentIndustry: industry
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <IndustryLocationTemplate 
              service={service}
              industry={industry}
              location={location}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Route: /[service]/[industry]/
  if (pathParts.length === 2) {
    const [serviceSlug, industrySlug] = pathParts;
    const service = findService(serviceSlug);
    const industry = findIndustry(industrySlug);

    if (service && industry) {
      const breadcrumbs = generateBreadcrumbs(service, null, industry);
      const sidebarProps = {
        currentService: service,
        currentIndustry: industry
      };

      return (
        <PageWrapper breadcrumbs={breadcrumbs} sidebarProps={sidebarProps}>
          <Suspense fallback={<LoadingFallback />}>
            <IndustryLocationTemplate 
              service={service}
              industry={industry}
            />
          </Suspense>
        </PageWrapper>
      );
    }
  }

  // Existing static routes
  const staticRoutes: Record<string, React.ComponentType> = {
    '/digital-marketing-delhi': DelhiDigitalMarketing,
    '/ai-automation-delhi': DelhiAIAutomation,
    '/business-automation-delhi': DelhiBusinessAutomation,
    '/seo-services-delhi': DelhiSEOServices,
    '/ppc-management-delhi': DelhiPPCManagement,
    '/social-media-marketing-delhi': DelhiSocialMediaMarketing,
    '/digital-marketing-mumbai': MumbaiDigitalMarketing,
    '/digital-marketing-bangalore': BangaloreDigitalMarketing,
    '/digital-marketing-chennai': ChennaiDigitalMarketing,
    '/digital-marketing-hyderabad': HyderabadDigitalMarketing,
    '/digital-marketing-pune': PuneDigitalMarketing,
    '/healthcare-digital-marketing': HealthcareDigitalMarketing,
    '/ecommerce-digital-marketing': EcommerceDigitalMarketing,
    '/real-estate-digital-marketing': RealEstateDigitalMarketing,
  };

  const PageComponent = staticRoutes[pathname];

  if (PageComponent) {
    return (
      <PageWrapper>
        <Suspense fallback={<LoadingFallback />}>
          <PageComponent />
        </Suspense>
      </PageWrapper>
    );
  }

  // Default homepage
  return (
    <PageWrapper>
      <main>
        <AdvancedHero />
        <TrustSignals />
        <Suspense fallback={<LoadingFallback />}>
          <IndiaKeywordOptimization />
        </Suspense>
      </main>
    </PageWrapper>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LoadingProvider>
        <ReloadPrompt />
        <AppContent />
      </LoadingProvider>
    </HelmetProvider>
  );
}

export default App;