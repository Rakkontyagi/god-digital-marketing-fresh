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
  "name": "PPC Advertising",
  "slug": "ppc-advertising",
  "description": "Pay-per-click campaigns for instant traffic."
},
  keywords: [
  "PPC Advertising in New Delhi for Real Estate",
  "best ppc advertising New Delhi for real-estate",
  "ppc advertising agency New Delhi for real-estate",
  "digital marketing New Delhi for real-estate",
  "ppc advertising for Real Estate"
]
};

export default function PPCAdvertisingRealEstateNewDelhiPage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
