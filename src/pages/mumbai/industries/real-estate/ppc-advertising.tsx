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
  "name": "PPC Advertising",
  "slug": "ppc-advertising",
  "description": "Pay-per-click campaigns for instant traffic."
},
  keywords: [
  "PPC Advertising in Mumbai for Real Estate",
  "best ppc advertising Mumbai for real-estate",
  "ppc advertising agency Mumbai for real-estate",
  "digital marketing Mumbai for real-estate",
  "ppc advertising for Real Estate"
]
};

export default function PPCAdvertisingRealEstateMumbaiPage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
