import React from "react";
import { IndustryLocationTemplate } from "../../components/Templates/IndustryLocationTemplate";

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
  "PPC Advertising in  for Healthcare",
  "best ppc advertising  for healthcare",
  "ppc advertising agency  for healthcare",
  "digital marketing  for healthcare",
  "ppc advertising for Healthcare"
]
};

export default function PPCAdvertisingHealthcarePage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
    />
  );
}
