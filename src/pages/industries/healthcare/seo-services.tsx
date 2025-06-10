import React from "react";
import { IndustryLocationTemplate } from "../../components/Templates/IndustryLocationTemplate";

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
  "SEO Services in  for Healthcare",
  "best seo services  for healthcare",
  "seo services agency  for healthcare",
  "digital marketing  for healthcare",
  "seo services for Healthcare"
]
};

export default function SEOServicesHealthcarePage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
    />
  );
}
