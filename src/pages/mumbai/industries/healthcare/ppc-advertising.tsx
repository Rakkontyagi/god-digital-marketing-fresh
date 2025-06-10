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
  "name": "PPC Advertising",
  "slug": "ppc-advertising",
  "description": "Pay-per-click campaigns for instant traffic."
},
  keywords: [
  "PPC Advertising in Mumbai for Healthcare",
  "best ppc advertising Mumbai for healthcare",
  "ppc advertising agency Mumbai for healthcare",
  "digital marketing Mumbai for healthcare",
  "ppc advertising for Healthcare"
]
};

export default function PPCAdvertisingHealthcareMumbaiPage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
