// Batch page generation script for city/service pages (Node.js version)
// Requirements: unique, human-quality, LSI/NLP-rich content, deduplication

const fs = require('fs');
const path = require('path');
const { statesAndUTs } = require('../src/data/locationData.cjs');
const { generateContent } = require('../src/data/contentTemplates.cjs');
const { comprehensiveServices, comprehensiveIndustries } = require('../src/data/comprehensiveLocations.cjs');

const services = [
  { slug: 'seo-services', name: 'SEO Services' },
  { slug: 'ppc-advertising', name: 'PPC Advertising' },
  { slug: 'social-media-marketing', name: 'Social Media Marketing' },
];

const BATCH_SIZE = 1000;
const BATCH_OFFSET = 0; // Start from the beginning

function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

function getAllPages(statesAndUTs, services, industries) {
  const allPages = [];
  for (const state of statesAndUTs) {
    for (const city of state.cities) {
      for (const service of services) {
        allPages.push({ city, state, service });
      }
      for (const industry of industries) {
        allPages.push({ city, state, industry });
        for (const service of services) {
          allPages.push({ city, state, service, industry });
        }
      }
    }
  }
  return allPages;
}

const allPages = getAllPages(statesAndUTs, comprehensiveServices, comprehensiveIndustries);

function getCityServicePageContent(city, state, service) {
  // Generate unique, LSI/entity-rich, human-quality content for each page
  const bodyContent = generateContent({ city, state, service, allPages });
  return `import ServiceLocationsFooter from '../../components/ServiceLocationsFooter';
import Head from '../../components/Head';

export default function ${city.name.replace(/\s/g, '')}${service.name.replace(/\s/g, '')}Page() {
  return (
    <>
      <Head
        title={"${service.name} in ${city.name} | #1 ${service.name} Agency for Local Businesses"}
        description={"Rank higher on Google with ${city.name}'s top ${service.name.toLowerCase()}. Proven results, local expertise, and tailored strategies for ${city.name} businesses. Get a free audit today!"}
      />
      <main>
        <h1>${service.name} in ${city.name} – Boost Your Local Business Online</h1>
        <p>Looking to dominate Google search results in ${city.name}? Our award-winning ${service.name.toLowerCase()} agency specializes in helping ${city.name} businesses attract more customers, increase organic traffic, and grow revenue. With deep local expertise and a proven track record, we deliver real results for companies across ${state.name}.</p>
        ${bodyContent}
        <ServiceLocationsFooter service="${service.slug}" city="${city.slug}" state="${state.slug}" />
      </main>
    </>
  );
}
`;
}

function getCityIndustryPageContent(city, state, industry) {
  // Generate unique, LSI/entity-rich, human-quality content for city + industry
  const bodyContent = generateContent({ city, state, industry, allPages });
  return `import IndustryLocationsFooter from '../../components/IndustryLocationsFooter';
import Head from '../../components/Head';

export default function ${city.name.replace(/\s/g, '')}${industry.name.replace(/\s/g, '')}IndustryPage() {
  return (
    <>
      <Head
        title={"${industry.name} in ${city.name} | #1 ${industry.name} Marketing for Local Businesses"}
        description={"Grow your ${industry.name.toLowerCase()} business in ${city.name} with proven digital marketing strategies, local expertise, and tailored solutions. Get a free audit today!"}
      />
      <main>
        <h1>${industry.name} Marketing in ${city.name} – Accelerate Your Growth</h1>
        <p>Looking to stand out in the ${industry.name.toLowerCase()} sector in ${city.name}? Our award-winning team specializes in helping ${industry.name.toLowerCase()} businesses attract more customers, increase visibility, and grow revenue. With deep local expertise and a proven track record, we deliver real results for companies across ${state.name}.</p>
        ${bodyContent}
        <IndustryLocationsFooter industry="${industry.slug}" city="${city.slug}" state="${state.slug}" />
      </main>
    </>
  );
}
`;
}

function getCityIndustryServicePageContent(city, state, service, industry) {
  // Generate unique, LSI/entity-rich, human-quality content for city + industry + service
  const bodyContent = generateContent({ city, state, service, industry, allPages });
  return `import IndustryLocationsFooter from '../../../components/IndustryLocationsFooter';
import Head from '../../../components/Head';

export default function ${city.name.replace(/\s/g, '')}${industry.name.replace(/\s/g, '')}${service.name.replace(/\s/g, '')}Page() {
  return (
    <>
      <Head
        title={"${service.name} for ${industry.name} in ${city.name} | #1 ${service.name} Agency for ${industry.name}"}
        description={"Dominate the ${industry.name.toLowerCase()} market in ${city.name} with expert ${service.name.toLowerCase()}, tailored strategies, and proven results. Get a free audit today!"}
      />
      <main>
        <h1>${service.name} for ${industry.name} in ${city.name} – Outperform Your Competition</h1>
        <p>Our ${service.name.toLowerCase()} solutions for ${industry.name.toLowerCase()} businesses in ${city.name} are designed to deliver measurable growth, increased leads, and a stronger online presence. Leverage our local expertise and industry insights for real results in ${state.name}.</p>
        ${bodyContent}
        <IndustryLocationsFooter industry="${industry.slug}" service="${service.slug}" city="${city.slug}" state="${state.slug}" />
      </main>
    </>
  );
}
`;
}

function generateBatch() {
  for (const state of statesAndUTs) {
    for (const city of state.cities) {
      // City + Service pages
      for (const service of comprehensiveServices) {
        const dir = path.join('src/pages', city.slug);
        const file = path.join(dir, `${service.slug}.tsx`);
        if (!fileExists(file)) {
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          const content = getCityServicePageContent(city, state, service);
          fs.writeFileSync(file, content, 'utf8');
          console.log(`Generated: /${city.slug}/${service.slug}/`);
        }
      }
      // City + Industry pages
      for (const industry of comprehensiveIndustries) {
        const dir = path.join('src/pages', city.slug, 'industries');
        const file = path.join(dir, `${industry.slug}.tsx`);
        if (!fileExists(file)) {
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          const content = getCityIndustryPageContent(city, state, industry);
          fs.writeFileSync(file, content, 'utf8');
          console.log(`Generated: /${city.slug}/industries/${industry.slug}/`);
        }
        // City + Industry + Service pages
        for (const service of comprehensiveServices) {
          const subdir = path.join('src/pages', city.slug, 'industries', industry.slug);
          const subfile = path.join(subdir, `${service.slug}.tsx`);
          if (!fileExists(subfile)) {
            if (!fs.existsSync(subdir)) fs.mkdirSync(subdir, { recursive: true });
            const content = getCityIndustryServicePageContent(city, state, service, industry);
            fs.writeFileSync(subfile, content, 'utf8');
            console.log(`Generated: /${city.slug}/industries/${industry.slug}/${service.slug}/`);
          }
        }
      }
    }
  }
}

generateBatch(); 