import React from "react";
import { IndustryLocationTemplate } from "../../components/Templates/IndustryLocationTemplate";

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
  "PPC Advertising in  for Real Estate",
  "best ppc advertising  for real-estate",
  "ppc advertising agency  for real-estate",
  "digital marketing  for real-estate",
  "ppc advertising for Real Estate"
]
};

export default function PPCAdvertisingRealEstatePage() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
    />
  );
}
