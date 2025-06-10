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
  "name": "Real Estate",
  "slug": "real-estate",
  "description": "Real Estate"
};
const serviceData = {
  ...{
  "name": "SEO Services",
  "slug": "seo-services",
  "description": "Search engine optimization for higher Google rankings."
},
  keywords: [
  "SEO Services in Mumbai for Real Estate",
  "best seo services Mumbai for real-estate",
  "seo services agency Mumbai for real-estate",
  "digital marketing Mumbai for real-estate",
  "seo services for Real Estate"
]
};

export default function SEOServicesRealEstateMumbaiPage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
