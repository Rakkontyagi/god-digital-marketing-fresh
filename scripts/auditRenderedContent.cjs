// auditRenderedContent.cjs
// Render each city/service page as HTML and audit the real output for LSI/entity/E-E-A-T

const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require('@babel/register')({
  presets: ['@babel/preset-react', '@babel/preset-env'],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  ignore: [/node_modules/],
});

const { statesAndUTs } = require('../src/data/locationData.cjs');
const { generateContent } = require('../src/data/contentTemplates.cjs');

const lsiKeywords = [
  'search engine optimization', 'Google ranking', 'local SEO', 'organic traffic', 'on-page optimization',
  'link building', 'technical SEO', 'Google My Business', 'SERP', 'website audit', 'keyword research',
  'content marketing', 'digital growth', 'online visibility', 'SEO audit', 'authority building',
  'backlinks', 'conversion rate', 'mobile SEO', 'local business', 'pay-per-click', 'Google Ads',
  'Facebook Ads', 'ad campaigns', 'ROI', 'conversion tracking', 'ad spend', 'targeted traffic',
  'search ads', 'display ads', 'remarketing', 'ad copy', 'bid management', 'landing pages',
  'cost per click', 'ad extensions', 'campaign optimization', 'lead generation', 'digital advertising',
  'social media strategy', 'Facebook marketing', 'Instagram growth', 'LinkedIn campaigns',
  'brand awareness', 'engagement', 'content creation', 'influencer marketing', 'social ads',
  'community management', 'social analytics', 'viral content', 'audience targeting', 'social proof',
  'reputation management', 'digital branding', 'customer loyalty', 'Twitter marketing', 'YouTube promotion'
];
const eeatSignals = [
  'award-winning', 'proven results', 'trusted by local businesses', 'case studies', 'transparent reporting',
  'local expertise', 'years of experience', 'track record', 'free consultation', 'transparent analytics',
  'dedicated support', 'client testimonials', 'professional', 'value', 'growth', 'authority', 'expertise', 'trust'
];

function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, ' ');
}
function tokenize(str) {
  return normalize(str).split(' ').filter(Boolean);
}
function keywordTokenMatch(textTokens, keyword) {
  const keywordTokens = tokenize(keyword);
  return keywordTokens.some(kt => textTokens.includes(kt));
}
function analyzeContent(content) {
  // Remove HTML tags for analysis
  const text = content.replace(/<[^>]+>/g, ' ');
  const normText = normalize(text);
  const textTokens = normText.split(' ').filter(Boolean);
  // LSI/entity/variation check (token match)
  const lsiFound = lsiKeywords.filter(k => keywordTokenMatch(textTokens, k));
  const eeatFound = eeatSignals.filter(k => keywordTokenMatch(textTokens, k));
  return { lsiFound, eeatFound, text };
}

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

function auditRenderedContent() {
  let total = 0, issues = 0;
  for (const { city, state, service } of allPages) {
    // Generate the content as it would be rendered
    const html = generateContent({ city, state, service, allPages });
    const { lsiFound, eeatFound, text } = analyzeContent(html);
    total++;
    if (lsiFound.length < 3) {
      console.log(`[LSI LOW] ${city.slug}/${service.slug} (found: ${lsiFound.length})`);
      issues++;
    }
    if (eeatFound.length < 2) {
      console.log(`[E-E-A-T LOW] ${city.slug}/${service.slug} (found: ${eeatFound.length})`);
      issues++;
    }
  }
  console.log(`\nRendered content audit complete. Total pages checked: ${total}. Issues found: ${issues}.`);
}

auditRenderedContent(); 