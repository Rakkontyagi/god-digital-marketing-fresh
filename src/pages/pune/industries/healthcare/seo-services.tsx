import React from "react";
import { IndustryLocationTemplate } from "../../../components/Templates/IndustryLocationTemplate";

const cityData = {
  "name": "Pune",
  "slug": "pune",
  "population": 3124458,
  "isMetro": true,
  "tier": 1,
  "industries": [
    "technology",
    "automotive",
    "education",
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
  "SEO Services in Pune for Healthcare",
  "best seo services Pune for healthcare",
  "seo services agency Pune for healthcare",
  "digital marketing Pune for healthcare",
  "seo services for Healthcare"
]
};

export default function SEOServicesHealthcarePunePage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
