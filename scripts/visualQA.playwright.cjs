const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { statesAndUTs } = require('../src/data/locationData.cjs');

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
const SCREENSHOT_DIR = path.join(__dirname, '../screenshots');
if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const { city, service } of allPages) {
    const url = `${BASE_URL}/${city.slug}/${service.slug}/`;
    const filename = `${city.slug}--${service.slug}.png`;
    const filepath = path.join(SCREENSHOT_DIR, filename);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
      await page.screenshot({ path: filepath, fullPage: true });
      console.log(`Screenshot saved: ${filename}`);
    } catch (err) {
      console.error(`Failed for ${url}:`, err.message);
    }
  }
  await browser.close();
})(); 