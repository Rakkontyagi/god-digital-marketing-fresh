export interface BusinessTypeData {
  name: string;
  slug: string;
  description?: string;
}

export const comprehensiveBusinessTypes: BusinessTypeData[] = [
  {
    name: "Small Business",
    slug: "small-business",
    description: "Businesses with a smaller workforce and revenue, typically owner-operated."
  },
  {
    name: "Medium Business",
    slug: "medium-business",
    description: "Businesses with a moderate workforce and revenue, larger than small businesses but smaller than enterprises."
  },
  {
    name: "Large Enterprise",
    slug: "large-enterprise",
    description: "Large-scale businesses with significant workforce, revenue, and market presence."
  },
  {
    name: "Startup",
    slug: "startup",
    description: "Newly established businesses, typically innovative and aiming for rapid growth."
  },
  {
    name: "E-commerce Store",
    slug: "ecommerce-store",
    description: "Businesses that primarily sell products or services online."
  },
  {
    name: "Local Shop",
    slug: "local-shop",
    description: "Brick-and-mortar retail businesses serving a specific local community."
  },
  {
    name: "SaaS Company",
    slug: "saas-company",
    description: "Companies that provide Software as a Service, typically on a subscription basis."
  },
  {
    name: "Service Provider",
    slug: "service-provider",
    description: "Businesses that offer professional services rather than physical products."
  },
  {
    name: "Non-Profit Organization",
    slug: "non-profit",
    description: "Organizations focused on social causes rather than profit generation."
  },
  {
    name: "Manufacturing Firm",
    slug: "manufacturing-firm",
    description: "Companies involved in the production of goods."
  },
  {
    name: "Real Estate Agency",
    slug: "real-estate-agency",
    description: "Businesses focused on buying, selling, or managing properties."
  },
  {
    name: "Healthcare Clinic",
    slug: "healthcare-clinic",
    description: "Medical facilities providing outpatient care."
  },
  {
    name: "Educational Institution",
    slug: "educational-institution",
    description: "Organizations providing learning and education services, like schools or colleges."
  },
  {
    name: "Restaurant / Cafe",
    slug: "restaurant-cafe",
    description: "Businesses preparing and serving food and beverages to customers."
  },
  {
    name: "Travel Agency",
    slug: "travel-agency",
    description: "Businesses that arrange travel and tourism services for clients."
  }
];
