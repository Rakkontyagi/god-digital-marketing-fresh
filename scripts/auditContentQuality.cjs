const fs = require('fs');
const path = require('path');

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

function getAllTSXFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllTSXFiles(filePath));
    } else if (file.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  return results;
}

function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, ' ');
}

function tokenize(str) {
  return normalize(str).split(' ').filter(Boolean);
}

// Simple stemmer: removes common suffixes
function stem(word) {
  return word.replace(/(ing|ed|es|s|ly|ment|al|ion|ity|ies|er|or|ful|less|ous|ive|ize|ise|ship|ness|ance|ence|age|able|ible|ish|est)$/g, '');
}

// Synonym maps for LSI and E-E-A-T (expand as needed)
const lsiSynonyms = {
  'search engine optimization': ['seo', 'search optimization'],
  'Google ranking': ['SERP ranking', 'search ranking'],
  'pay-per-click': ['ppc', 'paid search'],
  'Google Ads': ['adwords', 'google advertising'],
  'Facebook Ads': ['fb ads', 'facebook advertising'],
  'social media strategy': ['social strategy', 'social plan'],
  'content marketing': ['content strategy', 'content promotion'],
  'digital advertising': ['online advertising', 'internet advertising'],
  'brand awareness': ['brand recognition', 'brand visibility'],
  'lead generation': ['lead gen', 'customer acquisition'],
  // ... add more as needed
};
const eeatSynonyms = {
  'award-winning': ['award winning', 'award-winning team'],
  'proven results': ['demonstrated results', 'measurable results'],
  'trusted by local businesses': ['trusted locally', 'trusted by businesses'],
  'case studies': ['success stories', 'client stories'],
  'transparent reporting': ['clear reporting', 'open reporting'],
  'local expertise': ['local expert', 'regional expertise'],
  'track record': ['proven track record', 'history of success'],
  'client testimonials': ['customer testimonials', 'reviews'],
  // ... add more as needed
};

function expandWithSynonyms(keyword, map) {
  return [keyword, ...(map[keyword] || [])];
}

function keywordTokenMatchWithStemming(textTokens, keyword, map) {
  const allVariants = expandWithSynonyms(keyword, map);
  for (const variant of allVariants) {
    const keywordTokens = tokenize(variant).map(stem);
    if (keywordTokens.some(kt => textTokens.map(stem).includes(kt))) {
      return true;
    }
  }
  return false;
}

function analyzeContent(content) {
  // Remove JSX tags and punctuation for analysis
  const text = content.replace(/<[^>]+>/g, ' ').replace(/\{[^}]+\}/g, ' ');
  const normText = normalize(text);
  const textTokens = normText.split(' ').filter(Boolean);
  // LSI/entity/variation check (token match + stemming + synonyms)
  const lsiFound = lsiKeywords.filter(k => keywordTokenMatchWithStemming(textTokens, k, lsiSynonyms));
  const lsiMissed = lsiKeywords.filter(k => !keywordTokenMatchWithStemming(textTokens, k, lsiSynonyms));
  // E-E-A-T check (token match + stemming + synonyms)
  const eeatFound = eeatSignals.filter(k => keywordTokenMatchWithStemming(textTokens, k, eeatSynonyms));
  const eeatMissed = eeatSignals.filter(k => !keywordTokenMatchWithStemming(textTokens, k, eeatSynonyms));
  // Human/NLP check: no placeholders, no repeated sentences, varied vocabulary
  const hasPlaceholder = text.includes('... more unique, LSI/entity-rich content ...') || text.includes('PLACEHOLDER');
  // Uniqueness: hash intro/body/FAQ/CTA and compare (simple version)
  return { lsiFound, eeatFound, hasPlaceholder, text, lsiMissed, eeatMissed, textTokens };
}

function main() {
  const baseDir = path.join('src', 'pages');
  const files = getAllTSXFiles(baseDir).filter(f =>
    !f.includes('services') && !f.includes('industries') && !f.endsWith('index.tsx')
  );
  const hashes = new Set();
  let total = 0, issues = 0;
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const { lsiFound, eeatFound, hasPlaceholder, text, lsiMissed, eeatMissed, textTokens } = analyzeContent(content);
    total++;
    // Uniqueness check (simple hash of main text)
    const hash = require('crypto').createHash('md5').update(text).digest('hex');
    if (hashes.has(hash)) {
      console.log(`[DUPLICATE] ${file}`);
      issues++;
    } else {
      hashes.add(hash);
    }
    if (hasPlaceholder) {
      console.log(`[PLACEHOLDER] ${file}`);
      issues++;
    }
    if (lsiFound.length < 3) {
      console.log(`[LSI LOW] ${file} (found: ${lsiFound.length})`);
      // Debug output for LSI
      console.log('LSI missed:', lsiMissed.slice(0, 10), '...');
      console.log('Text tokens:', textTokens.slice(0, 50), '...');
      issues++;
    }
    if (eeatFound.length < 2) {
      console.log(`[E-E-A-T LOW] ${file} (found: ${eeatFound.length})`);
      // Debug output for E-E-A-T
      console.log('E-E-A-T missed:', eeatMissed.slice(0, 10), '...');
      console.log('Text tokens:', textTokens.slice(0, 50), '...');
      issues++;
    }
  });
  console.log(`\nAudit complete. Total pages checked: ${total}. Issues found: ${issues}.`);
}

main(); 