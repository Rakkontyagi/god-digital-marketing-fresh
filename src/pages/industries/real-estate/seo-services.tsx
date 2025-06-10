import React from "react";
import { IndustryLocationTemplate } from "../../components/Templates/IndustryLocationTemplate";

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
  "SEO Services in  for Real Estate",
  "best seo services  for real-estate",
  "seo services agency  for real-estate",
  "digital marketing  for real-estate",
  "seo services for Real Estate"
]
};

export default function SEOServicesRealEstatePage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
    />
  );
}
