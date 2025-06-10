import fs from 'fs';
import path from 'path';
import { generateLSIKeywordsAI } from '../src/utils/generateLSIKeywordsAI.js';

const dataPath = path.resolve('src/data/locationsServicesIndustries.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function logStep(msg) {
  console.log(`[STEP] ${msg}`);
}

async function generatePage(city, service, industry = null) {
  const citySlug = city.slug;
  const serviceSlug = service.slug;
  const industrySlug = industry ? industry.slug : null;
  let pageDir, pagePath, topic, urlPath;
  if (industry) {
    pageDir = path.resolve(`src/pages/${citySlug}/industries/${industrySlug}`);
    pagePath = path.resolve(pageDir, `${serviceSlug}.tsx`);
    topic = `${service.name} for ${industry.name} in ${city.name}`;
    urlPath = `/${citySlug}/industries/${industrySlug}/${serviceSlug}/`;
  } else {
    pageDir = path.resolve(`src/pages/${citySlug}`);
    pagePath = path.resolve(pageDir, `${serviceSlug}.tsx`);
    topic = `${service.name} ${city.name}`;
    urlPath = `/${citySlug}/${serviceSlug}/`;
  }
  if (fileExists(pagePath)) {
    logStep(`Page already exists: ${pagePath}`);
    return;
  }
  logStep(`Generating LSI/Entities for: ${topic}`);
  const lsiEntities = await generateLSIKeywordsAI(topic);
  logStep(`LSI/Entities: ${JSON.stringify(lsiEntities, null, 2)}`);
  ensureDir(pageDir);
  const meta = {
    title: industry
      ? `${service.name} for ${industry.name} in ${city.name} | Best ${service.name} Company`
      : `${service.name} in ${city.name} | Best ${service.name} Company in ${city.name}`,
    description: industry
      ? `Get the best ${service.name.toLowerCase()} for ${industry.name.toLowerCase()} in ${city.name}. Proven results, local expertise, and advanced strategies for your industry.`
      : `Rank #1 with the top ${service.name.toLowerCase()} company in ${city.name}. Proven results, local expertise, and advanced strategies for businesses in ${city.name}.`,
    keywords: [service.name, city.name, ...(industry ? [industry.name] : []), ...lsiEntities.slice(0, 10)]
  };
  const ogImage = 'https://goddigitalmarketing.com/og-image.jpg';
  const canonicalUrl = `https://goddigitalmarketing.com${urlPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": meta.title,
    "description": meta.description,
    "provider": {
      "@type": "Organization",
      "name": "God Digital Marketing"
    },
    "areaServed": city.name,
    "keywords": meta.keywords.join(', ')
  };
  const internalLinks = [
    { href: `/${citySlug}/ppc-advertising/`, text: `PPC Advertising in ${city.name}` },
    { href: `/${citySlug}/social-media-marketing/`, text: `Social Media Marketing in ${city.name}` },
    { href: `/services/${serviceSlug}/`, text: `${service.name} India` },
    { href: `/industries/healthcare/${serviceSlug}/`, text: `Healthcare ${service.name}` }
  ];
  const content = `import React from 'react';
import { SEOHead } from '../../components/SEO/SEOHead';
import { TrustSignals } from '../../components/TrustSignals';
import { Testimonials } from '../../components/Testimonials';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export default function ${city.name.replace(/\s/g, '')}${service.name.replace(/\s/g, '')}${industry ? industry.name.replace(/\s/g, '') : ''}Page() {
  return (
    <>
      <SEOHead
        title={${JSON.stringify(meta.title)}}
        description={${JSON.stringify(meta.description)}}
        keywords={${JSON.stringify(meta.keywords)}}
        canonicalUrl={${JSON.stringify(canonicalUrl)}}
        ogImage={${JSON.stringify(ogImage)}}
        structuredData={${JSON.stringify(schema)}}
      />
      <main className="min-h-screen bg-black text-white">
        <Breadcrumbs currentPage={${JSON.stringify(meta.title)}} />
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">${meta.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">${meta.description} ${lsiEntities.slice(0, 3).join(', ')}.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            ${internalLinks.map(link => `<a href=\"${link.href}\" className=\"text-blue-400 underline\">${link.text}</a>`).join(' ')}
          </div>
        </section>
        <section className="py-12 bg-black border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-8 text-lg text-gray-200 mb-8">
            <li>Local expertise for ${city.name} businesses</li>
            <li>Proven results and transparent reporting</li>
            <li>Advanced strategies: ${lsiEntities.slice(0, 5).join(', ')}</li>
            <li>Google My Business, content marketing, and link building</li>
            <li>100% white-hat, E-E-A-T and LLM-friendly content</li>
          </ul>
        </section>
        <TrustSignals />
        <Testimonials />
        <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Google in ${city.name}?</h2>
          <p className="text-lg mb-6">Get your free SEO audit and see how we can grow your business with advanced, AI-powered SEO strategies.</p>
          <a href="/contact/" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300">Get Started Today</a>
        </section>
      </main>
    </>
  );
}
`;
  fs.writeFileSync(pagePath, content, 'utf-8');
  logStep(`Generated page: ${pagePath}`);
}

(async () => {
  for (const state of data.states) {
    for (const city of state.cities) {
      // All services
      for (const service of data.services) {
        await generatePage(city, service);
      }
      // All automation services
      for (const service of data.automationServices) {
        await generatePage(city, service);
      }
      // All industries × all services
      for (const industry of data.industries) {
        for (const service of data.services) {
          await generatePage(city, service, industry);
        }
      }
    }
  }
  // TODO: State landing pages, location hub pages
})(); 