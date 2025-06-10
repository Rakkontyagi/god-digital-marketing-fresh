// Service-specific location data with performance metrics and highlights

export interface ServiceLocationMetrics {
  serviceName: string;
  serviceSlug: string;
  metroCities: Array<{
    name: string;
    slug: string;
    clientCount?: string;
    roiIndicator?: string;
    highlight?: string;
    performance?: string;
  }>;
}

export const serviceLocationMetrics: ServiceLocationMetrics[] = [
  {
    serviceName: "SEO Services",
    serviceSlug: "seo-services",
    metroCities: [
      { 
        name: "Mumbai", 
        slug: "mumbai", 
        clientCount: "25+ SEO Clients",
        performance: "Average 150% organic growth"
      },
      { 
        name: "Delhi", 
        slug: "delhi", 
        clientCount: "30+ SEO Clients",
        performance: "Average 200% keyword ranking improvement"
      },
      { 
        name: "Bangalore", 
        slug: "bangalore", 
        clientCount: "35+ SEO Clients",
        performance: "Tech industry SEO specialists"
      },
      { 
        name: "Pune", 
        slug: "pune", 
        clientCount: "20+ SEO Clients",
        performance: "Average 180% traffic increase"
      },
      { 
        name: "Hyderabad", 
        slug: "hyderabad", 
        clientCount: "25+ SEO Clients",
        performance: "Pharma & IT SEO expertise"
      },
      { 
        name: "Chennai", 
        slug: "chennai", 
        clientCount: "22+ SEO Clients",
        performance: "Automotive industry focus"
      },
      { 
        name: "Kolkata", 
        slug: "kolkata", 
        clientCount: "18+ SEO Clients",
        performance: "Traditional business SEO"
      },
      { 
        name: "Ahmedabad", 
        slug: "ahmedabad", 
        clientCount: "15+ SEO Clients",
        performance: "Textile & chemical industry"
      }
    ]
  },
  {
    serviceName: "Social Media Marketing",
    serviceSlug: "social-media-marketing",
    metroCities: [
      { 
        name: "Mumbai", 
        slug: "mumbai", 
        highlight: "Entertainment Capital",
        performance: "Film & media expertise"
      },
      { 
        name: "Delhi", 
        slug: "delhi", 
        highlight: "Political Hub",
        performance: "Government & corporate SMM"
      },
      { 
        name: "Bangalore", 
        slug: "bangalore", 
        highlight: "Tech Capital",
        performance: "Startup & tech company focus"
      },
      { 
        name: "Pune", 
        slug: "pune", 
        highlight: "Youth City",
        performance: "Education & lifestyle brands"
      },
      { 
        name: "Hyderabad", 
        slug: "hyderabad", 
        highlight: "Cyberabad",
        performance: "IT & pharma social media"
      },
      { 
        name: "Chennai", 
        slug: "chennai", 
        highlight: "Cultural Hub",
        performance: "Regional brand positioning"
      },
      { 
        name: "Kolkata", 
        slug: "kolkata", 
        highlight: "Cultural Capital",
        performance: "Arts & literature brands"
      },
      { 
        name: "Ahmedabad", 
        slug: "ahmedabad", 
        highlight: "Business Hub",
        performance: "B2B social media strategies"
      }
    ]
  },
  {
    serviceName: "PPC Advertising",
    serviceSlug: "ppc-advertising",
    metroCities: [
      { 
        name: "Mumbai", 
        slug: "mumbai", 
        roiIndicator: "8.5x Avg ROI",
        performance: "High-value financial sector"
      },
      { 
        name: "Delhi", 
        slug: "delhi", 
        roiIndicator: "7.2x Avg ROI",
        performance: "Government & enterprise focus"
      },
      { 
        name: "Bangalore", 
        slug: "bangalore", 
        roiIndicator: "9.1x Avg ROI",
        performance: "Tech startup campaigns"
      },
      { 
        name: "Pune", 
        slug: "pune", 
        roiIndicator: "6.8x Avg ROI",
        performance: "Automotive & manufacturing"
      },
      { 
        name: "Hyderabad", 
        slug: "hyderabad", 
        roiIndicator: "7.5x Avg ROI",
        performance: "Pharma & biotech ads"
      },
      { 
        name: "Chennai", 
        slug: "chennai", 
        roiIndicator: "6.9x Avg ROI",
        performance: "Healthcare & automotive"
      },
      { 
        name: "Kolkata", 
        slug: "kolkata", 
        roiIndicator: "5.8x Avg ROI",
        performance: "Traditional business PPC"
      },
      { 
        name: "Ahmedabad", 
        slug: "ahmedabad", 
        roiIndicator: "6.5x Avg ROI",
        performance: "Chemical & textile industry"
      }
    ]
  }
];

export const getServiceMetrics = (serviceSlug: string): ServiceLocationMetrics | undefined => {
  return serviceLocationMetrics.find(service => service.serviceSlug === serviceSlug);
};

// Analytics event tracking data
export interface CityLinkAnalytics {
  city: string;
  service: string;
  source_page: string;
  link_type: 'priority' | 'state' | 'search' | 'mobile';
}

// Search functionality helper
export const searchCities = (query: string, allCities: any[]): any[] => {
  if (!query) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  return allCities
    .filter(city => 
      city.name.toLowerCase().includes(normalizedQuery) ||
      city.state.toLowerCase().includes(normalizedQuery)
    )
    .sort((a, b) => {
      // Prioritize exact matches
      const aExact = a.name.toLowerCase() === normalizedQuery;
      const bExact = b.name.toLowerCase() === normalizedQuery;
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      
      // Then prioritize starts with
      const aStarts = a.name.toLowerCase().startsWith(normalizedQuery);
      const bStarts = b.name.toLowerCase().startsWith(normalizedQuery);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      
      // Finally by tier (lower tier = higher priority)
      return a.tier - b.tier;
    })
    .slice(0, 20); // Limit results for performance
};