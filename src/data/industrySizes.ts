export interface IndustrySizeData {
  name: string; // e.g., "Small Businesses"
  slug: string; // e.g., "small"
  description: string; // e.g., "Typically 1-50 employees"
}

export const comprehensiveIndustrySizes: IndustrySizeData[] = [
  {
    name: "Small Businesses",
    slug: "small",
    description: "Typically 1-50 employees"
  },
  {
    name: "Medium-Sized Businesses",
    slug: "medium",
    description: "Typically 51-500 employees"
  },
  {
    name: "Large Companies",
    slug: "large",
    description: "Typically 501-5000 employees"
  },
  {
    name: "Enterprise Level",
    slug: "enterprise",
    description: "Typically 5000+ employees"
  }
];
