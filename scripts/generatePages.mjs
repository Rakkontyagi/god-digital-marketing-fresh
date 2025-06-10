// Batch Page Generator for All Cities, Services, and Industries (ESM, with sample data and correct slugs)
// This script will generate .tsx files for every combination using your templates and design system

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SAMPLE DATA (copy from your real data for demo)
const allIndianLocations = [
  {
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cities: [
      { name: "Mumbai", slug: "mumbai", population: 12442373, isMetro: true, tier: 1, industries: ["finance", "entertainment", "technology", "manufacturing"] },
      { name: "Pune", slug: "pune", population: 3124458, isMetro: true, tier: 1, industries: ["technology", "automotive", "education", "manufacturing"] }
    ]
  },
  {
    state: "Delhi",
    stateSlug: "delhi",
    cities: [
      { name: "New Delhi", slug: "new-delhi", population: 16787941, isMetro: true, tier: 1, industries: ["government", "technology", "finance", "tourism"] }
    ]
  }
];

const comprehensiveServices = [
  { name: "SEO Services", slug: "seo-services", description: "Search engine optimization for higher Google rankings." },
  { name: "PPC Advertising", slug: "ppc-advertising", description: "Pay-per-click campaigns for instant traffic." }
];

const comprehensiveIndustries = [
  { name: "Healthcare", slug: "healthcare", description: "Healthcare & Medical" },
  { name: "Real Estate", slug: "real-estate", description: "Real Estate" }
];

// Utility: Ensure directory exists
function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Simple LSI/variation generator (can be replaced with API)
function getLSIKeywords(service, city, industry) {
  let base = [
    `${service.name} in ${city ? city.name : ''}${industry ? ' for ' + industry.name : ''}`,
    `best ${service.slug.replace(/-/g, ' ')} ${city ? city.name : ''}${industry ? ' for ' + industry.slug : ''}`,
    `${service.slug.replace(/-/g, ' ')} agency ${city ? city.name : ''}${industry ? ' for ' + industry.slug : ''}`,
    `digital marketing ${city ? city.name : ''}${industry ? ' for ' + industry.slug : ''}`
  ];
  if (industry) base.push(`${service.slug.replace(/-/g, ' ')} for ${industry.name}`);
  return base;
}

// Content generator for Service + City
function generateServiceCityPage({ city, service }) {
  const lsi = getLSIKeywords(service, city);
  return `import React from "react";
import { ServiceLocationTemplate } from "../../components/Templates/ServiceLocationTemplate";

const cityData = ${JSON.stringify(city, null, 2)};
const serviceData = {
  ...${JSON.stringify(service, null, 2)},
  keywords: ${JSON.stringify(lsi, null, 2)}
};

const relatedServices = [];
const nearbyLocations = [];

export default function ${service.name.replace(/\s/g, '')}${city.name.replace(/\s/g, '')}Page() {
  return (
    <ServiceLocationTemplate
      service={serviceData}
      location={cityData}
      relatedServices={relatedServices}
      nearbyLocations={nearbyLocations}
    />
  );
}
`;
}

// Content generator for Industry + Service
function generateIndustryServicePage({ industry, service }) {
  const lsi = getLSIKeywords(service, null, industry);
  return `import React from "react";
import { IndustryLocationTemplate } from "../../components/Templates/IndustryLocationTemplate";

const industryData = ${JSON.stringify(industry, null, 2)};
const serviceData = {
  ...${JSON.stringify(service, null, 2)},
  keywords: ${JSON.stringify(lsi, null, 2)}
};

export default function ${service.name.replace(/\s/g, '')}${industry.name.replace(/\s/g, '')}Page() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
    />
  );
}
`;
}

// Content generator for City + Industry + Service
function generateCityIndustryServicePage({ city, industry, service }) {
  const lsi = getLSIKeywords(service, city, industry);
  return `import React from "react";
import { IndustryLocationTemplate } from "../../../components/Templates/IndustryLocationTemplate";

const cityData = ${JSON.stringify(city, null, 2)};
const industryData = ${JSON.stringify(industry, null, 2)};
const serviceData = {
  ...${JSON.stringify(service, null, 2)},
  keywords: ${JSON.stringify(lsi, null, 2)}
};

export default function ${service.name.replace(/\s/g, '')}${industry.name.replace(/\s/g, '')}${city.name.replace(/\s/g, '')}Page() {
  return (
    <IndustryLocationTemplate
      service={serviceData}
      industry={industryData}
      location={cityData}
    />
  );
}
`;
}

// Content generator for Main Service Page
function generateMainServicePage({ service }) {
  return `import React from "react";
import { ServiceLocationTemplate } from "../components/Templates/ServiceLocationTemplate";

const serviceData = ${JSON.stringify(service, null, 2)};

export default function ${service.name.replace(/\s/g, '')}MainPage() {
  return (
    <ServiceLocationTemplate
      service={serviceData}
      location={null}
      relatedServices={[]}
      nearbyLocations={[]}
    />
  );
}
`;
}

// Generate all combinations with correct slugs
// 1. Main Service Pages: /services/[service-name]/
comprehensiveServices.forEach(service => {
  const outDir = path.join(__dirname, `../src/pages/services`);
  ensureDirSync(outDir);
  const outFile = path.join(outDir, `${service.slug}.tsx`);
  const content = generateMainServicePage({ service });
  fs.writeFileSync(outFile, content);
  console.log(`Generated: ${outFile}`);
});

// 2. Location Pages: /[city-name]/[service-name]/
allIndianLocations.forEach(state => {
  state.cities.forEach(city => {
    comprehensiveServices.forEach(service => {
      const outDir = path.join(__dirname, `../src/pages/${city.slug}`);
      ensureDirSync(outDir);
      const outFile = path.join(outDir, `${service.slug}.tsx`);
      const content = generateServiceCityPage({ city, service });
      fs.writeFileSync(outFile, content);
      console.log(`Generated: ${outFile}`);
    });
  });
});

// 3. Industry Pages: /industries/[industry]/[service-name]/
comprehensiveIndustries.forEach(industry => {
  comprehensiveServices.forEach(service => {
    const outDir = path.join(__dirname, `../src/pages/industries/${industry.slug}`);
    ensureDirSync(outDir);
    const outFile = path.join(outDir, `${service.slug}.tsx`);
    const content = generateIndustryServicePage({ industry, service });
    fs.writeFileSync(outFile, content);
    console.log(`Generated: ${outFile}`);
  });
});

// 4. Combined: /[city-name]/industries/[industry]/[service-name]/
allIndianLocations.forEach(state => {
  state.cities.forEach(city => {
    comprehensiveIndustries.forEach(industry => {
      comprehensiveServices.forEach(service => {
        const outDir = path.join(__dirname, `../src/pages/${city.slug}/industries/${industry.slug}`);
        ensureDirSync(outDir);
        const outFile = path.join(outDir, `${service.slug}.tsx`);
        const content = generateCityIndustryServicePage({ city, industry, service });
        fs.writeFileSync(outFile, content);
        console.log(`Generated: ${outFile}`);
      });
    });
  });
});

console.log('Batch page generation (all combinations) complete.');
