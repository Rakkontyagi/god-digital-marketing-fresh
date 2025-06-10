import React from "react";
import { IndustryLocationTemplate } from "../../../components/Templates/IndustryLocationTemplate";

const cityData = {
  "name": "Mumbai",
  "slug": "mumbai",
  "population": 12442373,
  "isMetro": true,
  "tier": 1,
  "industries": [
    "finance",
    "entertainment",
    "technology",
    "manufacturing"
  ]
};
const industryData = {
  "name": "Healthcare",
  "slug": "healthcare",
  "description": "Healthcare & Medical"
};
const serviceData = {
  ...{
  "name": "SEO Services",
  "slug": "seo-services",
  "description": "Search engine optimization for higher Google rankings."
},
  keywords: [
  "SEO Services in Mumbai for Healthcare",
  "best seo services Mumbai for healthcare",
  "seo services agency Mumbai for healthcare",
  "digital marketing Mumbai for healthcare",
  "seo services for Healthcare"
]
};

export default function SEOServicesHealthcareMumbaiPage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
