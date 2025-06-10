import React from "react";
import { IndustryLocationTemplate } from "../../../components/Templates/IndustryLocationTemplate";

const cityData = {
  "name": "New Delhi",
  "slug": "new-delhi",
  "population": 16787941,
  "isMetro": true,
  "tier": 1,
  "industries": [
    "government",
    "technology",
    "finance",
    "tourism"
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
  "SEO Services in New Delhi for Real Estate",
  "best seo services New Delhi for real-estate",
  "seo services agency New Delhi for real-estate",
  "digital marketing New Delhi for real-estate",
  "seo services for Real Estate"
]
};

export default function SEOServicesRealEstateNewDelhiPage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
