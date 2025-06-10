// Utility functions for generating JSON-LD structured data for SEO

// Type definitions for schema data
interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
  url: string;
}

interface ProfessionalServiceProps {
  serviceName: string;
  description: string;
  cities?: Array<{ name: string; state: string }>;
  states?: Array<{ name: string }>;
  url: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
  };
  hasOfferCatalog?: Array<{
    name: string;
    description: string;
    priceRange?: string;
  }>;
}

interface ServiceAreaProps {
  cities: Array<{
    name: string;
    latitude?: number;
    longitude?: number;
    serviceRadius?: string;
  }>;
  serviceName: string;
}

interface LocalBusinessProps {
  name: string;
  address: any;
  geo?: any;
  url: string;
  telephone: string;
}

interface LocalBusinessWithServiceAreaProps {
  businessName: string;
  serviceType: string;
  address: any;
  telephone: string;
  url: string;
  serviceAreas?: Array<{ name: string; state: string }>;
  openingHours?: string[];
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'God Digital Marketing',
    url: 'https://goddigitalmarketing.com',
    logo: 'https://goddigitalmarketing.com/logo.png',
    sameAs: [
      'https://www.facebook.com/goddigitalmarketing',
      'https://www.linkedin.com/company/goddigitalmarketing',
      'https://twitter.com/goddigitalmktg'
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+91-9999999999',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    }]
  };
}

export function getServiceSchema({ name, description, provider, areaServed, url }: ServiceSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider || 'God Digital Marketing',
      url: 'https://goddigitalmarketing.com'
    },
    areaServed: areaServed || 'India',
    url
  };
}

// Enhanced Professional Service Schema with Multiple Service Areas
export function getProfessionalServiceSchema({ 
  serviceName, 
  description, 
  cities = [], 
  states = [], 
  url, 
  aggregateRating,
  hasOfferCatalog = []
}: ProfessionalServiceProps) {
  const areaServed = [
    ...cities.map(city => ({
      '@type': 'City',
      name: city.name,
      addressRegion: city.state,
      addressCountry: 'IN'
    })),
    ...states.map(state => ({
      '@type': 'State',
      name: state.name,
      addressCountry: 'IN'
    }))
  ];

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: serviceName,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'God Digital Marketing',
      url: 'https://goddigitalmarketing.com',
      logo: 'https://goddigitalmarketing.com/logo.png'
    },
    areaServed,
    serviceType: serviceName
  };

  // Add aggregate rating if provided
  if (aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating || 5
    };
  }

  // Add offer catalog if provided
  if (hasOfferCatalog.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: `${serviceName} Services`,
      itemListElement: hasOfferCatalog.map((offer, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description
        },
        priceRange: offer.priceRange || undefined
      }))
    };
  }

  return schema;
}

// Service Area Schema for specific cities
export function getServiceAreaSchema({ cities, serviceName }: ServiceAreaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ServiceArea',
    name: `${serviceName} Service Area`,
    geo: cities.map(city => ({
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: city.latitude || 0,
        longitude: city.longitude || 0
      },
      geoRadius: city.serviceRadius || '50000' // 50km radius
    }))
  };
}

// Local Business Schema for city-specific pages
export function getLocalBusinessSchema({ name, address, geo, url, telephone }: LocalBusinessProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    image: 'https://goddigitalmarketing.com/logo.png',
    '@id': url,
    url,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    geo: geo && {
      '@type': 'GeoCoordinates',
      ...geo
    }
  };
}

// Enhanced Local Business Schema with Service Areas
export function getLocalBusinessWithServiceAreaSchema({ 
  businessName, 
  serviceType, 
  address, 
  telephone, 
  url, 
  serviceAreas = [], 
  openingHours = [] 
}: LocalBusinessWithServiceAreaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessName,
    description: `Professional ${serviceType} services`,
    url,
    telephone,
    image: 'https://goddigitalmarketing.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    areaServed: serviceAreas.map(area => ({
      '@type': 'City',
      name: area.name,
      addressRegion: area.state,
      addressCountry: 'IN'
    })),
    openingHours: openingHours,
    priceRange: '$$',
    serviceType: serviceType
  };
}

export function getArticleSchema({ title, description, url, image, author, datePublished, dateModified }: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'God Digital Marketing',
      logo: {
        '@type': 'ImageObject',
        url: 'https://goddigitalmarketing.com/logo.png'
      }
    },
    datePublished,
    dateModified
  };
}

export function getBreadcrumbSchema(breadcrumbs: Array<{title: string; url: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.title,
      item: crumb.url
    }))
  };
}

export function getCaseStudySchema({ title, description, url, image, client, industry, location, services }: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description,
    url,
    image,
    about: {
      '@type': 'Organization',
      name: client
    },
    industry,
    location,
    service: services
  };
}

// FAQ Schema for service pages
export function getFAQSchema(faqs: Array<{question: string; answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// How-to Schema for service processes
export function getHowToSchema({ name, description, steps, totalTime, estimatedCost }: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime,
    estimatedCost: estimatedCost && {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: estimatedCost
    },
    step: steps.map((step: any, index: number) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.description,
      image: step.image || undefined
    }))
  };
}

// Review Schema for testimonials
export function getReviewSchema({ itemName, reviewBody, author, rating, datePublished }: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Service',
      name: itemName
    },
    reviewBody,
    author: {
      '@type': 'Person',
      name: author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
      bestRating: 5
    },
    datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'God Digital Marketing'
    }
  };
}

// Website Schema for main site
export function getWebsiteSchema({ url, name, description, potentialAction = [] }: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
    publisher: {
      '@type': 'Organization',
      name: 'God Digital Marketing'
    },
    potentialAction: potentialAction.length > 0 ? potentialAction : [{
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }]
  };
}

// Comprehensive City Service Schema Generator
export function getCityServiceSchema({ 
  cityName, 
  stateName, 
  serviceName, 
  serviceSlug, 
  description, 
  url,
  clientTestimonials = [],
  serviceOffers = [],
  averageRating = null
}: any) {
  const baseSchema: any = {
    '@context': 'https://schema.org',
    '@graph': [
      // Service Schema
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `${serviceName} in ${cityName}`,
        description,
        serviceType: serviceName,
        provider: {
          '@type': 'Organization',
          name: 'God Digital Marketing',
          url: 'https://goddigitalmarketing.com'
        },
        areaServed: {
          '@type': 'City',
          name: cityName,
          addressRegion: stateName,
          addressCountry: 'IN'
        },
        url
      },
      // Place Schema
      {
        '@type': 'Place',
        '@id': `${url}#place`,
        name: cityName,
        address: {
          '@type': 'PostalAddress',
          addressLocality: cityName,
          addressRegion: stateName,
          addressCountry: 'IN'
        }
      }
    ]
  };

  // Add service offers if provided
  if (serviceOffers.length > 0) {
    baseSchema['@graph'][0].hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: `${serviceName} Packages in ${cityName}`,
      itemListElement: serviceOffers.map((offer: any, index: number) => ({
        '@type': 'Offer',
        position: index + 1,
        name: offer.name,
        description: offer.description,
        price: offer.price,
        priceCurrency: 'INR'
      }))
    };
  }

  // Add aggregate rating if available
  if (averageRating) {
    baseSchema['@graph'][0].aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: averageRating.value,
      reviewCount: averageRating.count,
      bestRating: 5
    };
  }

  // Add individual reviews
  if (clientTestimonials.length > 0) {
    const reviews = clientTestimonials.map((testimonial: any) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: 5
      },
      author: {
        '@type': 'Person',
        name: testimonial.clientName
      },
      reviewBody: testimonial.review,
      datePublished: testimonial.date || new Date().toISOString()
    }));
    
    baseSchema['@graph'] = [...baseSchema['@graph'], ...reviews];
  }

  return baseSchema;
} 
