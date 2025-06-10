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
  "SEO Services in Pune for Real Estate",
  "best seo services Pune for real-estate",
  "seo services agency Pune for real-estate",
  "digital marketing Pune for real-estate",
  "seo services for Real Estate"
]
};

export default function SEOServicesRealEstatePunePage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
