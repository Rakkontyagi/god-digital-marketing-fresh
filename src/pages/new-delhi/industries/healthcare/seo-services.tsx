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
  "SEO Services in New Delhi for Healthcare",
  "best seo services New Delhi for healthcare",
  "seo services agency New Delhi for healthcare",
  "digital marketing New Delhi for healthcare",
  "seo services for Healthcare"
]
};

export default function SEOServicesHealthcareNewDelhiPage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
