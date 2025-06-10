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
  "name": "PPC Advertising",
  "slug": "ppc-advertising",
  "description": "Pay-per-click campaigns for instant traffic."
},
  keywords: [
  "PPC Advertising in New Delhi for Healthcare",
  "best ppc advertising New Delhi for healthcare",
  "ppc advertising agency New Delhi for healthcare",
  "digital marketing New Delhi for healthcare",
  "ppc advertising for Healthcare"
]
};

export default function PPCAdvertisingHealthcareNewDelhiPage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
