const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { statesAndUTs } = require('../src/data/locationData.cjs');
const axeSource = require('axe-core').source;

const services = [
  { slug: 'seo-services', name: 'SEO Services' },
  { slug: 'ppc-advertising', name: 'PPC Advertising' },
  { slug: 'social-media-marketing', name: 'Social Media Marketing' },
];

function getAllPages(statesAndUTs, services) {
  const allPages = [];
  for (const state of statesAndUTs) {
    for (const city of state.cities) {
      for (const service of services) {
        allPages.push({ city, state, service });
      }
    }
  }
  return allPages;
}

const allPages = getAllPages(statesAndUTs, services);
const BASE_URL = 'http://localhost:5173';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let totalViolations = 0;
  for (const { city, service } of allPages) {
    const url = `${BASE_URL}/${city.slug}/${service.slug}/`;
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
      // Inject axe-core and run accessibility checks
      await page.addScriptTag({ content: axeSource });
      const results = await page.evaluate(async () => {
        return await window.axe.run();
      });
      if (results.violations.length > 0) {
        totalViolations += results.violations.length;
        console.log(`\n[ACCESSIBILITY] Violations on ${url}: ${results.violations.length}`);
        results.violations.slice(0, 5).forEach(v => {
          console.log(`- [${v.id}] ${v.help} (impact: ${v.impact})`);
        });
      }
    } catch (err) {
      console.error(`Failed for ${url}:`, err.message);
    }
  }
  await browser.close();
  console.log(`\nAccessibility audit complete. Total pages checked: ${allPages.length}. Total violations found: ${totalViolations}.`);
})(); 