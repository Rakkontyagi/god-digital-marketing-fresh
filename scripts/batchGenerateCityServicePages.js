// Batch page generation script for city/service pages (Node.js version)
// Requirements: unique, human-quality, LSI/NLP-rich content, deduplication

const fs = require('fs');
const path = require('path');
const { statesAndUTs } = require('../src/data/locationData');

const services = [
  { slug: 'seo-services', name: 'SEO Services' },
  { slug: 'ppc-advertising', name: 'PPC Advertising' },
  { slug: 'social-media-marketing', name: 'Social Media Marketing' },
];

const BATCH_SIZE = 40;

function getCityServicePageContent(city, state, service) {
  // Generate unique, LSI/entity-rich, human-quality content for each page
  // This is a simplified placeholder; in production, use a content template engine or AI
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
        {/* ... more unique, LSI/entity-rich content ... */}
        <ServiceLocationsFooter service="${service.slug}" city="${city.slug}" state="${state.slug}" />
      </main>
    </>
  );
}
`;
}

function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

function generateBatch() {
  let generated = 0;
  for (const state of statesAndUTs) {
    for (const city of state.cities) {
      for (const service of services) {
        if (generated >= BATCH_SIZE) return;
        const dir = path.join('src/pages', city.slug);
        const file = path.join(dir, `${service.slug}.tsx`);
        if (!fileExists(file)) {
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          const content = getCityServicePageContent(city, state, service);
          fs.writeFileSync(file, content, 'utf8');
          console.log(`Generated: /${city.slug}/${service.slug}/`);
          generated++;
        }
      }
    }
  }
}

generateBatch(); 