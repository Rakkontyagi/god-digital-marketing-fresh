import { chromium } from 'playwright';

export async function fetchLSIKeywords(topic) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const lsiKeywords = new Set();

  try {
    console.log('[LSI] Navigating to Google...');
    await page.goto('https://www.google.com/');
    // Accept cookies if present
    try {
      await page.click('button:has-text("Accept all")', { timeout: 2000 });
    } catch {}
    // Try both selectors for the search input
    let inputSelector = 'input[name="q"]';
    if (!(await page.$(inputSelector))) {
      inputSelector = 'input[title="Search"]';
    }
    await page.fill(inputSelector, topic);
    await page.waitForTimeout(1200);
    const suggestItems = await page.$$eval('li span', els => els.map(e => e.textContent).filter(Boolean));
    suggestItems.forEach(k => lsiKeywords.add(k));
    console.log('[LSI] Google Suggest:', suggestItems);

    // Google SERP: People Also Ask & Related Searches
    await page.keyboard.press('Enter');
    await page.waitForSelector('body');
    await page.waitForTimeout(1800);

    // People Also Ask
    const paa = await page.$$eval('div[jsname="Cpkphb"] span', els => els.map(e => e.textContent).filter(Boolean));
    paa.forEach(k => lsiKeywords.add(k));
    console.log('[LSI] People Also Ask:', paa);

    // Related Searches (bottom)
    const related = await page.$$eval('a[aria-label^="Search for"], a[role="link"]', els => els.map(e => e.textContent).filter(Boolean));
    related.forEach(k => lsiKeywords.add(k));
    console.log('[LSI] Related Searches:', related);
  } catch (err) {
    console.error('[LSI] Error:', err);
  }

  await browser.close();
  return Array.from(lsiKeywords).filter(Boolean);
} 