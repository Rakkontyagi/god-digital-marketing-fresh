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
  "name": "PPC Advertising",
  "slug": "ppc-advertising",
  "description": "Pay-per-click campaigns for instant traffic."
},
  keywords: [
  "PPC Advertising in Pune for Healthcare",
  "best ppc advertising Pune for healthcare",
  "ppc advertising agency Pune for healthcare",
  "digital marketing Pune for healthcare",
  "ppc advertising for Healthcare"
]
};

export default function PPCAdvertisingHealthcarePunePage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
