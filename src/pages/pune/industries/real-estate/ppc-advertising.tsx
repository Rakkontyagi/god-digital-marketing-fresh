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
  "name": "PPC Advertising",
  "slug": "ppc-advertising",
  "description": "Pay-per-click campaigns for instant traffic."
},
  keywords: [
  "PPC Advertising in Pune for Real Estate",
  "best ppc advertising Pune for real-estate",
  "ppc advertising agency Pune for real-estate",
  "digital marketing Pune for real-estate",
  "ppc advertising for Real Estate"
]
};

export default function PPCAdvertisingRealEstatePunePage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
