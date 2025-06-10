import { services } from '../data/services';
import { locations } from '../data/locations';
import { industries } from '../data/industries';
import { testimonials } from '../data/testimonials';
import { awards } from '../data/awards';

// Link relevance scoring system
const calculateRelevanceScore = (sourcePage, targetPage) => {
  let score = 0;
  
  // Category matching
  if (sourcePage.category === targetPage.category) score += 3;
  
  // Location matching
  if (sourcePage.location === targetPage.location) score += 2;
  
  // Industry matching
  if (sourcePage.industry === targetPage.industry) score += 2;
  
  // Content similarity (basic keyword matching)
  const sourceKeywords = sourcePage.keywords || [];
  const targetKeywords = targetPage.keywords || [];
  const commonKeywords = sourceKeywords.filter(k => targetKeywords.includes(k));
  score += commonKeywords.length;
  
  return score;
};

// Helper: Get related services for a service page
const getRelatedServices = (service) => {
  return services.filter(s =>
    s.id !== service.id &&
    (s.category === service.category || s.tags.some(tag => service.tags.includes(tag)))
  ).slice(0, 3);
};

// Helper: Get industries using a service
const getIndustriesForService = (service) => {
  return industries.filter(ind =>
    ind.services && ind.services.includes(service.id)
  ).slice(0, 2);
};

// Helper: Get locations for a service
const getLocationsForService = (service) => {
  return locations.filter(loc =>
    loc.services && loc.services.includes(service.id)
  ).slice(0, 2);
};

// Helper: Get case studies for a service
const getCaseStudiesForService = (service) => {
  return (service.caseStudies || []).slice(0, 2);
};

// Helper: Get blog posts for a service
const getBlogPostsForService = (service) => {
  return (service.blogPosts || []).slice(0, 2);
};

// Helper: Get services for a location
const getServicesForLocation = (location) => {
  return services.filter(s =>
    location.services && location.services.includes(s.id)
  ).slice(0, 3);
};

// Helper: Get neighboring locations
const getNeighboringLocations = (location) => {
  return locations.filter(loc =>
    loc.id !== location.id && loc.region === location.region
  ).slice(0, 2);
};

// Helper: Get case studies for a location
const getCaseStudiesForLocation = (location) => {
  return (location.caseStudies || []).slice(0, 2);
};

// Helper: Get services for an industry
const getServicesForIndustry = (industry) => {
  return services.filter(s =>
    industry.services && industry.services.includes(s.id)
  ).slice(0, 3);
};

// Helper: Get case studies for an industry
const getCaseStudiesForIndustry = (industry) => {
  return (industry.caseStudies || []).slice(0, 2);
};

// Helper: Get related blog posts for a blog post
const getRelatedBlogPosts = (post) => {
  return (post.relatedPosts || []).slice(0, 3);
};

// Helper: Get services/industries for a blog post
const getServicesForBlogPost = (post) => {
  return (post.services || []).map(id => services.find(s => s.id === id)).filter(Boolean);
};
const getIndustriesForBlogPost = (post) => {
  return (post.industries || []).map(id => industries.find(i => i.id === id)).filter(Boolean);
};

// Main: Get page-type-specific related content
export const getRelatedContent = (currentPage) => {
  if (!currentPage || !currentPage.type) return [];
  let related = [];

  switch (currentPage.type) {
    case 'service':
      related = [
        ...getRelatedServices(currentPage),
        ...getIndustriesForService(currentPage),
        ...getLocationsForService(currentPage),
        ...getCaseStudiesForService(currentPage),
        ...getBlogPostsForService(currentPage)
      ];
      break;
    case 'location':
      related = [
        ...getServicesForLocation(currentPage),
        ...getNeighboringLocations(currentPage),
        ...getCaseStudiesForLocation(currentPage)
      ];
      break;
    case 'industry':
      related = [
        ...getServicesForIndustry(currentPage),
        ...getCaseStudiesForIndustry(currentPage)
      ];
      break;
    case 'blog':
      related = [
        ...getRelatedBlogPosts(currentPage),
        ...getServicesForBlogPost(currentPage),
        ...getIndustriesForBlogPost(currentPage)
      ];
      break;
    case 'case-study':
      related = [
        ...getServicesForBlogPost(currentPage),
        ...getIndustriesForBlogPost(currentPage)
      ];
      break;
    default:
      // Fallback: top services, locations, industries
      related = [
        ...services.slice(0, 2),
        ...locations.slice(0, 2),
        ...industries.slice(0, 2)
      ];
  }

  // Remove duplicates and the current page
  const seen = new Set();
  return related.filter(item => {
    if (!item || item.id === currentPage.id || seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  }).slice(0, 5);
};

// Generate natural anchor text
export const generateAnchorText = (page) => {
  const { title, type } = page;
  
  // Avoid keyword stuffing by using natural variations
  const anchorTextVariations = {
    service: [
      `Learn more about ${title}`,
      `Explore our ${title} services`,
      `Discover ${title}`,
      `${title} solutions`,
      `Professional ${title}`
    ],
    location: [
      `${title} office`,
      `Our team in ${title}`,
      `Services in ${title}`,
      `${title} location`,
      `Visit us in ${title}`
    ],
    industry: [
      `${title} solutions`,
      `Services for ${title}`,
      `${title} industry expertise`,
      `Solutions for ${title}`,
      `${title} specialists`
    ]
  };

  const variations = anchorTextVariations[type] || [title];
  return variations[Math.floor(Math.random() * variations.length)];
};

// Validate internal link structure
export const validateInternalLinks = (page) => {
  const issues = [];
  
  // Check minimum internal links
  if (!page.internalLinks || page.internalLinks.length < 3) {
    issues.push('Page has insufficient internal links');
  }
  
  // Check for orphaned pages
  if (!page.isLinkedFrom) {
    issues.push('Page appears to be orphaned');
  }
  
  // Check for broken links
  if (page.brokenLinks && page.brokenLinks.length > 0) {
    issues.push(`Page contains ${page.brokenLinks.length} broken links`);
  }
  
  return issues;
};

// Generate breadcrumb structure
export const generateBreadcrumbs = (currentPage) => {
  const breadcrumbs = [];
  
  // Add home
  breadcrumbs.push({ title: 'Home', path: '/' });
  
  // Add category if exists
  if (currentPage.category) {
    breadcrumbs.push({
      title: currentPage.category,
      path: `/category/${currentPage.category.toLowerCase()}`
    });
  }
  
  // Add current page
  breadcrumbs.push({
    title: currentPage.title,
    path: currentPage.path
  });
  
  return breadcrumbs;
};

// Get navigation structure
export const getNavigationStructure = () => {
  return {
    mainNav: [
      {
        title: 'Services',
        items: services.map(service => ({
          title: service.title,
          path: `/services/${service.slug}`
        }))
      },
      {
        title: 'Locations',
        items: locations.map(location => ({
          title: location.title,
          path: `/locations/${location.slug}`
        }))
      },
      {
        title: 'Industries',
        items: industries.map(industry => ({
          title: industry.title,
          path: `/industries/${industry.slug}`
        }))
      }
    ],
    footerNav: [
      {
        title: 'Company',
        items: [
          { title: 'About Us', path: '/about' },
          { title: 'Contact', path: '/contact' },
          { title: 'Careers', path: '/careers' }
        ]
      },
      {
        title: 'Resources',
        items: [
          { title: 'Blog', path: '/blog' },
          { title: 'Case Studies', path: '/case-studies' },
          { title: 'Testimonials', path: '/testimonials' }
        ]
      }
    ]
  };
}; 